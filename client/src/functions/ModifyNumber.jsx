const ModifyNumber = (rawPrice, sigDigits, isPercent=false) => {
    let num = rawPrice;
    if (num < 1 && !isPercent) {
        const numStr = num.toPrecision(4).toString();

        if (numStr.includes("e")) {
            return "0.0..." + numStr.split("e")[0].replace(".", "").slice(0, 3);
        }    

        return numStr;
    }
    return num.toFixed(sigDigits).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default ModifyNumber;