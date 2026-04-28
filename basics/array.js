// array

const myArr = [1,2,3,4,5];
const myArr2 =["Hello", "World", "JavaScript", "is", "awesome"];
const myArr3 = new Array(1,2,3,4,5);

console.log(myArr);
console.log(typeof myArr);

console.log(myArr[0]);

console.log(myArr2);
console.log(myArr2[0]);

console.log(myArr3);
console.log(myArr3[0]);

console.log(myArr.length);
console.log(myArr2.length);
console.log(myArr3.length);


//Array methods

myArr.push(6) // adding element at the end of the array
console.log(myArr);

myArr.pop() // removing element from the end of the array
console.log(myArr);

myArr.unshift(0) // adding element at the beginning of the array
console.log(myArr);

myArr.shift() // removing element from the beginning of the array
console.log(myArr);

myArr.splice(2, 0, 10); // adding element at index 2
console.log(myArr);

myArr.splice(2, 1); // removing element from index 2
console.log(myArr);

myArr.splice(2, 1, 20); // replacing element at index 2 with 20
console.log(myArr);

myArr.reverse(); // reversing the array
console.log(myArr);

myArr.sort(); // sorting the array
console.log(myArr);

myArr.sort((a,b) => a-b); // sorting the array in ascending order
console.log(myArr);

myArr.sort((a,b) => b-a); // sorting the array in descending order
console.log(myArr);

const newArray = myArr.join() // joining the array elements into a string
console.log(newArray);

// slice vs splice - slice does not modify the original array, splice modifies the original array

const myArr4 = [1,2,3,4,5];
console.log(myArr4);

const slicedArr = myArr4.slice(1,4);// slicing the array from index 1 to 3 (4 is not included)
console.log(slicedArr);
console.log(myArr4);

myArr4.splice(1,3);// splicing the array from index 1 to 3 (3 is not included)
console.log(myArr4);







const marvelHeroes = ["Spider-Man", "Iron Man", "Captain America", "Thor", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

marvelHeroes.push(dcHeroes); // adding dcHeroes array as an element to marvelHeroes array
console.log(marvelHeroes);

marvelHeroes.concat(dcHeroes); // concatenating dcHeroes array to marvelHeroes array
console.log(marvelHeroes);

const all_new_heroes = [...marvelHeroes, ...dcHeroes]; // concatenating dcHeroes array to marvelHeroes array and storing it in a new array
console.log(all_new_heroes);


const another_array = [1,2,3 ,[4,5,6],7,[6,7,8]];
const real_another_array = another_array.flat(Infinity); // flattening the array
console.log(real_another_array);

console.log(Array.isArray("Mrinmoy")); // checking if the given value is an array
console.log(Array.from("Mrinmoy")); // converting a string to an array
console.log(Array.from({name: "Mrinmoy"})); // converting an object to an array  

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // creating an array from the given values