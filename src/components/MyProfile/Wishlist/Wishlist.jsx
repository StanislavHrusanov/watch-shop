import styles from "./Wishlist.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { LoadingContext } from "../../../contexts/LoadingContext";
import { AuthContext } from "../../../contexts/AuthContext";
import * as myProfileService from "../../../services/myProfileService";
import WishedWatchCard from "./WishedWatchCard/WishedWatchCard";

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);

    const { user } = useContext(AuthContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const userWishlist = await myProfileService.getUserWishlist(user._id);
                setWishlist(userWishlist);
                hideLoading();
            } catch (error) {
                window.alert(error.message);
                hideLoading();
                navigate('/wishlist');
            }
        })();
    }, [showLoading, hideLoading, navigate, user._id]);

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Любими</h3>
                <div className={styles["row-cards"]}>
                    {
                        wishlist.length > 0
                            ? wishlist.map(x => <WishedWatchCard key={x._id} watch={x} />)
                            : <div className={styles["no-watches-container"]}>
                                <p className={styles["no-watches-message"]}>
                                    Все още няма  добавени часовници в любими!
                                </p>
                            </div>
                    }
                </div>
            </div>
        );
}

export default Wishlist;