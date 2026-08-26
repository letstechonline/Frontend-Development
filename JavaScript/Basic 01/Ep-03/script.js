// "use strict"
// let score = "ab45";

// let number = Number(score)

// console.log(typeof number);

// let num = "ratin";

// let num1 = Number('33ratin')

// console.log(typeof num);

// console.log(typeof (num1));

// let nameConversion = Number('0976ratin');

// console.log(typeof nameConversion);

// let isLoggedIn = 0;

// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 01 let age = "25" — Convert age from a string to a number.
// age = "25";
// console.log(typeof age);
// console.log(typeof Number(age));

// 02 let price = 99 — Convert price into a string.
// let price = 99;
// console.log(typeof price);
// console.log(typeof String(price));

// 03 let value = "true" — Convert value into a boolean.
// let value = "true";
// console.log(value);
// console.log(typeof Boolean(value));

// 04 What will be the output and datatype of Number("123")?
// output Number
// let number = Number('123')
// console.log(typeof number);

// 05 What will be the output and datatype of String(false)?
// output string
// let dataconvers = String(false);
// console.log(typeof (dataconvers));


// 06 What will be the output of Boolean(0), Boolean(1), Boolean(""), and Boolean("hello")?
// output Boolean(0) = boolean | Boolean(1) = boolean | Boolean("") = boolean | Boolean("hello") = boolean
// let output1 = Boolean("hello");
// console.log(typeof output1);


// 07 Convert "50" and "30" into numbers and calculate their sum.
// console.log(50 + 30);

// 08 What will be the output of "10" + 5 and why?
// output = 105
// console.log("10" + 5);

// 09 What will be the output of "10" - 5 and why?
// output = 5
// console.log("10" - 5);

// 10 What will be the output and datatype of 10 + "20" - 5?
// output = 1015
// console.log(10 + "20" - 5);

// 11 Convert the following values into numbers: "100", "25.5", "abc", true, false, null.
// let a = "100";
// console.log(typeof Number(a));
// let b = "25.5";
// console.log(typeof Number(b));
// let c = "abc";
// console.log(typeof Number(c));
// let d = true;
// console.log(typeof Number(d));
// let e = false;
// console.log(typeof Number(e));
// let f = null;
// console.log(typeof Number(f));

// 12 What is the difference between Number(), parseInt(), and parseFloat()? Demonstrate each with suitable values.

// 13 What will be the output of Boolean("false")? Explain why.
// output = true

// console.log(Boolean("false"));

// 14 Convert a user's input "18" into a number and check whether the user is eligible to vote.

// let user = "18 ";
// let vote = Number(user);
// if (vote >= 18) {
//    console.log("user is eligible for vote.");
// } else {
//    console.log("user is not eligible for vote");

// }

// 15 Without running the code, predict the output and datatype of:
// let result = "10" + 20 + 30;
// console.log(result);


// 16 Without running the code, predict the output and datatype of:
// let result = 10 + 20 + "30";
// output = 3030;
// console.log(result);

// 17 Predict the output of:
// console.log(Number(""));
// console.log(Number(" "));
// console.log(Number(null));
// console.log(Number(undefined));

// 18 Predict the output of:
// console.log(Boolean("ratin"));
// console.log(Boolean(0));
// console.log(Boolean([]));
// console.log(Boolean({}));

//19 Create a small program that takes a user's name, age, and salary as strings, converts the age and salary into appropriate datatypes, and displays their values along with their datatypes.

// let userName = "ratin";
// let age = "23";
// let salary = "10000";

// console.log(typeof (age));
// console.log(typeof (salary));

// console.log(typeof Number(age));
// console.log(typeof Number(salary));


// 20 Create a program that takes two values as strings, converts them into numbers, and performs addition, subtraction, multiplication, and division. Handle the case where the entered values cannot be converted into valid numbers.

// let num1 = "25";
// let num2 = "25";

// let num1Update = Number(num1);
// let num2Update = Number(num2);

// let addition = Number(num1Update) + Number(num2Update)
// console.log(`Sum of two number: ${addition}`);

// let subtraction = Number(num1Update) - Number(num2Update)
// console.log(`Sum of two number: ${subtraction}`);

// let multiplication = Number(num1Update) * Number(num2Update)
// console.log(`Sum of two number: ${multiplication}`);

// let division = Number(num1Update) / Number(num2Update)
// console.log(`Sum of two number: ${division}`);