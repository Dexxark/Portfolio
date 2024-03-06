"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;