import ImageGallery from "react-image-gallery";
import { workExperiences } from "../../data/workExperiences";
import styles from "../../styles/pages/view/workExperience.module.scss";

interface Args {
  experience: string;
}

export default function WorkExperience(args: Args) {
  const { experience } = args;
  const { company, companyImage, position, description, images, timePeriod } =
    workExperiences[experience];

  return (
    <div className={styles.workExperience}>
      <div className={styles.company}>
        <img src={companyImage} alt="" />

        <div className={styles.info}>
          <p className={styles.header}>{company}</p>

          <div className={styles.position}>{position}</div>

          <div className={styles.timePeriod}>{timePeriod}</div>
        </div>
      </div>

      <div className={styles.description}>{description}</div>

      <div className={styles.images}>
        <ImageGallery items={images.map((src) => ({ original: src }))} />
      </div>
    </div>
  );
}
