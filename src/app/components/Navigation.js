import "../assets/css/navigation.css";

const Navigation = ({ height }) => {
  return (
    <div className="navigation_container" style={{ height }}>
      <div>Skills</div>
      <div>Projects</div>
      <div>Blogs</div>
      <div>Contact</div>
    </div>
  );
};

export default Navigation;
