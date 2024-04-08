function addition(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }

    const operand1: number = typeof a === 'string' ? parseFloat(a) : a as number;
    const operand2: number = typeof b === 'string' ? parseFloat(b) : b as number;

    return operand1 + operand2;
}

function subtraction(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }

    const operand1: number = typeof a === 'string' ? parseFloat(a) : a as number;
    const operand2: number = typeof b === 'string' ? parseFloat(b) : b as number;

    return operand1 - operand2;
}

function multiplication(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }

    const operand1: number = typeof a === 'string' ? parseFloat(a) : a as number;
    const operand2: number = typeof b === 'string' ? parseFloat(b) : b as number;

    return operand1 * operand2;
}

function division(a: number | string, b: number | string): number | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Invalid input: " + a;
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Invalid input: " + b;
    }

    const operand1: number = typeof a === 'string' ? parseFloat(a) : a as number;
    const operand2: number = typeof b === 'string' ? parseFloat(b) : b as number;

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
