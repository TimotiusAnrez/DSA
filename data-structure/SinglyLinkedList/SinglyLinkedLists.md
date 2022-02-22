# Singly linked list

![alt text](../image/SinglyLinkedLists/1.png)

## Description

a linked list is not like an array where you can access everything via index. A linked list can only be access via Head node and move toward Tails. So if you want to access 5th element of a linked list, then you have to start from N=1 which is head then move toward N=length which is tail and search N=5 which is the element you want to access.

```js
class SinglyLinkedList {
	constructor(input) {
		this.input = input;
		this.head = 1;
		this.length = arr.length;
	}
}
```

## Differences with array

Linked list don't have indexes! So they cannot be access freely like array do, everything must be accessed via head node.

every nodes connected with a next pointer, the next pointer will just point to the next node of the linked list.

insertion and deletion in array is expensive unlike linked list.

## When to use Singly Linked List?

Linked list is great in term of insertion and deletion since the operation will not as expensive as array. So if you are working with a long list of data that only need to be inserted or deleted without random index access needed then a linked list will be a finer solution than an array.

## How to work with linked list

### defining the object of Node and List

before we start working with linked list, think what element do we need to work with it? Remember that in linked list there is two element interact with each other.

```js
/*
 * Piece of data = val;
 * reference to next node = next;
 */

// defining node class
class Node {
	constructor(val) {
		this.val = val;
		this.next = next; // point to the next Node object can be assigned or using push method
	}
}
```

First is Node object which represent where the data will be stored, and as part of elements in the list.

keep in mind that Node object has two property:

1. the value of the Node (in this case represent as val)
2. the pointer to the next Node object (represent by next property in this case)

```js
//interface
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
}

let list = new SinglyLinkedList();
```

Second is the linked list that act as a collection of nodes that connected to each other. Remember that all linked list has 3 property: Head, Tail, and length. So let's represent all of them as property in SinglyLinkedList class constructor.

### Push method

```js
//interface
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = this.head;
			this.length++;
			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
}

let newList = new SLL();
newList.push('hello');
newList.push('world');
newList.push('this');
newList.push('is');
newList.push('Tim');

let list = new SinglyLinkedList();
```

PSEUDOCODE

    - this function should accept a value
    - create new node using the value passed to the function
    - if there is no head then, head = new Node, tail = new Node
    - if there is head, then, tail = new Node, and next from the prev Node = to new Node
    - increment length by 1

### output

```js
{
  head: {
    val: "hello",
    next: {
      val: "world",
      next: {
        val: "this",
        next: {
          val: "is",
          next: {
            val: "Tim",
          },
        },
      },
    },
  },
  tail: {
    val: "Tim",
  },
  length: 5,
}
```

## Pop method (delete tail)

remember one of the characterisitic of singly linked list is that it moves in one way. So ideally if we want to delete a node from linked list there is 3 possibilities either it is a head node, a tail node, or a node between head and tail.

No matter which one, each time we want to delete something we have to go from head to tail. We also need to store the node that we have checked as a node that we don't want to delete and store it in a temporary cache variable so that when we found the node we want to delete we just simply change next property in tmp (tmp.next) to node.next of the one that we want to delete, then exit the loop.

PSEUDO CODE

    - if there are no nodes in the list, return undefined
    - loop through the list until you reach the tail
    - set the next property of the 2nd to last node to be null
    - set the tail to be the 2nd to last node
    - decrement the length of the list by 1
    - return the value of the node removed

```js
pop() {
		//can't delete if there is no data in list
		if (!this.head) return undefined;
		//set current node
		let current = this.head;
		//set temporary tail
		//if current equal to this.tail, newTail will become the tail
		let newTail = current;

		//since each node have val and next, if node.next is null then it will not loop
		while (current.next) {
			//while next is not null, it will reasigned the newTail variable to the current from iteration before
			newTail = current;
			//current will be reasigned to the next node in current property
			current = current.next;
		}
		/**
		 * example
		 *
		 * current = hello;
		 * newTail = hello;
		 *
		 *
		 * while(current.next){
		 * first iteration
		 *      newTail = hello;
		 *      current = world;
		 * second iteration
		 *      newTail = world;
		 *      current = this;
		 * third iteration
		 *      newTail = this;
		 *      current = is;
		 * fourth iteration
		 *      newTail = is;
		 *      current = tim;
		 * }
		 *
		 * no fifth iteration because tim.next is null
		 *
		 * so this.tail = is;
		 * is.next = null;
		 * this.length - 1;
		 *
		 *
		 */
		this.tail = newTail;
		//since we asigned the new tail to this object tail, then we have to make the next of the new tail to null
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
```

## Shift (delete head)

really simple since linked list iterate move start from the head, then shifting or delete the head means that reasigned head value to the head.next value and decrease the length.

```js
shift() {
		if (!this.head) return undefined;
		this.head = this.head.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}
```

## Unshift (add new node to head)

Unshift means that adding new node from the head

PSEUDOCODE

    - method should recieve a value
    - create a new node using the value passed to method
    - if there is no head property on the list, set the head and tail to be the newly created node
    - otherwise set the new created node next property as the head and reasigned the newly created node as head
    - increment the length of the list by 1
    - return linked list
