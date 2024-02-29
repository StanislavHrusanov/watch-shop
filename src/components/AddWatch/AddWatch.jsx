import styles from "../Auth/Form.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as watchService from "../../services/watchService";
import { LoadingContext } from "../../contexts/LoadingContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { splitDescription } from "../../utils";
import * as validation from "../../validation";

function AddWatch() {
    const [inputs, setInputs] = useState({
        title: '',
        brand: '',
        model: '',
        imageUrl: '',
        price: '',
        type: '',
        movement: '',
        glass: '',
        waterResistance: '',
        diameter: '',
        bodyMaterial: '',
        strapMaterial: '',
        warrantyInYears: '',
        quantity: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

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
            const splitedDescription = splitDescription(inputs.description);
            await watchService.addWatch({ ...inputs, description: splitedDescription });
            hideLoading();
            navigate('/watches');

        } catch (error) {
            window.alert(error.message);
            hideLoading();
            return navigate('/addWatch');
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <section className={styles["form-view"]}>
                    <h3>Добави часовник</h3>
                    <form onSubmit={onSubmit}>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Заглавие"
                                value={inputs.title}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.title &&
                            <div className={styles["error-msg"]}>
                                Заглавието е задължително!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                placeholder="Марка"
                                value={inputs.brand}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isValidBrandName(e, setErrors)}
                            />
                        </div>
                        {errors.brand &&
                            <div className={styles["error-msg"]}>
                                Марката е задължителна и може да се състои от няколко думи започващи с главна буква и разделени с интервал или "-"!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="model"
                                id="model"
                                placeholder="Модел"
                                value={inputs.model}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.model &&
                            <div className={styles["error-msg"]}>
                                Моделът е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="Линк към снимка"
                                value={inputs.imageUrl}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isImageUrl(e, setErrors)}
                            />
                        </div>
                        {errors.imageUrl &&
                            <div className={styles["error-msg"]}>
                                Невалиден линк към изображение!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Цена"
                                value={inputs.price}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isPositiveNumber(e, setErrors)}
                            />
                        </div>
                        {errors.price &&
                            <div className={styles["error-msg"]}>
                                Цената е задължителна и трябва да бъде положително число!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                placeholder="Тип (Мъжки/Дамски)"
                                value={inputs.type}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isValidType(e, setErrors)}
                            />
                        </div>
                        {errors.type &&
                            <div className={styles["error-msg"]}>
                                Типът е задължителен и трябва да е 'Мъжки' или 'Дамски'!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="movement"
                                id="movement"
                                placeholder="Вид механизъм"
                                value={inputs.movement}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.movement &&
                            <div className={styles["error-msg"]}>
                                Вида на механизмът е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="glass"
                                id="glass"
                                placeholder="Вид стъкло"
                                value={inputs.glass}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.glass &&
                            <div className={styles["error-msg"]}>
                                Вида на стълклото е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="waterResistance"
                                id="waterResistance"
                                placeholder="Водоустойчивост"
                                value={inputs.waterResistance}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.waterResistance &&
                            <div className={styles["error-msg"]}>
                                Вида на водоустойчивостта е задължителен и ако я има се изписва с мерната единица!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="diameter"
                                id="diameter"
                                placeholder="Диаметър корпус"
                                value={inputs.diameter}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isPositiveNumber(e, setErrors)}
                            />
                        </div>
                        {errors.diameter &&
                            <div className={styles["error-msg"]}>
                                Диаметърът е задължителен и се изписва без 'мм'!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="bodyMaterial"
                                id="bodyMaterial"
                                placeholder="Материал на корпуса"
                                value={inputs.bodyMaterial}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.bodyMaterial &&
                            <div className={styles["error-msg"]}>
                                Материала на корпусът е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="strapMaterial"
                                id="strapMaterial"
                                placeholder="Материал на верижката"
                                value={inputs.strapMaterial}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.strapMaterial &&
                            <div className={styles["error-msg"]}>
                                Материала на верижката е задължителен!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="warrantyInYears"
                                id="warrantyInYears"
                                placeholder="Години гаранция"
                                value={inputs.warrantyInYears}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isPositiveNumber(e, setErrors)}
                            />
                        </div>
                        {errors.warrantyInYears &&
                            <div className={styles["error-msg"]}>
                                Гаранцията трябва да бъде цяло число в години без да се изписва мерната единица!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Бройки"
                                value={inputs.quantity}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isPositiveNumber(e, setErrors)}
                            />
                        </div>
                        {errors.quantity &&
                            <div className={styles["error-msg"]}>
                                Количеството е задължително и трябва да бъде цяло положително число!
                            </div>
                        }
                        <div className={styles["input"]}>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Описание"
                                value={inputs.description}
                                onChange={onChangeHandler}
                                onBlur={(e) => validation.isDifferentThanEmptySymbol(e, setErrors)}
                            />
                        </div>
                        {errors.description &&
                            <div className={styles["error-msg"]}>
                                Описанието е задължително!
                            </div>
                        }
                        <div className={styles["action"]}>
                            <input type="submit" value="Добави" />
                        </div>
                    </form>
                </section>
            </div>
        );
}

export default AddWatch;