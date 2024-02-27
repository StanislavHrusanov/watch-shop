import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className={styles["container"]}>
            <div className={styles["wrapper"]}>
            </div>
            <img src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1709031341/watches/broken_watch_m869ys.jpg" alt="" />
            <div className={styles["message"]}>
                <p>Нещо се обърка! Тази страница не може да бъде намерена!</p>
                <Link to="/">Към началната страница</Link>
            </div>
        </div>
    )
}

export default NotFound;