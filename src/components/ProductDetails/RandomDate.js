

export const tomorrow = () => {
  
    // Creating the date instance
    let d = new Date();

    // generating 1 digit number for increament
    let x = ~~(Math.random()*10)

    // Adding one date to the present date
    d.setDate(d.getDate() + x);

    let year = d.getFullYear()
    let month = String(d.getMonth() + 1)
    let day = String(d.getDate())

    // Adding leading 0 if the day or month
    // is one digit value
    month = month.length == 1 ? 
        month.padStart('2', '0') : month;

    day = day.length == 1 ? 
        day.padStart('2', '0') : day;

    // Printing the present date
    return (`${day}-${month}-${year}`);
}