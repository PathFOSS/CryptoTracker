import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import CryptoOverview from "./CryptoOverview";
import TableRow from "./TableRow";

const PriceData = () => {

    const currenciesQueried = 100;

    const [data, setData] = useState(null);
    const [backupData, setBackupData] = useState(null);
    const [searchData, setSearchData] = useState(null);
    const [metaData, setMetaData] = useState(null);
    const [refreshToggle, setRefreshToggle] = useState(false);
    const [time, setTime] = useState(0);
    const [style, setStyle] = useState(true);

    const coinSearched = useSelector((state) => state.coin.name)
    
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
            }
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

                await axios.get(`/main-list/latest?limit=${currenciesQueried}`,
                {headers: {
                    'X-CMC_PRO_API_KEY': '2c57ecb9-967a-4415-ad57-41e159a2c671',
                    "Accept": "application/json",
                }}
                ).then(res => {
                    setData(res.data.data);
                }).catch(err => {
                    console.log(err);
                })

            } else {
                
                setData(null);

                await axios.get(`/searched-coin/latest?symbol=${coinSearched}`,
                {headers: {
                    'X-CMC_PRO_API_KEY': '2c57ecb9-967a-4415-ad57-41e159a2c671',
                    "Accept": "application/json",
                }}
                ).then(res => {
                    setSearchData(res.data.data[coinSearched]);
                }).catch(err => {
                    console.log(err);
                })

                await axios.get(`/meta-data/info?symbol=${coinSearched}`,
                {headers: {
                    'X-CMC_PRO_API_KEY': '2c57ecb9-967a-4415-ad57-41e159a2c671',
                    "Accept": "application/json",
                }}
                ).then(res => {
                    setMetaData(res.data.data[coinSearched][0]);
                }).catch(err => {
                    console.log(err);
                })

            }
        }
        fetchData();
    }, [refreshToggle])
    
    return <div>
        <h1></h1>
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