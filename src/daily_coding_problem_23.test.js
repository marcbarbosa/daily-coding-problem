/*
This problem was asked by Google.

You are given an M by N matrix consisting of booleans that represents a board.
Each True boolean represents a wall. Each False boolean represents a tile you
can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the
minimum number of steps required to reach the end coordinate from the start.
If there is no possible path, then return null. You can move up, left, down,
and right. You cannot move through walls. You cannot wrap around the edges of
the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum
number of steps required to reach the end is 7, since we would need to go
through (1, 2) because there is a wall everywhere else on the second row.
*/

const isDeepStrictEqual = require('util').isDeepStrictEqual

const shortestPath = (matrix, start, end) => {
  if (!matrix || !matrix.length) return null

  let result = 0
  const queue = [start]

  while (queue.length) {
    const tempQueue = []

    while (queue.length) {
      const coordinate = queue.shift()
      if (isDeepStrictEqual(coordinate, end)) return result

      tempQueue.push(...nextHops(matrix, coordinate))
    }

    queue.push(...tempQueue)
    result++
  }

  return null
}

const nextHops = (matrix, coordinate) => {
  const n = matrix.length - 1
  const m = matrix[0].length - 1

  // -1 means already visited
  matrix[coordinate[0]][coordinate[1]] = -1

  const result = []

  if (coordinate[0] + 1 <= n &&
    matrix[coordinate[0] + 1][coordinate[1]] === 0) {
    matrix[coordinate[0] + 1][coordinate[1]] = -1
    result.push([coordinate[0] + 1, coordinate[1]])
  }

  if (coordinate[1] + 1 <= m &&
    matrix[coordinate[0]][coordinate[1] + 1] === 0) {
    matrix[coordinate[0]][coordinate[1] + 1] = -1
    result.push([coordinate[0], coordinate[1] + 1])
  }

  if (coordinate[0] - 1 >= 0 &&
    matrix[coordinate[0] - 1][coordinate[1]] === 0) {
    matrix[coordinate[0] - 1][coordinate[1]] = -1
    result.push([coordinate[0] - 1, coordinate[1]])
  }

  if (coordinate[1] - 1 >= 0 &&
    matrix[coordinate[0]][coordinate[1] - 1] === 0) {
    matrix[coordinate[0]][coordinate[1] - 1] = -1
    result.push([coordinate[0], coordinate[1] - 1])
  }

  return result
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  const matrix = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  const start = [3, 0]
  const end = [0, 0]

  expect(shortestPath(matrix, start, end)).toBe(7)
})

test('#2', () => {
  const matrix = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  const start = [3, 2]
  const end = [0, 2]

  expect(shortestPath(matrix, start, end)).toBe(5)
})

test('#3', () => {
  const matrix = [
    [0, 0, 1, 0]
  ]
  const start = [0, 0]
  const end = [0, 3]

  expect(shortestPath(matrix, start, end)).toBe(null)
})

test('#4', () => {
  const matrix = [
    [0, 0, 1, 0],
    [1, 0, 1, 0]
  ]
  const start = [1, 1]
  const end = [1, 1]

  expect(shortestPath(matrix, start, end)).toBe(0)
})

test('#5', () => {
  const matrix = []
  const start = [1, 1]
  const end = [1, 1]

  expect(shortestPath(matrix, start, end)).toBe(null)
})
