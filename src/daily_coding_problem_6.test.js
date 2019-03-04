/*
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of
each node holding next and prev fields, it holds a field named both, which is
an XOR of the next node and the previous node. Implement an XOR linked list; it
has an add(element) which adds the element to the end, and a get(index) which
returns the node at index.

If using a language that has no pointers (such as Python), you can assume you
have access to get_pointer and dereference_pointer functions that converts
between nodes and memory addresses.
*/

class Node {
  constructor(value, previous, next) {
    this.value = value;
    this.both = getPointer(previous) ^ getPointer(next);
  }
}

class XorLinkedList {
  constructor(map) {
    this.map = map;
  }

  add(node) {
    if (!this.root) {
      this.root = node;
      this.root.both = 0;
      this.tail = this.root;
    } else {
      node.both = getPointer(this.tail);
      this.tail.both = getPointer(node) ^ this.tail.both;
      this.tail = node;
    }
    this.map.push(node);
  }

  get(index) {
    let i = 0;
    let previous = this.root;
    let next = dereferencePointer(this.root.both);
    while (i++ < index && next) {
      let temp = next;
      next = dereferencePointer(getPointer(previous) ^ next.both);
      previous = temp;
    }
    return index === i - 1 ? previous : null;
  }
}

// TESTS ///////////////////////////////////////////////////////////////////////

let MAP;
const NODE_ADDR = { A: 0b0001, B: 0b0010, C: 0b0011 };

const getPointer = (node) => NODE_ADDR[node ? node.value : 0];
const dereferencePointer = (addr) => MAP[addr];

beforeEach(() => {
  MAP = [ null ];
});

test('#1', () => {
  const list = new XorLinkedList(MAP);
  list.add(new Node('A'));

  let node = list.get(0);
  expect(node.value).toBe('A');
  expect(node.both).toBe(0);

  node = list.get(1);
  expect(node).toBe(null);
});

test('#2', () => {
  const list = new XorLinkedList(MAP);
  list.add(new Node('A'));
  list.add(new Node('B'));
  list.add(new Node('C'));

  let node = list.get(0);
  expect(node.value).toBe('A');
  expect(node.both).toBe(0b0010);

  node = list.get(1);
  expect(node.value).toBe('B');
  expect(node.both).toBe(0b0010);

  node = list.get(2);
  expect(node.value).toBe('C');
  expect(node.both).toBe(0b0010);
});
