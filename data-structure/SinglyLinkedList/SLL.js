class Node {
	constructor(val) {
		this.val = val;
		this.next;
	}
}

class SLL {
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
	//delete tail
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
	unshift(val) {
		let newHead = new Node(val);
		if (!this.head) {
			this.head = newHead;
			this.tail = this.head;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}
	get(n) {
		if (n < 1 || n > this.length) return null;
		if (n === this.length) {
			return this.tail.val;
		}
		let i = 1;
		let current = this.head;
		while (current.next) {
			if (i === n) {
				return current.val;
			}
			current = current.next;
			i++;
		}
	}
	set(n, val) {
		if (n < 1 || n > this.length) return null;
		if (n === this.length) {
			this.tail.val = val;
			return this.tail;
		}
		let i = 1;
		let current = this.head;
		while (current.next) {
			if (i === n) {
				current.val = val;
				return current;
			}
			current = current.next;
			i++;
		}
	}
	insert(n, val) {
		let newNode = new Node(val);

		if (n > this.length) {
			this.pop(val);
		}
		if (n < 1) {
			this.unshift(val);
		}
		let counter = 1;
		let current = this.head;
		while (current.next) {
			if (counter === n) {
				newNode.next = current.next;
				current.next = newNode;
				current = newNode;
				this.length++;
				return current;
			}
			current = current.next;
			counter++;
		}
	}
}

let newList = new SLL();
// newList.push('hello');
// newList.push('world');
// newList.push('this');
// newList.push('is');
// newList.push('Tim');

// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.pop();
// console.log(newList);
// newList.pop();
// console.log(newList);

// newList.shift();
// console.log(newList);
// newList.shift();
// console.log(newList);
// newList.shift();
// console.log(newList);
// newList.shift();
// console.log(newList);
// newList.shift();
// console.log(newList);
console.log(newList.unshift('hello'));
console.log(newList.unshift('world'));
console.log(newList.unshift('this'));
console.log(newList.unshift('is'));
console.log(newList.unshift('tim'));

console.log(newList.set(3, 'is'));
console.log(newList.set(4, 'the'));
console.log(newList.set(5, 'world'));

console.log(newList.insert(3, 'best'));
console.log(newList);

/**
 * {
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
output
 */
