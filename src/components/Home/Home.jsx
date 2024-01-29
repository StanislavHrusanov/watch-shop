import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles["container"]}>
            <h3>Нашите марки</h3>
            <p>В нашия магазин ще намерите голямо разнообразие от маркови часовници. Всички часовници са с гарантирано качество, 100% автентичност и осигурено гаранционно обслужване в рамките на минимум 2 години. Watch-shop.bg е оторизиран за продажба и дистрибуция на всички марки в сайта от официалните им представители и вносители в България.</p>
            <div className={styles["row"]}>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/seiko_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/citizen_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/sector_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/victorinox_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/invicta_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/zeppelin_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/hanowa_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/police_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://vostokwatches.ru/image/cache/data/vostok-europe-480x480.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/tissot_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/casio_mini.png" alt="" />
                </div>
                <div className={styles["brand-box"]}>
                    <img src="https://www.vip-watches.net/media/attributesplash/cache/729a6e_196x80/orient_mini.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;