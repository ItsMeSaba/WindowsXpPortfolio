import fairpay1 from "@/assets/images/projects/fairpay1.png";
import fairpay2 from "@/assets/images/projects/fairpay2.png";
import fairpay3 from "@/assets/images/projects/fairpay3.png";

import devicer1 from "@/assets/images/projects/devicer1.png";
import devicer2 from "@/assets/images/projects/devicer2.png";

import firestoreplayground1 from "@/assets/images/projects/firestoreplayground1.png";
import firestoreplayground2 from "@/assets/images/projects/firestoreplayground2.png";

import fbclone1 from "@/assets/images/projects/fbclone1.png";
import fbclone2 from "@/assets/images/projects/fbclone2.png";

import jstots1 from "@/assets/images/projects/jstots1.png";

import NextJs from "@/assets/images/technologies/nextjs.png";
import NestJs from "@/assets/images/technologies/nestjs.png";
import Typescript from "@/assets/images/technologies/ts.svg";
import Javascript from "@/assets/images/technologies/js.png";
import MongoDB from "@/assets/images/technologies/mongodb.png";
import React from "@/assets/images/technologies/react.png";
import Firebase from "@/assets/images/technologies/firebase.png";

interface ProjectData {
  name: string;
  description: string;
  images: any[];
  technologies: any[];
  visit: string | null;
  github: string | null;
}

export const projects: { [key in string]: ProjectData } = {
  Fairpay: {
    name: "Fairpay",
    description:
      "Fairpay is Glassdoor alternative for local market. It gives you opportunity to share experience of working with company to other devleopers.",
    images: [fairpay1, fairpay2, fairpay3],
    technologies: [NextJs, NestJs, MongoDB, Typescript],
    visit: "https://fairpay.ge",
    github: null,
  },
  Devicer: {
    name: "Devicer",
    description:
      "Devicer offers possibility to open your website in different devices, check for responsivness or use it as a website preview.",
    images: [devicer1, devicer2],
    technologies: [React],
    visit: "",
    github: "",
  },
  "Firestore Playground": {
    name: "Firestore Playground",
    description:
      "Firestore playground is place where you can test firestore queries.",
    images: [firestoreplayground1, firestoreplayground2],
    technologies: [React, Firebase],
    visit: "",
    github: "",
  },
  JSTOTS: {
    name: "JSTOTS",
    description:
      "JSTOTS helps you to transform your Javascript code to Typescript.",
    images: [jstots1],
    technologies: [Javascript],
    visit: "",
    github: "",
  },
  "Facebook Clone": {
    name: "Facebook Clone",
    description: "Clone that imitates facebook with its functionalities.",
    images: [fbclone1, fbclone2],
    technologies: [React, Firebase],
    visit: "",
    github: "",
  },
};
