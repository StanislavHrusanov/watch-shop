import styles from "./WatchCatalog.module.css";

function WatchCatalog() {
    return (
        <div className={styles["container"]}>
            <h3>Часовници</h3>
            <div className={styles["row-sort-filter"]}>
                <div className={styles["filter"]}>
                    <p>Тип:</p>
                    <select name="" id="">
                        <option value="Всички">Всички</option>
                        <option value="Мъжки">Мъжки</option>
                        <option value="Дамски">Дамски</option>
                    </select>
                </div>
                <div className={styles["sort"]}>
                    <p>Сортирай по:</p>
                    <select name="" id="">
                        <option value="Цена">Цена</option>
                        <option value="Мъжки">Най-нови</option>
                    </select>
                </div>
            </div>

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
                        <img src="https://cdncloudcart.com/16251/products/images/5911/seiko-prospex-great-blue-turtle-scuba-padi-special-edition-45mm-mazki-casovnik-srpk01k1-65113beaa544c.webp?1695628270" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>SEIKO PROSPEX ‘GREAT BLUE’ TURTLE SCUBA PADI SPECIAL EDITION SRPK01K1</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1290 лв.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["pagination"]}>
                <div className={styles["prev"]}><i className="fa fa-chevron-left"></i></div>
                <div className={styles["pages"]}>
                    <div>1 от 3</div>
                </div>
                <div className={styles["next"]}><i className="fa fa-chevron-right"></i></div>
            </div>
        </div>
    );
}

export default WatchCatalog;