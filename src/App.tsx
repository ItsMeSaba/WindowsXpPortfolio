import { useEffect, useState, useRef } from 'react'
import './App.sass';
import Bar from './components/Bar';
import Desktop from './components/Destkop';
import Window from './components/Window';
import { GlobalContext } from './context';
import { projectsWindowSettings, minimize, openProjectsWindow, WindowSettings } from './dataObjects';
import ProjectsWindow from './pages/ProjectsWindow';
import WorkExperienceWindow from './pages/WorkExperienceWindow';
import loadingBarGif from "./images/loadingBar.gif"
import loadingWindowsLogo from "./images/loadingWindowsLogo.png"
// import loadingTwo from "./images/loadingTwo.mp4"
import loadingTwo from "./images/loading2.webp"
import loading2 from "./images/loading2.png"
import startupSound from "./images/startupSound.mp3"
import windowsStartupLogo from "./images/windowsStartupLogo.png"
import windowsStartupLogo2 from "./images/windowsStartupLogo2.png"
import windowsStartupLogo2WhiteFont from "./images/windowsStartupLogo2WhiteFontCropped.png"
import chessImage from "./images/chessImage.webp"
import AboutMeWindow from './pages/AboutMeWindow';
import ContactWindow from './pages/ContactWindow';


function App() {
	const highestZindex = useRef(1);
	const [projectsWindow, setProjectsWindow] = useState(() => projectsWindowSettings({ header: "Projects", id: "ProjectsWindow", highestZindex }));
	const [workExperienceWindow, setWorkExperienceWindow] = useState(() => projectsWindowSettings({ header: "Work Experience", id: "WorkExperienceWindow", highestZindex }));
	const [aboutMeWindow, setAboutMeWindow] = useState(() => projectsWindowSettings({ header: "About Me", id: "AboutMeWindow", highestZindex }));
	const [contactWindow, setContactWindow] = useState(() => projectsWindowSettings({ header: "Contact", id: "ContactWindow", highestZindex }));
	const [barItems, setBarItems] = useState<any[]>([]);
	const [loadedLevel, setLoadedLevel] = useState(1);
	let audio = new Audio(startupSound);
	// audio.autoplay = true;

	useEffect(() => {
		// audio.play();
		setTimeout(() => setLoadedLevel(2), 5000);
		// setTimeout(() => setLoadedLevel(3), 10000);
		// setTimeout(() => audio.play(), 3000)
	}, [])

	if (loadedLevel === 1) return (
		<div className="loadingScreenOne">
			<img className="loadingWindowsLogo" src={loadingWindowsLogo} alt="" />
			<audio src={startupSound} autoPlay></audio>
			<img className="loadingBar" src={loadingBarGif} alt="" />
		</div>
	)
	
	if (loadedLevel === 2) return (
		<div className="loadingScreenTwo">
			<div className="radialGradient"></div>

			<div className="introduction">
				{/* <img className="windowsLogo" src={windowsStartupLogo2} /> */}
				<img className="windowsLogo" src={windowsStartupLogo2WhiteFont} />

				<p>To Begin, Click Your Username</p>
			</div>

			<div className="line"></div>

			<div className="userProfile" onClick={() => { setLoadedLevel(3); audio.play() }}>
				<img src={chessImage} />

				<p>Saba</p>
			</div>
		</div>
	)

	return (
		<GlobalContext.Provider value={{
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
		}}>
			<div className="App">
				<Desktop />

				<ProjectsWindow settings={projectsWindow} setSettings={setProjectsWindow} />				

				<WorkExperienceWindow settings={workExperienceWindow} setSettings={setWorkExperienceWindow} />

				<AboutMeWindow settings={aboutMeWindow} setSettings={setAboutMeWindow} />				
				
				<ContactWindow settings={contactWindow} setSettings={setContactWindow} />				

				<Bar barItems={barItems} />
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
