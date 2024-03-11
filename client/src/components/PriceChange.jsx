import ModifyNumber from "../functions/ModifyNumber";
import { IconArrowDown, IconArrowUp } from "../data/Images";

const PriceChange = (props) => {
    if (props.price >= 0) {
        return <p className="colorized-text-up"><img src={IconArrowUp}/>{ModifyNumber(Math.abs(props.price), 2, true)}%{props.suffix}</p>
    }
    return <p className="colorized-text-down"><img src={IconArrowDown}/>{ModifyNumber(Math.abs(props.price), 2, true)}%{props.suffix}</p>
}
export default PriceChange;