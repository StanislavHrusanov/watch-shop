import styles from "./Details.module.css";

function Details() {
    return (
        <div className={styles["container"]}>
            <div className={styles["row-img-buy"]}>
                <div className={styles["col-img"]}>
                    <img src="https://cdncloudcart.com/16251/products/images/3504/vostok-europe-49mm-lunokhod-2-mazki-casovni-ym86-620c635-image_61b778d7ad041_600x600.jpeg?1639413996" alt="" />
                </div>
                <div className={styles["col-buy"]}>
                    <h3>Vostok-Europe Lunokhod 2 Grand Chrono Tritium Tube</h3>
                    <div className={styles["price"]}>1100 лв.</div>
                    <span className={styles["avl"]}>В наличност</span>
                    {/* <div className={styles["brand-box"]}>
                        <img src="https://vostokwatches.ru/image/cache/data/vostok-europe-480x480.png" alt="" />
                    </div> */}
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
                                    <td>Vostok-Europe</td>
                                </tr>
                                <tr>
                                    <td>Модел</td>
                                    <td>Lunokhod 2</td>
                                </tr>
                                <tr>
                                    <td>Тип</td>
                                    <td>Мъжки</td>
                                </tr>
                                <tr>
                                    <td>Механизъм</td>
                                    <td>Кварцов</td>
                                </tr>
                                <tr>
                                    <td>Стъкло</td>
                                    <td>К1- закалено кристално стъкло с дебелина 3,5 мм</td>
                                </tr>
                                <tr>
                                    <td>Водоустойчивост</td>
                                    <td>20АТМ</td>
                                </tr>
                                <tr>
                                    <td>Диаметър</td>
                                    <td>48мм</td>
                                </tr>
                                <tr>
                                    <td>Материал корпус</td>
                                    <td>Благородна стомана с черно PVD покритие</td>
                                </tr>
                                <tr>
                                    <td>Материал верижка</td>
                                    <td>Силикон</td>
                                </tr>
                                <tr>
                                    <td>Гаранция</td>
                                    <td>5 години</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;