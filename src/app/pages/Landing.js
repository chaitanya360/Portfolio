import Navigation from "../components/Navigation";
import ProfilePanel from "../components/ProfilePanel";
import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";

const Landing = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <ProfilePanel height={height} />
      <Skills height={height} />
      <div style={{ right: 0 }}>
        <Navigation height={height} />
      </div>
    </div>
  );
};

export default Landing;
