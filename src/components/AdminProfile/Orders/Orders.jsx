import styles from "./Orders.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import OrderCard from "./OrderCard/OrderCard";
import { LoadingContext } from "../../../contexts/LoadingContext";
import * as orderService from "../../../services/orderService";

function Orders() {
    const [orders, setOrders] = useState([]);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const allOrders = await orderService.getAll();
                setOrders(allOrders);
                hideLoading();
            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/orders');
            }
        })();
    }, [showLoading, hideLoading, navigate]);

    const onChangeOrderStatus = async (orderId) => {
        try {
            const changedOrderStatus = await orderService.changeOrderStatus(orderId);
            setOrders(state => state.map(x => x._id === orderId ? { ...x, status: changedOrderStatus } : x));

        } catch (error) {
            window.alert(error.message);
            return navigate('/orders');
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Поръчки</h3>
                {
                    orders.length > 0
                        ? orders.map(x => <OrderCard key={x._id} order={x} onChangeOrderStatus={onChangeOrderStatus} />)
                        : <div className={styles["no-orders-container"]}>
                            <p className={styles["no-orders-message"]}>
                                Все още нямате направени поръчки!
                            </p>
                        </div>
                }
            </div>
        );
}

export default Orders;