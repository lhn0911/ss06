function addition(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }
    var operand1 = typeof a === 'string' ? parseFloat(a) : a;
    var operand2 = typeof b === 'string' ? parseFloat(b) : b;
    return operand1 + operand2;
}
function subtraction(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }
    var operand1 = typeof a === 'string' ? parseFloat(a) : a;
    var operand2 = typeof b === 'string' ? parseFloat(b) : b;
    return operand1 - operand2;
}
function multiplication(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }
    var operand1 = typeof a === 'string' ? parseFloat(a) : a;
    var operand2 = typeof b === 'string' ? parseFloat(b) : b;
    return operand1 * operand2;
}
function division(a, b) {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }
    var operand1 = typeof a === 'string' ? parseFloat(a) : a;
    var operand2 = typeof b === 'string' ? parseFloat(b) : b;
    if (operand2 === 0) {
        return "Division by zero is not allowed";
    }
    return operand1 / operand2;
}
console.log("Addition:", addition(10, 5));
console.log("Addition:", addition("10", "5"));
console.log("Addition:", addition("10", "abc"));
console.log("Subtraction:", subtraction(10, 5));
console.log("Subtraction:", subtraction("10", "5"));
console.log("Subtraction:", subtraction("10", "abc"));
console.log("Multiplication:", multiplication(10, 5));
console.log("Multiplication:", multiplication("10", "5"));
console.log("Multiplication:", multiplication("10", "abc"));
console.log("Division:", division(10, 5));
console.log("Division:", division("10", "5"));
console.log("Division:", division(10, 0));
