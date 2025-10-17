/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  let number = {};
  for (let i = 0; i < nums.length; i++) {
    if (number[nums[i]] === undefined) {
      number[nums[i]] = 1;
    } else {
      number[nums[i]]++;
      return true;
    };
  };

  for (const keys in number) {
    if (number[keys] = 1) {
      return false;
    };
  } return false;
};

 /**
  * For  the negative number array, maybe I could've made the keys into strings so that they could be accessed easier
  *
  *
  */
// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true
