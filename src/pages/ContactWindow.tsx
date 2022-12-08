import Window from "../components/Window";
import { WindowSettings } from "../dataObjects";
import gmail from "../images/contact/gmail.png"
import upwork from "../images/contact/upwork.png"
import linkedin from "../images/contact/linkedin.png"
import "../styles/pages/ContactWindow.sass"

interface Args {
    // setPath: (newPath: string) => any;
    settings: WindowSettings,
    setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>
}

export default function ContactWindow(args: Args) {
    const { setSettings, settings } = args;

    return (
        <Window settings={settings} setSettings={setSettings} hideControlls={true}>
            <div className="contactWindow">
                <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=sbsilagadze@gmail.com&su=I saw your portfolio">
                    <img src={gmail} />
                </a>

                <a target="_blank" href="https://www.upwork.com/freelancers/~017fb7334c294b9dc5">
                    <img src={upwork} />
                </a>

                <a target="_blank" href="https://www.linkedin.com/in/saba-silagadze-8164a31b0/">
                    <img className="linkedin" src={linkedin} />
                </a>
            </div>
        </Window>
    )
}