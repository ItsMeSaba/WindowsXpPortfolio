import { projects } from "../../data/projects";
import folder from "../../assets/images/icons/folder.ico";
import styles from "../../styles/pages/ProjectsWindow.module.scss";

interface Args {
  setCurrentProject: React.Dispatch<React.SetStateAction<string>>;
}

export default function Projects(args: Args) {
  const { setCurrentProject } = args;

  return (
    <div className={styles.projects}>
      {Object.keys(projects).map((project) => (
        <div
          className={styles.projectItem}
          onDoubleClick={() => setCurrentProject(project)}
        >
          <img src={folder} alt="" />

          <p>{project}</p>
        </div>
      ))}
    </div>
  );
}
