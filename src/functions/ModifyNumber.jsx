const ModifyNumber = (rawPrice, sigDigits, isPercent=false) => {
    let num = rawPrice;
    if (num <= 0.9999 && !isPercent) {
        return num.toPrecision(4).toString()
    }
    return num.toFixed(sigDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default ModifyNumber;