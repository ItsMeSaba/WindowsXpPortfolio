import ImageGallery from "react-image-gallery";
import { workExperiences } from "../../data/workExperiences";
import "../../styles/pages/view/workExperience.sass";

interface Args {
  experience: string;
}

export default function WorkExperience(args: Args) {
  const { experience } = args;
  const { company, companyImage, position, description, images, timePeriod } =
    workExperiences[experience];

  return (
    <div className="workExperience">
      <div className="company">
        <img src={companyImage} alt="" />

        <div className="info">
          <p className="header">{company}</p>

          <div className="position">{position}</div>

          <div className="timePeriod">{timePeriod}</div>
        </div>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="images">
        <ImageGallery items={images.map((src) => ({ original: src }))} />
      </div>
    </div>
  );
}
