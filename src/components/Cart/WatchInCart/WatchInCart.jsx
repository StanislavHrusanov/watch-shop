import styles from "./WatchInCart.module.css";

function WatchInCart({
    watch,
    qty,
    increaseQty,
    onDecreaseQty
}) {
    return (
        <div className={styles["watch-card"]}>
            <div className={styles["img-box"]}>
                <img src={watch.imageUrl} alt="" />
                <span className={styles["not-avl"]}>Остават: {watch.quantity} бр.</span>
            </div>
            <div className={styles["card-body"]}>
                <div className={styles["title-qty-box"]}>
                    <h4>{watch.title}</h4>
                    <div className={styles["choose-qty"]} >
                        <i onClick={() => onDecreaseQty(watch)} className="fa fa-minus"  ></i>
                        <span className={styles["qty"]}>{qty}</span>
                        <i onClick={() => increaseQty(watch)} className="fa fa-plus" ></i>
                    </div>
                </div>
                <div className={styles["trash-price-box"]}>
                    <div className={styles["remove-btn"]}>
                        <i className="fas fa-trash text-primary"></i>
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