//!convert letter of a given string in alphabetical order

// !example 1
function alphabet_Soup(str) {
  return str.split("").sort().join("");
}

console.log(alphabet_Soup("Python"));

console.log(alphabet_Soup("Exercises"));

// !example 2

// let str = "helloworld";
// let string_sort = str => {
//   var i = 0,
//     j;
//   while (i < str.length) {
//     j = i + 1;
//     while (j < str.length) {
//       if (str[j] < str[i]) {
//         var temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//       }
//       j++;
//     }
//     i++;
//   }
// };
// console.log(string_sort("helloworld"));
