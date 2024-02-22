import { Link } from "react-router-dom";
import styles from "./WatchInCart.module.css";

function WatchInCart({
    watch,
    qty,
    increaseQty,
    onDecreaseQty,
    onRemoveFromCart
}) {
    return (
        <div className={styles["watch-card"]} >
            <Link className={styles["img-box"]} to={`/watches/${watch._id}`}>
                <img src={watch.imageUrl} alt="" />
                <span className={styles["not-avl"]}>Остават: {watch.quantity} бр.</span>
            </Link>
            <div className={styles["card-body"]}>
                <div className={styles["title-qty-box"]}>
                    <Link className={styles["watch-title"]} to={`/watches/${watch._id}`}>{watch.title}</Link>
                    <div className={styles["choose-qty"]} >
                        <i onClick={() => onDecreaseQty(watch)} className="fa fa-minus"  ></i>
                        <span className={styles["qty"]}>{qty}</span>
                        <i onClick={() => increaseQty(watch)} className="fa fa-plus" ></i>
                    </div>
                </div>
                <div className={styles["trash-price-box"]}>
                    <div className={styles["remove-btn"]}>
                        <i onClick={() => onRemoveFromCart(watch)} className="fas fa-trash text-primary"></i>
                    </div>
                    {
                        watch.oldPrice && watch.oldPrice > watch.price
                            ? <div className={styles["price-box"]}>
                                <span className={styles["old-price"]}>{watch.oldPrice * qty} лв.</span>
                                <span className={styles["new-price"]}>{watch.price * qty} лв.</span>
                            </div>
                            : <div className={styles["price-box"]}>
                                <span className={styles["reg-price"]}>{watch.price * qty} лв.</span>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default WatchInCart;