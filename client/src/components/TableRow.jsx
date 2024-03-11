import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";
import PriceChange from "./PriceChange";
import SimplifyNumber from "../functions/SimplifyNumber";

const TableRow = (props) => {

    const dispatch = useDispatch();

    return <tr onClick={() => dispatch(changeCoin(props.ticker))}>
        <td className="rank">{props.rank}</td>
        <td className="name">{props.name} <span className="ticker">{props.ticker}</span></td>
        <td>${SimplifyNumber(props.priceData.price, 2)}</td>
        <td className="colorized-cell hide-data"><PriceChange price={props.priceData.percent_change_1h}/></td>
        <td className="colorized-cell"><PriceChange price={props.priceData.percent_change_24h}/></td>
        <td className="colorized-cell  hide-data"><PriceChange price={props.priceData.percent_change_7d}/></td>
        <td className="hide-data">${SimplifyNumber(props.priceData.market_cap, 0)}</td>
        <td className="hide-data">${SimplifyNumber(props.priceData.volume_24h, 0)}</td>
        <td className="hide-data">{SimplifyNumber(props.circulatingSupply, 0)} {props.ticker}</td>
    </tr>
}
export default TableRow;