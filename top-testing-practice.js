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
  const alphabetSet = ('abcdefghijklmnopqrstuvwxyz').split("");
  const strSet = (str).split("")
  const newStr = []
  strSet.forEach((letter) => {
    const temp = alphabetSet.indexOf(letter)
    newStr.push( (temp + 1) + shift)
  })
  console.log(newStr)

}

export function analyzeArray(arr) {
  // implementation
}
