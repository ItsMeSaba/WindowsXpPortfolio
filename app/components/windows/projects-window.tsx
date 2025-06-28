import Projects from "@/components/modules/Projects";
import Window from "@/components/modules/Window";
import Project from "@/components/modules/Project";
import type { WindowSettings } from "@/dataObjects";
import { useState } from "react";
import styles from "@/styles/pages/ProjectsWindow.module.scss";

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
