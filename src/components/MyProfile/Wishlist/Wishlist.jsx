import styles from "./Wishlist.module.css";

function Wishlist() {
    return (
        <div className={styles["container"]}>
            <h3>Любими</h3>
            <div className={styles["row-cards"]}>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                        <div className={styles["remove-btn"]}>
                            <i className="fas fa-trash text-primary"></i>
                        </div>
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
                        <div className={styles["remove-btn"]}>
                            <i className="fas fa-trash text-primary"></i>
                        </div>
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
                        <div className={styles["remove-btn"]}>
                            <i className="fas fa-trash text-primary"></i>
                        </div>
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508 лв.</span>
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

export default Wishlist;