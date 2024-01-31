import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <h3>Контакти</h3>
                    <p className={styles["quick-links"]}><i className="fa fa-map-marker-alt"></i>Созопол, ул.Републиканска 1</p>
                    <p className={styles["quick-links"]}><i className="fa fa-envelope"></i>office@watch-shop.bg</p>
                    <p className={styles["quick-links"]}><i className="fa fa-phone-alt"></i>0700 123 123</p>
                </div>
                <div className={styles["col"]}>
                    <h3>За клиенти</h3>
                    <p className={styles["quick-links"]}>Често задавани въпроси</p>
                    <p className={styles["quick-links"]}>Доставка и плащане</p>
                    <p className={styles["quick-links"]}>Връщане / Замяна / Гаранция</p>
                    <p className={styles["quick-links"]}>Купи на изплащане</p>
                    <p className={styles["quick-links"]}>Лазерно гравиране</p>
                </div>
                <div className={styles["col"]}>
                    <h3>За нас</h3>
                    <p className={styles["quick-links"]}>За нас</p>
                    <p className={styles["quick-links"]}>Контакт с нас</p>
                    <p className={styles["quick-links"]}>Общи условия</p>
                    <p className={styles["quick-links"]}>Политика за личните данни</p>
                    <p className={styles["quick-links"]}>Политика за бисквитки</p>
                </div>
            </div>
            <div className={styles["row-1"]}>
                <p>&copy; 2024 watch-shop.bg. Всички права запазени.</p>
            </div>
        </div>
    )
}

export default Footer;