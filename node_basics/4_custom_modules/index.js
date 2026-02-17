function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function greet(name) {
    return `Hello, ${name}!`;
}
function shout(text) {
    return text.toUpperCase();
}
function firstItem(arr) {
    return arr[0];
}
module.exports = {
    multiply,
    subtract,
    greet,
    shout,
    firstItem
};
