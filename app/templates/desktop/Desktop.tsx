"use client";

import { GlobalContext } from "@/contexts/context";
import { useEffect, useState, useRef } from "react";
import { projectsWindowSettings } from "@/dataObjects";
import { DesktopApps } from "@/components/modules/DesktopApps";

import styles from "@/App.module.scss";
import Bar from "@/components/modules/Bar";
import chessImage from "@/assets/images/chessImage.webp";
import startupSound from "@/assets/images/startupSound.mp3";
import loadingBarGif from "@/assets/images/loadingBar.gif";
import AboutMeWindow from "@/components/windows/about-window";
import ContactWindow from "@/components/windows/contact-window";
import loadingWindowsLogo from "@/assets/images/loadingWindowsLogo.png";
import ProjectsWindow from "@/components/windows/projects-window";
import WorkExperienceWindow from "@/components/windows/experience-window";
import windowsStartupLogo2WhiteFont from "@/assets/images/windowsStartupLogo2WhiteFontCropped.png";

export function Desktop() {
  const highestZindex = useRef(1);
  const audioRef = useRef<HTMLAudioElement>(null);

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
  // const audio = new Audio(startupSound);
  // audio.autoplay = true;

  useEffect(() => {
    if (typeof Audio !== "undefined") {
      audioRef.current = new Audio(startupSound);
    }
  }, []);

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
            audioRef.current?.play();
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
        <DesktopApps />

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
