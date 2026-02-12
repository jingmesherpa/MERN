// imports must be at the very top
import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      {/* This is where nested routes render */}
      <Outlet />
    </div>
  );
};

export default About;
