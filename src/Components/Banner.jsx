import React from "react";
import style from "./Banner.module.css"

const Banner = () => {
  const myName = "adeola";
  const myStyle = {
    backgroundColor: "black",
    padding: "1rem",
    textAlign: "center",
    color: "white",
    fontSize: "2.5rem"
  };
  return (
    <div className="container">
      {/* <h1 style={{backgroundColor: "black", padding: "1rem", textAlign: "center"}}>Study to become a global talent</h1>
      <h1>Hello {myName}</h1> */}
      <h1 style={myStyle}>Study to become a global talent</h1>
      <h1>Hello {myName}</h1>
    </div>
  );
};

export default Banner;

// interpolation
