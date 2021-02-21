import profile_pic from "../assets/images/profile.png";
import "../assets/css/profile_panel.css";

const ProfilePanel = ({ height }) => {
  return (
    <div style={{ height: height }}>
      <div className="left_panel_container">
        <img src={profile_pic} alt="profile image" className="profile_pic" />
        <div className="greetings">
          <div className="greetings_hello">Hello,</div>
          <div className="greetings_name">I am chaitanya</div>
        </div>
        <div className="left_panel_bottom_container">
          <div className="left_panel_curve"></div>
          <ul className="specs_list">
            <li>cs engineer</li>
            <li>web developer</li>
            <li>android developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
