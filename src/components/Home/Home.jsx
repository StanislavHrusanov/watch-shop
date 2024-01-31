import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row-banner"]}>
                <img className={styles["first-banner"]} src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1706691405/watches/atomic-age-vk64-640c699-leather-black-art-1_q5at0f.jpg" alt="" />
                <p>Виж всички модели</p>
            </div>
            <h3>Ново от Vostok-Europe</h3>
            <div className={styles["row-cards"]}>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508 лв.</span>
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
                            <span className={styles["old-price"]}>1905 лв.</span>
                            <span className={styles["new-price"]}>1850 лв.</span>
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
                            <span className={styles["reg-price"]}>1508 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/6537/vostok-europe-47mm-almaz-mazki-casovnik-6s11-320b660-65784878a30ae_600x600.png?1702381736" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>VOSTOK EUROPE 47ММ ALMAZ 6S11-320B660</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>950 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3216/vostok-europe-49mm-lunokhod-2-mazki-casovni-6s21-620e631-image_6132028380b52_600x600.jpeg?1630667581" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>VOSTOK EUROPE 49ММ LUNOKHOD-2 6S21-620E631</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1650 лв.</span>
                            <span className={styles["new-price"]}>1590 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://vostok-europe.bg/wp-content/uploads/2019/05/Vostok-Europe-Anchar-NH35A-510C530-Black-Leather-Strap.jpg" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe Anchar NH35A-510C530</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1199 лв.</span>
                            <span className={styles["new-price"]}>1135 лв.</span>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Нашите марки</h3>
            <p>В нашия магазин ще намерите голямо разнообразие от маркови часовници. Всички часовници са с гарантирано качество, 100% автентичност и осигурено гаранционно обслужване в рамките на минимум 2 години. Watch-shop.bg е оторизиран за продажба и дистрибуция на всички марки в сайта от официалните им представители и вносители в България.</p>
            <div className={styles["row-brands"]}>
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
            <div className={styles["row-banner"]}>
                <img className={styles["first-banner"]} src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1706694407/watches/Seiko-Prospex-SRPC49K-slider.jpg_tpjzfk.webp" alt="" />
                <p>Виж всички модели</p>
            </div>
            <h3>Ново от Seiko</h3>
            <div className={styles["row-cards"]}>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/5911/seiko-prospex-great-blue-turtle-scuba-padi-special-edition-45mm-mazki-casovnik-srpk01k1-65113beaa544c.webp?1695628270" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO PROSPEX ‘GREAT BLUE’ TURTLE SCUBA PADI SPECIAL EDITION SRPK01K1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1290 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/5912/seiko-presage-automatic-41mm-mazki-casovnik-ssk013j1-64ccfe0faf7e8.webp?1691155998" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO PRESAGE AUTOMATIC 41MM SSK013J1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1500 лв.</span>
                            <span className={styles["new-price"]}>1300 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/6384/seiko-5-sport-42-5mm-mazki-casovnik-srpk11k1-653fd87757941_600x600.png?1698683030" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO 5 SPORT 42.5MM SRPK11K1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>680 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/5403/seiko-prospex-king-samurai-save-the-ocean-king-turtle-45-mm-mazki-casovnik-srpf77k1-64ce0cd2042ab_600x600.png?1691225332" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO PROSPEX KING SAMURAI SAVE THE OCEAN KING TURTLE 45 MM SRPF77K1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1190 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/4394/seiko-sport-chrono-43mm-mazki-casovnik-ssb413p1-6319dcb50f072_600x600.png?1662639387" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO SPORT CHRONO 43MM SSB413P1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>650 лв.</span>
                            <span className={styles["new-price"]}>590 лв.</span>
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
                            <span className={styles["old-price"]}>1199 лв.</span>
                            <span className={styles["new-price"]}>1099 лв.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;