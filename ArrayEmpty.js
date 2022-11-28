//!How to empty an array in JavaScript ?

// var arrayList = ["a", "b", "c", "d", "e", "f"];
// var anotherArrayList = arrayList;
// arrayList = [];
// console.log(anotherArrayList);
// console.log(arrayList);

// !2nd example
// let a = [1, 2, 3];
// a = [];
// console.log(a);

// !3rd example
// let a = [1, 2, 3];
// a.splice(0, a.length);
// console.log(a);

// !4th example
let a = [1, 2, 3];
while (a.length > 0) {
  a.pop();
}