import React from "react";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <div className="aboutContainer">
      <img src={aboutImage} alt="" className="aboutImage" />

      <div className="aboutParag">
        <h1>
          About Software Developer <span></span>
        </h1>
        <h2>Hi, I'am Bikramjit Roy ! </h2>
        <h3>I’m currently learning Full-Stack Development.</h3>
        <h4>
          I know Javascript, ReactJS, Java, Html5, CSS3, C++, MongoDB,
          BootStrap, SQL...
        </h4>
      </div>
    </div>
  );
}

export default About;
