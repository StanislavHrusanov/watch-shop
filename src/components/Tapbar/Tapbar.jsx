import { Link } from "react-router-dom";
import styles from "./Tapbar.module.css";

function Tapbar() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <Link className={styles["text-decoration-none"]}>
                        <h1 className={styles["title"]}>watch-shop.bg</h1>
                    </Link>
                </div>
                <div className={styles["col-1"]}>
                    <form action="">
                        <div className={styles["search"]}>
                            <input type="text" className={styles["search-input"]} placeholder="Търси" />
                            <div className={styles["search-input-append"]}>
                                <span className={styles["search-input-icon"]} >
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles["col-2"]}>
                    <Link className={styles["btn"]}>
                        <i className="fas fa-heart text-primary"></i>
                        <span className={styles["badge"]}>0</span>
                    </Link>
                    <Link className={styles["btn"]}>
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className={styles["badge"]}>0</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Tapbar;