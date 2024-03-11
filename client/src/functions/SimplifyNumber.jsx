const SimplifyNumber = (rawPrice, sigDigits, isPercent=false) => {
    let num = rawPrice;
    if (num <= 0.9999 && !isPercent) {
        return num.toPrecision(4).toString()
    } if (num > 1.0e+12) {
        return (num/1.0e+12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "T";
    } if (num > 1.0e+9) {
        return (num/1.0e+9).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "B";
    } if (num > 1.0e+6) {
        return (num/1.0e+6).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "M";
    } if (num > 1.0e+3) {
        return (num/1.0e+3).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "K";
    }
    return num.toFixed(sigDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default SimplifyNumber;