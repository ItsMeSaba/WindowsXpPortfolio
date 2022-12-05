import { createContext } from "react";
import { projectsWindowSettings, WindowSettings } from "./dataObjects";

interface GlobalContextArgs {
    setProjectsWindow: React.Dispatch<React.SetStateAction<WindowSettings>>,
    setBarItems: React.Dispatch<React.SetStateAction<any[]>>,
    projectsWindow: WindowSettings,
}

export const GlobalContext = createContext<GlobalContextArgs>({
    setProjectsWindow: () => null,
    setBarItems: () => null,
    projectsWindow: projectsWindowSettings(),
});