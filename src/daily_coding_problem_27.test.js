/*
This problem was asked by Facebook.

Given a string of round, curly, and square open and closing brackets, return
whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

const brackets = (str) => {
  if (!str) return false

  const openBrackets = '({['
  const closeBrackets = ')}]'
  const closingPair = (c) => (closeBrackets[openBrackets.indexOf(c)])

  const stack = []

  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    if (openBrackets.includes(c)) {
      stack.push(c)
    } else if (closeBrackets.includes(c)) {
      const top = stack.pop()
      if (c !== closingPair(top)) {
        return false
      }
    }
  }

  return !stack.length
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(brackets('([])[]({})')).toBe(true)
})

test('#2', () => {
  expect(brackets('([)]')).toBe(false)
})

test('#3', () => {
  expect(brackets('((()')).toBe(false)
})

test('#4', () => {
  expect(brackets()).toBe(false)
})
