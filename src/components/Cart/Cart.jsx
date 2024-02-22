import styles from "./Cart.module.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import WatchInCart from "./WatchInCart/WatchInCart";
import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import * as watchService from "../../services/watchService";
import * as myProfileService from "../../services/myProfileService";
import * as utils from "../../utils";

function Cart() {
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

    const increaseQty = async (watch) => {
        try {
            const watchForIncreasing = await watchService.getWatchDetails(watch._id);
            const indexOfAdded = userInfo.cart.findIndex(x => x.watch._id === watch._id);
            let chosenQty = userInfo.cart[indexOfAdded].qty + 1;


            if (watchForIncreasing.quantity >= chosenQty) {

                const updatedCart = await myProfileService.addToCart(user._id, watchForIncreasing._id, chosenQty);
                setUserInfo(state => ({
                    ...state,
                    cart: updatedCart
                }));
            }

        } catch (error) {
            window.alert(error.message);
            return navigate(`/cart`);
        }
    }

    const onDecreaseQty = async (watch) => {
        try {
            const watchForDecreasing = await watchService.getWatchDetails(watch._id);
            const indexOfAdded = userInfo.cart.findIndex(x => x.watch._id === watch._id);
            let chosenQty = userInfo.cart[indexOfAdded].qty;
            if (chosenQty > 1) {
                chosenQty -= 1;


                if (watchForDecreasing.quantity > chosenQty) {

                    const updatedCart = await myProfileService.decreaseQty(user._id, watchForDecreasing._id, chosenQty);
                    setUserInfo(state => ({
                        ...state,
                        cart: updatedCart
                    }));
                }
            }
        } catch (error) {
            window.alert(error.message);
            return navigate(`/cart`);
        }
    }

    const onRemoveFromCart = async (watch) => {
        try {
            await myProfileService.removeFromCart(user._id, watch._id);
            setUserInfo(state => ({
                ...state,
                cart: state.cart.filter(x => x.watch._id !== watch._id)
            }));
        } catch (error) {
            window.alert(error.message);
            return navigate(`/cart`);
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Количка</h3>
                {
                    userInfo.cart.length > 0
                        ? <div className={styles["row"]}>
                            <div className={styles["items-box"]}>
                                {userInfo.cart.map((x) => {
                                    return (
                                        <WatchInCart
                                            key={x._id}
                                            watch={x.watch}
                                            qty={x.qty}
                                            increaseQty={increaseQty}
                                            onDecreaseQty={onDecreaseQty}
                                            onRemoveFromCart={onRemoveFromCart}
                                        />
                                    )
                                })}
                            </div>
                            <div className={styles["cart-summary-proceed-box"]}>
                                <div className={styles["cart-summary-box"]}>
                                    <h4>Преглед на поръчка</h4>
                                    <p className={styles["items-price"]}>Стойност на продуктите: {utils.getTotalPrice(userInfo.cart)} лв.</p>
                                    <p className={styles["total"]}>Тотал: {utils.getTotalPrice(userInfo.cart)} лв.</p>
                                </div>
                                <div className={styles["proceed-to-checkout-box"]}>
                                    <div className={styles["proceed-to-checkout"]}>
                                        <p className={styles["next-step"]}>Следваща стъпка</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className={styles["no-watches-container"]}>
                            <p className={styles["no-watches-message"]}>
                                Все още няма  добавени часовници в количката!
                            </p>
                        </div>
                }

            </div>
        );
}

export default Cart;