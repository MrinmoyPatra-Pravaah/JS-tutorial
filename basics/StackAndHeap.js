let myname = "Mrinmoy";
let anothername = myname;
anothername = "Raju";

console.log(myname); //Mrinmoy
console.log(anothername); //Raju

let userOne = {
    name: "Mrinmoy",
    age: 25
}

let userTwo = userOne;
userTwo.name = "Raju";

console.log(userOne.name); //Raju
console.log(userTwo.name); //Raju

/*
In JavaScript, primitive data types (like strings, numbers, booleans) are stored in the stack, and when you assign them to another variable, a copy of the value is created. This is why changing `anothername` does not affect `myname`.

On the other hand, non-primitive data types (like objects and arrays) are stored in the heap, and when you assign them to another variable, a reference to the same object is created. This is why changing `userTwo.name` also changes `userOne.name`, because both variables reference the same object in memory.
*/