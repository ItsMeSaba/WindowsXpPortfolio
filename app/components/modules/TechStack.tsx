import typescript from "@/assets/images/technologies/ts.svg";
import javascript from "@/assets/images/technologies/js.png";
import nextjs from "@/assets/images/technologies/nextjs.png";
import react from "@/assets/images/technologies/react.png";
import node from "@/assets/images/technologies/node.png";
import mongodb from "@/assets/images/technologies/mongodb.png";
import nestjs from "@/assets/images/technologies/nestjs.png";
import mysql from "@/assets/images/technologies/mysql.png";
import figma from "@/assets/images/technologies/figma.png";
import firebase from "@/assets/images/technologies/firebase.png";
import styles from "@/styles/pages/AboutMeWindow.module.scss";

const technologies = [
  javascript,
  typescript,
  node,
  react,
  nextjs,
  nestjs,
  mongodb,
  mysql,
  firebase,
  figma,
];

export function TechStack() {
  return (
    <div className={styles.technologies}>
      {technologies.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}
