import { workExperiences } from "../../data/workExperiences";
import folder from "../../assets/images/icons/folder.ico";

interface Args {
  setCurrentExperience: React.Dispatch<React.SetStateAction<string>>;
}

export default function WorkExperiences(args: Args) {
  const { setCurrentExperience } = args;

  return (
    <div className="workExperiences">
      {Object.values(workExperiences).map((experience) => (
        <div
          className="workItem"
          onDoubleClick={() => setCurrentExperience(experience.company)}
        >
          <img src={folder} alt="" />

          <p>{experience.company}</p>
        </div>
      ))}
    </div>
  );
}
