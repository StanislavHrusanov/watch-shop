import styles from "./Form.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";

function Register() {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        password: '',
        repass: '',
        email: '',
        address: '',
        phoneNumber: ''
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
            const createdUser = await authService.register(inputs);
            userLogin(createdUser);
            hideLoading();
            navigate('/');

        } catch (error) {
            window.alert(error.message);
            hideLoading();
            return navigate('/register');
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <section className={styles["form-view"]}>
                    <h3>Регистрация</h3>
                    <form onSubmit={onSubmit}>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Име"
                                value={inputs.firstName}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Фамилия"
                                value={inputs.lastName}
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
                        <div className={styles["input"]}>
                            <input
                                type="password"
                                name="repass"
                                id="repass"
                                placeholder="Повтори парола"
                                value={inputs.repass}
                                onChange={onChangeHandler}
                            />
                        </div>
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
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Адрес"
                                value={inputs.address}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Телефон"
                                value={inputs.phoneNumber}
                                onChange={onChangeHandler}
                            />
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