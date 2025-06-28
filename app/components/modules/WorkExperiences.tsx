import { workExperiences } from "@/data/workExperiences";
import folder from "@/assets/images/icons/folder.ico";
import styles from "@/styles/pages/WorkExperienceWindow.module.scss";

interface Args {
  setCurrentExperience: React.Dispatch<React.SetStateAction<string>>;
}

export default function WorkExperiences(args: Args) {
  const { setCurrentExperience } = args;

  return (
    <div className={styles.workExperiences}>
      {Object.values(workExperiences).map((experience) => (
        <div
          className={styles.workItem}
          onDoubleClick={() => setCurrentExperience(experience.company)}
        >
          <img src={folder} alt="" />

          <p>{experience.company}</p>
        </div>
      ))}
    </div>
  );
}
