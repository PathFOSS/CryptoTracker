import SimplifyNumber from "./SimplifyNumber";

const FormatTick = (rawPrice) => {
    
    if (rawPrice < 1) {
        const priceString = rawPrice.toString();
        const digits = priceString.length;

        if (digits >= 8) {
            return "0.0..." + priceString.slice(priceString.length - 3, priceString.length)
        };

        return rawPrice;
    }
    return SimplifyNumber(rawPrice, 2)
}
export default FormatTick;