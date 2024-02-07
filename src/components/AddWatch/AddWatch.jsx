import styles from "../Auth/Form.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as watchService from "../../services/watchService";
import { LoadingContext } from "../../contexts/LoadingContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { splitDescription } from "../../utils";

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
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                placeholder="Марка"
                                value={inputs.brand}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="model"
                                id="model"
                                placeholder="Модел"
                                value={inputs.model}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="Линк към снимка"
                                value={inputs.imageUrl}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Цена"
                                value={inputs.price}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                placeholder="Тип (мъжки/дамски)"
                                value={inputs.type}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="movement"
                                id="movement"
                                placeholder="Вид механизъм"
                                value={inputs.movement}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="glass"
                                id="glass"
                                placeholder="Вид стъкло"
                                value={inputs.glass}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="waterResistance"
                                id="waterResistance"
                                placeholder="Водоустойчивост"
                                value={inputs.waterResistance}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="diameter"
                                id="diameter"
                                placeholder="Диаметър корпус"
                                value={inputs.diameter}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="bodyMaterial"
                                id="bodyMaterial"
                                placeholder="Материал на корпуса"
                                value={inputs.bodyMaterial}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="strapMaterial"
                                id="strapMaterial"
                                placeholder="Материал на верижката"
                                value={inputs.strapMaterial}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="warrantyInYears"
                                id="warrantyInYears"
                                placeholder="Години гаранция"
                                value={inputs.warrantyInYears}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Бройки"
                                value={inputs.quantity}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Описание"
                                value={inputs.description}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["action"]}>
                            <input type="submit" value="Добави" />
                        </div>
                    </form>
                </section>
            </div>
        );
}

export default AddWatch;