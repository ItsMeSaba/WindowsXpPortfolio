import unisoft from "../images/workExperiences/unisoft.png"
import unisoft1 from "../images/workExperiences/unisoft1.png"
import unisoft2 from "../images/workExperiences/unisoft2.png"
import unisoft3 from "../images/workExperiences/unisoft3.png"
import unisoft4 from "../images/workExperiences/unisoft4.png"
import profairgames from "../images/workExperiences/profairgames.png"
import profairgames1 from "../images/workExperiences/profairgames1.png"
import profairgames2 from "../images/workExperiences/profairgames2.png"

interface WorkExperience {
    company: string,
    description: string,
    timePeriod: string,
    position: string,
    companyImage: any,
    images: any[],
}

export const workExperiences: { [key in string]: WorkExperience } = {
    "Unisoft": {
        company: "Unisoft",
        description: "Unisoft is private university manamgent website, useful for both, lecturers and students. I took part in advancing and correctiong frontend, as well as implementing backend.",
        timePeriod: "May 2021 - Sep 2021 · 5 mos",
        position: "Fullstack Developer",
        companyImage: unisoft,
        images: [unisoft1, unisoft2, unisoft3, unisoft4],
    },
    "Fairpay": {
        company: "Fairpay",
        description: "Profair Games offeres gambling games to casinos. I took part in advacing already started games, visually as well as functionalities using math.",
        timePeriod: "May 2021 - Sep 2021 · 5 mos",
        position: "Fullstack Developer",
        companyImage: profairgames,
        images: [profairgames1, profairgames2],
    }
}