/* 
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and 
last element of that pair. For example, car(cons(3, 4)) returns 3, and 
cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr.
*/

const cons = (a, b) => {
  const pair = (f) => f(a, b);
  return pair;
};

const car = pair => pair((a, b) => a);

const cdr = pair => pair((a, b) => b);

// TESTS ///////////////////////////////////////////////////////////////////////

test('#1', () => {
  expect(car(cons(3, 4))).toBe(3);
});

test('#2', () => {
  expect(cdr(cons(3, 4))).toBe(4);
});
