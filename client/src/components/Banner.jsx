import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";
import RefreshOptions from "./RefreshOptions";

const Banner = () => {

    const dispatch = useDispatch();

    return <div id="banner-container">
        <div id="banner">
            <h1 className="home-button" onClick={() => dispatch(changeCoin(null))}><span>PathFOSS</span> CryptoTracker</h1>
            <RefreshOptions/>
        </div>
    </div>
}
export default Banner;