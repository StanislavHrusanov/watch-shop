import styles from "./Wishlist.module.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import WishedWatchCard from "./WishedWatchCard/WishedWatchCard";
import { AuthContext } from "../../../contexts/AuthContext";
import { LoadingContext } from "../../../contexts/LoadingContext";
import { UserProfileContext } from "../../../contexts/UserProfileContext";
import * as myProfileService from "../../../services/myProfileService";

function Wishlist() {
    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const freshUserInfo = await myProfileService.getUserInfo(user._id);
                setUserInfo(freshUserInfo);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/wishlist');
            }
        })();
    }, [showLoading, hideLoading, navigate, setUserInfo, user._id]);

    const onRemoveFromWishlist = async (watchForRemoving) => {

        try {
            await myProfileService.removeFromWishlist(user._id, watchForRemoving._id);
            setUserInfo(state => ({
                ...state,
                wishlist: state.wishlist.filter(x => x._id !== watchForRemoving._id)
            }));

        } catch (error) {
            window.alert(error.message);
            return navigate('/wishlist');
        }
    }

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <h3>Любими</h3>
                <div className={styles["row-cards"]}>
                    {
                        userInfo.wishlist.length > 0
                            ? userInfo.wishlist.map(x => <WishedWatchCard key={x._id} watch={x} onRemoveFromWishlist={onRemoveFromWishlist} />)
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