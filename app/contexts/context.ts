import { createContext, useRef } from "react";
import type { WindowSettings } from "@/dataObjects";

interface GlobalContextArgs {
  setProjectsWindow: React.Dispatch<React.SetStateAction<WindowSettings>>;
  projectsWindow: WindowSettings;
  setWorkExperienceWindow: React.Dispatch<React.SetStateAction<WindowSettings>>;
  workExperienceWindow: WindowSettings;
  setAboutMeWindow: React.Dispatch<React.SetStateAction<WindowSettings>>;
  aboutMeWindow: WindowSettings;
  setContactWindow: React.Dispatch<React.SetStateAction<WindowSettings>>;
  contactWindow: WindowSettings;
  setBarItems: React.Dispatch<React.SetStateAction<any[]>>;
  highestIndex: number;
}

// export const GlobalContext = createContext<GlobalContextArgs>({
//     setProjectsWindow: () => null,
//     projectsWindow: projectsWindowSettings({ header: "Projects", id: "ProjectsWindow", highestZindex:  }),
//     setWorkExperienceWindow: () => null,
//     workExperienceWindow: projectsWindowSettings({ header: "Work Experience", id: "WorkExperienceWindow", highestZindex: }),
//     setBarItems: () => null,
//     highestIndex: 1
// });
export const GlobalContext = createContext<GlobalContextArgs>({
  // setProjectsWindow: () => null,
  // projectsWindow: projectsWindowSettings({ header: "Projects", id: "ProjectsWindow", }),
  // setWorkExperienceWindow: () => null,
  // workExperienceWindow: projectsWindowSettings({ header: "Work Experience", id: "WorkExperienceWindow", }),
  // setBarItems: () => null,
  // highestIndex: 1
} as any);
