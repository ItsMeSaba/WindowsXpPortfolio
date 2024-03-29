import "../styles/window.sass"
import folder from "../images/icons/folder.ico";
import minimizeButton from "../images/icons/minimize.png";
import maximize from "../images/icons/maximize.png";
import closeButton from "../images/icons/close.png";
import go from "../images/icons/go.png";
import back from "../images/icons/back.png";
import front from "../images/icons/front.png";
import { WindowSettings } from "../dataObjects";
import { GlobalContext } from "../context";
import { useContext } from 'react'
import Draggable from 'react-draggable';

interface Args {
    children: any,
    // minimize: () => void,
    settings: WindowSettings,
    setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>,
    onBack?: () => any,
    hideControlls?: boolean
}

export default function Window(args: Args) {
    const { children, settings, setSettings, onBack, hideControlls } = args;
    const { setBarItems } = useContext(GlobalContext);
    const { header, path } = settings;

    if (settings.isMinimized || !settings.isOpened) return null;

    function close() {
        setSettings(settings => {
            setBarItems(items => items.filter(item => item.id !== settings.id));
            
            return settings.close()
        });
    }

    const windowGridStyle = `min-content min-content ${hideControlls ? "auto" : "min-content min-content auto"}`
 
    return (
    <Draggable onMouseDown={() => setSettings(settings => settings.setZindex())}>
    {/* // <Draggable onMouseDown={() => console.log("M OUSEDOWN WENT")} onStart={() => console.log("ONSTART WENT")} onDrag={() => console.log("ONDRAG WENT")}> */}
        <div className="window" style={{ zIndex: settings.zIndex, gridTemplateRows: windowGridStyle }}>
            <div className="topHeader">
                <div className="windowInfo">
                    <div className="folderIcon">
                        <img src={folder} alt="" />
                    </div>

                    <p>{ header }</p>
                </div>

                <div className="buttons">
                    <img src={minimizeButton} alt="" onClick={() => setSettings(settings => settings.minimize())} />
                    {/* <img src={maximize} alt="" /> */}
                    <img src={closeButton} alt="" onClick={close}/>
                    {/* <img src={close} alt="" onClick={() => setSettings(settings => settings.close())}/> */}
                </div>
            </div>

            <div className="settings">
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Favourites</p>
                <p>Tools</p>
                <p>Help</p>
            </div>


            { !hideControlls && 
                <>
                    <div className="controlls">
                        <div className="backDiv" onClick={onBack}>
                            <img src={back} alt="" />
                        
                            <p>Back</p>
                        </div>

                        <div className="frontDiv">
                            <img src={front} alt="" />
                            
                            {/* <p>Next</p> */}
                        </div>
                    </div>

                    <div className="address">
                        <p>Address</p>

                        <div className="inputBar">
                            <img src={folder} alt="" />
        
                            <p>C:/{ path }</p>
                        </div>

                        <div className="goButton">
                            <img src={go} alt="" />
                        </div>
                    </div>
                </>
            }

            <div className="windowBody">
                { children }
            </div>
        </div>
        </Draggable>
    )
} 