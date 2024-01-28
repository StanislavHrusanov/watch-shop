import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <Link className={styles["text-decoration-none"]}>
                        <h1 className={styles["title"]}>watch-shop.bg</h1>
                    </Link>
                </div>
                <div className={styles["col-1"]}>
                    <div className={styles["btn"]}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;