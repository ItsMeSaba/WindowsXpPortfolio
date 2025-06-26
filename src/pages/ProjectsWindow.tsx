import Projects from "./view/Projects";
import Window from "../components/Window";
import Project from "./view/Project";
import { WindowSettings } from "../dataObjects";
import { useState } from "react";
import "../styles/pages/ProjectsWindow.sass";

interface Args {
  // setPath: (newPath: string) => any;
  settings: WindowSettings;
  setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>;
}

export default function ProjectsWindow(args: Args) {
  const { setSettings, settings } = args;
  const [currentProject, setCurrentProject] = useState("");

  return (
    <Window
      settings={settings}
      setSettings={setSettings}
      onBack={() => setCurrentProject("")}
    >
      {!currentProject && <Projects setCurrentProject={setCurrentProject} />}

      {currentProject && <Project projectName={currentProject} />}
    </Window>
  );
}
