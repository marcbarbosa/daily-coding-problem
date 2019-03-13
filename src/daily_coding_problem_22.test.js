/*
This problem was asked by Microsoft.

Given a dictionary of words and a string made up of those words (no spaces),
return the original sentence in a list. If there is more than one possible
reconstruction, return any of them. If there is no possible reconstruction,
then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the
string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the
string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond'] or
['bedbath', 'and', 'beyond'].
*/

const originalSentence = (dict, str) => {
  if (!dict || !str) return null

  const result = []
  let word = ''

  for (let i = 0; i < str.length; i++) {
    word += str[i]

    if (dict[word]) {
      result.push(word)
      word = ''
    }
  }

  return result.length ? result : null
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  const dict = {
    quick: true,
    brown: true,
    the: true,
    fox: true
  }
  const str = 'thequickbrownfox'
  expect(originalSentence(dict, str)).toEqual(['the', 'quick', 'brown', 'fox'])
})

test('#2', () => {
  const dict = {
    bed: true,
    bath: true,
    bedbath: true,
    and: true,
    beyond: true
  }
  const str = 'bedbathandbeyond'
  expect(originalSentence(dict, str)).toEqual(['bed', 'bath', 'and', 'beyond'])
})

test('#3', () => {
  const dict = {
    lorem: true,
    ipsum: true
  }
  const str = 'dolorsitamet'
  expect(originalSentence(dict, str)).toBe(null)
})
