import styles from "./Purchases.module.css";

function Purchases() {
    return (
        <div className={styles["container"]}>
            <h3>Поръчки</h3>
            <div className={styles["purchase-info"]}>
                <div className={styles["status-pending"]}>
                    <select value="pending" id="">
                        {/* <option value="pending" hidden="hidden" selected="selected">Чакаща</option> */}
                        <option value="pending">Чакаща</option>
                        <option value="sent">Изпратена</option>
                    </select>
                </div>
                <div className={styles["purchase-id"]}>
                    <p>Поръчка №:</p>
                    <span>#32321431414322</span>
                </div>
                <div className={styles["name-box"]}>
                    <p>Получател:</p>
                    <span className={styles["names"]}>Станислав Хрусанов</span>
                </div>
                <div className={styles["address-box"]}>
                    <p>Адрес:</p>
                    <span className={styles["address"]}>Созопол, ул.Вихрен 66 бл.1 ет.3 ап.5</span>
                </div>
                <div className={styles["phone-box"]}>
                    <p>Телефон:</p>
                    <span className={styles["phone"]}>0888111111</span>
                </div>
                <div className={styles["items-box"]}>
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
                <div className={styles["items-value-box"]}>
                    <p>Стойност на продуктите:</p>
                    <span>1000 лв.</span>
                </div>
            </div>
            <div className={styles["purchase-info"]}>
                <div className={styles["status-sent"]}>
                    <select value="sent" id="">
                        {/* <option value="pending" hidden="hidden" selected="selected">Чакаща</option> */}
                        <option value="pending">Чакаща</option>
                        <option value="sent">Изпратена</option>
                    </select>
                </div>
                <div className={styles["purchase-id"]}>
                    <p>Поръчка №:</p>
                    <span>#32321431414322</span>
                </div>
                <div className={styles["name-box"]}>
                    <p>Получател:</p>
                    <span className={styles["names"]}>Станислав Хрусанов</span>
                </div>
                <div className={styles["address-box"]}>
                    <p>Адрес:</p>
                    <span className={styles["address"]}>Созопол, ул.Вихрен 66 бл.1 ет.3 ап.5</span>
                </div>
                <div className={styles["phone-box"]}>
                    <p>Телефон:</p>
                    <span className={styles["phone"]}>0888111111</span>
                </div>
                <div className={styles["items-box"]}>
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
                <div className={styles["items-value-box"]}>
                    <p>Стойност на продуктите:</p>
                    <span>1000 лв.</span>
                </div>
            </div>
        </div>
    );
}

export default Purchases;