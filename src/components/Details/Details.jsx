import styles from "./Details.module.css";
import uniqid from "uniqid";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Watch from "../WatchCatalog/Watch/Watch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../contexts/LoadingContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserContext";
import * as watchService from "../../services/watchService";
import * as myProfileService from "../../services/myProfileService";

function Details() {
    const [watch, setWatch] = useState({});
    const [similarWatches, setSimilarWatches] = useState([]);
    const { watchId } = useParams();

    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const watchDetails = await watchService.getWatchDetails(watchId);
                const allSimilarWatches = await watchService.getSimilarWatches(watchDetails.brand, watchDetails._id);
                setWatch(watchDetails);
                setSimilarWatches(allSimilarWatches);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/watches');
            }
        })();
    }, [showLoading, hideLoading, navigate, watchId]);

    const deleteWatch = async () => {
        try {

            const choice = window.confirm('Сигурен ли си, че искаш да изтриеш този часовник?');

            if (choice) {
                showLoading();
                await watchService.delWatch(watch._id);
                hideLoading();
                navigate('/watches');
            }
        } catch (error) {
            window.alert(error.message);
            hideLoading();
            return navigate(`/watches/${watch._id}`);
        }
    }

    const updateWishlist = async () => {
        try {
            const userWishlist = await myProfileService.updateWishlist(user._id, watchId);
            setUserInfo(state => ({
                ...state,
                wishlist: userWishlist
            }));

        } catch (error) {
            window.alert(error.message);
            return navigate('/watches');
        }
    }


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

                        {
                            !user
                                ? <div className={styles["buttons"]}>

                                    <Link to="/login" className={styles["buy-btn"]}>Поръчай</Link>
                                    <Link to="/login" className={styles["wish-btn"]}>
                                        <i className="fas fa-heart text-primary"></i>
                                    </Link>
                                </div>
                                : user && !user?.isAdmin
                                    ? <div className={styles["buttons"]}>

                                        <div className={styles["buy-btn"]}>Поръчай</div>
                                        <div
                                            onClick={updateWishlist}
                                            className={styles[userInfo.wishlist.find(x => x._id === watch._id) ? "wish-btn-added" : "wish-btn"]}
                                        >
                                            <i className="fas fa-heart text-primary"></i>
                                        </div>
                                    </div>
                                    : <div className={styles["buttons"]}>
                                        <div className={styles["qty-for-admin"]}>Налични: {watch.quantity} броя</div>
                                    </div>
                        }

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

                    {
                        user?.isAdmin &&
                        <div className={styles["edit-delete-box"]}>
                            <Link to={`/watches/${watch._id}/edit`}>Редактирай</Link>
                            <div onClick={deleteWatch}>Изтрий</div>
                        </div>
                    }

                </div>
                {
                    similarWatches.length > 0 &&
                    <>
                        <h3 className={styles["row-similar-title"]}>Разгледайте също:</h3>
                        <div className={styles["row-similar-watches"]}>

                            {similarWatches.map(x => <Watch key={x._id} watch={x} />)}

                        </div>
                    </>
                }

                <div className={styles["added-to-cart"]}>Часовникът е добавен в количката!</div>
            </div>
        );
}

export default Details;