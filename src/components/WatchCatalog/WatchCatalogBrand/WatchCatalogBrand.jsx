import styles from "../WatchCatalog.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Watch from "../Watch/Watch";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import * as watchService from "../../../services/watchService";
import { LoadingContext } from "../../../contexts/LoadingContext";
import { PageContext } from "../../../contexts/PageContext";

function WatchCatalogBrand() {
    const [watches, setWatches] = useState([]);
    const [watchCount, setWatchCount] = useState(1);
    const [page, setPage] = useState(1);
    const [limit] = useState(4);
    const [pages, setPages] = useState(1);
    const { brand } = useParams();

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const { watchBrand, setWatchBrand } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const allWatches = await watchService.getWatchesByBrandPaginated(brand, page, limit);
                const allWatchesCount = await watchService.getWatchesByBrandCount(brand);
                setWatches(allWatches);
                setWatchCount(allWatchesCount);
                setPages(state => Math.ceil(watchCount / limit) ? state = Math.ceil(watchCount / limit) : state = 1);
                setPage(state => brand === watchBrand ? state : 1);
                setWatchBrand(state => state = brand);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                navigate('/watches');
            }
        })();
    }, [showLoading, hideLoading, navigate, brand, page, limit, watchCount, watchBrand, setWatchBrand]);

    const prevPage = () => {
        if (page > 1) {
            setPage(state => state - 1);
        }
    }

    const nextPage = () => {
        if (page < pages) {
            setPage(state => state + 1);
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>{brand}</h3>
                <div className={styles["row-sort-filter"]}>
                    <div className={styles["filter"]}>
                        <p>Тип:</p>
                        <select name="" id="">
                            <option value="Всички">Всички</option>
                            <option value="Мъжки">Мъжки</option>
                            <option value="Дамски">Дамски</option>
                        </select>
                    </div>
                    <div className={styles["sort"]}>
                        <p>Сортирай по:</p>
                        <select name="" id="">
                            <option value="Цена">Цена</option>
                            <option value="Мъжки">Най-нови</option>
                        </select>
                    </div>
                </div>

                <div className={styles["row-cards"]}>

                    {watches.length > 0
                        ? watches.map(x => <Watch key={x._id} watch={x} />)
                        : <div className={styles["no-watches-container"]}>
                            <p className={styles["no-watches-message"]}>
                                Все още няма часовници от тази марка!
                            </p>
                        </div>
                    }

                </div>
                <div className={styles["pagination"]}>
                    <div onClick={prevPage} className={styles["prev"]}><i className="fa fa-chevron-left"></i></div>
                    <div className={styles["pages"]}>
                        <div>{page} от {pages}</div>
                    </div>
                    <div onClick={nextPage} className={styles["next"]}><i className="fa fa-chevron-right"></i></div>
                </div>
            </div>
        );
}

export default WatchCatalogBrand;