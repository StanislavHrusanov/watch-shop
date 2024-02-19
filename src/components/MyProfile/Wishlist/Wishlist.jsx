import styles from "./Wishlist.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import * as myProfileService from "../../../services/myProfileService";
import WishedWatchCard from "./WishedWatchCard/WishedWatchCard";
import { UserProfileContext } from "../../../contexts/UserContext";

function Wishlist() {
    const { user } = useContext(AuthContext);
    const { userInfo, setUserInfo } = useContext(UserProfileContext);
    const navigate = useNavigate();

    const onRemoveFromWishlist = async (watchForRemoving) => {

        try {
            await myProfileService.removeFromWishlist(user._id, watchForRemoving._id);
            setUserInfo(state => ({
                ...state,
                wishlist: state.wishlist.filter(x => x._id !== watchForRemoving._id)
            }))
            navigate('/wishlist');

        } catch (error) {
            window.alert(error.message);
            return navigate('/wishlist');
        }
    }

    return (
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