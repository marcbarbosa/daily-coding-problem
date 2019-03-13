/*
This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly
overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

const minimumRooms = (arr) => {
  if (!arr || arr.length === 0) return 0

  const starts = []
  const ends = []

  arr.forEach(interval => {
    starts.push(interval[0])
    ends.push(interval[1])
  })

  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)

  let rooms = 0
  let minEnd = 0

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[minEnd]) {
      rooms++
    } else {
      minEnd++
    }
  }

  return rooms
}

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(minimumRooms([[30, 75], [0, 50], [60, 150]])).toBe(2)
})

test('#2', () => {
  expect(minimumRooms([[30, 75], [80, 120]])).toBe(1)
})

test('#3', () => {
  expect(minimumRooms([[0, 30], [5, 10], [15, 20]])).toBe(2)
})

test('#4', () => {
  expect(minimumRooms([[0, 30], [0, 30], [15, 20]])).toBe(3)
})
