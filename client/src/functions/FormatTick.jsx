import ModifyNumber from "./ModifyNumber";
import SimplifyNumber from "./SimplifyNumber";

const FormatTick = (rawPrice) => {

    if (rawPrice < 1) {
        const priceString = rawPrice.toString();
        const digits = priceString.length;

        if (priceString.includes("e")) {
            const numSlice = priceString.split("e")[0].replace(".", "").slice(0, 2);
            const numSuffix = numSlice.length === 1 ? "0" : "";
            return "0.0..." + numSlice + numSuffix;
        } else if (digits >= 8) {
            return "0.0..." + priceString.slice(priceString.length - 3, priceString.length)
        };

        return rawPrice;
    }

    return SimplifyNumber(rawPrice, 2)
}
export default FormatTick;