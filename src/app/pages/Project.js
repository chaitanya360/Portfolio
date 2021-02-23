import "../assets/css/project.css";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { ReactComponent as Svg } from "../assets/svgs/project_svg.svg";
import { useRef, useState } from "react";

const websites = [
  {
    title: "Algo_rythm",
    desc:
      "Single page site developed using react. This project demonstrates sorting of elements (bars) using various sorting techniques",
    features: [
      "fully responsive.",
      " demonstrates bubble, selection, insertion, quick, heap, merge, radix, shell, bucket sorting, techniques.",
      "sorting speed can be adjusted.",
      "width/height of the bar can be changed",
    ],

    code_link: "https://github.com/chaitanya360/Algo_rythm",
    site_link: "https://chaitanya360.github.io/Algo_rythm/",
  },
  {
    title: "News_feed",
    desc:
      "Mobile-First React web application which shows news headlines, uses News API. I have implemented many techniques like lazy loading.",
    features: [
      "News Categories: Tech, science, General, Enttertainment and sports",
      "Full news/artical can be using read more.",
      "Short Title and Description of news",
    ],
    code_link: "https://github.com/chaitanya360/Newsfeed",
    site_link: "https://chaitanya360.github.io/Newsfeed/",
  },
  {
    title: "Memes_World",
    desc:
      "Mobile-First React web application of memes. I used Django for back-end. react-django communicates using REST-API.",
    features: [
      "User and create account, upload memes",
      "Memes can be downloaded",
      "Web-token acess token is used for authentication",
    ],
    code_link: "https://github.com/chaitanya360/Memes_world",
    site_link: "https://chaitanya360.github.io/Memes_world/",
  },
  {
    title: "Avengers_Gallery",
    desc:
      "Desktop site. Not Responsive. I created this site just to practice html and css.",
    features: ["beutiful css animations"],
    code_link: "https://github.com/chaitanya360/Avengers-Gallery",
    site_link: "https://chaitanya360.github.io/Avengers-Gallery/",
  },
];

const mobileApps = [
  {
    title: "Mathathon",
    desc:
      "An math game to solve simple math expression, helps to improve your calculation speed. React-native android application",
    features: [
      "supports almost all android versions",
      "simple UI",
      "no net required",
    ],

    site_link: "https://chaitanya360.github.io/Algo_rythm/", //this should be play store link
  },
  {
    title: "Tourch",
    desc: "simple tourch application developed in android studio",
    features: ["light weight", "useful in low spec handsets"],
    site_link: "https://chaitanya360.github.io/Newsfeed/", // this is goint to be play store link
  },
];

const Project = ({ height = "100vh" }) => {
  const [isWebsites, setIsWebsites] = useState(true);
  const [projects, setProjects] = useState(websites);
  const project_container_ref = useRef();

  const handleBtnPressed = (id) => {
    //mobile is pressed
    if (id) {
      if (isWebsites) {
        setIsWebsites(false);
        setProjects(mobileApps);
        project_container_ref.current.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    //websites is pressed
    else if (!isWebsites) {
      setIsWebsites(true);
      setProjects(websites);
      project_container_ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="project_page animate__animated animate__fadeIn animate__faster"
      id="project"
      style={{ height: height }}
    >
      <h1 className="header">
        Projects
        <div
          className="projects_navigation_container"
          style={{ display: "inline" }}
        >
          <span
            className="websites_btn disable-select"
            style={{
              color: isWebsites && "rgba(64, 255, 47, 0.568)",
            }}
            onMouseDown={() => handleBtnPressed(0)}
          >
            websites
          </span>
          <span
            className="mobile_btn disable-select"
            style={{
              color: !isWebsites && "rgba(64, 255, 47, 0.568)",
            }}
            onMouseDown={() => handleBtnPressed(1)}
          >
            mobile-apps
          </span>
        </div>
      </h1>
      <div className="project_page_body">
        <div className="projects_outer_container">
          <div
            className="projects_container"
            style={{ display: "flex" }}
            ref={project_container_ref}
          >
            {projects.map((project) => (
              <ProjectCard
                style={{ marginTop: "30px" }}
                project={project}
                key={project.title}
                id={project.title}
                isWebsites={isWebsites}
              />
            ))}
          </div>
        </div>
        <Svg className="project_boy_svg" />
      </div>
    </div>
  );
};

export default Project;
