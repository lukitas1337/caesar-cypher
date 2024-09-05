// Caesar Cipher
// Description: Implement a basic Caesar Cipher encryption.
// Requirements:
// The program should take a phrase and a shift number as inputs from process.argv.
// Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
// Output the encrypted phrase to the console.
// Example:
// node caesarCipher.js "hello world" 3
// # Output: khoor zruog

// array = [...Array(26)]; 
// console.log(array);

// testArray = [...Array(26)].map((_, i) => i); 
// console.log(testArray);

// Alphabet Array to look for
const alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(i+97));
const alphabetString = alphabetArray.join('');
console.log(alphabetString);

let x = 3;

// Input
// console.log(process.argv.slice(2));

const inputString = process.argv.slice(2).join(' ');
// console.log(inputString);

const inputSplit = inputString.split('');
console.log(inputSplit);

const inputCode = [...inputSplit].map(e => e.codePointAt(0));
console.log(inputCode);

const inputeCodeAdj = [...inputCode].map(e => e += x);
console.log(inputeCodeAdj);

const inputCodeAdjArray = [...inputeCodeAdj].map((e) => String.fromCharCode(e+97));
const inputCodeAdjString = inputCodeAdjArray.join('');
console.log(inputCodeAdjArray);

// const inputSplitCode = inputSplit.forEach(element => {
//     console.log(codePointAt(element))
// });

// const result = inputSplit.toString();
// console.log(result);

// const newResult = result.indexOf.alphabetString;
// console.log(newResult);