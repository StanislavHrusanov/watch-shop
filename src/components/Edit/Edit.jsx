import styles from "../Auth/Form.module.css";

function Edit() {
    return (
        <div className={styles["container"]}>
            <section className={styles["form-view"]}>
                <h3>Редактирай часовник</h3>
                <form>
                    <div className={styles["input"]}>
                        <input type="text" name="title" id="title" placeholder="Заглавие" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="brand" id="brand" placeholder="Марка" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="model" id="model" placeholder="Модел" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="Линк към снимка" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="description" id="description" placeholder="Описание" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="price" id="price" placeholder="Цена" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="newPrice" id="newPrice" placeholder="Нова цена" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="type" id="type" placeholder="Тип (мъжки/дамски)" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="movement" id="movement" placeholder="Вид механизъм" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="glass" id="glass" placeholder="Вид стъкло" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="waterResistance" id="waterResistance" placeholder="Водоустойчивост" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="diameter" id="diameter" placeholder="Диаметър корпус" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="bodyMaterial" id="bodyMaterial" placeholder="Материал на корпуса" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="strapMaterial" id="strapMaterial" placeholder="Материал на верижката" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="text" name="warrantyInYears" id="warrantyInYears" placeholder="Години гаранция" />
                    </div>
                    <div className={styles["input"]}>
                        <input type="number" name="quantity" id="quantity" placeholder="Бройки" />
                    </div>
                    <div className={styles["action"]}>
                        <input type="submit" value="Редактирай"></input>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Edit;