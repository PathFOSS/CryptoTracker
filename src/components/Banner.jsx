import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";

const Banner = () => {

    const dispatch = useDispatch();

    return <div id="banner">
        <h1 className="home-button" onClick={() => dispatch(changeCoin(""))}><span>PathFOSS</span> CryptoTracker</h1>
        <p className="italic-text">A private and minimalist CoinMarketCap front-end</p>
    </div>
}
export default Banner;