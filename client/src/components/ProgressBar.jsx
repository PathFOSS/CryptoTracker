import { BrandColor, SecondaryWhite } from "../data/Colors"
import { DefaultRadius, PaddingSmall } from "../data/Measures"
import ModifyNumber from "../functions/ModifyNumber";

const ProgressBar = (props) => {
    
    const freeApiQueries = 10000;

    const ParentDiv = {
        height: "1.5rem",
        width: "100%",
        backgroundColor: SecondaryWhite,
        display: "flex",
        justifyContent: "space-between",
    };

    const ChilDdiv = {
        height: "100%",
        width: `${ModifyNumber(props.calls * 100 / freeApiQueries, 2, true)}%`,
        backgroundColor: BrandColor,
    };
     
    const QueryString = {
        paddingRight: PaddingSmall,
        fontWeight: "600",
        fontSize: "0.75rem"
    };
    
    return <div className="progress-bar">
        <div style={ParentDiv}>
            <div style={ChilDdiv}></div>
            <p style={QueryString}>Free queries left: {freeApiQueries - props.calls}</p>
        </div>
    </div>
}
 
export default ProgressBar;