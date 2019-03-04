/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of
non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.
[5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

const largestSum = (arr) => {
  if (!arr || arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  let sum1 = arr[0];
  let sum2 = 0;

  for (let i = 1; i < arr.length; i++) {
    let temp = Math.max(sum1, sum2);
    sum1 = sum2 + arr[i];
    sum2 = temp;
  }

  return Math.max(sum1, sum2);
};

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(largestSum([2, 4, 6, 2, 5])).toBe(13);
});

test('#2', () => {
  expect(largestSum([5, 1, 1, 5])).toBe(10);
});

test('#3', () => {
  expect(largestSum([])).toBe(0);
});

test('#4', () => {
  expect(largestSum([-5])).toBe(-5);
});

test('#5', () => {
  expect(largestSum([-5, -1, -1, -5])).toBe(-1);
});

test('#6', () => {
  expect(largestSum([-5, 0])).toBe(0);
});
