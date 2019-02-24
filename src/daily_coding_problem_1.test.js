/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from 
the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const hasPairWithSum = (arr, sum) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return true;
    hash[sum - arr[i]] = true;
  }

  return false;
};

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(hasPairWithSum([10, 15, 3, 7], 17)).toBe(true);
});

test('#2', () => {
  expect(hasPairWithSum([], 1)).toBe(false);
});

test('#3', () => {
  expect(hasPairWithSum([-1, 56, -100, 14], -101)).toBe(true);
});

test('#4', () => {
  expect(hasPairWithSum([1], 1)).toBe(false);
});
