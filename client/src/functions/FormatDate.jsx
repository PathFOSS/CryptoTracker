const FormatDate = (number) => {
    let dateNow = new Date();
    dateNow.setDate(dateNow.getDate() - number * 30);
    return dateNow.getUTCDate() + "." + (dateNow.getUTCMonth() + 1);
}
export default FormatDate;