import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import io from "socket.io-client";
import axios from "axios";
import "../Styles/Map.css";

const socket = io("http://localhost:5000");

const Map = ({ destination }) => {
  const [map, setMap] = useState(null);
  const userLocationRef = useRef(null);
  const directionsRef = useRef(null);
  const [updatingRoute, setUpdatingRoute] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      await loadScript(
        "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"
      );
      await loadStylesheet(
        "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
      );
      await loadScript(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"
      );
      await loadStylesheet(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css"
      );

      initializeMap();
    };

    loadMap();

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("nearby_places", (data) => {
      console.log("Nearby places:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const loadStylesheet = (url) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  };

  const initializeMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibml0aGlzaDEzMDcxOCIsImEiOiJjbHdpMzBtbDQwZ2k0MmttbWp4eHd5MjV5In0.DIV4fYYytExKkuClwgM03Q";

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
  };

  const successLocation = (position) => {
    const userLoc = [position.coords.longitude, position.coords.latitude];
    userLocationRef.current = userLoc;
    console.log("User location:", userLoc);
    setupMap(userLoc);
  };

  const errorLocation = () => {
    const defaultLocation = [-2.24, 53.48]; // Default location
    userLocationRef.current = defaultLocation;
    setupMap(defaultLocation);
  };

  const setupMap = (center) => {
    const mapInstance = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15,
    });

    setMap(mapInstance);

    const nav = new mapboxgl.NavigationControl();
    mapInstance.addControl(nav);

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });
    mapInstance.addControl(directions, "top-left");

    directions.setOrigin(center);
    directionsRef.current = directions;

    new mapboxgl.Marker().setLngLat(center).addTo(mapInstance);
  };

  useEffect(() => {
    if (!map || !directionsRef.current) return;

    const handleMapClick = async (event) => {
      const coords = event.lngLat;
      const newLocation = [coords.lng, coords.lat];
      directionsRef.current.setDestination(newLocation);
      const userLoc = userLocationRef.current;
      if (userLoc) {
        await updateUserLocation(userLoc[1], userLoc[0], coords.lat, coords.lng);
      }
    };

    map.on("click", handleMapClick);

    return () => {
      map.off("click", handleMapClick);
    };
  }, [map]);

  const updateUserLocation = async (userLat, userLng, destLat, destLng) => {
    if (!map) return;

    console.log(
      `Updating location to: User(${userLat}, ${userLng}), Destination(${destLat}, ${destLng})`
    );
    map.setCenter([userLng, userLat]);

    socket.emit("update_location", {
      latitude: userLat,
      longitude: userLng,
    });

    const data = {
      userLatitude: userLat,
      userLongitude: userLng,
      destLatitude: destLat,
      destLongitude: destLng,
    };

    console.log(data)

    await axios
      .post("http://localhost:5000/update-destination",data)
      .then((response) => {
        const route = response.data.route;
        console.log("Route:", route);
        console.log("Destination updated:", response.data);
        socket.emit("update_route", route); // Emit the route to the backend
      })
      .catch((error) => {
        console.error("Error updating destination:", error);
      });
  };

  return (
    <div>
      {updatingRoute && <div className="popup">Updating Route...</div>}
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default Map;
