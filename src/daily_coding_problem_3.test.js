/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes
the tree into a string, and deserialize(s), which deserializes the string back
into the tree.
For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
  constructor (val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const SEPARATOR_CHAR = ' '

const serialize = (root) => {
  if (!root) return ''

  const print = (node) => {
    if (!node) return 'null' + SEPARATOR_CHAR
    return node.val + SEPARATOR_CHAR +
      print(node.left) +
      print(node.right)
  }

  const result = print(root)
  return result.substring(0, result.length - 1)
}

const deserialize = (str) => {
  const values = str.split(SEPARATOR_CHAR)

  const read = (values) => {
    const value = values.shift()
    if (!value || value === 'null') return null
    return new Node(value, read(values), read(values))
  }

  return read(values)
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(serialize(null)).toBe('')

  const left = new Node('left', new Node('left.left'))
  const root = new Node('root', left, new Node('right'))
  expect(serialize(root))
    .toBe('root left left.left null null null right null null')
})

test('#2', () => {
  expect(deserialize('')).toBe(null)

  const input = 'root left null null right null null'
  expect(deserialize(input).left.val).toBe('left')
  expect(deserialize(input).right.val).toBe('right')
})

test('#3', () => {
  const left = new Node('left', new Node('left.left'))
  const root = new Node('root', left, new Node('right'))

  expect(deserialize(serialize(root)).left.left.val).toBe('left.left')
})
