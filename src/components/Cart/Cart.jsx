import styles from "./Cart.module.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import WatchInCart from "./WatchInCart/WatchInCart";
import { AuthContext } from "../../contexts/AuthContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { UserProfileContext } from "../../contexts/UserContext";
import * as watchService from "../../services/watchService";
import * as myProfileService from "../../services/myProfileService";

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
                setUserInfo(state => ({
                    ...state,
                    cart: freshUserInfo.cart
                }));
                hideLoading();
                console.log(freshUserInfo);
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
    // const [qty, setQty] = useState(1);
    // const [isDisabled, setIsDisabled] = useState(false);

    // const increaseQty = () => {
    //     if (qty < 3) {
    //         setQty(state => state + 1);
    //     } else if (qty === 3) {
    //         setIsDisabled(true);
    //     }
    // }

    // const decreaseQty = () => {
    //     if (qty > 1) {
    //         setQty(state => state - 1);
    //     } else if (qty === 1) {
    //         setIsDisabled(true);
    //     }
    // }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Количка</h3>
                {
                    userInfo.cart[0].qty > 0
                        ? <div className={styles["row"]}>
                            <div className={styles["items-box"]}>
                                {userInfo.cart.map((x) => {
                                    return (
                                        <WatchInCart
                                            key={x._id}
                                            watch={x.watch}
                                            qty={x.qty}
                                            increaseQty={increaseQty}
                                        />
                                    )
                                })}
                            </div>
                            <div className={styles["cart-summary-proceed-box"]}>
                                <div className={styles["cart-summary-box"]}>
                                    <h4>Преглед на поръчка</h4>
                                    <p className={styles["items-price"]}>Стойност на продуктите: 2808 лв.</p>
                                    <p className={styles["total"]}>Тотал: 2808 лв.</p>
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