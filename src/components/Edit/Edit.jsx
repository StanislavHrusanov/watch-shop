import styles from "../Auth/Form.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import * as watchService from "../../services/watchService";
import * as utils from "../../utils";

function Edit() {
    const [watch, setWatch] = useState({
        title: '',
        brand: '',
        model: '',
        imageUrl: '',
        price: '',
        oldPrice: '',
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
    const { watchId } = useParams();

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const watchDetails = await watchService.getWatchDetails(watchId);
                const joinedDescription = utils.joinDescription(watchDetails.description);
                watchDetails.description = joinedDescription
                setWatch(watchDetails);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate(`/watches/${watchId}`);
            }
        })();
    }, [showLoading, hideLoading, navigate, watchId]);

    const onChangeHandler = (e) => {
        setWatch(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            showLoading();
            const splitedDescription = utils.splitDescription(watch.description);
            await watchService.editWatch(watchId, { ...watch, description: splitedDescription });
            hideLoading();
            navigate(`/watches/${watchId}`);

        } catch (error) {
            window.alert(error.message);
            hideLoading();
            return navigate(`/watches/${watchId}/edit`);
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <section className={styles["form-view"]}>
                    <h3>Редактирай часовник</h3>
                    <form onSubmit={onSubmit}>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Заглавие"
                                value={watch.title}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                placeholder="Марка"
                                value={watch.brand}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="model"
                                id="model"
                                placeholder="Модел"
                                value={watch.model}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="Линк към снимка"
                                value={watch.imageUrl}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Цена"
                                value={watch.price}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="number"
                                name="oldPrice"
                                id="oldPrice"
                                placeholder="Стара цена"
                                value={watch.oldPrice}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="type"
                                id="type"
                                placeholder="Тип (мъжки/дамски)"
                                value={watch.type}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="movement"
                                id="movement"
                                placeholder="Вид механизъм"
                                value={watch.movement}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="glass"
                                id="glass"
                                placeholder="Вид стъкло"
                                value={watch.glass}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="waterResistance"
                                id="waterResistance"
                                placeholder="Водоустойчивост"
                                value={watch.waterResistance}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="diameter"
                                id="diameter"
                                placeholder="Диаметър корпус"
                                value={watch.diameter}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="bodyMaterial"
                                id="bodyMaterial"
                                placeholder="Материал на корпуса"
                                value={watch.bodyMaterial}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="strapMaterial"
                                id="strapMaterial"
                                placeholder="Материал на верижката"
                                value={watch.strapMaterial}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="text"
                                name="warrantyInYears"
                                id="warrantyInYears"
                                placeholder="Години гаранция"
                                value={watch.warrantyInYears}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                placeholder="Бройки"
                                value={watch.quantity}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["input"]}>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Описание"
                                value={watch.description}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div className={styles["action"]}>
                            <input type="submit" value="Редактирай"></input>
                        </div>
                    </form>
                </section>
            </div>
        );
}

export default Edit;