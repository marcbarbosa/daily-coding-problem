/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at 
index i of the new array is the product of all the numbers in the original 
array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output 
would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const productArray = (arr) => {
  if (arr.length == 1) return [undefined];

  const result = [];
  const left = [];
  const right = [];

  left[0] = 1;
  right[arr.length - 1] = 1;

  for (let i = 1; i < arr.length; i++) 
    left[i] = left[i - 1] * arr[i - 1];
  
  for (let i = arr.length - 2; i >= 0; i--) 
    right[i] = right[i + 1] * arr[i + 1];
  
  for (let i = 0; i < arr.length; i++) 
    result[i] = left[i] * right[i];

  return result;
};

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(productArray([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test('#2', () => {
  expect(productArray([3, 2, 1])).toEqual([2, 3, 6]);
});

test('#3', () => {
  expect(productArray([])).toEqual([]);
});

test('#4', () => {
  expect(productArray([-1])).toEqual([undefined]);
});

test('#5', () => {
  expect(productArray([-13, 7])).toEqual([7, -13]);
});
