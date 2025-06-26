import { useEffect, useState, useRef } from "react";
import styles from "./App.module.scss";
import Bar from "./components/Bar";
import Desktop from "./components/Destkop";
import { GlobalContext } from "./context";
import { projectsWindowSettings } from "./dataObjects";

import ProjectsWindow from "./pages/ProjectsWindow";
import WorkExperienceWindow from "./pages/WorkExperienceWindow";
import loadingBarGif from "./assets/images/loadingBar.gif";
import loadingWindowsLogo from "./assets/images/loadingWindowsLogo.png";
import startupSound from "./assets/images/startupSound.mp3";
import windowsStartupLogo2WhiteFont from "./assets/images/windowsStartupLogo2WhiteFontCropped.png";
import chessImage from "./assets/images/chessImage.webp";
import AboutMeWindow from "./pages/AboutMeWindow";
import ContactWindow from "./pages/ContactWindow";

function App() {
  const highestZindex = useRef(1);
  const [projectsWindow, setProjectsWindow] = useState(() =>
    projectsWindowSettings({
      header: "Projects",
      id: "ProjectsWindow",
      highestZindex,
    })
  );
  const [workExperienceWindow, setWorkExperienceWindow] = useState(() =>
    projectsWindowSettings({
      header: "Work Experience",
      id: "WorkExperienceWindow",
      highestZindex,
    })
  );
  const [aboutMeWindow, setAboutMeWindow] = useState(() =>
    projectsWindowSettings({
      header: "About Me",
      id: "AboutMeWindow",
      highestZindex,
    })
  );
  const [contactWindow, setContactWindow] = useState(() =>
    projectsWindowSettings({
      header: "Contact",
      id: "ContactWindow",
      highestZindex,
    })
  );
  const [barItems, setBarItems] = useState<any[]>([]);
  const [loadedLevel, setLoadedLevel] = useState(1);
  let audio = new Audio(startupSound);
  // audio.autoplay = true;

  useEffect(() => {
    // audio.play();
    setTimeout(() => setLoadedLevel(2), 5000);
    // setTimeout(() => setLoadedLevel(3), 10000);
    // setTimeout(() => audio.play(), 3000)
  }, []);

  if (loadedLevel === 1)
    return (
      <div className={styles.loadingScreenOne}>
        <img
          className={styles.loadingWindowsLogo}
          src={loadingWindowsLogo}
          alt=""
        />
        <audio src={startupSound} autoPlay></audio>
        <img className={styles.loadingBar} src={loadingBarGif} alt="" />
      </div>
    );

  if (loadedLevel === 2)
    return (
      <div className={styles.loadingScreenTwo}>
        <div className={styles.radialGradient}></div>

        <div className={styles.introduction}>
          {/* <img className="windowsLogo" src={windowsStartupLogo2} /> */}
          <img
            className={styles.windowsLogo}
            src={windowsStartupLogo2WhiteFont}
          />

          <p>To Begin, Click Your Username</p>
        </div>

        <div className={styles.line}></div>

        <div
          className={styles.userProfile}
          onClick={() => {
            setLoadedLevel(3);
            audio.play();
          }}
        >
          <img src={chessImage} />

          <p>Saba</p>
        </div>
      </div>
    );

  return (
    <GlobalContext.Provider
      value={{
        projectsWindow,
        setProjectsWindow,
        workExperienceWindow,
        setWorkExperienceWindow,
        aboutMeWindow,
        setAboutMeWindow,
        contactWindow,
        setContactWindow,
        setBarItems,
        highestIndex: highestZindex.current,
      }}
    >
      <div className="App">
        <Desktop />

        <ProjectsWindow
          settings={projectsWindow}
          setSettings={setProjectsWindow}
        />

        <WorkExperienceWindow
          settings={workExperienceWindow}
          setSettings={setWorkExperienceWindow}
        />

        <AboutMeWindow
          settings={aboutMeWindow}
          setSettings={setAboutMeWindow}
        />

        <ContactWindow
          settings={contactWindow}
          setSettings={setContactWindow}
        />

        <Bar barItems={barItems} />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
