import Window from "@/components/modules/Window";
import type { WindowSettings } from "@/dataObjects";
import { useState } from "react";
import WorkExperiences from "@/components/modules/WorkExperiences";
import WorkExperience from "@/components/modules/WorkExperience";
import styles from "@/styles/pages/WorkExperienceWindow.module.scss";

interface Args {
  // setPath: (newPath: string) => any;
  settings: WindowSettings;
  setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>;
}

export default function WorkExperienceWindow(args: Args) {
  const { setSettings, settings } = args;
  const [currentExperience, setCurrentExperience] = useState("");

  return (
    <Window
      settings={settings}
      setSettings={setSettings}
      onBack={() => setCurrentExperience("")}
    >
      {!currentExperience && (
        <WorkExperiences setCurrentExperience={setCurrentExperience} />
      )}

      {currentExperience && <WorkExperience experience={currentExperience} />}
    </Window>
  );
}
