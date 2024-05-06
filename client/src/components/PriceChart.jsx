import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import { PrimaryWhite, SecondaryWhite, BrandColor } from "../data/Colors";

const PriceChart = (props) => {

    const priceData = [
        {label: "90d", price: props.priceData.price / ((100 + props.priceData.percent_change_90d) / 100)},
        {label: "60d", price: props.priceData.price / ((100 + props.priceData.percent_change_60d) / 100)},
        {label: "30d", price: props.priceData.price / ((100 + props.priceData.percent_change_30d) / 100)},
        {label: "Now", price: props.priceData.price}
    ];

    return <div id="chart-container">
        <ResponsiveContainer>
            <AreaChart width={500} height={400} data={priceData}>
                <YAxis width={40} tick={{ fill: PrimaryWhite }}/>
                <XAxis dataKey="label" tick={{ fill: PrimaryWhite }}/>
                <CartesianGrid stroke={SecondaryWhite} strokeDasharray="4 4"/>
                <Area type="monotone" dataKey="price" fill={SecondaryWhite} stroke={BrandColor} strokeWidth={2}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
} 
export default PriceChart;