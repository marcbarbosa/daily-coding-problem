/*
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. The basic
idea is to represent repeated successive characters as a single count and
character. For example, the string "AAAABBBCCDAA" would be encoded as
"4A3B2C1D2A".

Implement run-length encoding and decoding. You can assume the string to be
encoded have no digits and consists solely of alphabetic characters. You can
assume the string to be decoded is valid.
*/

const encode = (str) => {
  let result = ''

  let count = 0
  let lastChar = str[0]

  for (let c of str) {
    if (c !== lastChar) {
      result += `${count}${lastChar}`
      count = 0
    }
    lastChar = c
    count++
  }

  if (count > 0) result += `${count}${lastChar}`

  return result
}

const decode = (str) => {
  let result = ''
  let countStr = ''

  for (let c of str) {
    if (isNaN(c)) {
      result += c.repeat(parseInt(countStr), 10)
      countStr = ''
    } else {
      countStr += c
    }
  }

  return result
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(encode('AAAABBBCCDAA')).toBe('4A3B2C1D2A')
})

test('#2', () => {
  expect(encode('')).toBe('')
})

test('#3', () => {
  expect(decode('4A3B2C1D2E')).toBe('AAAABBBCCDEE')
})

test('#4', () => {
  expect(decode('')).toBe('')
})

test('#5', () => {
  expect(encode('AAAAAAAAAA')).toBe('10A')
})

test('#6', () => {
  expect(decode('12A')).toBe('AAAAAAAAAAAA')
})
