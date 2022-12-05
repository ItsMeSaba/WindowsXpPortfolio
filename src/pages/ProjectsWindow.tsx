import Window from "../components/Window";
import { WindowSettings } from "../dataObjects";
import folder from "../images/icons/folder.ico";
import { useState } from 'react';
import "../styles/pages/ProjectsWindow.sass"
import { projects } from "../data/projects";
import Projects from "./view/Projects";
import Project from "./view/Project";

interface Args {
    // setPath: (newPath: string) => any;
    settings: WindowSettings,
    setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>
}

export default function ProjectsWindow(args: Args) {
    const { setSettings, settings } = args;
    const [currentProject, setCurrentProject] = useState("");

    return (
        <Window settings={settings} setSettings={setSettings}>
            { !currentProject &&
                <Projects setCurrentProject={setCurrentProject} />
            }

            { currentProject &&
                <Project projectName={currentProject} />
            }
        </Window>
    )
}
