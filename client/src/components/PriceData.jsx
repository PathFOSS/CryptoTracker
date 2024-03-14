import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import CryptoOverview from "./CryptoOverview";
import TableRow from "./TableRow";
import { changeCoin } from "../redux/slices/CoinSlice";

const PriceData = () => {

    const webUrl = "https://api.pathfoss.com/currencies";
    const dbUrl = "https://database.pathfoss.com/monthly-calls";

    const axiosInstance = axios.create({
        headers: {
            "Accept": "application/json",
        }
    });

    const [data, setData] = useState(null);
    const [backupData, setBackupData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [refreshToggle, setRefreshToggle] = useState(false);
    const [time, setTime] = useState(0);
    const [style, setStyle] = useState(true);

    const coinSearched = useSelector((state) => state.coin.name)
    const dispatch = useDispatch();

    const styleDict = {
        false: "hidden",
        true: "visible"
    }

    useEffect(() => {
        if (coinSearched) {
            setStyle(false);
            if (data) {
                setBackupData(data)
            }
            setRefreshToggle(!refreshToggle);
        } else {
            if (backupData) {
                setData(backupData);
                window.history.replaceState(null, "Minimalist & Private Crypto Data", "/");
                document.title = "CryptoTracker | Minimalist & Private Crypto Data";
                dispatch(changeCoin(""));
            }
            dispatch(changeCoin(new URLSearchParams(window.location.search).get("symbol")))
            setStyle(true);
        }
    }, [coinSearched])

    useEffect(() => {
        const preference = Cookies.get("Preference");

        const timer = setTimeout(() => {
            setTime(time + 1)
            if (preference == 1) {
                setRefreshToggle(!refreshToggle);
            } else if (preference == 2 && time % 15 == 0) {
                setRefreshToggle(!refreshToggle);
            } else if (preference == 3 && time % 30 == 0) {
                setRefreshToggle(!refreshToggle);
            }
        }, 60000)

        return () => {clearTimeout(timer)};
    }, [time])

    useEffect(() => {
        const fetchData = async() => {
            if (!coinSearched) {
                
                await axiosInstance.get(`${webUrl}`)
                    .then(res => setData(res.data.data))
                    .catch(err => console.log(err));

            } else {
                
                setData(null);

                await axiosInstance.get(`${webUrl}/currency?symbol=${coinSearched}`)
                .then(res => {
                    setSearchData(res.data[0].data[coinSearched]);
                    setMetaData(res.data[1].data[coinSearched][0]);
                }).catch(err => console.log(err));
                window.history.replaceState(null, "", `/currency?symbol=${coinSearched}`);
                document.title = `CryptoTracker | ${coinSearched} Overview`;
            }
            
            await axiosInstance.get(`${dbUrl}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err)); 
        }
        fetchData();
    }, [refreshToggle])
    
    return <div>
        <table className={styleDict[style]}>
            <Navbar/>
            <tbody>
                {data ? data.map((crypto, index) => {
                    return <TableRow key={index + 1} rank={index + 1} name={crypto.name} ticker={crypto.symbol} priceData={crypto.quote.USD} circulatingSupply={crypto.circulating_supply}/>
                }) : null}
            </tbody>
        </table>
        {searchData ? metaData 
            ? <CryptoOverview
                key={searchData.cmc_rank}
                visibility={styleDict[!style]}
                rank={searchData.cmc_rank}
                name={searchData.name}
                ticker={searchData.symbol}
                priceData={searchData.quote.USD}
                circulatingSupply={searchData.circulating_supply}
                totalSupply={searchData.total_supply}
                logo={metaData.logo}
                launchDate={metaData.date_launched}
                urls={metaData.urls}
                contractAddress={metaData.contract_address}
                />
            : null
            : null
        }
    </div>
}
export default PriceData;