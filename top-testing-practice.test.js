import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './top-testing-practice.js';

test('capitalize capitalizes first letter of word', () => {
  expect(capitalize('cow')).toBe('Cow');
});

test('reverseString returns a reversed string', () => {
  expect(reverseString('cow')).toBe('woc')
})

test('calulator returns add, subtract, divide, multiply', () => {
  expect(calculator.add(1, 2)).toBe(3)
  expect(calculator.subtract(2, 1)).toBe(1)
  expect(calculator.divide(4, 2)).toBe(2)
  expect(calculator.multiply(3, 3)).toBe(9)

})

test('caesarCipher returns a string with shifted letters', () => {
  expect(caesarCipher("dog", 3)).toBe("grj")
  expect(caesarCipher("DogGy!", 20)).toBe("XiaAs!")

})

test('analyzeArray returns the average, minimum, maximum, and length of array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({average: 4, min: 1, max: 8, length: 6})
  expect(analyzeArray([10,81,35,43,27,16])).toMatchObject({average: 35, min: 10, max: 81, length: 6})
})