import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";
import PriceChange from "./PriceChange";
import SimplifyNumber from "../functions/SimplifyNumber";

const TableRow = (props) => {

    const dispatch = useDispatch();

    return <tr onClick={() => dispatch(changeCoin(props.ticker))}>
        <td className="rank">{props.rank}</td>
        <td className="name">{props.name} <span className="ticker">{props.ticker}</span></td>
        <td>{props.priceData ? `$${SimplifyNumber(props.priceData.price, 2)}` : null}</td>
        <td className="colorized-cell hide-data">{props.priceData ? <PriceChange price={props.priceData.percent_change_1h}/> : null}</td>
        <td className="colorized-cell">{props.priceData ? <PriceChange price={props.priceData.percent_change_24h}/> : null}</td>
        <td className="colorized-cell hide-data">{props.priceData ? <PriceChange price={props.priceData.percent_change_7d}/> : null}</td>
        <td className="hide-data">{props.priceData ? `$${SimplifyNumber(props.priceData.market_cap, 0)}` : null}</td>
        <td className="hide-data">{props.priceData ? `$${SimplifyNumber(props.priceData.volume_24h, 0)}` : null}</td>
        <td className="hide-data">{props.priceData ? SimplifyNumber(props.circulatingSupply, 0) : null} {props.ticker}</td>
    </tr>
}
export default TableRow;