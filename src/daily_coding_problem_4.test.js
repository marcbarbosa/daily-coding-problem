/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear
time and constant space. In other words, find the lowest positive integer that
does not exist in the array. The array can contain duplicates and negative
numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should
give 3.

You can modify the input array in-place.
*/

const missingPositiveInteger = (arr) => {
  const size = arr.length
  let i = 0

  while (i < size) {
    if (arr[i] > 0 && arr[i] <= size && arr[i] !== arr[arr[i] - 1]) {
      const temp = arr[arr[i] - 1]
      arr[arr[i] - 1] = arr[i]
      arr[i] = temp
    } else {
      i++
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1
  }

  return size + 1
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(missingPositiveInteger([3, 4, -1, 1])).toBe(2)
})

test('#2', () => {
  expect(missingPositiveInteger([1, 2, 0])).toBe(3)
})

test('#3', () => {
  expect(missingPositiveInteger([1, 2, 0, 1, -7])).toBe(3)
})

test('#4', () => {
  expect(missingPositiveInteger([5, 3, 9])).toBe(1)
})

test('#5', () => {
  expect(missingPositiveInteger([])).toBe(1)
})

test('#6', () => {
  expect(missingPositiveInteger([-4])).toBe(1)
})
