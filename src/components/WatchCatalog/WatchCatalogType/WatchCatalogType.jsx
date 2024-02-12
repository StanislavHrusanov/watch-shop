import styles from "../WatchCatalog.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Watch from "../Watch/Watch";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import * as watchService from "../../../services/watchService";
import { LoadingContext } from "../../../contexts/LoadingContext";
import { PageContext } from "../../../contexts/PageContext";

function WatchCatalogType() {
    const [watches, setWatches] = useState([]);
    const [watchCount, setWatchCount] = useState();
    const [page, setPage] = useState(1);
    const [limit] = useState(4);
    const [pages, setPages] = useState(1);
    const [sortCriteria, setSortCriteria] = useState('newest');
    const { type } = useParams();

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const { watchType, setWatchType } = useContext(PageContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const allWatches = await watchService.getAllPaginated(type, sortCriteria, page, limit);
                const allWatchesCount = await watchService.getWatchesCount(type, 'all');
                setWatches(allWatches);
                setWatchCount(allWatchesCount);
                setPages(Math.ceil(watchCount / limit));
                // setPage(state => type === watchType ? state : 1);
                setPage((state) => {
                    if (type !== watchType) {
                        setSortCriteria('newest');
                        return 1;
                    }
                    return state;
                });
                setWatchType(type);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                navigate('/watches');
            }
        })();
    }, [showLoading, hideLoading, navigate, type, page, limit, watchCount, watchType, setWatchType, sortCriteria]);

    const onSort = (criteria) => {
        setSortCriteria(criteria)
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
                <h3>{type === 'men' ? 'Мъжки' : 'Дамски'} часовници</h3>
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

                    {watches.map(x => <Watch key={x._id} watch={x} />)}

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

export default WatchCatalogType;