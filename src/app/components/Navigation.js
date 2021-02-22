import "../assets/css/navigation.css";

const Navigation = ({ height, selected = 0, setCurrentPage }) => {
  return (
    <div
      className="navigation_container"
      style={{ height, float: "right", zIndex: 10 }}
    >
      <div
        style={{ borderLeft: selected === 0 ? "4px solid #a19fa1" : "none" }}
        onMouseDown={() => setCurrentPage(0)}
      >
        Skills
      </div>
      <div
        style={{ borderLeft: selected === 1 ? "4px solid #a19fa1" : "none" }}
        onMouseDown={() => setCurrentPage(1)}
      >
        Projects
      </div>
      <div
        style={{ borderLeft: selected === 2 ? "4px solid #a19fa1" : "none" }}
        onMouseDown={() => setCurrentPage(2)}
      >
        Blogs
      </div>
      <div
        style={{ borderLeft: selected === 3 ? "4px solid #a19fa1" : "none" }}
        onMouseDown={() => setCurrentPage(3)}
      >
        Contact
      </div>
    </div>
  );
};

export default Navigation;
