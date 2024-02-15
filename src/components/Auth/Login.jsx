import styles from "./Form.module.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { trimInputs } from "../../utils";

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const { userLogin } = useContext(AuthContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setInputs(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            showLoading();
            trimInputs(inputs);
            const loggedInUser = await authService.login(inputs);
            userLogin(loggedInUser);
            hideLoading();
            navigate('/');

        } catch (error) {
            window.alert(error.message);
            hideLoading();
            return navigate('/login');
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <section className={styles["form-view"]}>
                    <h3>Вход</h3>
                    <form onSubmit={onSubmit}>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Имейл адрес"
                                value={inputs.email}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Парола"
                                value={inputs.password}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["action"]}>
                            <input type="submit" value="Влез"></input>
                        </div>
                        <div className={styles["no-reg"]}>
                            <p>Нямаш регистрация? <Link to="/register">Регистрирай се!</Link> </p>
                        </div>
                    </form>
                </section>
            </div>
        );
}

export default Login;