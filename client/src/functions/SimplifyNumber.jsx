const SimplifyNumber = (rawPrice, sigDigits, isPercent=false, numsAfterComma=2) => {
    let num = rawPrice;
    if (num < 1 && !isPercent) {
        return num.toPrecision(numsAfterComma + 2).toString()
    } if (num > 1.0e+12) {
        return (num/1.0e+12).toFixed(numsAfterComma).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "T";
    } if (num > 1.0e+9) {
        return (num/1.0e+9).toFixed(numsAfterComma).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "B";
    } if (num > 1.0e+6) {
        return (num/1.0e+6).toFixed(numsAfterComma).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "M";
    } if (num > 1.0e+3) {
        return (num/1.0e+3).toFixed(numsAfterComma).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "K";
    }
    return num.toFixed(sigDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default SimplifyNumber;