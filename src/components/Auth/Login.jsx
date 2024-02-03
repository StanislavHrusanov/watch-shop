import styles from "./Form.module.css";

function Login() {
    return (
        <div className={styles["container"]}>
            <section className={styles["form-view"]}>
                <h3>Вход</h3>
                <form>
                    <div className={styles["input"]}>
                        <input type="text" name="email" placeholder="Имейл адрес" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="password" name="password" placeholder="Парола" />
                    </div>
                    <div className={styles["action"]}>
                        <input type="submit" value="Влез"></input>
                    </div>
                    <div className={styles["no-reg"]}>
                        <p>Нямаш регистрация? <a href="">Регистрирай се!</a> </p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;