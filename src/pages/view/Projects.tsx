import { projects } from "../../data/projects";
import folder from "../../images/icons/folder.ico"
import nextjs from "../../images/technologies/nextjs.png"


interface Args {
    setCurrentProject: React.Dispatch<React.SetStateAction<string>>
} 

export default function Projects(args: Args) {
    const { setCurrentProject } = args;
    
    return (
        <div className="projects">
            {
                Object.keys(projects).map(project => (
                    <div className="projectItem" onDoubleClick={() => setCurrentProject(project)}>
                        <img src={folder} alt=""/>
        
                        <p>{ project }</p>
                    </div>
                ))
            }
        </div>
    )
}