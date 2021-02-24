import Landing from "./pages/Landing";
import Project from "./pages/Project";
import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const CurrentPage = () => {
    switch (currentPage) {
      case 0:
        return <Landing />;
      case 1:
        return <Project />;
      case 2:
        return <h1 className="header">coming soon..</h1>;
      case 3:
        return <Contact />;
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
