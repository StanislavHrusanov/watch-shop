import styles from "./WatchCard.module.css";

function WatchCard({ watch }) {
    return (
        <div className={styles["watch-card"]}>
            <div className={styles["img-box"]}>
                <img src={watch.imageUrl} alt="" />
            </div>
            <div className={styles["card-body"]}>
                <h4>{watch.title}</h4>
                {
                    watch.oldPrice && watch.oldPrice > watch.price
                        ? <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>{watch.oldPrice} лв.</span>
                            <span className={styles["new-price"]}>{watch.price} лв.</span>
                        </div>
                        : <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>{watch.price} лв.</span>
                        </div>
                }
            </div>
        </div>
    );
}

export default WatchCard;