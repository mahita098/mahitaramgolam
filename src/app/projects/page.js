"use client";

import Header from "@/components/Header";
import ProjectCards from "@/components/ProjectCards";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";

export default function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data/projectdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load project data");
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData.projects))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data.length) {
    return <div>Loading...</div>; // to prevent error when data is empty
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 5 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="hero min-h-screen mt-3 mx-auto w-full"
    >
      <Header />

      <div className="container  mt-10 md:mt-0 mb-24 px-4 md:p-0 mx-auto">
        <div className="flex justify-center items-center flex-col  mx-auto max-w-7xl mt-20 mb-8">
          <h1 className=" font-bold text-5xl bg-gradient-to-br bg-clip-text text-transparent from-gradient-start via-gradient-mid to-gradient-end">
            My Projects
          </h1>
          <p className=" mt-2 text-lg text-center">
            A collection of projects I've worked on while learning, practicing,
            building for fun.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto max-w-7xl gap-2">
          {data.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
