import ModifyNumber from "../functions/ModifyNumber";
import { BrandColor, SecondaryWhite } from "../data/Colors";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PriceChart = (props) => {
    
    const priceData = [
        props.priceData.price / ((100 + props.priceData.percent_change_30d) / 100),
        props.priceData.price / ((100 + props.priceData.percent_change_30d) / 100),
        props.priceData.price / ((100 + props.priceData.percent_change_30d) / 100),
        props.priceData.price,
    ];

    const data = {
        labels: ["90d", "60d", "30d", "Now"],
        datasets: [{
            data: priceData,
            borderColor: `${BrandColor}`,
            pointStyle: false,
            tension: 0.3,
            borderWidth: 2,
            fill: true,
        }]
    }

    const options = {
        plugins: {
            legend: true,
        },
        scales: {
            x : {
                grid: {
                    display: false
                },
                ticks: {
                    color: `${SecondaryWhite}`,
                    padding: 6
                },
                border: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: `${SecondaryWhite}`,
                    lineWidth: "0.2"
                },
                ticks: {
                    color: `${SecondaryWhite}`,
                    callback: function(value, index, ticks) {
                        return '$' + ModifyNumber(value);
                    },
                    padding: 10
                },
                border: {
                    display: false
                }
            }
        },
        layout: {
            padding: 10
        }
    }
    
    return <div id="chart-container">
        <Line data={data} options={options}/>
    </div>
}
export default PriceChart;