import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Info from "../Components/Info";
import Reviews from "../Components/Reviews";
import Contributors from "../Components/Contributors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <About />
      <Info />
      <Reviews />
      <Contributors />
      <Footer />
    </div>
  );
}

export default Home;
