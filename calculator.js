const ADD = "add";
const MULTI = "multi";
const SUBTRACT = "subtract";

function calc (a, b, operation) {
    if (operation === ADD) {
        return a + b
    };

    if (operation === MULTI) {
        return a * b
    };

    if (operation === SUBTRACT) {
        return a - b
    };
};

console.log(calc(1, 2, "add"));
console.log(calc(1, 2, "multi")); 
console.log(calc(3, 2, "subtract"));