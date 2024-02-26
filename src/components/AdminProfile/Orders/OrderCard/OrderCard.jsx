import styles from "./OrderCard.module.css";
import * as utils from "../../../../utils";
import { Link } from "react-router-dom";

function OrderCard({ order, onChangeOrderStatus }) {
    return (
        <div className={styles["order-info"]}>
            {
                order.status === 'Pending'
                    ? <div className={styles["status-pending"]}>
                        <p>Статус: {utils.getOrderStatus(order.status)}</p>
                        <div onClick={() => onChangeOrderStatus(order._id)} className={styles["finish"]}>Завърши</div>
                    </div>
                    : <div className={styles["status-sent"]}>
                        <p>Статус: {utils.getOrderStatus(order.status)}</p>
                    </div>
            }
            <div className={styles["order-id"]}>
                <p>Поръчка №:</p>
                <span>{order._id}</span>
            </div>
            <div className={styles["name-box"]}>
                <p>Получател:</p>
                <span className={styles["names"]}>{order.buyer.firstName} {order.buyer.lastName}</span>
            </div>
            <div className={styles["address-box"]}>
                <p>Адрес:</p>
                <span className={styles["address"]}>{order.buyer.address}</span>
            </div>
            <div className={styles["phone-box"]}>
                <p>Телефон:</p>
                <span className={styles["phone"]}>{order.buyer.phoneNumber}</span>
            </div>
            <div className={styles["items-box"]}>

                {
                    order.items.map((x) => {
                        return (
                            <Link key={x._id} className={styles["watch-card"]} to={`/watches/${x._id}`}>
                                <div className={styles["item-qty"]}>
                                    <span>x{x.quantity}</span>
                                </div>
                                <div className={styles["img-box"]}>
                                    <img src={x.imageUrl} alt="" />
                                </div>
                                <div className={styles["card-body"]}>
                                    <h4>{x.title}</h4>
                                    <div className={styles["price-box"]}>
                                        <span className={styles["reg-price"]}>{x.price} лв.</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }

            </div>
            <div className={styles["items-value-box"]}>
                <p>Стойност на продуктите:</p>
                <span>{order.totalPrice} лв.</span>
            </div>
        </div>
    );
}

export default OrderCard;