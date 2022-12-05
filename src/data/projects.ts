import fairpay1 from "../images/projects/fairpay1.png"
import fairpay2 from "../images/projects/fairpay2.png"
import fairpay3 from "../images/projects/fairpay3.png"

import NextJs from "../images/technologies/nextjs.png"
import NestJs from "../images/technologies/nestjs.png"
import Typescript from "../images/technologies/ts.svg"
import MongoDB from "../images/technologies/mongodb.png"

interface ProjectData {
    name: string,
    description: string,
    images: any[],
    technologies: any[],
}

export const projects: { [key in string]: ProjectData } = {
    "Fairpay": {
        name: "Fairpay",
        description: "Fairpay is Glassdoor alternative for local market. It gives you opportunity to share experience of working with company to other devleopers.",
        images: [fairpay1, fairpay2, fairpay3],
        technologies: [NextJs, NestJs, MongoDB, Typescript]
    },
}