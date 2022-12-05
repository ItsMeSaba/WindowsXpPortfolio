import { useEffect, useState } from 'react'
import './App.sass';
import Bar from './components/Bar';
import Desktop from './components/Destkop';
import Window from './components/Window';
import { GlobalContext } from './context';
import { projectsWindowSettings, minimize, openProjectsWindow, WindowSettings } from './dataObjects';
import ProjectsWindow from './pages/ProjectsWindow';



function App() {
	const [projectsWindow, setProjectsWindow] = useState(projectsWindowSettings);
	const [barItems, setBarItems] = useState<any[]>([]);

	return (
		<GlobalContext.Provider value={{
			projectsWindow,
			setProjectsWindow,
			setBarItems,
		}}>
			<div className="App">
				<Desktop />
				
				{/* <Window settings={projectsWindow} minimize={() => setProjectsWindow(settings => settings.minimize())}> */}

				<ProjectsWindow settings={projectsWindow} setSettings={setProjectsWindow} />				
				{/* <Window settings={projectsWindow} setSettings={setProjectsWindow}>
					{  
						projectsWindow.currentPage === "index" &&
							<Projects 
								setPath={(newPath: string) => setProjectsWindow(settings => settings.setPath(newPath))}
							/>
					}

					{ 
						projectsWindow.currentPage === "" &&
							<Projects 
								setPath={(newPath: string) => setProjectsWindow(settings => settings.setPath(newPath))}
							/>
					}				
				</Window> */}

				<Bar barItems={barItems} />
			</div>
		</GlobalContext.Provider>
	);
}

export default App;
