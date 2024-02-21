import styles from "./Purchase.module.css";

function Purchase() {
    return (
        <div className={styles["container"]}>
            <h3>Потвърди и плати</h3>
            <div className={styles["col"]}>
                <div className={styles["delivery-info"]}>
                    <h4>Данни за доставка</h4>
                    <p className={styles["names"]}>Станислав Хрусанов</p>
                    <p className={styles["add-info"]}>Созопол, ул.Вихрен 66</p>
                    <p className={styles["add-info"]}>0888111111</p>
                </div>
                <div className={styles["delivery-info-no-user"]}>
                    <h4>Поръчка без регистрация</h4>
                    <div className={styles["input"]}>
                        <input type="text" name="firstName" id="firstName" placeholder="Име" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="lastName" id="lastName" placeholder="Фамилия" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="addresss" id="address" placeholder="Адрес" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Телефон" />
                    </div>
                </div>
                <div className={styles["pay-method"]}>
                    <h4>Метод на плащане</h4>
                    <p className={styles["method-type"]}>Наложен платеж</p>
                    <p className={styles["method-info"]}>Плащането се извършва в брой или с карта при получаване на продукта.</p>
                </div>
                <div className={styles["confirm-and-pay"]}>
                    <h4>Преглед на поръчката</h4>
                    <div className={styles["items-value-box"]}>
                        <p>Стойност на продуктите:</p>
                        <span>1000 лв.</span>
                    </div>
                    <div className={styles["delivery-box"]}>
                        <p>Доставка:</p>
                        <span>Безплатно</span>
                    </div>
                    <div className={styles["total-box"]}>
                        <p>Общо:</p>
                        <span>1000 лв.</span>
                    </div>
                    <div className={styles["confirm-btn"]}>
                        <p>Потвърди и плати</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchase;