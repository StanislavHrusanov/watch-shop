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
            <h3>Последните ни предложения</h3>
            <div className={styles["row-1"]}>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508.00 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/6541/vostok-europe-48mm-atomic-age-mazki-casovnik-nh34-640c703-657865817bf61_1920x1920.png?1702389168" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe Atomic Age Automatic Watch</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1905.00 лв.</span>
                            <span className={styles["new-price"]}>1850.00 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3711/vostok-black-edition-iv-benediktas-vanagas-46mm-mazki-casovnik-vk64-571j431-image_620507c29e21f_1280x1280.png?1644496866" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508.00 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/1227/orient-star-classic-open-heart-41mm-mazki-casovnik-ra-ar0202e-image_5f9003bbaac83_1280x1280.jpeg?1603273883" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>ORIENT STAR CLASSIC OPEN HEART 41MM</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1083.00 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://www.vip-watches.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/0/v0072-01x.jpg" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Citizen Promaster - AV0072-01X</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1650 лв.</span>
                            <span className={styles["new-price"]}>1590 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://www.watchdepot.com.au/cdn/shop/products/30260849-a_700x.jpg?v=1662113838" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Seiko Prospex SNJ029P 'Arnie' Solar Divers Watch</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1199.00 лв.</span>
                            <span className={styles["new-price"]}>1099.00 лв.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;