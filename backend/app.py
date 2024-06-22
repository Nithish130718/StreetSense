import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from geopy.geocoders import Nominatim
from QuadTree import QuadTree, Point, Rectangle
import requests
import openrouteservice
from openrouteservice import convert

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

geolocator = Nominatim(user_agent="street_sense")
quad_tree = None

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@app.route("/")
def index():
    return "Welcome to the Flask-SocketIO server!"


@app.route("/update-destination", methods=["POST"])
def update_destination():
    data = request.json
    user_latitude = data.get("userLatitude")
    user_longitude = data.get("userLongitude")
    dest_latitude = data.get("destLatitude")
    dest_longitude = data.get("destLongitude")

    print(data)

    route = calculate_route(
        user_longitude, user_latitude, dest_longitude, dest_latitude
    )

    if route is not None:
        route_details = f"Updated route based on new location: {route}"
        logger.info(route_details)
        return jsonify({"status": "success", "route": route})
    else:
        return jsonify({"status": "error", "message": "Failed to calculate route"}), 500


@socketio.on("connect")
def handle_connect():
    logger.info("Client connected")


@socketio.on("update_location")
def handle_update_location(data):
    logger.info(f"Received new location: {data}")
    update_places(data)


@socketio.on("update_route")
def handle_update_route(route):
    logger.info(f"Received new route: {route}")


def update_places(data):
    try:
        user_loc = geolocator.reverse(
            (data["latitude"], data["longitude"]), exactly_one=True
        )
        if user_loc:
            nearby_places = get_nearby_places(data["latitude"], data["longitude"])
            emit_nearby_places(nearby_places)
            update_route(data)
            print("Route update triggered")
        else:
            logger.error("User location not found")
            print("User location not found")
    except Exception as e:
        logger.error(f"Error in update_places: {e}")
        print(f"Error in update_places: {e}")


def calculate_route(u_long, u_lat, d_long, d_lat):
    client = openrouteservice.Client(
        key="5b3ce3597851110001cf62483c6e9056061249208e35764591f42f11"
    )

    coords = ((u_long, u_lat), (d_long, d_lat))
    try:
        res = client.directions(coords)
        geometry = res["routes"][0]["geometry"]
        decoded = convert.decode_polyline(geometry)["coordinates"]
        return decoded
    except Exception as e:
        logger.error(f"Error calculating route: {e}")
        return None


def update_quad_tree_with_nearby_places(latitude, longitude):
    global quad_tree
    boundary = Rectangle(latitude, longitude, 0.1, 0.1)
    quad_tree = QuadTree(boundary, 4)
    url = f"https://nominatim.openstreetmap.org/search?format=json&limit=10&q=*&viewbox={longitude-0.1},{latitude-0.1},{longitude+0.1},{latitude+0.1}"
    response = requests.get(url)
    places = response.json()
    for place in places:
        loc = geolocator.geocode(place["display_name"])
        if loc:
            traffic = get_traffic_data(loc.latitude, loc.longitude)
            point = Point(loc.latitude, loc.longitude, place["display_name"], traffic)
            quad_tree.insert(point)


def get_traffic_data(latitude, longitude):
    return get_mock_traffic_data(latitude, longitude)


def get_mock_traffic_data(latitude, longitude):
    import random

    return random.randint(0, 10)


def get_nearby_places(latitude, longitude):
    nearby_places = []
    search_range = Rectangle(latitude, longitude, 0.1, 0.1)
    update_quad_tree_with_nearby_places(latitude, longitude)
    found_points = quad_tree.query(search_range, [])
    for point in found_points:
        nearby_places.append(
            {
                "latitude": point.latitude,
                "longitude": point.longitude,
                "name": point.data,
                "traffic": point.traffic,
            }
        )
    return nearby_places


def emit_nearby_places(nearby_places):
    logger.info(f"Emitting nearby places: {nearby_places}")
    # Debugging print statement
    print(f"Emitting nearby places: {nearby_places}")
    socketio.emit("nearby_places", nearby_places)


def update_route(data):
    route_details = f"Updated route based on new location: {data}"
    logger.info(route_details)
    # Ensure this line is present for printing to the terminal
    print(route_details)


# Other helper functions and definitions remain unchanged

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=5000, debug=True)
