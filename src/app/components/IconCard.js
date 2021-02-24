import { ReactComponent as SvgPlaceholder } from "../assets/svgs/facebook_svg.svg";
import React, { useState } from "react";
import "../assets/css/icon_card_container.css";

const IconCard = ({
  Svg = SvgPlaceholder,
  title = "Facebook",
  contact_info = "/chaitanya360",
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="icon_card_inner_container">
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
