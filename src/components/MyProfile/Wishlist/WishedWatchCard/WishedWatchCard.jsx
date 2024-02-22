import { Link } from "react-router-dom";
import styles from "./WishedWatchCard.module.css";

function WishedWatchCard({ watch, onRemoveFromWishlist }) {
    return (
        <div className={styles["watch-card"]} >
            <div className={styles["remove-btn"]}>
                <i onClick={() => { onRemoveFromWishlist(watch) }} className="fas fa-trash text-primary"></i>
            </div>
            <Link className={styles["img-box"]} to={`/watches/${watch._id}`}>
                <img src={watch.imageUrl} alt="" />

            </Link>
            <Link className={styles["card-body"]} to={`/watches/${watch._id}`}>
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
            </Link>

        </div>
    );
}

export default WishedWatchCard;