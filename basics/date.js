// Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCraetedDate = new Date("2020-01-01"); 
console.log(myCraetedDate.toDateString());

let myCraetedDate2 = new Date("2023-01-14");
console.log(myCraetedDate2.toLocaleString());

let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(new Date(myTimestamp).toLocaleString());
console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate.toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})); // Saturday, January 14, 2023