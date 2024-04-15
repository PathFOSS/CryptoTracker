
import { useState } from "react";
import PriceChart from "./PriceChart";
import PriceChange from "./PriceChange";
import ModifyNumber from "../functions/ModifyNumber";
import {
    IconContract, 
    IconCopy, 
    IconDiscord, 
    IconFaceBook, 
    IconGitHub, 
    IconMedium, 
    IconReddit, 
    IconTelegram, 
    IconTwitter, 
    IconWebsite, 
    IconWhitepaper } 
    from "../data/Images";

const CryptoOverview = (props) => {
    
    const [style, setStyle] = useState(false);

    const styleDict = {
        false: "hidden drop-down",
        true: "visible drop-down"
    }

    return <div id="overview-container" className={props.visibility}>
        <div id="overview-data">
            <div id="name-overview">
                <div>
                    <img src={props.logo}/>
                    <h3>{props.name} <span className="ticker">{props.ticker}</span></h3>
                </div>
                {props.contractAddress[0] ? <img className="image-link" src={IconContract} onClick={() => setStyle(!style)}/> : null}
            </div>
            <div className={styleDict[style]}>
                {props.contractAddress[0] 
                ? props.contractAddress.map((obj, index) => {
                    return <div key={index}>
                        {obj.platform.coin.symbol} <img className="image-link" src={IconCopy} onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(obj.contract_address)
                        }}/>
                    </div>
                })
                : null
                }
            </div>
            <div id="price-overview">
                <h2>${ModifyNumber(props.priceData.price, 2)}</h2>
                <PriceChange price={props.priceData.percent_change_24h} suffix=" (1d)"/>
            </div>
            <div>
                <h4>Market cap</h4>
                <p>${ModifyNumber(props.priceData.market_cap, 0)}</p>
            </div>
            <div>
                <h4>Volume (24h)</h4>
                <p>${ModifyNumber(props.priceData.volume_24h, 0)}</p>
            </div>
            <div>
                <h4>Circulating supply</h4>
                <p>{ModifyNumber(props.circulatingSupply, 0)} {props.ticker}</p>
            </div>
            <div>
                <h4>Total supply</h4>
                <p>{ModifyNumber(props.totalSupply, 0)} {props.ticker}</p>
            </div>
            <div>
                <h4>Fully diluted market</h4>
                <p>${ModifyNumber(props.priceData.fully_diluted_market_cap, 0)}</p>
            </div>
            <div id="social-overview">
                {props.urls.website[0] ? <a href={props.urls.website[0]} rel="nofollow" target="_blank"><img src={IconWebsite}/></a> : null}
                {props.urls.technical_doc[0] ? <a href={props.urls.technical_doc[0]} rel="nofollow" target="_blank"><img src={IconWhitepaper}/></a> : null}
                {props.urls.source_code[0] ? <a href={props.urls.source_code[0]} rel="nofollow" target="_blank"><img src={IconGitHub}/></a> : null}
                {props.urls.twitter[0] ? <a href={props.urls.twitter[0]} rel="nofollow" target="_blank"><img src={IconTwitter}/></a> : null}
                {props.urls.reddit[0] ? <a href={props.urls.reddit[0]} rel="nofollow" target="_blank"><img src={IconReddit}/></a> : null}
                {props.urls.facebook[0] ? <a href={props.urls.facebook[0]} rel="nofollow" target="_blank"><img src={IconFaceBook}/></a> : null}
                {props.urls.message_board[0] ? <a href={props.urls.message_board[0]} rel="nofollow" target="_blank"><img src={IconMedium}/></a> : null}
                {props.urls.chat[0] ? props.urls.chat.map((platform, index) => {
                    if (platform.includes("//t.me/")) {
                        return <a key={index} href={platform} rel="nofollow" target="_blank"><img src={IconTelegram}/></a>
                    } else {
                        return <a key={index} href={platform} rel="nofollow" target="_blank"><img src={IconDiscord}/></a>
                    }
                }) : null}
            </div>
        </div>
        <PriceChart priceData={props.priceData}/>
    </div>
}
export default CryptoOverview;