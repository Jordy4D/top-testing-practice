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
  const strSet = str.split("")
  const newStr = []
  strSet.forEach((letter) => {
    const l = letter.charCodeAt(0)
    const base = letter === letter.toLowerCase() ? 97 : 65;

    if (l < 65 || l > 122) {
      newStr.push(letter)
    } else {
      newStr.push(String.fromCharCode(((letter.charCodeAt(0) - base + shift) % 26) + base))
    }    
  
  })
  return newStr.join("")

}

export function analyzeArray(arr) {
  // implementation
}
