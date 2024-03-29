import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Tapbar.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserProfileContext";
import * as utils from "../../utils";

function Tapbar() {
    const [searched, setSearched] = useState(() => {
        const inputSearch = new URL(window.location.href).searchParams.get('searched') || '';

        return inputSearch;
    });
    const { user } = useContext(AuthContext);
    const { userInfo } = useContext(UserProfileContext);

    const navigate = useNavigate();
    const location = useLocation();

    const onChangeHandler = (e) => {
        setSearched(e.target.value);
    }

    const search = () => {

        if (searched === '') {
            return;
        }

        const path = location.pathname;

        if (path === '/search') {
            navigate(`?searched=${searched}`)
        } else {
            navigate(`/search?searched=${searched}`)
        }
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <Link className={styles["text-decoration-none"]} to="/">
                        <h1 className={styles["title"]}>watch-shop.bg</h1>
                    </Link>
                </div>
                <div className={styles["col-1"]}>
                    <div className={styles["search"]}>
                        <input
                            type="text"
                            name="search"
                            className={styles["search-input"]}
                            placeholder="Търси"
                            value={searched}
                            onChange={onChangeHandler}
                        />
                        {searched.length > 0 &&
                            <span onClick={() => setSearched('')} className={styles["btn-close"]}>X</span>
                        }
                        <div onClick={search} className={styles["search-input-append"]}>
                            <span className={styles["search-input-icon"]}>
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {user && !user?.isAdmin &&
                    <div className={styles["col-2"]}>
                        <Link className={styles["btn"]} to="/wishlist">
                            <i className="fas fa-heart text-primary"></i>
                            <span className={styles["badge"]}>{user ? userInfo?.wishlist?.length : 0}</span>
                        </Link>
                        <Link className={styles["btn"]} to='/cart'>
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className={styles["badge"]}>{user ? utils.getSum(userInfo.cart) : 0}</span>
                        </Link>
                    </div>
                }
                {
                    !user &&
                    <div className={styles["col-2"]}>
                        <Link className={styles["btn"]} to="/login">
                            <i className="fas fa-heart text-primary"></i>
                            <span className={styles["badge"]}>{user ? userInfo?.wishlist?.length : 0}</span>
                        </Link>
                        <Link className={styles["btn"]} to='/login'>
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className={styles["badge"]}>{user ? utils.getSum(userInfo.cart) : 0}</span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Tapbar;