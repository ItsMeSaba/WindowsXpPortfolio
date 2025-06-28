import Window from "@/components/modules/Window";
import type { WindowSettings } from "@/dataObjects";
import styles from "@/styles/pages/AboutMeWindow.module.scss";
import { TechStack } from "@/components/modules/TechStack";

interface Args {
  // setPath: (newPath: string) => any;
  settings: WindowSettings;
  setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>;
}

export default function AboutMeWindow(args: Args) {
  const { setSettings, settings } = args;

  return (
    <Window settings={settings} setSettings={setSettings} hideControlls={true}>
      <div className={styles.aboutMeWindow}>
        <p>I'm Saba</p>

        <p>
          JavaScript engineer (React / Next.js, Node) with 4+ years building
          production apps that load in under 1s and serve 100k+ monthly users. I
          turn design hand-offs into accessible, high-performance interfaces
          while owning back-end APIs when needed.
        </p>

        <p>Located in Georgia (Europe), Timezone GMT+4.</p>

        <p>Technology Stack:</p>

        <TechStack />
      </div>
    </Window>
  );
}
