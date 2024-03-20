import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";

const Banner = () => {

    const dispatch = useDispatch();

    return <div id="banner">
        <h1 className="home-button" onClick={() => dispatch(changeCoin(null))}><span>PathFOSS</span> CryptoTracker</h1>
    </div>
}
export default Banner;