export const formatDDMMYYYY = (input) =>{
    if(!input){
        return ''
    }
    let date = new Date(input);
    //console.log('formatDDMMYYYY', date)
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}
export const formatYYYYMMDD = (input) =>{
    if(!input){
        return ''
    }
    
    let date = new Date(input);
    //console.log('formatYYYYMMDD', date)
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
}