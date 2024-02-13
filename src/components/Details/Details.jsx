import styles from "./Details.module.css";
import uniqid from "uniqid";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import * as watchService from "../../services/watchService";

function Details() {
    const [watch, setWatch] = useState({});
    const { watchId } = useParams();

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const watchDetails = await watchService.getWatchDetails(watchId);
                setWatch(watchDetails);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/watches');
            }
        })();
    }, [showLoading, hideLoading, navigate, watchId]);


    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <div className={styles["row-img-buy"]}>
                    <div className={styles["col-img"]}>
                        <img src={watch.imageUrl} alt="" />
                    </div>
                    <div className={styles["col-buy"]}>
                        <h3>{watch.title}</h3>
                        {
                            watch.oldPrice && watch.oldPrice > watch.price
                                ? <div className={styles["price-container"]}>
                                    <p className={styles["old--price"]}>{watch.oldPrice} лв.</p>
                                    <p className={styles["reg--price"]}>{watch.price} лв.</p>
                                </div>
                                : <div className={styles["price-container"]}>
                                    <p className={styles["reg--price"]}>{watch.price} лв.</p>
                                </div>
                        }

                        {
                            watch.quantity > 0
                                ? <span className={styles["avl"]}>В наличност</span>
                                : <span className={styles["not-avl"]}>Изчерпан</span>
                        }

                        <div className={styles["buttons"]}>
                            <div className={styles["buy-btn"]}>Поръчай</div>
                            <div className={styles["wish-btn"]}>
                                <i className="fas fa-heart text-primary"></i>
                            </div>
                        </div>
                        <h4>Технически характеристики</h4>
                        <div className={styles["desc-table"]}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Марка</td>
                                        <td>{watch.brand}</td>
                                    </tr>
                                    <tr>
                                        <td>Модел</td>
                                        <td>{watch.model}</td>
                                    </tr>
                                    <tr>
                                        <td>Тип</td>
                                        <td>{watch.type}</td>
                                    </tr>
                                    <tr>
                                        <td>Механизъм</td>
                                        <td>{watch.movement}</td>
                                    </tr>
                                    <tr>
                                        <td>Стъкло</td>
                                        <td>{watch.glass}</td>
                                    </tr>
                                    <tr>
                                        <td>Водоустойчивост</td>
                                        <td>{watch.waterResistance}АТМ</td>
                                    </tr>
                                    <tr>
                                        <td>Диаметър</td>
                                        <td>{watch.diameter}мм</td>
                                    </tr>
                                    <tr>
                                        <td>Материал корпус</td>
                                        <td>{watch.bodyMaterial}</td>
                                    </tr>
                                    <tr>
                                        <td>Материал верижка</td>
                                        <td>{watch.strapMaterial}</td>
                                    </tr>
                                    <tr>
                                        <td>Гаранция</td>
                                        <td>{watch.warrantyInYears} години</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-desc-row"]}>
                    <h4>Описание</h4>
                    {
                        watch.description &&
                        <div className={styles["paragraph-box"]}>

                            {watch.description.map(x => <p key={uniqid()}>{x.paragraph}</p>)}

                        </div>
                    }

                </div>
                <h3 className={styles["row-similar-title"]}>Разгледайте също:</h3>
                <div className={styles["row-similar-watches"]}>
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
                            <img src="https://cdncloudcart.com/16251/products/images/6541/vostok-europe-48mm-atomic-age-mazki-casovnik-nh34-640c703-657865817bf61_1920x1920.png?1702389168" alt="" />
                        </div>
                        <div className={styles["card-body"]}>
                            <h4>Vostok-Europe Atomic Age Automatic Watch</h4>
                            <div className={styles["price-box"]}>
                                <span className={styles["old-price"]}>1905 лв.</span>
                                <span className={styles["new-price"]}>1850 лв.</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles["watch-card"]}>
                        <div className={styles["img-box"]}>
                            <img src="https://cdncloudcart.com/16251/products/images/3711/vostok-black-edition-iv-benediktas-vanagas-46mm-mazki-casovnik-vk64-571j431-image_620507c29e21f_1280x1280.png?1644496866" alt="" />
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
                            <img src="https://cdncloudcart.com/16251/products/images/6537/vostok-europe-47mm-almaz-mazki-casovnik-6s11-320b660-65784878a30ae_600x600.png?1702381736" alt="" />
                        </div>
                        <div className={styles["card-body"]}>
                            <h4>VOSTOK EUROPE 47ММ ALMAZ 6S11-320B660</h4>
                            <div className={styles["price-box"]}>
                                <span className={styles["reg-price"]}>950 лв.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Details;