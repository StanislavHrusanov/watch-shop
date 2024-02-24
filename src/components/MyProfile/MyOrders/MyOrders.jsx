import styles from "./MyOrders.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import Order from "./Order/Order";
import { AuthContext } from "../../../contexts/AuthContext";
import { LoadingContext } from "../../../contexts/LoadingContext";
import * as orderService from "../../../services/orderService";

function MyOrders() {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useContext(AuthContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const orders = await orderService.getMyOrders(user._id);
                setMyOrders(orders);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/myOrders');
            }
        })();
    }, [showLoading, hideLoading, navigate, user._id]);

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Моите поръчки</h3>
                {
                    myOrders.length > 0
                        ? myOrders.map(x => <Order key={x._id} order={x} />)
                        : <div className={styles["no-orders-container"]}>
                            <p className={styles["no-orders-message"]}>
                                Все още нямате направени поръчки!
                            </p>
                        </div>
                }

            </div>
        );
}

export default MyOrders;