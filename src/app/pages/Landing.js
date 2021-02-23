import Navigation from "../components/Navigation";
import ProfilePanel from "../components/ProfilePanel";
import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";
import SkillsCard from "../components/SkillsCard";

const Landing = ({ height }) => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Skills height={height} />
      </div>
    </div>
  );
};

export default Landing;
