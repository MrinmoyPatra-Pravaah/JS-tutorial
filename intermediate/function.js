
// function sayMyName() {
//     console.log("M");
//     console.log("R");
//     console.log("I");
//     console.log("N");
//     console.log("M");
//     console.log("O");
//     console.log("Y");
// }

// sayMyName();


//  function addTwoNumbers(num1, num2) { // function declaration
//     console.log(num1 + num2);
//  }

//     const result = addTwoNumbers(3, 5); // passing arguments to the function
//     console.log(result); // the function does not return anything, so it will return undefined by default

// function addTwoNumbers(num1, num2) { 
//     let result = num1 + num2;
//     return result; // returning the result of the addition
// }

// const result = addTwoNumbers(3, 5); // passing arguments to the function
// //console.log(result); // the function returns the result of the addition, so it will print 8

// function loginUserMessage(username) {
//     return `${username} just logged in`; // using template literals to return a message with the username
// }

// //loginUserMessage("Mrinmoy"); // calling the function with a username
// console.log(loginUserMessage);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return; // returning from the function if the username is not provided
    }
    return `${username} just logged in`; // using template literals to return a message with the username
}

console.log(loginUserMessage()); // calling the function without a username, it will print "Please enter a username"
console.log(loginUserMessage("Mrinmoy")); // calling the function with a username, it will print "Mrinmoy just logged in"

