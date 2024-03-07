import { useDispatch } from "react-redux";
import { changeCoin } from "../redux/slices/CoinSlice";
import { useState } from "react";
import ArrowRight from "../images/arrow-right.svg"

const SearchBar = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeCoin(value));
    }

    return <div id="search-bar">
        <form onSubmit={handleSubmit}>
            <input placeholder="Search by ticker" onKeyUp={(e) => {e.target.value = e.target.value.toUpperCase()}} onChange={(e) => setValue(e.target.value.toUpperCase())}/>
            <button className="btn-submit" type="submit"><img src={ArrowRight}/></button>
        </form>
    </div>
}
export default SearchBar;