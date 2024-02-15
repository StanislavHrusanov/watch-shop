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
            <nav className={styles["nav"]}>
                <Link className={styles["nav-link"]} to="/">Начало</Link>
                <Link className={styles["nav-link"]} to="/watches">Часовници</Link>
                <Link className={styles["nav-link"]} to="/watches/types/men">Мъжки</Link>
                <Link className={styles["nav-link"]} to="/watches/types/women">Дамски</Link>
                <Link className={styles["nav-link"]} to="/register">Регистрация</Link>
                <Link className={styles["nav-link"]}>Вход</Link>
                <Link className={styles["nav-link"]}>Изход</Link>
            </nav>
        </div>
    )
}

export default Navbar;