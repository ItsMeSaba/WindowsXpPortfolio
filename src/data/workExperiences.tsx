import unisoft from "../assets/images/workExperiences/unisoft.png";
import unisoft1 from "../assets/images/workExperiences/unisoft1.png";
import unisoft2 from "../assets/images/workExperiences/unisoft2.png";
import unisoft3 from "../assets/images/workExperiences/unisoft3.png";
import unisoft4 from "../assets/images/workExperiences/unisoft4.png";

import BejamasLogo from "../assets/images/companies/bejamas-logo.png";
import { JSX } from "react";

interface WorkExperience {
  company: string;
  description: JSX.Element;
  timePeriod: string;
  position: string;
  companyImage: any;
  images: any[];
}

export const workExperiences: { [key in string]: WorkExperience } = {
  Bejamas: {
    company: "Bejamas",
    description: (
      <>
        <p>
          Bejamas is a Poland-based web development company operating remotely
          on a global scale. We specialize in building and maintaining Jamstack
          websites, catering to a diverse range of international clients. Our
          portfolio includes prominent brands such as Alpro and Veezu,
          showcasing our expertise and broad industry appeal.
        </p>

        <p>As a developer my responsibilities include:</p>

        <ul>
          <li>Taking part in implementation of different websites</li>
          <li>
            Maintaining already functioning websites and adding new
            funcitonalities
          </li>
          <li>Working with different CMS-es</li>
          <li>
            Communicating with different clients and understanding their needs
          </li>
          <li>Improving website performance to pass CWV</li>
          <li>Improving website Accessibility</li>
          <li>Improving website SEO</li>
          <li>Creating Documentations</li>
        </ul>
      </>
    ),
    timePeriod: "Apr 2023 - May 2025",
    position: "Frontend Developer",
    companyImage: BejamasLogo,
    images: [],
  },
  Unisoft: {
    company: "Unisoft",
    description: (
      <>
        Unisoft is private university manamgent website, useful for both,
        lecturers and students. I took part in advancing and correctiong
        frontend, as well as implementing backend.
      </>
    ),
    timePeriod: "May 2021 - Sep 2021 · 5 mos",
    position: "Fullstack Developer",
    companyImage: unisoft,
    images: [unisoft1, unisoft2, unisoft3, unisoft4],
  },
  // Fairpay: {
  //   company: "Fairpay",
  //   description:
  //     "Profair Games offeres gambling games to casinos. I took part in advacing already started games, visually as well as functionalities using math.",
  //   timePeriod: "May 2021 - Sep 2021 · 5 mos",
  //   position: "Fullstack Developer",
  //   companyImage: profairgames,
  //   images: [profairgames1, profairgames2],
  // },
};
