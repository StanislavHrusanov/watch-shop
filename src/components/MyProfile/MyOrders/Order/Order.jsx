import { Link } from "react-router-dom";
import styles from "./Order.module.css";
import * as utils from "../../../../utils";

function Order({ order }) {

    return (
        <div className={styles["order-box"]}>
            <h4>Поръчка № {order._id}</h4>
            <p>Статус: {utils.getOrderStatus(order.status)}</p>
            <p>Дата: {utils.convertDate(order.createdAt)}</p>
            <p>Обща сума: {order.totalPrice} лв.</p>
            <span>Продукти:</span>
            <div className={styles["watches-container"]}>
                {
                    order.items.map(x => {
                        return (
                            <Link key={x._id} className={styles["watch-card"]} to={`/watches/${x._id}`}>
                                <div className={styles["img-box"]}>
                                    <img src={x.imageUrl} alt="" />
                                </div>
                                <div className={styles["card-body"]}>
                                    <h4>{x.title}</h4>
                                    <div className={styles["price-box"]}>
                                        <span className={styles["reg-price"]}>{x.price} лв.</span>
                                    </div>
                                </div>
                            </Link>);
                    })
                }
            </div>
        </div>
    );
}

export default Order;