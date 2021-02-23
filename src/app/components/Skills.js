import { useEffect } from "react";
import "../assets/css/skills.css";
import { ReactComponent as Languages } from "../assets/svgs/skills_languages.svg";
import { ReactComponent as Framworks } from "../assets/svgs/skills_framworks.svg";
import { ReactComponent as Boy } from "../assets/svgs/skills_boy.svg";
import { ReactComponent as Designing } from "../assets/svgs/skills_designing.svg";
import Landing from "../pages/Landing";
import SkillsCard from "./SkillsCard";
import ProfilePanel from "./ProfilePanel";

const Skills = ({ height }) => {
  const skills = [
    {
      title: "Languages",
      elements: [
        { title: "HTML", percentage: "75%" },
        { title: "JavaScript", percentage: "70%" },
        { title: "C++", percentage: "65%" },
        { title: "Java", percentage: "50%" },
        { title: "Python", percentage: "70%" },
        { title: "SQL", percentage: "60%" },
      ],
    },
    {
      title: "Framworks/Libraries",
      elements: [
        { title: "React", percentage: "85%" },
        { title: "React Native", percentage: "80%" },
        { title: "Django", percentage: "70%" },
      ],
    },
    {
      title: "Designing",
      elements: [
        { title: "Photoshop", percentage: "85%" },
        { title: "Figma", percentage: "80%" },
      ],
    },
  ];

  return (
    <div
      className="skills_container"
      style={{ display: "flex", flexDirection: "row", padding: 0 }}
    >
      <ProfilePanel height="100%" />
      <div style={{ width: "100vw", backgroundColor: "#6c696c" }}>
        <h1 className="header">Skills</h1>
        <div style={styles.container}>
          <div className="skills_box">
            {skills.map((skill) => (
              <SkillsCard skills={skill} key={skill.title} />
            ))}
          </div>
          <Boy className="skills_boy" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    // height: "100%",
  },
};

export default Skills;
