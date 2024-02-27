import styles from "./Form.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { trimInputs } from "../../utils";
import * as validation from "../../validation";

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
    const [errors, setErrors] = useState({});

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

        for (let key in errors) {
            if (errors[key]) {
                return;
            }
        }

        try {
            showLoading();
            trimInputs(inputs);
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
                                onBlur={(e) => validation.isValidName(e, setErrors)}
                            />
                        </div>
                        {errors.firstName &&
                            <div className={styles["error-msg"]}>
                                Името трябва да започва с главна буква и да се състои само от букви на кирилица или латиница!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Фамилия"
                                value={inputs.lastName}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isValidName(e, setErrors)}
                            />
                        </div>
                        {errors.lastName &&
                            <div className={styles["error-msg"]}>
                                Фамилията трябва да започва с главна буква и да се състои само от букви на кирилица или латиница!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Парола"
                                value={inputs.password}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.minLengthRegister(e, setErrors, 6)}
                            />
                        </div>
                        {errors.password &&
                            <div className={styles["error-msg"]}>
                                Паролата трябва да съдържа поне 6 символа различни от интервал!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="password"
                                name="repass"
                                id="repass"
                                placeholder="Повтори парола"
                                value={inputs.repass}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isPaswordsMatch(e, inputs.password, setErrors)}
                            />
                        </div>
                        {errors.repass &&
                            <div className={styles["error-msg"]}>
                                Паролите не съвпадат!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Имейл адрес"
                                value={inputs.email}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isValidEmail(e, setErrors)}
                            />
                        </div>
                        {errors.email &&
                            <div className={styles["error-msg"]}>
                                Невалиден имейл адрес!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Адрес"
                                value={inputs.address}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.address &&
                            <div className={styles["error-msg"]}>
                                Адресът е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Телефон"
                                value={inputs.phoneNumber}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanDigit(e, setErrors)}
                            />
                        </div>
                        {errors.phoneNumber &&
                            <div className={styles["error-msg"]}>
                                Телефонът е задължителен и трябва да е съставен само от цифри!
                            </div>
                        }
                        <div className={styles["action"]}>
                            <input type="submit" value="Създай профил"></input>
                        </div>
                    </form>
                </section>
            </div>
        );
}

export default Register;