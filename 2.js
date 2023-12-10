function add(a, b) {
    return a + b;
}
function checkEvenOrOdd(a) {
    if (a % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
function calculateArea(width, height) {
    let area = width * height;
    return area;
}
function reverseString(str) {
    let reverseStr = "";
    for (let letters of str) {
        reverseStr = letters + reverseStr;
    }
    return reverseStr;
}
function convertCelsiusToFahrenheit(num) {
    let conv = (num * 9 / 5) + 32; // formula of conversion applied
    return conv;
}
console.log("Add method : ", add(5, 10));
console.log("Even or Odd method : ", checkEvenOrOdd(8));
console.log("calculate Area method : ", calculateArea(3, 5));
console.log("Reverse String method : ", reverseString("hello"));
console.log("Celsius To Fahrenheit Conversion method : ", convertCelsiusToFahrenheit(20), "in F");
export {};
