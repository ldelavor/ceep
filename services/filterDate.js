export const removeDuplicated = (dates) => {
    const uniqueDate = [];
    dates.forEach((date) => {
        // indexOf = -1 implies that the date provide not exist in the array
        if(uniqueDate.indexOf(date.dateFormatted) == -1){
            uniqueDate.push(date.dateFormatted);
        }
    })
    return uniqueDate;
}

export const orderDate = (date) => {
    date.sort((a, b) => { // Method of comparison: a - b
        const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
        return (firstDate - secondDate)
    })
}
    