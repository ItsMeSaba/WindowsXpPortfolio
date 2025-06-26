import { projects } from "../../data/projects";
import styles from "../../styles/pages/view/project.module.scss";
import ImageGallery from "react-image-gallery";

interface Args {
  projectName: string;
}

export default function Project(args: Args) {
  const { projectName } = args;
  const { description, images, name, technologies, github, visit } =
    projects[projectName];

  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h1>{name}</h1>

        {visit && (
          <a
            className={styles.button}
            href={visit}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
        )}
        {github && (
          <a
            className={styles.button}
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        )}
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.technologiesUsed}>
        <p>Technologies Used:</p>

        <div className={styles.technologies}>
          {technologies.map((image) => (
            <img src={image} />
          ))}
        </div>
      </div>

      <div className={styles.images}>
        <ImageGallery items={images.map((src) => ({ original: src }))} />
      </div>
    </div>
  );
}
