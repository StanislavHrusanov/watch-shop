import styles from "./WatchCatalog.module.css";

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../contexts/LoadingContext";
import Watch from "./Watch/Watch";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import * as watchService from "../../services/watchService";

function WatchCatalog() {
    const [watches, setWatches] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(4);
    const [pages, setPages] = useState(1);
    const [filterCriteria, setFilterCriteria] = useState('all');
    const [sortCriteria, setSortCriteria] = useState('newest');

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    const url = new URL(window.location.href);
    const pageQuery = url.searchParams.get('page');
    const filterQuery = url.searchParams.get('type');
    const sortQuery = url.searchParams.get('sortedBy');

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const watchesOnPage = await watchService.getAllPaginated(filterCriteria, sortCriteria, page, limit);
                const allWatchesCount = await watchService.getWatchesCount(filterCriteria, 'all', '');
                setWatches(watchesOnPage);
                setPages(Math.ceil(allWatchesCount / limit) || 1);
                setPage(pageQuery ? Number(pageQuery) : 1);
                setFilterCriteria(filterQuery || 'all');
                setSortCriteria(sortQuery || 'newest');
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                navigate('/watches');
            }
        })();
    }, [
        showLoading,
        hideLoading,
        navigate,
        page,
        limit,
        filterCriteria,
        sortCriteria,
        filterQuery,
        sortQuery,
        pageQuery
    ]);

    const onSort = (criteria) => {
        if (filterQuery) {
            navigate(`?type=${filterQuery}&sortedBy=${criteria}`);
        } else {
            navigate(`?sortedBy=${criteria}`);
        }
    }

    const onFilter = (criteria) => {
        if (sortQuery) {
            navigate(`?type=${criteria}&sortedBy=${sortQuery}`);
        } else {
            navigate(`?type=${criteria}`);
        }
    }

    const prevPage = () => {
        if (page > 1) {
            if (filterQuery && sortQuery) {
                navigate(`?type=${filterQuery}&sortedBy=${sortQuery}&page=${page - 1}`);
            } else if (filterQuery) {
                navigate(`?type=${filterQuery}&page=${page - 1}`);
            } else if (sortQuery) {
                navigate(`?sortedBy=${sortQuery}&page=${page - 1}`);
            } else {
                navigate(`?page=${page - 1}`);
            }
        }
    }

    const nextPage = () => {
        if (page < pages) {
            if (filterQuery && sortQuery) {
                navigate(`?type=${filterQuery}&sortedBy=${sortQuery}&page=${page + 1}`);
            } else if (filterQuery) {
                navigate(`?type=${filterQuery}&page=${page + 1}`);
            } else if (sortQuery) {
                navigate(`?sortedBy=${sortQuery}&page=${page + 1}`);
            } else {
                navigate(`?page=${page + 1}`);
            }
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Часовници</h3>
                <div className={styles["row-sort-filter"]}>
                    <div className={styles["filter"]}>
                        <p>Тип:</p>
                        <select
                            onChange={(e) => onFilter(e.target.value)}
                            value={filterCriteria}
                        >
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
                                Все още няма добавени часовници!
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

export default WatchCatalog;