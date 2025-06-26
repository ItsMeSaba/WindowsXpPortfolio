import styles from "../styles/bar.module.scss";
import windowsLogoMini from "../assets/images/windowsLogoMini3.png";
import folder from "../assets/images/icons/folder.ico";

interface Args {
  barItems: any[];
}

export default function Bar(args: Args) {
  const { barItems } = args;

  console.log("barItems", barItems);

  return (
    <div className={styles.bar}>
      <div className={styles.startButton}>
        <div className={styles.logo}>
          <img src={windowsLogoMini} alt="" />
        </div>

        <p>Start</p>
      </div>

      <div className={styles.barItems}>
        {barItems.map((item) => (
          <div className={styles.barItem} onClick={item.onClick}>
            <img src={folder} alt="" />

            <p>{item.header}</p>
          </div>
        ))}

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
  );
}
