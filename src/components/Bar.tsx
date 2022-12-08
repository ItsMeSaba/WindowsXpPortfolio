import "../styles/bar.sass"
import windowsLogoMini from "../images/windowsLogoMini3.png";
import folder from "../images/icons/folder.ico"

interface Args {
    barItems: any[]
}

export default function Bar(args: Args) {
    const { barItems } = args;

    console.log('barItems', barItems);

    return (
        <div className="bar">
            <div className="startButton">
                <div className="logo">
                    <img src={windowsLogoMini} alt="" />
                </div>

                <p>Start</p>
            </div>

            <div className="barItems">
                {
                    barItems.map(item => (
                        <div className="barItem" onClick={item.onClick}>
                            <img src={folder} alt="" />
                
                            <p>{ item.header }</p>
                        </div>
                    ))
                }


                {/* <div className="barItem">
                    <img src={folder} alt="" />
                
                    <p>Projects</p>
                </div>
                
                <div className="barItem">
                    <img src={folder} alt="" />
                
                    <p>Projects</p>
                </div> */}
            </div>
        </div>
    )
}