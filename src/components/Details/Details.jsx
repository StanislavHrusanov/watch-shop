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
            <div className={styles["watch-desc-row"]}>
                <h4>Описание</h4>
                <div className={styles["paragraph-box"]}>
                    <p>Часовниците от серия Lunokhod-2 са проектирани за различни екстремни дейности, от дълбоководно гмуркане до космически мисии. Те имат следните предимства:</p>
                    <p>49-милиметрова каса от неръждаема стомана и водоустойчивост до 200 m.</p>
                    <p>Хелиев изпускателен клапан с автоматично задействане, вграден в часовника с помощта на пружинен механизъм. Задейства се когато външното налягане достигне критично ниво. Тази функционалност е полезна за професионални гмурци на големи дълбочини.</p>
                    <p>Усилено минерално стъкло K1 с дебелина 3.5 mm.</p>
                    <p>Набор от полезни времеви функционалности – автоматични механизми с 3 стрелки или кварцови такива с 1-часов хронограф, вечен календар и различни аларми.</p>
                    <p>Микротръби пълни с тритий поставени на деленията за часовете и на стрелките, които осигуряват допълнително осветяване на циферблата.</p>
                    <p>Оригинални кожени и силиконови каишки, както и усилена закопчалка от неръждаема стомана.</p>
                    <p>Водоустойчива и удароустойчива кутия за съхранение и транспортиране на часовника и аксесоарите.</p>
                </div>
            </div>
            <h3 className={styles["row-similar-title"]}>Разгледайте също:</h3>
            <div className={styles["row-similar-watches"]}>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3108/vostok-uss-ssn-571-46mm-energia-automatic-mazki-casovnik-vk61-571c612-image_610e90589946d_800x800.png?1628345727" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/6541/vostok-europe-48mm-atomic-age-mazki-casovnik-nh34-640c703-657865817bf61_1920x1920.png?1702389168" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe Atomic Age Automatic Watch</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["old-price"]}>1905 лв.</span>
                            <span className={styles["new-price"]}>1850 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/3711/vostok-black-edition-iv-benediktas-vanagas-46mm-mazki-casovnik-vk64-571j431-image_620507c29e21f_1280x1280.png?1644496866" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>Vostok-Europe SSN-571</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>1508 лв.</span>
                        </div>
                    </div>
                </div>
                <div className={styles["watch-card"]}>
                    <div className={styles["img-box"]}>
                        <img src="https://cdncloudcart.com/16251/products/images/6537/vostok-europe-47mm-almaz-mazki-casovnik-6s11-320b660-65784878a30ae_600x600.png?1702381736" alt="" />
                    </div>
                    <div className={styles["card-body"]}>
                        <h4>VOSTOK EUROPE 47ММ ALMAZ 6S11-320B660</h4>
                        <div className={styles["price-box"]}>
                            <span className={styles["reg-price"]}>950 лв.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;