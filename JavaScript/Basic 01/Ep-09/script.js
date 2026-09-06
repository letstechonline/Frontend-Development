// Date

// let myDate = new Date();

// console.log(typeof myDate);
// console.log(myDate.toDateString());
// console.log(myDate.getFullYear());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 11, 23)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let createdDate = new Date("2024-01-11");
// console.log(createdDate.toLocaleString("en-US"));

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(Math.round(Date.now() / 1000));

// let mydate = new Date();
// console.log(mydate.getDate());
// console.log(mydate.getMonth());
// console.log(mydate.getFullYear());

// let longDate = mydate.toLocaleString("default", { weekday: "long" });

// console.log(longDate);


// Pratice Questions
// 🟢 Basic — 1–7

// Find String Length — Given a string, return the total number of characters.
// let myName = "ratin haldar";
// console.log(myName.length);


// Convert to Uppercase — Convert all characters of a string to uppercase.
// let myName = "ratin haldar";
// console.log(myName);
// console.log(myName.toUpperCase());

// Convert to Lowercase — Convert all characters of a string to lowercase.
// let myName = "RATIN HALDAR";
// console.log(myName.toLowerCase());

// Reverse a String — Given "hello", produce "olleh".

// let givenString = "hello";
// console.log(givenString.split('').reverse().join(''))

// Check Palindrome — Check whether a string reads the same forward and backward. Example: "madam" → true.

// let palindrome = "madam";
// let palindromReverse = palindrome.split('').reverse().join('');

// if (palindrome == palindromReverse) {
//    console.log("The string is a palindrome.");
// } else {
//    console.log("The string is not a palidrome");

// }


// Count Vowels — Count the vowels (a, e, i, o, u) in a given string.


// let vowels = "ratin haldar";
// let vowelsCount = vowels.match(/[aeiou]/gi).length;
// console.log(vowelsCount);



// Remove All Spaces — Given "hello world js", produce "helloworldjs".

// let mystring = "hello world js";
// console.log(mystring.trim("").split(" ").join(""));

// 🟡 Medium — 8–14
// Count Occurrences of a Character — Given a string and a character, find how many times that character occurs.

// let myString = "hello world from javascript";
// let myChar = "o";
// let count = 0;

// for (let i = 0; i < myString.length; i++) {
//    if (myString[i] === myChar) {
//       count++;
//    }
// }

// console.log('The character "' + myChar + '" occurs ' + count + ' times in the string.');

// Capitalize First Letter of Each Word — Given "hello world from javascript", produce "Hello World From Javascript".

let stringCapitalize = "hello world from javascript";

let capitalizedString = stringCapitalize.charAt(0).toUpperCase() + stringCapitalize.slice(1);

console.log(capitalizedString);


// Find the Longest Word — Given a sentence, return the longest word.


// Remove Duplicate Characters — Given "programming", produce a string containing each character only once while maintaining its original order.


// Find the First Non-Repeating Character — Given "aabbcddee", return "c".


// Character Frequency — Given "banana", create an object containing the frequency of each character, such as { b: 1, a: 3, n: 2 }.


// Check Anagrams — Check whether two strings contain the same characters with the same frequencies. Example: "listen" and "silent" → true.