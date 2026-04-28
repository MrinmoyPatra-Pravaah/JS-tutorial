const name = "Mrinmoy";
const repoCount = 50

console.log(`Hello my name is ${name} and I have ${repoCount} repositories on GitHub`); //template literals


const gameName = new String("Chess");
console.log(gameName[0]); //C
console.log(gameName.__proto__);//String.prototype
console.log(gameName.length); //5
console.log(gameName.charAt(2)); //e
console.log(gameName.indexOf("e")); //1

const newString = gameName.substring(0, 3);
console.log(newString); // Che


console.log(gameName.toUpperCase()); //CHESS
console.log(gameName.toLowerCase()); //chess
console.log(gameName.includes("ess")); //true
console.log(gameName.startsWith("Ch")); //true
console.log(gameName.endsWith("ss")); //true


const newStringOne = "      Mrinmoy     ";
console.log(newStringOne.trim()); // removes the whitespace from both ends of the string
console.log(newStringOne.trimStart()); // removes the whitespace from the start of the string
console.log(newStringOne.trimEnd()); // removes the whitespace from the end of the string


const url = "https://mrinmoy.com/mrinmoy%20patra";

console.log(url.replace("%20", "-")); // replaces the first occurrence of %20 with -
console.log(url.replaceAll("%20", "-")); // replaces all occurrences of %20 with -

