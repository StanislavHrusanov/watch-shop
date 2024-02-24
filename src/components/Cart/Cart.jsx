import styles from "./Cart.module.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import WatchInCart from "./WatchInCart/WatchInCart";
import { AuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import * as watchService from "../../services/watchService";
import * as myProfileService from "../../services/myProfileService";
import * as utils from "../../utils";

function Cart() {
    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const navigate = useNavigate();

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

    return (
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
                                    <Link className={styles["next-step"]} to="/purchase">Следваща стъпка</Link>
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