import React from "react";

const About = () => {
  return <div>About| Testing simple fn</div>;
};
//Normally we dont write export inside exports
export const add = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Wrong Input";
  }
};
export default About;
