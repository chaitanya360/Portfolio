import Landing from "./pages/Landing";
import Project from "./pages/Project";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateWidthAndHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWidthAndHeight);
    };
  }, []);

  const handleScroll = () => {
    // window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };

  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Landing height={height} />;
      case 1:
        return <Project height={height} />;
    }
  };

  return (
    <React.Fragment>
      <Navigation selected={currentPage} setCurrentPage={setCurrentPage} />
      <CurrentPage />
    </React.Fragment>
  );
};

export default App;
