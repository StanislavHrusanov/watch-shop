import styles from "./WishedWatchCard.module.css";

function WishedWatchCard() {
    return (
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
    );
}

export default WishedWatchCard;