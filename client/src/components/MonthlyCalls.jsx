import { useSelector } from "react-redux";

const MonthlyCalls = () => {
    const callsTotal = useSelector((state) => state.calls.value);
    return <h5>Total API calls this month: {callsTotal} / 10000</h5>
}
export default MonthlyCalls;