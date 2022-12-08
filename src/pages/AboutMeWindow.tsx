import Window from "../components/Window";
import { WindowSettings } from "../dataObjects";
import "../styles/pages/AboutMeWindow.sass"

import typescript from "../images/technologies/ts.svg"
import javascript from "../images/technologies/js.png"
import nextjs from "../images/technologies/nextjs.png"
import react from "../images/technologies/react.png"
import node from "../images/technologies/node.png"
import mongodb from "../images/technologies/mongodb.png"
import nestjs from "../images/technologies/nestjs.png"
import mysql from "../images/technologies/mysql.png"
import figma from "../images/technologies/figma.png"
import firebase from "../images/technologies/firebase.png"

const technologies = [javascript, typescript, node, react, nextjs, nestjs, mongodb, mysql, firebase, figma,];

interface Args {
    // setPath: (newPath: string) => any;
    settings: WindowSettings,
    setSettings: React.Dispatch<React.SetStateAction<WindowSettings>>
}

export default function AboutMeWindow(args: Args) {
    const { setSettings, settings } = args;

    return (
        <Window settings={settings} setSettings={setSettings} hideControlls={true}>
            <div className="aboutMeWindow">
                <p>I'm Saba</p>

                <p>Fullstack Javascript Developer</p>
                
                <p>Located in Georgia (Europe), Timezone GMT+4</p>

                <p>Third Year of Writing Code</p>

                <p>One Year of Work Experience</p>

                <p>Technology Stack:</p>

                <div className="technologies">
                    {
                        technologies.map(src => <img  src={src} />)
                    }
                </div>
            </div>
        </Window>
    )
}