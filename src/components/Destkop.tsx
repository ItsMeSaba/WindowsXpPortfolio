import styles from "../styles/desktop.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { WindowSettings } from "../dataObjects";

import explorer from "../assets/images/icons/explorer.ico";
import folder from "../assets/images/icons/folder.ico";
import file from "../assets/images/icons/file.ico";
import adobeFile from "../assets/images/icons/adobeFile.png";

// import file from "../../public/sabaSilagadze.pdf"

interface Args {
  // openProjectsWindow: () => void,
}

export default function Desktop(args: Args) {
  const {
    setProjectsWindow,
    projectsWindow,
    setWorkExperienceWindow,
    workExperienceWindow,
    setBarItems,
    aboutMeWindow,
    setAboutMeWindow,
    contactWindow,
    setContactWindow,
  } = useContext(GlobalContext);

  const openProjectsWindow = (
    state: WindowSettings,
    setState: React.Dispatch<React.SetStateAction<WindowSettings>>
  ) => {
    setState((settings) => {
      return settings.isOpened ? settings.unMinimize() : settings.open();
    });

    if (!state.isOpened)
      setBarItems((items) => [
        ...items,
        {
          id: state.id,
          header: state.header,
          onClick: () =>
            setState((settings) =>
              settings.isMinimized ? settings.unMinimize() : settings.minimize()
            ),
        },
      ]);
  };

  return (
    <div className={styles.desktop}>
      <div className="column">
        <DesktopItem
          image={folder}
          text="My Projects"
          onDoubleClick={() =>
            openProjectsWindow(projectsWindow, setProjectsWindow)
          }
        />
        <DesktopItem
          image={folder}
          text="Work Experience"
          onDoubleClick={() =>
            openProjectsWindow(workExperienceWindow, setWorkExperienceWindow)
          }
        />
        {/* <DesktopItem image={adobeFile} text="CV" onDoubleClick={() => fetch("../../public/sabaSilagadze.pdf")} /> */}
        <a
          className={styles.desktopItem}
          href="../../public/sabaSilagadze.pdf"
          target="_blank"
          download
        >
          <img src={adobeFile} />

          <p>Cv</p>
        </a>
      </div>

      <div className="column">
        <DesktopItem
          image={file}
          text="About Me"
          onDoubleClick={() =>
            openProjectsWindow(aboutMeWindow, setAboutMeWindow)
          }
        />
      </div>

      <div className="column">
        <DesktopItem
          image={explorer}
          text="Contact"
          onDoubleClick={() =>
            openProjectsWindow(contactWindow, setContactWindow)
          }
        />
      </div>
    </div>
  );
}

interface DesktopItemArgs {
  image: any;
  text: string;
  onDoubleClick?: () => any;
}

function DesktopItem(args: DesktopItemArgs) {
  const { image, text, onDoubleClick } = args;

  return (
    <div className={styles.desktopItem} onDoubleClick={onDoubleClick}>
      <img src={image} alt="" />

      <p>{text}</p>
    </div>
  );
}
