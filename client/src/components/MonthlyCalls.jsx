import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

const MonthlyCalls = () => {
    const callsTotal = useSelector((state) => state.calls.value);
    return <div>
        <ProgressBar calls={callsTotal}/>
    </div>
}
export default MonthlyCalls;