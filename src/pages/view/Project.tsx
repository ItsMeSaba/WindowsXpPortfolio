import { projects } from "../../data/projects"
import "../../styles/pages/view/project.sass"
import ImageGallery from 'react-image-gallery';

interface Args {
    projectName: string
} 

export default function Project(args: Args) {
    const { projectName } = args;
    const { description, images, name, technologies, github, visit } = projects[projectName];

    return (
        <div className="project">
            <div className="header">
                <h1>{ name }</h1>

                { visit && <a className="button" href={visit} target="_blank" rel="noreferrer">Visit</a> }
                { github && <a className="button" href={github} target="_blank" rel="noreferrer">Github</a> }
            </div>

            <p className="description">{ description }</p>

            <div className="technologiesUsed">
                <p>Technologies Used:</p> 

                <div className="technologies">
                    {
                        technologies.map(image => <img src={image} />)
                    }
                </div>
            </div>

            <div className="images">
                <ImageGallery items={images.map(src => ({ original: src }) )}/>
            </div>
        </div>
    )
}