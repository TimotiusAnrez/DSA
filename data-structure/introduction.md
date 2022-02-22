# Data structures

## What are they?

Data structures are collection of values, the relationships among them, and the functions or operations that can be applied to the data we work with.

## Why are there so many?

Different data structures excel at different things. Some are highly specialized, while others(like arrays) are more generally used. Each data structured that is going to be learned here is differ with each other in term of relations with different data.

## Using OOP to define data structure

A class is a blueprint for creating objects with pre-defined properties and methods.

## Class in javascript

Class in javascript consist of constructor, and method. A constructor is the data that live within that class, while method if the function or code block that can be used by that Class.

### static method

static method is a method can be used outside of initialization of the class

```js
// for example

class Math {
	static addition(n1, n2) {
		return n1 + n2;
	}
	static substraction(n1, n2) {
		return n1 - n2;
	}
}

Math.addition(1, 2); // will return 3 from 1 + 2
Math.substraction(2, 1); // will return 1 from 2 -1
```

### instance method

a method is a method specific to instance of the object created by that class

```js
class Student {
	constructor(firstname, lastname) {
		this.firstName = firstname;
		this.lastName = lastname;
	}

	fullName() {
		return 'student name: ' + firstName + ' ' + lastName;
	}
}

let firstStudent = new Student('John', 'Doe');
firstStudent.fullName(); //will return student name: John Doe;
```
