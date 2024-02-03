import styles from "./Form.module.css";

function Register() {
    return (
        <div className={styles["container"]}>
            <section className={styles["form-view"]}>
                <h3>Регистрация</h3>
                <form>
                    <div className={styles["input"]}>
                        <input type="text" name="firstName" id="firstName" placeholder="Име" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="lastName" id="lastName" placeholder="Фамилия" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="password" name="password" id="password" placeholder="Парола" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="password" name="repass" id="repass" placeholder="Повтори парола" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="email" id="email" placeholder="Имейл адрес" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="addresss" id="address" placeholder="Адрес" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Телефон" />
                    </div>
                    <div className={styles["action"]}>
                        <input type="submit" value="Създай профил"></input>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;