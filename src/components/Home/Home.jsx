import styles from "./Home.module.css";
import firstImage from "./images/VK61-571F612__2.jpg";
import secondImage from "./images/seiko.jpg"

function Home() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <img src={firstImage} alt="" />
                </div>
                <div className={styles["col-1"]}>
                    <img src={secondImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;