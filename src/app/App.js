import Landing from "./pages/Landing";
import Project from "./pages/Project";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    // window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };

  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Landing />;
      case 1:
        return <Project />;
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
