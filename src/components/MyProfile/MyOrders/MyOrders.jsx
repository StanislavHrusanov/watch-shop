import styles from "./MyOrders.module.css";

function MyOrders() {
    return (
        <div className={styles["container"]}>
            <h3>Моите поръчки</h3>
            <div className={styles["order-box"]}>
                <h4>Поръчка №</h4>
                <p>Дата: 10.11.2023</p>
                <p>Обща сума: 3016 лв.</p>
                <span>Продукти:</span>
                <div className={styles["watches-container"]}>
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
                            <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                        </div>
                        <div className={styles["card-body"]}>
                            <h4>Vostok-Europe SSN-571</h4>
                            <div className={styles["price-box"]}>
                                <span className={styles["reg-price"]}>1508 лв.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["order-box"]}>
                <h4>Поръчка №</h4>
                <p>Дата: 10.11.2023</p>
                <p>Обща сума: 3016 лв.</p>
                <span>Продукти:</span>
                <div className={styles["watches-container"]}>
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
                            <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                        </div>
                        <div className={styles["card-body"]}>
                            <h4>Vostok-Europe SSN-571</h4>
                            <div className={styles["price-box"]}>
                                <span className={styles["reg-price"]}>1508 лв.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;