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
    const [type, setType] = useState('all');
    const [sortCriteria, setSortCriteria] = useState('newest');
    const { brand } = useParams();

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const { watchBrand, setWatchBrand } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const allWatches = await watchService.getWatchesByBrandPaginated(brand, type, sortCriteria, page, limit);
                const allWatchesCount = await watchService.getWatchesCount(type, brand);
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
    }, [showLoading, hideLoading, navigate, brand, page, limit, watchCount, watchBrand, setWatchBrand, sortCriteria, type]);

    const onSort = (criteria) => {
        setSortCriteria(criteria)
    }

    const onFilter = (criteria) => {
        setType(criteria);
    }

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
                        <select
                            onChange={(e) => onFilter(e.target.value)}
                            value={type}
                        >
                            <option value=""></option>
                            <option value="all">Всички</option>
                            <option value="men">Мъжки</option>
                            <option value="women">Дамски</option>
                        </select>
                    </div>
                    <div className={styles["sort"]}>
                        <p>Сортирай по:</p>
                        <select
                            onChange={(e) => onSort(e.target.value)}
                            value={sortCriteria}
                        >
                            <option value=""></option>
                            <option value="newest">Най-нови</option>
                            <option value="lowestPrice">Най-ниска цена</option>
                            <option value="highestPrice">Най-висока цена</option>
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