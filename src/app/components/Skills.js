import { useEffect } from "react";
import "../assets/css/skills.css";
import { ReactComponent as Languages } from "../assets/svgs/skills_languages.svg";
import { ReactComponent as Framworks } from "../assets/svgs/skills_framworks.svg";
import { ReactComponent as Boy } from "../assets/svgs/skills_boy.svg";
import { ReactComponent as Designing } from "../assets/svgs/skills_designing.svg";
import Landing from "../pages/Landing";

const Skills = ({ height }) => {
  useEffect(() => console.log(Languages), []);
  console.log(Landing);

  return (
    <div className="skills_container">
      <h1 className="header">Skills</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="skills_box" style={{ height: height - 130 }}>
          <div className="skills_languages">
            <Languages width="100%" height="100%" style={styles.svg_border} />
          </div>
          <div className="skills_framworks">
            <Framworks width="100%" height="100%" style={styles.svg_border} />
          </div>
          <div className="skills_designing">
            <Designing width="100%" height="100%" style={styles.svg_border} />
          </div>
        </div>

        <Boy className="skills_boy" />
      </div>
    </div>
  );
};

const styles = {
  svg_border: {
    border: "2px solid rgba(79,217,101,0.4)",
    borderRadius: "2.5vh",
  },
};

export default Skills;
