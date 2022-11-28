// strings are anagram or not
// let str1 = prompt("Enter first string");
// let str2 =prompt("enter second string")
let str1 = "mary";
let str2 = "army";
let c1 = str1.split("").sort().join("");
let c2 = str2.split("").sort().join("");
if (c1 == c2) {
  console.log("Both strings are anagram");
} else {
  console.log("strings are not anagram");
}

// table from 1 to 5
let num1 = 1;
let num2 = 5;
let res;
for (let k = 1; k <= 5; k++) {
  for (let l = 1; l <= 10; l++) {
    res = k * l;
    // console.log(`${k}*${l}=${res}`);
    document.write(`${k}*${l}=${res}  ` + "<br>");
  }
}

// check last digit of string is same
let num3 = 1456;
let num4 = 346586;
let last = 0;
let last2 = 0;
last = num3 % 10;
last2 = num4 % 10;
if (last == last2) {
  console.log("last digit of both number is same");
} else {
  console.log("last digit of both number is not same");
}


// program to check whether passed value is integer,decimal or false
let n2 = 10.5
if (n2 == parseInt(n2)) {
    console.log("It is Integer");
} else {
    console.log("it is float");
}