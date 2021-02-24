import { ReactComponent as SvgPlaceholder } from "../assets/svgs/facebook_svg.svg";
import React, { useState } from "react";
const IconCard = ({
  Svg = SvgPlaceholder,
  title = "Facebook",
  contact_info = "/chaitanya360",
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        height: "3vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "5px 0px",
        fontFamily: "Titillium Web, sans-serif",
        margin: "5px 0px",
        fontSize: "2vw",
        color: "#c4c4c4",
        cursor: "pointer",
      }}
    >
      <span
        style={{ height: "100%" }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <Svg style={{ height: "100%", width: "auto" }} />
      </span>
      <span
        style={{ paddingLeft: "30px" }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        {title}
      </span>

      <div
        className="contact_onhover_details"
        style={{ display: showDetails ? "block" : "none" }}
      >
        {contact_info}
      </div>
    </div>
  );
};

export default IconCard;
