import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { SecondaryWhite, BrandColor } from "../data/Colors";
import FormatTick from "../functions/FormatTick";
import FormatDate from "../functions/FormatDate";
import ModifyNumber from "../functions/ModifyNumber";

const PriceChart = (props) => {

    const priceData = [
        {label: 3, price: props.priceData.price / ((100 + props.priceData.percent_change_90d) / 100)},
        {label: 2, price: props.priceData.price / ((100 + props.priceData.percent_change_60d) / 100)},
        {label: 1, price: props.priceData.price / ((100 + props.priceData.percent_change_30d) / 100)},
        {label: 0, price: props.priceData.price}
    ];

    const CustomToolTip = ({ payload, label, active}) => {
        if (active) {
            const value = "$" + ModifyNumber(payload[0].value, 2);
            return <div>{value}</div>
        }
    };

    return <div id="chart-container">
        <ResponsiveContainer>
            <AreaChart width={500} height={400} data={priceData}>
                <YAxis type="number" width={props.priceData.price < 0.00001 || props.priceData.price >= 100000 ? 60 : 40} tick={{ fill: SecondaryWhite }} tickCount={10} interval={0} fontSize={"0.75rem"} orientation="left" domain={["auto", "auto"]} tickFormatter={FormatTick}/>
                <XAxis dataKey="label" tick={{ fill: SecondaryWhite }} fontSize={"0.75rem"} tickFormatter={FormatDate} tickMargin={10}/>
                <CartesianGrid stroke={SecondaryWhite} strokeDasharray="4 4"/>
                <Area type="monotone" dataKey="price" fill={SecondaryWhite} stroke={BrandColor} strokeWidth={2}/>
                <Tooltip content={<CustomToolTip/>}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
} 
export default PriceChart;