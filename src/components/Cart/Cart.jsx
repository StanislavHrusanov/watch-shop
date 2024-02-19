import { useState } from "react";
import styles from "./Cart.module.css";

function Cart() {

    return (
        <div className={styles["container"]}>
            <h3>Количка</h3>
            <div className={styles["row"]}>
                <div className={styles["items-box"]}>
                    <div className={styles["watch-card"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                            <span className={styles["not-avl"]}>Остават: 1 бр.</span>
                        </div>
                        <div className={styles["card-body"]}>
                            <div className={styles["title-qty-box"]}>
                                <h4>Vostok-Europe SSN-571 ddasdas ddasdas dadadadadadas</h4>
                                <input className={styles["choose-qty"]} type="number" />
                            </div>
                            <div className={styles["trash-price-box"]}>
                                <div className={styles["remove-btn"]}>
                                    <i className="fas fa-trash text-primary"></i>
                                </div>
                                <div className={styles["price-box"]}>
                                    <span className={styles["reg-price"]}>1508 лв.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["watch-card"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                        </div>
                        <div className={styles["card-body"]}>
                            <h4>Vostok-Europe SSN-571</h4>
                            <div className={styles["trash-price-box"]}>
                                <div className={styles["remove-btn"]}>
                                    <i className="fas fa-trash text-primary"></i>
                                </div>
                                <div className={styles["price-box"]}>
                                    <span className={styles["old-price"]}>1500 лв.</span>
                                    <span className={styles["new-price"]}>1300 лв.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["cart-summary-proceed-box"]}>
                    <div className={styles["cart-summary-box"]}>
                        <h4>Преглед на поръчка</h4>
                        <p className={styles["items-price"]}>Стойност на продуктите: 2808 лв.</p>
                        <p className={styles["total"]}>Тотал: 2808 лв.</p>
                    </div>
                    <div className={styles["proceed-to-checkout-box"]}>
                        <div className={styles["proceed-to-checkout"]}>
                            <p className={styles["next-step"]}>Следваща стъпка</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;