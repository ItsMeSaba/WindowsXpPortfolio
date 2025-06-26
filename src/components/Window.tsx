import styles from "../styles/window.module.scss";
import folder from "../assets/images/icons/folder.ico";
import minimizeButton from "../assets/images/icons/minimize.png";
import closeButton from "../assets/images/icons/close.png";
import go from "../assets/images/icons/go.png";
import back from "../assets/images/icons/back.png";
import front from "../assets/images/icons/front.png";
import { WindowSettings } from "../dataObjects";
import { GlobalContext } from "../context";
import { RefObject, useContext, useRef } from "react";
import Draggable from "react-draggable";

interface Args {
  children: any;
  settings: WindowSettings;
  setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>;
  onBack?: () => any;
  hideControlls?: boolean;
}

export default function Window(args: Args) {
  const { children, settings, setSettings, onBack, hideControlls } = args;
  const { setBarItems } = useContext(GlobalContext);
  const { header, path } = settings;
  const draggableRef = useRef<HTMLDivElement>(null);

  if (settings.isMinimized || !settings.isOpened) return null;

  function close() {
    setSettings((settings) => {
      setBarItems((items) => items.filter((item) => item.id !== settings.id));

      return settings.close();
    });
  }

  const windowGridStyle = `min-content min-content ${
    hideControlls ? "auto" : "min-content min-content auto"
  }`;

  return (
    <Draggable
      nodeRef={draggableRef as RefObject<HTMLElement>}
      onMouseDown={() => setSettings((settings) => settings.setZindex())}
    >
      <div
        ref={draggableRef}
        className={styles.window}
        style={{ zIndex: settings.zIndex, gridTemplateRows: windowGridStyle }}
      >
        <div className={styles.topHeader}>
          <div className={styles.windowInfo}>
            <div className={styles.folderIcon}>
              <img src={folder} alt="" />
            </div>

            <p>{header}</p>
          </div>

          <div className={styles.buttons}>
            <img
              src={minimizeButton}
              alt=""
              onClick={() => setSettings((settings) => settings.minimize())}
            />
            {/* <img src={maximize} alt="" /> */}
            <img src={closeButton} alt="" onClick={close} />
            {/* <img src={close} alt="" onClick={() => setSettings(settings => settings.close())}/> */}
          </div>
        </div>

        <div className={styles.settings}>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Favourites</p>
          <p>Tools</p>
          <p>Help</p>
        </div>

        {!hideControlls && (
          <>
            <div className={styles.controlls}>
              <div className={styles.backDiv} onClick={onBack}>
                <img src={back} alt="" />

                <p>Back</p>
              </div>

              <div className={styles.frontDiv}>
                <img src={front} alt="" />

                {/* <p>Next</p> */}
              </div>
            </div>

            <div className={styles.address}>
              <p>Address</p>

              <div className={styles.inputBar}>
                <img src={folder} alt="" />

                <p>C:/{path}</p>
              </div>

              <div className={styles.goButton}>
                <img src={go} alt="" />
              </div>
            </div>
          </>
        )}

        <div className={styles.windowBody}>{children}</div>
      </div>
    </Draggable>
  );
}
