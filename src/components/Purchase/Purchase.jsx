import styles from "./Purchase.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import * as myProfileService from "../../services/myProfileService";
import * as orderService from "../../services/orderService";
import * as utils from "../../utils";

function Purchase() {
    const [order, setOrder] = useState({});
    const [isPurchaseMade, setIsPurchaseMade] = useState(false);
    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const freshUserInfo = await myProfileService.getUserInfo(user._id);
                setUserInfo(freshUserInfo);
                hideLoading();
            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/cart');
            }
        })();
    }, [showLoading, hideLoading, navigate, setUserInfo, user._id]);

    const onCreateOrder = () => {
        (async () => {
            try {
                showLoading();
                const userInfoBeforeConfirmation = await myProfileService.getUserInfo(user._id);

                if (!utils.checkAvailability(userInfoBeforeConfirmation)) {

                    const userInfoWithcheckedAvailability = await myProfileService.updateUserCart(user._id);
                    setUserInfo(userInfoWithcheckedAvailability);
                    throw new Error('Недостатъчна наличност на някой от часовницие!');
                }

                const createdOrder = await orderService.createOrder({
                    buyer: user._id,
                    items: utils.getWatchesForOrder(userInfo.cart),
                    totalPrice: utils.getTotalPrice(userInfo.cart)
                });

                setOrder(createdOrder);
                setIsPurchaseMade(true);
                await myProfileService.cleanUserCart(user._id);
                setUserInfo(state => ({
                    ...state,
                    cart: []
                }));
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/cart');
            }
        })();
    }

    return isLoading
        ? (
            <LoadingSpinner />
        ) : isPurchaseMade
            ? (
                <div className={styles["purchase-info-container"]}>
                    <p>Успешно направихте поръчка с № {order._id}</p>
                    <p>Благодарим Ви!</p>
                    <div className={styles["to-my-purchases"]}>Към моите поръчки</div>
                </div>
            )
            : (
                <div className={styles["container"]}>
                    <h3>Потвърди и плати</h3>
                    <div className={styles["col"]}>
                        <div className={styles["delivery-info"]}>
                            <h4>Данни за доставка</h4>
                            <p className={styles["names"]}>{userInfo.firstName} {userInfo.lastName}</p>
                            <p className={styles["add-info"]}>{userInfo.address}</p>
                            <p className={styles["add-info"]}>{userInfo.phoneNumber}</p>
                        </div>
                        {/* <div className={styles["delivery-info-no-user"]}>
                <h4>Поръчка без регистрация</h4>
                <div className={styles["input"]}>
                    <input type="text" name="firstName" id="firstName" placeholder="Име" />
                </div>
                <div className={styles["input"]}>
                    <input type="text" name="lastName" id="lastName" placeholder="Фамилия" />
                </div>
                <div className={styles["input"]}>
                    <input type="text" name="addresss" id="address" placeholder="Адрес" />
                </div>
                <div className={styles["input"]}>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Телефон" />
                </div>
            </div> */}
                        <div className={styles["pay-method"]}>
                            <h4>Метод на плащане</h4>
                            <p className={styles["method-type"]}>Наложен платеж</p>
                            <p className={styles["method-info"]}>Плащането се извършва в брой или с карта при получаване на продукта.</p>
                        </div>
                        <div className={styles["confirm-and-pay"]}>
                            <h4>Преглед на поръчката</h4>
                            <div className={styles["items-value-box"]}>
                                <p>Стойност на продуктите:</p>
                                <span>{utils.getTotalPrice(userInfo.cart)} лв.</span>
                            </div>
                            <div className={styles["delivery-box"]}>
                                <p>Доставка:</p>
                                <span>Безплатно</span>
                            </div>
                            <div className={styles["total-box"]}>
                                <p>Общо:</p>
                                <span>{utils.getTotalPrice(userInfo.cart)} лв.</span>
                            </div>
                            <div className={styles["confirm-btn"]}>
                                <p onClick={onCreateOrder}>Потвърди и плати</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
}

export default Purchase;