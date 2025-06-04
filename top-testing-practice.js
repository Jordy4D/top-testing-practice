export function capitalize(str) {
  return str.at(0).toUpperCase().concat(str.slice(1))
}

export function reverseString(str) {
  return str.split("").reverse().join("")
}

export const calculator = {
  add(a, b) { return a + b },
  subtract(a, b) { return a - b },
  divide(a, b) { return (a / b) },
  multiply(a, b) { return (a * b) }
};

export function caesarCipher(str, shift) {
  // implementation
}

export function analyzeArray(arr) {
  // implementation
}
