import styles from "./Home.module.css";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingContext } from "../../contexts/LoadingContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import WatchCard from "./WatchCard/WatchCard";
import * as watchService from "../../services/watchService";
import { HOME_PAGE_FIRST_BRAND, HOME_PAGE_SECOND_BRAND } from "../../constants";


function Home() {
    const [watches, setWatches] = useState([]);
    const [brandsLogo, setBrandsLogo] = useState([]);

    const { isLoading, showLoading, hideLoading } = useContext(LoadingContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                showLoading();
                const allWatches = await watchService.getAll();
                const allLogoes = await watchService.getBrandsLogo();
                setWatches(allWatches);
                setBrandsLogo(allLogoes);
                hideLoading();

            } catch (error) {
                window.alert(error.message);
                hideLoading();
                return navigate('/');
            }
        })();
    }, [showLoading, hideLoading, navigate]);

    const firstRowWathes = watches
        .filter(x => x.brand === HOME_PAGE_FIRST_BRAND)
        .slice(0, 6);

    const secondRowWatches = watches
        .filter(x => x.brand === HOME_PAGE_SECOND_BRAND)
        .slice(0, 6);

    const thirdRowWatches = watches
        .filter(x => x.brand !== HOME_PAGE_FIRST_BRAND && x.brand !== HOME_PAGE_SECOND_BRAND)
        .slice(0, 6);

    return isLoading
        ? (
            <LoadingSpinner />
        )
        : (
            <div className={styles["container"]}>
                <div className={styles["row-banner"]}>
                    <img className={styles["first-banner"]} src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1706691405/watches/atomic-age-vk64-640c699-leather-black-art-1_q5at0f.jpg" alt="" />
                    <p>Виж всички модели</p>
                </div>
                <h3>Ново от Vostok-Europe</h3>
                <div className={styles["row-cards"]}>

                    {firstRowWathes.map(x => <WatchCard key={x._id} watch={x} />)}

                </div>
                <h3>Нашите марки</h3>
                <p>В нашия магазин ще намерите голямо разнообразие от маркови часовници. Всички часовници са с гарантирано качество, 100% автентичност и осигурено гаранционно обслужване в рамките на минимум 2 години. Watch-shop.bg е оторизиран за продажба и дистрибуция на всички марки в сайта от официалните им представители и вносители в България.</p>
                <div className={styles["row-brands"]}>
                    {
                        brandsLogo.map(x =>
                            <Link key={x._id} className={styles["brand-box"]} to={`/watches/brands/${x.brand}`}>
                                <img src={x.imageUrl} alt="" />
                            </Link>)
                    }

                </div>
                <div className={styles["row-banner"]}>
                    <img className={styles["first-banner"]} src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1706694407/watches/Seiko-Prospex-SRPC49K-slider.jpg_tpjzfk.webp" alt="" />
                    <p>Виж всички модели</p>
                </div>
                <h3>Ново от Seiko</h3>
                <div className={styles["row-cards"]}>

                    {secondRowWatches.map(x => <WatchCard key={x._id} watch={x} />)}

                </div>
                <h3>Лазерно гравиране</h3>
                <p> Гравирането е услуга, с помощта на която да превърнем вашият часовник в нещо наистина специално и лично. Напоследък гравирането се превръща в традиция, набираща все по-голяма популярност.
                    Датиращ от древни векове, този метод е използван като израз на висша почит, специално отношение и внимание, отправени към важен човек в живота на някой. </p>
                <div className={styles["row-banner"]}>
                    <img className={styles["graving-banner"]} src="https://res.cloudinary.com/doyfjnyvo/image/upload/v1706701873/watches/laserEngraving_p1jubz.webp" alt="" />
                    <p>Виж повече</p>
                </div>
                <h3>Последните ни предложения</h3>
                <div className={styles["row-cards"]}>

                    {thirdRowWatches.map(x => <WatchCard key={x._id} watch={x} />)}

                </div>
            </div>
        )
}

export default Home;