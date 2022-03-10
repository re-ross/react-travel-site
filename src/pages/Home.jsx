import ".././App.css";
import HeroSection from "../components/HeroSection";
import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
