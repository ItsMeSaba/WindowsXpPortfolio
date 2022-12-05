import "../styles/desktop.sass"
import desktop from "../images/icons/desktop.ico";
import explorer from "../images/icons/explorer.ico";
import folder from "../images/icons/folder.ico";
import adobeFile from "../images/icons/adobeFile.png";
import Window from "./Window";
import { useContext } from 'react';
import { GlobalContext } from "../context";

interface Args {
    // openProjectsWindow: () => void,
}


export default function Desktop(args: Args) {
    const { setProjectsWindow, projectsWindow, setBarItems } = useContext(GlobalContext);


    const openProjectsWindow = () => {     
        setProjectsWindow(settings => {
            return settings.isOpened ? settings.unMinimize() : settings.open();
        });

        if (!projectsWindow.isOpened) setBarItems(items => [...items, {
            id: projectsWindow.id,
            header: projectsWindow.header,
            onClick: () => setProjectsWindow(settings => settings.isMinimized ? settings.unMinimize() : settings.minimize())
        }])
    }

    return (
        <div className="desktop">
            <DesktopItem image={desktop} text="My Computer" />
            <DesktopItem image={explorer} text="Internet Explorer" />
            <DesktopItem image={folder} text="My Projects" onDoubleClick={openProjectsWindow} />
            <DesktopItem image={adobeFile} text="CV" />
        </div>
    )
}

interface DesktopItemArgs {
    image: any,
    text: string,
    onDoubleClick?: () => any
} 

function DesktopItem(args: DesktopItemArgs) {
    const { image, text, onDoubleClick } = args;

    return (
        <div className="desktopItem" onDoubleClick={onDoubleClick}>
            <img src={image} alt="" />

            <p>{ text }</p>
        </div>
    )
}