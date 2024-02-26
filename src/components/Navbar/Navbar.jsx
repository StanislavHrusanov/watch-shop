import styles from "./Navbar.module.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const [isNavToggled, setIsNavToggled] = useState(false);
    const [isDropdownToggled, setIsDropdownToggled] = useState(false);

    const { user } = useContext(AuthContext);

    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <Link className={styles["text-decoration-none"]}>
                        <h1 className={styles["title"]}>watch-shop.bg</h1>
                    </Link>
                </div>
                <div className={styles["col-1"]}>
                    <div onClick={() => setIsNavToggled(!isNavToggled)} className={styles["btn"]}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
            <nav className={styles["nav"]}>
                <Link className={styles["nav-link"]} to="/">Начало</Link>
                <Link className={styles["nav-link"]} to="/watches">Часовници</Link>
                <Link className={styles["nav-link"]} to="/watches/types/men">Мъжки</Link>
                <Link className={styles["nav-link"]} to="/watches/types/women">Дамски</Link>
                {
                    user
                        ? <>
                            <div className={styles["nav-link-dropdown"]}>
                                <div className={styles["my-profile"]} onClick={() => setIsDropdownToggled(!isDropdownToggled)}>Моят профил<i
                                    className="fa fa-chevron-down"></i></div>
                                {
                                    isDropdownToggled &&
                                    <div onMouseLeave={() => setIsDropdownToggled(false)} className={styles["dropdown-content"]}>
                                        {
                                            user?.isAdmin
                                                ? <>
                                                    <Link to="/addWatch">Добави часовник</Link>
                                                    <Link to="/orders">Поръчки</Link>
                                                </>
                                                : <>
                                                    <Link to="/wishlist">Любими</Link>
                                                    <Link to="/myOrders">Поръчки</Link>
                                                </>
                                        }
                                    </div>
                                }
                            </div>
                            <Link className={styles["nav-link"]} to="/logout">Изход</Link>
                        </>
                        : <>
                            <Link className={styles["nav-link"]} to="/register">Регистрация</Link>
                            <Link className={styles["nav-link"]} to="/login">Вход</Link>
                        </>
                }
            </nav>
            {
                isNavToggled &&
                <nav className={styles["nav-mobile"]}>
                    <Link className={styles["nav-link"]} to="/">Начало</Link>
                    <Link className={styles["nav-link"]} to="/watches">Часовници</Link>
                    <Link className={styles["nav-link"]} to="/watches/types/men">Мъжки</Link>
                    <Link className={styles["nav-link"]} to="/watches/types/women">Дамски</Link>
                    {
                        user
                            ? <>
                                <div className={styles["nav-link-dropdown"]}>
                                    <div className={styles["my-profile"]} onClick={() => setIsDropdownToggled(!isDropdownToggled)}>Моят профил<i
                                        className="fa fa-chevron-down"></i></div>
                                    {
                                        isDropdownToggled &&
                                        <div onTouchMove={() => setIsDropdownToggled(false)} className={styles["dropdown-content"]}>
                                            {
                                                user?.isAdmin
                                                    ? <>
                                                        <Link to="/addWatch">Добави часовник</Link>
                                                        <Link to="/orders">Поръчки</Link>
                                                    </>
                                                    : <>
                                                        <Link to="/wishlist">Любими</Link>
                                                        <Link to="/myOrders">Поръчки</Link>
                                                    </>
                                            }
                                        </div>
                                    }
                                </div>
                                <Link className={styles["nav-link"]} to="/logout">Изход</Link>
                            </>
                            : <>
                                <Link className={styles["nav-link"]} to="/register">Регистрация</Link>
                                <Link className={styles["nav-link"]} to="/login">Вход</Link>
                            </>
                    }
                </nav>
            }
        </div>
    )
}

export default Navbar;