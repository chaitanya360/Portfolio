import "../assets/css/skills_card.css";

const SkillsCard = ({ skills }) => {
  return (
    <div className="skills_card_container">
      <h1 className="skills_card_title">{skills.title}</h1>
      <div className="skills_element_container">
        {skills.elements.map((skill) => (
          <div className="skills_elelment" key={skill.title}>
            <div className="skills_element_title">{skill.title}</div>
            <div
              className="skills_element_level_container"
              style={{ overflow: "hidden" }}
            >
              <span className="skills_element_level_background"></span>
              <span
                className="skills_element_level_foreground animate__animated animate__slideInLeft animate__slow"
                style={{ width: skill.percentage }}
              >
                <span className="skills_percentage">{skill.percentage}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
