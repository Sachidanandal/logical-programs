//!Find number is ArmStrong number or not

// let sum = 0;
// const number = prompt("Enter a three-digit positive integer: ");
// let temp = number;
// while (temp > 0) {
//   let remainder = temp % 10;
//   sum += remainder * remainder * remainder;
//   temp = parseInt(temp / 10);
// }
// if (sum == number) {
//   console.log(`${number} is an Armstrong number`);
// } else {
//   console.log(`${number} is not an Armstrong number.`);
// }

//! program to check an Armstrong number of n digits
// // take an input
// const number1 = prompt("Enter a positive integer");
// const numberOfDigits = number1.length;
// let sum1 = 0;

// // create a temporary variable
// let temp1 = number1;

// while (temp1 > 0) {

//     let remainder = temp1 % 10;

//     sum1 += remainder ** numberOfDigits;

//     // removing last digit from the number
//     temp1 = parseInt(temp1 / 10); // convert float into integer
// }

// if (sum1 == number1) {
//     console.log(`${number1} is an Armstrong number`);
// }
// else {
//     console.log(`${number1} is not an Armstrong number.`);
// }

// !Using while loop

// let number;
// number = prompt("Enter a number !"); // taking a number as an input, we will check whether this number is Armstrong or not?

// let n = number.length; // The number of digits in the 'number' will be stored in the variable 'n'

// let sum = 0; // we will store the sum of 'nth power of all the digits in the 'sum' variable

// let i = 0;

// while (i < n) {
//   let digit = number[i] - "0"; // extracting the i’th digit of 'number'
//   sum = sum + Math.pow(digit, n); // adding the nth power of the digit to the variable 'sum'
//   i++; // incrementing the index variable of the string
// }

// if (sum == number) {
//   // if sum is same as number, then it is an armstrong number
//   console.log(number, "is an Armstrong Number");
// } else {
//   console.log(number, "is not an Armstrong Number");
// }

// !Using for a loop
// let number;
// number = prompt("Enter a number !"); // taking a number as an input, we will check whether this number is Armstrong or not?

// let n = number.length; // The number of digits in the 'number' will be stored in the variable 'n'

// let sum = 0; // we will store sum of nth power of all the digits in the 'sum' variable

// for (let i = 0; i < n; i++) {
//   let digit = number[i] - "0"; // extracting the i’th digit of 'number'
//   sum = sum + Math.pow(digit, n); // adding the nth power of the digit to the variable 'sum'
// }

// if (sum == number) {
//   // if sum is same as number, then it is an armstrong number
//   console.log(number, "is an Armstrong Number");
// } else {
//   console.log(number, "is not an Armstrong Number");
// }
