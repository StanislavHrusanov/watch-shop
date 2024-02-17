import { Link } from "react-router-dom";
import styles from "./WishedWatchCard.module.css";

function WishedWatchCard({ watch }) {
    return (
        <Link className={styles["watch-card"]} to={`/watches/${watch._id}`}>
            <div className={styles["img-box"]}>
                <img src={watch.imageUrl} alt="" />
                <div className={styles["remove-btn"]}>
                    <i className="fas fa-trash text-primary"></i>
                </div>
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
        </Link>
    );
}

export default WishedWatchCard;