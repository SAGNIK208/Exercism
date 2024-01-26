// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = '',num2 = '';
  array1.forEach((element)=>{num1 += element;});
  array2.forEach((element)=>{num2 += element;});
  return Number(num1) + Number(num2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let num1 = "" + value;
  return num1 == num1.split('').reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
   if(input == null || input?.length == 0) return 'Required field';
   return (isNaN(Number(input)) || Number(input) == 0)? 'Must be a number besides 0' : '';
}
