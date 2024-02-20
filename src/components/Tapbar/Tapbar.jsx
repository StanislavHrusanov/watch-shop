import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Tapbar.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { UserProfileContext } from "../../contexts/UserContext";
import * as myProfileService from "../../services/myProfileService";
import * as utils from "../../utils";

function Tapbar() {
    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                if (user) {
                    const detailsOfUser = await myProfileService.getUserInfo(user._id);
                    setUserInfo(detailsOfUser);

                }

            } catch (error) {
                window.alert(error.message);
                navigate('/');
            }
        })();
    }, [user, setUserInfo, navigate]);


    return (
        <div className={styles["container"]}>
            <div className={styles["row"]}>
                <div className={styles["col"]}>
                    <Link className={styles["text-decoration-none"]}>
                        <h1 className={styles["title"]}>watch-shop.bg</h1>
                    </Link>
                </div>
                <div className={styles["col-1"]}>
                    <form action="">
                        <div className={styles["search"]}>
                            <input type="text" className={styles["search-input"]} placeholder="Търси" />
                            <div className={styles["search-input-append"]}>
                                <span className={styles["search-input-icon"]} >
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                {user && !user?.isAdmin &&
                    <div className={styles["col-2"]}>
                        <Link className={styles["btn"]} to="/wishlist">
                            <i className="fas fa-heart text-primary"></i>
                            <span className={styles["badge"]}>{userInfo.wishlist.length}</span>
                        </Link>
                        <Link className={styles["btn"]} to='/cart'>
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className={styles["badge"]}>{utils.getSum(userInfo.cart)}</span>
                        </Link>
                    </div>
                }
                {
                    !user &&
                    <div className={styles["col-2"]}>
                        <Link className={styles["btn"]} to="/login">
                            <i className="fas fa-heart text-primary"></i>
                            <span className={styles["badge"]}>{userInfo.wishlist.length}</span>
                        </Link>
                        <Link className={styles["btn"]} to='/login'>
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className={styles["badge"]}>{utils.getSum(userInfo.cart)}</span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}

export default Tapbar;