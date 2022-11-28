// ! Find Area of a circle

function circleArea(radius) {
  let area = Math.PI * (radius * radius);
  console.log(area);
  console.log(Math.round(area * 100) / 100);
}
circleArea(5);

// !example 2

// var r = 20;
// function fun() {
//     console.log("The area of circle with radius 20cm is: " + Math.PI * r * r)
//     console.log("The perimeter of circle with radius 20cm is: " + 2 * Math.PI * r)
// }

// !example 3
function calculateArea(myRadius) {
  var area = myRadius * myRadius * Math.PI;
  return area;

  function MyArea() {
    calculateArea(myRadius);
    alert(
      "A circle with a " +
        myRadius +
        "centimeter radius has an area of " +
        area +
        "centimeters. <br>" +
        myRadius +
        "represents the number entered by the user <br>" +
        area +
        "represents circle area based on the user input."
    );
  }
}
var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:", 0));
calculateArea(20);
