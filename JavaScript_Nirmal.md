======================= ARRAY & TRAVERSAL IN ARRAY =======================================================================
What is the difference between for...in and for...of?
Answer:
for...in iterates over the keys (or indexes in the case of arrays) of an object. It is typically used for enumerating object properties.
for...of iterates over the values of an iterable object such as an array, strings, or any object implementing the Symbol.iterator interface.

What will be the output of the following code?
	let arr = ["ES5", "ES6", "ES7", "ES8"];
	arr.forEach(function(element, index) {
	  console.log(element, index);

	  if (index == 2) {
		  break;
	  }
	});
Answer: The code will throw an error. The forEach() method does not support breaking out of the loop with break. If you need to break a loop, consider using a for loop or for...of.

What will be the output of the following code?
	let arr = [7, 9, 0];
	console.log(arr[arr.length]);
Answer: The output will be undefined. arr.length is 3, and there is no element at index 3 in the array (array indexes are 0-based), so it returns undefined.

ADD, REMOVE, INSERT, REPLACE ELEMENTS IN ARRAY :
What is the difference between push() and unshift() method?
Answer: The push() method adds one or more elements to the end of an array and returns the new length of the array. In contrast, the unshift() method adds one or more elements to the beginning of an array and also returns the new length of the array.

What is the difference between pop() and shift()?
Answer: The pop() method removes the last element from an array and returns that element, effectively shortening the array by one. Conversely, the shift() method removes the first element from an array and returns that element, which also shortens the array by one.

How can you insert an element at a given position?
Answer: You can insert an element at a given position using the splice() method. The syntax is array.splice(index, 0, element), where index is the position where you want to insert the element, 0 indicates that no elements should be removed, and element is the new element you want to add.

How can you remove a specific element?
Answer: To remove a specific element from an array, you can use the splice() method by specifying the index of the element to remove. The syntax is array.splice(index, 1), where index is the position of the element you want to remove, and 1 indicates that one element should be removed.

What does splice() return?
Answer: The splice() method returns an array containing the deleted elements. If no elements are removed, it returns an empty array.

If there is no element removed, then what will splice() method return?
Answer: If no elements are removed (i.e., when the second parameter is 0), splice() will return an empty array.

What will be the output of this code?
	let arr = ["One", "Two", "Three", "Four", "Five"];
	console.log(arr.splice(2, 0, "New"));
Answer: The output will be [], as splice() is being called with 0 as the second argument, meaning no elements are removed. The string "New" is added at index 2, but since nothing was removed, the returned value is an empty array. After this operation, arr will be ["One", "Two", "New", "Three", "Four", "Five"].

PERFORM SEARCH IN ARRAY :
What is the difference between find() and filter() method?
Answer: find() returns the first element in an array that satisfies a provided condition. It returns undefined if no elements match.
filter() returns an array of all elements that satisfy the provided condition. If no elements match, it returns an empty array.

If there is no value to return, what will findIndex() return?
Answer: findIndex() will return -1 if no element satisfies the condition.

What is the difference between indexOf() and includes() method?
Answer: indexOf() returns the first index of a specified element in an array, or -1 if the element is not found.
includes() checks whether an array contains a specified element, returning true or false.

How will you search multiple values in an array?
Answer: You can use filter() to search for multiple values in an array by checking if the element is included in the search criteria. Example:
	const searchValues = ["One", "Three"];
	const result = arr.filter(el => searchValues.includes(el));

What will be the output of this code?
	let arr = ["One", "Two", "Three", "Four", "Five"];
	console.log(arr.lastIndexOf("Abcd"));
Answer: The output will be -1 because "Abcd" is not present in the array.

USE OF MAP() METHOD :
Find the length of each element in a new array:
	let arr = ["Apple", "Banana", "Grapes", "Oranges"];
	let lengths = arr.map(element => element.length);
	console.log(lengths);  // Output: [5, 6, 6, 7]

Find the square root of every element and store it in a new array:
	let numbers = [4, 9, 16, 25];
	let squareRoots = numbers.map(num => Math.sqrt(num));
	console.log(squareRoots);  // Output: [2, 3, 4, 5]

Get all product names (i.e., pNames) in a new array from products:
	let products = [
		{pCode: 1, pName: "Apple"},
		{pCode: 2, pName: "Banana"},
		{pCode: 3, pName: "Grapes"},
		{pCode: 4, pName: "Oranges"}
	];
	let productNames = products.map(product => product.pName);
	console.log(productNames);  // Output: ["Apple", "Banana", "Grapes", "Oranges"]

FLATTEN A 2D ARRAY :
How will you flatten a 2-dimensional array into a single dimension?
Answer : You can use Array.prototype.flat() to flatten an array.
	let arr = [[1, 2], [3, 4], [5, 6]];
	let flattenedArray = arr.flat();
	console.log(flattenedArray);  // Output: [1, 2, 3, 4, 5, 6]

Get the sum of a key field (total salary of employees):
	const employees = [
		{eNo: 1001, salary: 3000},
		{eNo: 1002, salary: 2200},
		{eNo: 1003, salary: 3400},
		{eNo: 1004, salary: 6000}
	];
	let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
	console.log(totalSalary);  // Output: 14600

Find the average value of all elements in an array:
	let numbers = [10, 20, 30, 40];
	let avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
	console.log(avg);  // Output: 25

Find the sum or product of all elements:
Sum:
	let nums = [1, 2, 3, 4];
	let sum = nums.reduce((total, num) => total + num, 0);
	console.log(sum);  // Output: 10
Product:
	let product = nums.reduce((total, num) => total * num, 1);
	console.log(product);  // Output: 24

Difference between reduce() and reduceRight():
Answer : reduce() processes the array from left to right (first to last element).
reduceRight() processes the array from right to left (last to first element).
	let arr = [1, 2, 3, 4];
	// Using reduce:
	let sumReduce = arr.reduce((acc, val) => acc + val);
	console.log(sumReduce);  // Output: 10
	// Using reduceRight:
	let sumReduceRight = arr.reduceRight((acc, val) => acc + val);
	console.log(sumReduceRight);  // Output: 10

SORT AN ARRAY :
What will be the output if an array has undefined while sorting the values?
Answer : When sorting an array with undefined values, those values are usually treated as the largest possible values (by default, they're moved to the end of the array).
	let arr = [3, 5, undefined, 2, 1];
	arr.sort();
	console.log(arr);  // Output: [1, 2, 3, 5, undefined]

How will you sort an object literal?
Answer : You can sort an array of objects based on a specific property using sort() and a comparison function.
	let products = [
		{pCode: 3, pName: "Grapes"},
		{pCode: 1, pName: "Apple"},
		{pCode: 2, pName: "Banana"}
	];
	products.sort((a, b) => a.pCode - b.pCode);
	console.log(products);
	// Output: 
	// [
	//    {pCode: 1, pName: "Apple"},
	//    {pCode: 2, pName: "Banana"},
	//    {pCode: 3, pName: "Grapes"}
	// ]

How will you sort a numeric array?
Answer : To sort a numeric array correctly, you need to provide a comparison function in sort().
	let nums = [10, 3, 2, 8];
	nums.sort((a, b) => a - b); // Ascending order
	console.log(nums);  // Output: [2, 3, 8, 10]

Sort all values of the array in descending order:
Answer : To sort in descending order, reverse the comparison in the sort() function.
	let nums = [10, 3, 2, 8];
	nums.sort((a, b) => b - a); // Descending order
	console.log(nums);  // Output: [10, 8, 3, 2]

ARRAY DESTRUCTURING :
What is the destructuring assignment?
Answer: Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables.

Swap values using destructuring
Answer: You can swap values of two variables using destructuring like this:
	let a = 1, b = 2;
	[a, b] = [b, a];

What will be the output of this code?
	let [a,b,c] = [5,,7];
	console.log(a,b,c);
Answer: The output will be 5 undefined 7. The empty space between the commas corresponds to undefined.

How will you set a default value while destructuring an array?
Answer: You can set default values while destructuring an array like this:
	let [a = 10, b = 20] = [5];
	console.log(a, b); // Output: 5 20
	
============================== STRINGS ===================================================================================
 
Explain various ways to declare a string variable
Answer: In JavaScript, you can declare a string variable using single quotes ('...'), double quotes ("..."), or template literals using backticks (```)

How will you deal with Unicode characters?
Answer: To deal with Unicode characters, you can use escape sequences (\uXXXX for 4-digit or \u{XXXXX} for longer Unicode characters) or directly input them if supported. Example:
	let unicodeChar = '\u2764'; // Unicode for heart symbol ❤️

Show the syntax to display long Unicode characters
Answer: You can display long Unicode characters using the \u{XXXXX} format. Example:
	let longUnicodeChar = '\u{1F600}'; // Unicode for 😀
	console.log(longUnicodeChar); 
	
TEMPLATE LITERAL (STRING):
What is a template literal?
Answer: A template literal is a way to define strings in JavaScript using backticks (``). It allows multi-line strings and embedding expressions using ${} syntax.

How will you display a value or an expression inside a template string?
Answer: You can display values or expressions inside a template string by embedding them within ${}. Example:
	let name = 'John';
	let message = `Hello, ${name}!`;
	console.log(message); // Output: Hello, John!

What is the advantage of using a template string?
Answer: The advantage of using template strings includes easier multi-line strings, embedding variables or expressions without concatenation, and improved readability when dealing with complex strings.

LENGTH PROPERTY AND SEARCH METHODS :
Explain the indexOf() and lastIndexOf() method with syntax.
Answer: indexOf() is used to find the first occurrence of a substring within a string. It returns the index of the first match or -1 if not found. Syntax:
	string.indexOf(searchValue, fromIndex)
lastIndexOf() finds the last occurrence of a substring in a string and returns the index or -1 if not found. Syntax:
	string.lastIndexOf(searchValue, fromIndex)

What is the difference between search() and indexOf() method?
Answer: indexOf() works with string substrings and allows an optional second argument to specify the starting position.
search() works with regular expressions and doesn't accept a starting position argument.

What will be the output of the below given code? Explain with reason.
	let str="This is a test";
	console.log(str.indexOf("is",5));
	console.log(str.lastIndexOf("is",1));
Answer: str.indexOf("is", 5) will return 5. It starts searching from index 5 and finds "is" at index 5.
str.lastIndexOf("is", 1) will return -1 because the method searches backward from index 1, and "is" is not found before index 2.

What will be the output of the below code?
	let str = Hello World;  
	console.log(str.slice(-5, -2));
Answer: The code will result in a ReferenceError because Hello World is not enclosed in quotes. It should be a string: let str = "Hello World";. If corrected, the output of str.slice(-5, -2) would be " Wor" (the characters from index -5 to -3).

What is the difference between substr() and substring()?
Answer: substr(start, length) extracts a substring from the given start index for the specified length.
substring(start, end) extracts characters between the two specified indices. If the end is omitted, it extracts to the end of the string.

What will be the output of the below given code? Explain with reason.
	let str = "This is a test";  
	console.log(str.substring(-5));
Answer: The output will be "This is a test" because substring() treats negative values as 0. Since -5 is less than 0, it starts from the beginning of the string.

What will be the output of the below given code? Explain with reason.
	let str = "This is a test";  
	console.log(str.substring(3, 3));
Answer: The output will be an empty string "" because when the start index and the end index are the same, substring() returns an empty string.

Explain the output of below code:
	console.log(str.charAt());
Answer: The output will be an empty string "" because charAt() requires an index as an argument. If no index is provided, it defaults to 0, which returns the first character of the string. However, since str is not defined in the scope where this line is executed, it would result in a ReferenceError. If str was defined previously, it would return the first character of the string.

========================= DATE AND TIME ==================================================================================
Explain different ways of creating a Date/Time object.
Answer: There are several ways to create a Date object in JavaScript:
Using the Date Constructor:
	new Date(): Creates a Date object with the current date and time.
	new Date(milliseconds): Creates a Date object representing the time elapsed since January 1, 1970, 00:00:00 UTC.	
	new Date(dateString): Creates a Date object from a string representation of a date.
	new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds): Creates a Date object using specified parameters. Note that the monthIndex is zero-based (0 for January, 1 for February, etc.).
Using Static Methods:
	Date.now(): Returns the current timestamp in milliseconds.
	Date.parse(dateString): Parses a date string and returns the number of milliseconds since January 1, 1970.

What will be the output of the below code?
	const dt = new Date(2020, 08, 23);
	console.log(dt);
Answer: The output will be Sat Sep 23 2020 ... showing September instead of August. This is because JavaScript uses a zero-based index for months in the Date constructor. Therefore, 08 refers to September, not August. To create a Date object for August, you should use 07.

Explain various formats of ISO standard followed by JS.
Answer: JavaScript follows the ISO 8601 standard for date and time representations. The typical format is:
	Year: YYYY (e.g., 2023)
	Month: MM (01 for January, 02 for February, ..., 12 for December)
	Date: DD (e.g., 15)
	Time: HH:mm:ss.sss (hours, minutes, seconds, milliseconds)
	Timezone: Z (indicates UTC time)
	Full format example:
	YYYY-MM-DDTHH:mm:ss.sssZ
	For instance, 2023-09-26T14:45:00.000Z represents September 26, 2023, at 14:45:00 UTC.

DATE METHODS :
Get Character Month.
Answer:
	let dt = new Date();
	let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	console.log(arrMonths[dt.getMonth()]);
This code fetches the current month as a string from the arrMonths array. The getMonth() method returns the month index (0 for January, 1 for February, etc.), which is used to access the respective month name.

Find the date before 50 days of the given date.
Answer:
	let dt = new Date();
	dt.setDate(dt.getDate() - 50);
	console.log(dt);
This code calculates the date 50 days prior to the current date. The setDate() method is used to subtract 50 from the current date by calling getDate().

What will be the output if you add 35 as the date in the Date() constructor?
	let dt = new Date(2020, 07, 35);
	console.log(dt);
Answer: The output will be Mon Sep 05 2020 ... (or similar based on your timezone). When you pass the date 35, JavaScript automatically adjusts it by rolling over to the next month. In this case, August has 31 days, so it rolls over to September 5, 2020. The Date constructor autocorrects for leap years, varying month lengths, and other date validations.

TIME METHODS :
Calculate the date difference in days.
Answer:
	let dt = new Date(2020, 7, 25);
	let dt1 = new Date(2020, 7, 23);
	let n = dt.getTime() - dt1.getTime();
	n = (n / (1000 * 60 * 60 * 24));  // Convert milliseconds to days
	console.log(n);
This calculates the difference between two dates in milliseconds, and then converts it to days by dividing by the number of milliseconds in a day (1000 * 60 * 60 * 24).

How can you change hours or minutes in time?
Answer: You can modify the hours or minutes of a Date object using the setHours() and setMinutes() methods, respectively.
For example, to change hours:
	let dt = new Date();
	dt.setHours(dt.getHours() + 2);  // Add 2 hours
	console.log(dt);
To change minutes:
	let dt = new Date();
	dt.setMinutes(dt.getMinutes() + 30);  // Add 30 minutes
	console.log(dt);

========================= OOJS ===========================================================================================
OBJECT LITERAL :
Can you have dynamic keys with object literal?
Answer: Yes, you can have dynamic keys in an object literal using computed property names. This is done by wrapping the dynamic key inside square brackets [].
Example:
	let key = 'name';
	let obj = {
		[key]: 'John Doe' // [variableName]
	};
	console.log(obj);  // Output: { name: 'John Doe' }

How can you add read-only properties to an object?
Answer: You can use Object.defineProperty() to add read-only properties to an object by setting the writable attribute to false.
Example:
let obj = {};
Object.defineProperty(obj, 'id', {
    value: 101,
    writable: false
});

console.log(obj.id);  // Output: 101
obj.id = 202;         // This will not change the value
console.log(obj.id);  // Output: 101
What is property value shorthand with object literal?
Answer:
Property value shorthand is a way to simplify object property assignments when the property key and the variable name are the same.

Example:
let name = 'John';
let age = 30;
let person = { name, age }; // Instead of { name: name, age: age }
console.log(person);  // Output: { name: 'John', age: 30 }

What will be the output of this code?
let obj = { a: 'First' };
let obj1 = obj;
obj1.a = "Second";
console.log(obj.a);  // Output: Second
Answer:
The output is "Second" because obj1 and obj reference the same object in memory. When you modify obj1.a, it affects the original object obj, as both variables point to the same object.

How can we create a clone or separate copy of an object literal?
Answer:
You can create a shallow clone of an object using methods like Object.assign() or the spread operator.
Example with Object.assign():
let obj = { a: 'First' };
let clone = Object.assign({}, obj);
clone.a = 'Second';
console.log(obj.a);    // Output: 'First' (original object is unchanged)
Example with spread operator:
let obj = { a: 'First' };
let clone = { ...obj };
clone.a = 'Second';
console.log(obj.a);    // Output: 'First'
For deep cloning, you can use libraries like Lodash or JSON methods, but the above methods work for shallow cloning.

THIS OBJECT :
What will be the output of this code if you run in the browser and why?
function test() {
    console.log(this);
}
test();
Answer:
The output will be window (or the global object in a browser environment).
Explanation:
In non-strict mode, the value of this inside a regular function refers to the global object. In a browser, the global object is window. Since test() is called in the global context (i.e., not as a method of an object), this will point to the global window object.

If this function is executed in strict mode ('use strict';), 'this' would be undefined because, in strict mode, this defaults to undefined when a function is called without a specific object context.

What is the context of 'this' inside an arrow function? Or what will be the output of this code?
let obj = {
    test: () => {
        console.log(this);
    }
}
obj.test();
Answer:
The output will be window (or the global object in a browser environment).
Explanation:
Arrow functions do not have their own this binding. Instead, they inherit this from their surrounding lexical scope. In this case, this inside the arrow function is inherited from the context in which obj.test() was defined, which is the global scope. In a browser, the global object is window. Therefore, this refers to the global window object.

If you want this to refer to the object obj, you should use a regular function instead of an arrow function.

CALL, APPLY AND BIND :
What is the difference between call(), apply(), and bind()?

Answer:

call(): Invokes a function with a given this value and arguments provided one by one.

Syntax: function.call(thisArg, arg1, arg2, ...)
Example:
javascript
Copy code
function greet(name) {
    console.log(this.greeting + ', ' + name);
}

const obj = { greeting: 'Hello' };
greet.call(obj, 'Alice'); // Output: Hello, Alice
apply(): Similar to call(), but arguments are passed as an array.

Syntax: function.apply(thisArg, [argsArray])
Example:
javascript
Copy code
greet.apply(obj, ['Alice']); // Output: Hello, Alice
bind(): Returns a new function where this is permanently set to the specified value. Unlike call() and apply(), bind() doesn't immediately execute the function.

Syntax: function.bind(thisArg, arg1, arg2, ...)
Example:
javascript
Copy code
const boundGreet = greet.bind(obj, 'Alice');
boundGreet(); // Output: Hello, Alice
What will be the output of this code? Can you assign value to this object with the assignment operator =?

Code:

javascript
Copy code
const obj = {
    a: 6
}

function test() {
    this = obj; // Trying to assign a value to `this`
}

test();
Answer:
The output will result in an error. You cannot assign a value to this using the assignment operator =.

Reason:
In strict mode ('use strict'), assigning to this directly inside a function will throw an error, because this is a reserved keyword and cannot be reassigned. Even without strict mode, the value of this inside a regular function is determined by how the function is called and cannot be reassigned directly.

javascript
Copy code
// This will throw an error in strict mode
// or have no effect without strict mode.

CLASS,CLASS EXPRESSION, STATIC MEMBERS :
a class is a blueprint for creating objects with shared properties and methods.
constructor() method is a special method that is automatically called when a new instance of the class is created.
you can define methods (functions) that can access and modify the properties of the object.
Static methods are not called on an instance of the class but on the class itself. They are defined with the static keyword.
Static methods are often used for utility functions or operations that don't require an instance.
To create an instance of a class, you use the new keyword, followed by the class name. The constructor is called automatically when an instance is created.
JavaScript supports inheritance using the extends keyword. You can create a subclass (child class) that inherits from a parent class.
The super() function is used to call the constructor or methods of the parent class when working with inheritance.
JavaScript allows you to define getters and setters to access and modify private properties.
JavaScript now supports private fields within classes by prefixing them with #.


How can you create a class?

Answer:
In JavaScript, you can create a class using the class keyword. A class typically contains a constructor, methods, and properties.
Syntax:
	class MyClass {
		constructor(property) {
			this.property = property;
		}
		
		method() {
			console.log('This is a method.');
		}
	}
You can then create an object of the class:
const obj = new MyClass('value');

When is the constructor() called?
Answer:
The constructor() method is automatically called when a new instance of the class is created using the new keyword. It is used to initialize the object's properties.
Example:
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const obj = new MyClass('John'); // Constructor is called here

Can we have dynamic property or method names in a class?
Answer:
Yes, you can have dynamic property or method names in a class by using computed property names with square brackets [].

Example:

javascript
Copy code
const dynamicMethod = 'greet';
class MyClass {
    [dynamicMethod]() {
        return 'Hello!';
    }
}

const obj = new MyClass();
console.log(obj.greet()); // Output: Hello!
What is a class expression?

Answer:
A class expression is another way to define a class in JavaScript. It allows you to define a class inside an expression, just like function expressions.

Example:

javascript
Copy code
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};

const obj = new MyClass('Alice');
console.log(obj.name); // Output: Alice
Class expressions can also be anonymous:

javascript
Copy code
let AnotherClass = class {};
What are static members in a class? What is the purpose of defining them as static?

Answer:
Static members (methods or properties) are defined on the class itself, rather than on instances of the class. They are shared among all instances and can only be called using the class name, not an instance.

Purpose: Static members are useful for utility functions, constants, or any operations that don’t depend on instance-specific data.

Example:

javascript
Copy code
class MyClass {
    static staticMethod() {
        return 'This is a static method';
    }
}

console.log(MyClass.staticMethod()); // Output: This is a static method
How can you call another static method from a class?

Answer:
You can call another static method from within a class by using the this keyword (since it refers to the class itself in static context).

Example:

javascript
Copy code
class MyClass {
    static method1() {
        return 'Method 1';
    }

    static method2() {
        return this.method1() + ' and Method 2';
    }
}

console.log(MyClass.method2()); // Output: Method 1 and Method 2

INHERITANCE,SUBCLASSING AND EXTENDING BUILT-IN CLASS :
How can you inherit a class?

Answer:
In JavaScript, you can inherit a class using the extends keyword. The extends keyword is used to create a new class that is a child (subclass) of an existing class (parent or superclass). The subclass inherits all the properties and methods of the parent class.

Example:

javascript
Copy code
class Parent {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Call parent constructor
        this.age = age;
    }
}

const child = new Child('Alice', 10);
child.greet(); // Output: Hello, Alice
What is subclassing?

Answer:
Subclassing refers to the creation of a new class (subclass or child class) that inherits properties and methods from an existing class (superclass or parent class). The subclass can also add new properties or override methods from the parent class.

What is the purpose of the super keyword?

Answer:
The super keyword is used to call the constructor or methods of a parent class. In the constructor of a subclass, super() must be called before accessing this, allowing you to pass arguments to the parent class's constructor.

Example:

javascript
Copy code
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Calls the parent constructor
        this.age = age;
    }
}
How will you override a method?

Answer:
To override a method in a subclass, define a method with the same name as the parent class in the subclass. When the method is called on the subclass instance, the overridden version in the child class will be executed.

Example:

javascript
Copy code
class Parent {
    greet() {
        console.log('Hello from Parent');
    }
}

class Child extends Parent {
    greet() {
        console.log('Hello from Child');
    }
}

const child = new Child();
child.greet(); // Output: Hello from Child
How can you extend a built-in class?

Answer:
You can extend a built-in class, like Array, String, or Error, by using the extends keyword. This allows you to inherit the functionality of the built-in class and add new behavior or override existing methods.

Example:

javascript
Copy code
class CustomArray extends Array {
    sum() {
        return this.reduce((acc, value) => acc + value, 0);
    }
}

const arr = new CustomArray(1, 2, 3, 4);
console.log(arr.sum()); // Output: 10

DESTRUCTURING OBJECT LITERAL
Explain a practical scenario of object literal destructuring?

Answer: Object literal destructuring is commonly used when working with complex data structures or functions that return multiple values. It allows you to extract specific properties from an object directly into variables, which can make your code cleaner and more readable.

Practical Scenario: Imagine you have a function that returns a user's data as an object, and you only need the name and age properties from the returned object. Instead of accessing each property individually, you can use destructuring to directly assign the values.

Example:

javascript
Copy code
const getUser = () => {
    return {
        id: 101,
        name: 'John Doe',
        age: 30,
        email: 'john@example.com'
    };
};

// Object destructuring
const { name, age } = getUser();
console.log(name, age); // Output: John Doe 30
This is useful in cases where the object might contain many properties, but only a few are needed for a particular operation.

Explain the output of this code:

javascript
Copy code
const { a = 90, b } = { };
console.log(a, b);
Answer: In this code, object destructuring is used with default values.

The object on the right side of the destructuring assignment is an empty object {}, so it doesn't have properties a or b.
The variable a is assigned a default value of 90 because the empty object does not contain a.
The variable b has no default value and is undefined because the empty object also does not contain b.
Output:

javascript
Copy code
90 undefined
Explanation:

a is assigned 90 due to the default value.
b is undefined because no value for b exists in the object and no default value was provided.

CLASS ACCESSORS - GETTER & SETTER METHODS :
What is a getter or setter method?

Answer: Getter and setter methods are special methods in JavaScript that allow you to access and modify the properties of an object in a controlled manner. They are part of the object-oriented programming paradigm and help encapsulate the internal representation of an object.

Getter Method:
A getter method is a function that retrieves the value of a specific property. It allows you to define a property that can be accessed like a regular property but is actually a method that computes or returns a value when accessed.

Syntax:

javascript
Copy code
class Example {
    constructor(value) {
        this._value = value; // underscore indicates a private property
    }

    get value() {
        return this._value; // Getter method
    }
}

const example = new Example(42);
console.log(example.value); // Output: 42 (accessing the getter method)
Setter Method:
A setter method is a function that sets or updates the value of a specific property. It allows you to define a property that can be assigned a value like a regular property but actually runs a method when the property is set, allowing you to add validation or other logic.

Syntax:

javascript
Copy code
class Example {
    constructor(value) {
        this._value = value; // underscore indicates a private property
    }

    set value(newValue) {
        this._value = newValue; // Setter method
    }
}

const example = new Example(42);
example.value = 100; // Calls the setter method
console.log(example.value); // Output: 100 (accessing the getter method)
Summary:
Getters allow you to read the value of a property in a controlled way.
Setters allow you to write or update the value of a property in a controlled way.
They provide a way to implement encapsulation and data validation in your objects.

============================= WEB COMPONENTS ============================================================================
What is a web component and how can you create it?

Answer: A web component is a reusable piece of UI that encapsulates its structure, style, and behavior, enabling developers to create custom, reusable HTML elements. Web components leverage standard web technologies such as HTML, CSS, and JavaScript, allowing them to be used across various frameworks and applications. You can create a web component using the following main technologies:

Custom Elements: Define a new HTML element.
Shadow DOM: Encapsulate the element's internal structure and style.
HTML Templates: Define the structure of the component in a reusable way.
Creating a Web Component:

javascript
Copy code
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.textContent = 'Hello, Web Component!';
        shadow.appendChild(wrapper);
    }
}

customElements.define('my-component', MyComponent);
You can then use your component in HTML as <my-component></my-component>.

What is shadow DOM? Explain the need for it.

Answer: Shadow DOM is a web standard that enables developers to encapsulate a part of the DOM tree, allowing for the creation of self-contained components. It provides a way to isolate styles and scripts so that they do not interfere with the rest of the document.

Need for Shadow DOM:

Encapsulation: It prevents styles and scripts from leaking out or affecting other parts of the document.
Scoped Styles: Styles defined within a shadow tree only apply to that tree, preventing global styles from affecting the component.
Improved Maintainability: It allows for cleaner code organization and easier maintenance.
How do you add a component to a shadow DOM?

Answer: To add a component to a shadow DOM, you create an instance of the component within the constructor of the custom element and append it to the shadow root. Here’s an example:

javascript
Copy code
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const innerComponent = document.createElement('div');
        innerComponent.textContent = 'Inside Shadow DOM!';
        shadow.appendChild(innerComponent);
    }
}

customElements.define('my-component', MyComponent);
What is the purpose of the <template> tag?

Answer: The <template> tag is used to declare fragments of HTML that can be instantiated later in the document. It serves as a placeholder for content that is not rendered when the page loads, allowing for deferred rendering and dynamic content generation.

Example:

html
Copy code
<template id="my-template">
    <style>
        h1 { color: blue; }
    </style>
    <h1>Hello, Template!</h1>
</template>
You can clone and use the template in your component:

javascript
Copy code
const template = document.getElementById('my-template').content.cloneNode(true);
shadow.appendChild(template);
What is the observedAttributes() method's functionality?

Answer: The observedAttributes() method is a static method in a custom element class that returns an array of attribute names to be observed for changes. When any of these attributes change, the attributeChangedCallback() method will be invoked.

Example:

javascript
Copy code
static get observedAttributes() {
    return ['data-value'];
}
When will the attributeChangedCallback() method be invoked?

Answer: The attributeChangedCallback() method is invoked whenever one of the attributes specified in the observedAttributes() method is added, removed, or changed on the custom element. It receives three arguments: the name of the attribute, its old value, and its new value.

Example:

javascript
Copy code
attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
}
How can you improve rendering with the help of attributeChangedCallback()?

Answer: You can improve rendering by implementing the attributeChangedCallback() method to respond to attribute changes and update the UI efficiently. Instead of re-rendering the entire component, you can selectively update only the parts of the DOM that depend on the changed attributes, improving performance.

Example:

javascript
Copy code
attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-value') {
        this.shadowRoot.querySelector('span').textContent = newValue;
    }
}
Explain the purpose of the disconnectedCallback() lifecycle method.

Answer: The disconnectedCallback() lifecycle method is invoked when the custom element is removed from the DOM. It is useful for cleaning up any resources or event listeners that were set up during the element's lifecycle to prevent memory leaks.

Example:

javascript
Copy code
disconnectedCallback() {
    console.log('Element removed from the DOM');
}
What is light DOM?

Answer: Light DOM refers to the regular DOM that exists in the document outside of any shadow trees. It consists of all the elements that are not part of the shadow DOM, meaning it can be manipulated and styled by global styles and scripts.

How can you manage or display the content placed inside the custom HTML element?

Answer: You can manage or display the content placed inside a custom HTML element using the <slot> element in the shadow DOM. The <slot> element acts as a placeholder for light DOM content, allowing it to be rendered inside the shadow DOM.

Example:

javascript
Copy code
class MyComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const slot = document.createElement('slot');
        shadow.appendChild(slot);
    }
}

customElements.define('my-component', MyComponent);
You can use it in HTML as follows:

html
Copy code
<my-component>
    <p>This content is light DOM and will be projected into the slot.</p>
</my-component>

=============================== DOM ======================================================================================
What is DOM or DOM API?
Answer: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the document's content, structure, and style using JavaScript. The DOM API provides methods and properties to interact with these objects, enabling dynamic changes to the document.

What is a DOM Tree?
Answer: A DOM tree is a hierarchical representation of the document structure in the form of a tree. Each node in the tree corresponds to a part of the document, such as elements, attributes, text, and comments. The root of the tree is typically the <html> element, and child nodes represent the elements within it.

What do you mean by DOM Manipulation?
Answer: DOM manipulation refers to the process of using JavaScript to change the document structure, style, or content. This can include adding or removing elements, changing element attributes, updating text content, and modifying styles.

What is the difference between window & document object?
Answer:

Window Object: The global object representing the browser window. It includes properties and methods for controlling the browser window, such as opening new windows, accessing the history, and handling timers.
Document Object: Represents the DOM of the currently loaded document. It provides access to the content and structure of the web page, allowing manipulation of HTML elements.
What is the difference between window and document?
Answer: The window object is the top-level object that represents the browser's window environment, while the document object is a property of the window object that represents the HTML document currently being displayed. Essentially, document is part of the window.

What is DOM [Document Object Model] or DOM API?
Answer: The DOM is a programming interface that represents the structure of a document in a tree-like format, where each node is an object representing parts of the document. The DOM API provides methods and properties to interact with these objects, allowing developers to create, modify, and remove elements and attributes in the document.

What is BOM [Browser Object Model]?
Answer: The Browser Object Model (BOM) provides an interface for interacting with the browser itself, beyond just the document. It allows access to browser properties and methods, such as the window, navigator, screen, and history objects. BOM is used to control browser behavior and gather information about the user's environment.

Explain the difference between DOM and BOM?
Answer:

DOM: Focuses on the document structure and content, providing methods to manipulate HTML elements and attributes.
BOM: Focuses on the browser environment, providing methods to interact with the browser's window and other browser-related objects.
Which is the global object in the browser?
Answer: The global object in the browser is the window object. It serves as the root of the JavaScript environment and provides access to all global variables and functions.

How will we check the width and height of the window?
Answer: You can check the width and height of the window using the window.innerWidth and window.innerHeight properties.

javascript
Copy code
const width = window.innerWidth;
const height = window.innerHeight;
console.log(`Width: ${width}, Height: ${height}`);
How will you get the hostname or value typed in the address bar?
Answer: You can get the hostname using window.location.hostname.

javascript
Copy code
const hostname = window.location.hostname;
console.log(hostname);
How will you handle timer-based events?
Answer: Timer-based events can be handled using setTimeout() for one-time delays and setInterval() for repeated execution of a function at specified intervals.

javascript
Copy code
setTimeout(() => {
    console.log("This runs once after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("This runs every 2 seconds");
}, 2000);
Explain the difference between setTimeout() and setInterval().
Answer:

setTimeout(): Executes a function after a specified delay (once).
setInterval(): Repeatedly executes a function at specified intervals until stopped.
Why can't we write document.setTimeout() or document.setInterval()?
Answer: setTimeout() and setInterval() are methods of the window object. Since document is a part of the window, the timer functions are accessible directly through the global scope (which is window), not as methods of the document object.

How can you stop a timer?
Answer: You can stop a timer set by setTimeout() using clearTimeout() and by setInterval() using clearInterval().

const timeoutId = setTimeout(() => {
    console.log("This will not run");
}, 2000);

clearTimeout(timeoutId);

const intervalId = setInterval(() => {
    console.log("This will run");
}, 1000);

clearInterval(intervalId);
How will you create a digital clock?
Answer: You can create a digital clock using setInterval() to update the time every second.

javascript
Copy code
setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    console.log(time); // Display the time
}, 1000);
What is event bubbling and event capturing?
Answer:

Event Bubbling: The event starts from the target element and bubbles up to the root. It allows parent elements to respond to events triggered on their children.
Event Capturing: The event starts from the root and travels down to the target element. It is less commonly used than bubbling.
Which is the default propagation path?
Answer: The default propagation path is event bubbling, where the event starts from the target element and moves up through its ancestors.

How can you stop the event propagation?
Answer: You can stop event propagation using event.stopPropagation() within the event handler.

javascript
Copy code
element.addEventListener('click', (event) => {
    event.stopPropagation();
});
How can you change the default propagation path?
Answer: You can change the propagation path by listening for the event in capturing mode, using the third argument of addEventListener() as true.

javascript
Copy code
element.addEventListener('click', handler, true); // Capturing mode
How can you get the reference of the element on which the event is fired?
Answer: You can access the target element of the event using event.target.

javascript
Copy code
element.addEventListener('click', (event) => {
    const clickedElement = event.target;
});
Practical question: What will be the output of code & why?
javascript
Copy code
document.addEventListener('click', () => {
    console.log('Document clicked');
});
document.querySelector('button').addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Button clicked');
});
Answer: If you click the button, the output will be:

css
Copy code
Button clicked
The event propagation will stop at the button due to event.stopPropagation(), so "Document clicked" will not be logged.

What is Event Delegation?
Answer: Event delegation is a technique where a single event listener is attached to a parent element instead of multiple listeners on child elements. This takes advantage of event bubbling and improves performance and memory efficiency.

How are event bubbling or capturing useful in the practical programming world?
Answer:

Event bubbling allows for easier handling of events for dynamically created elements without needing to attach listeners to each element individually.
Event capturing can be used to implement custom behaviors before reaching the target element, such as preventing default actions on certain events.
Which property can be used to check the element type on which the event is triggered?
Answer: You can use the event.target property to get the reference to the element that triggered the event, and then check its type using tagName.

javascript
Copy code
element.addEventListener('click', (event) => {
    console.log(event.target.tagName); // Outputs the type of element
});
How can you get the value of the element which raised the event?
Answer: You can access the value of an input element using event.target.value.

javascript
Copy code
inputElement.addEventListener('input', (event) => {
    console.log(event.target.value);
});
How can you navigate through DOM?
Answer: You can navigate through the DOM using properties like parentNode, childNodes, nextSibling, previousSibling, firstChild, and lastChild.

What is a node in DOM tree? Explain different types of nodes.
Answer: A node in the DOM tree is an individual point in the document structure. Types of nodes include:

Element Node: Represents HTML elements (e.g., <div>, <p>).
Text Node: Represents the text within elements.
Comment Node: Represents comments in the HTML.
Document Node: Represents the entire document.
How can you access the next same level element for a given node element?
Answer: You can access the next sibling of a node using the nextSibling property.

javascript
Copy code
const nextElement = currentElement.nextSibling;
What is the difference between childNodes and children property?
Answer:

childNodes: Returns a live NodeList of all child nodes (including elements, text nodes, and comments).
children: Returns a live HTMLCollection of only the element nodes (excluding text and comment nodes).
How can you check whether an element has child nodes or not?
Answer: You can check if an element has child nodes using the hasChildNodes() method.

javascript
Copy code
if (element.hasChildNodes()) {
    console.log("Element has child nodes");
}
What is the purpose of DOM navigation?
Answer: The purpose of DOM navigation is to traverse and manipulate the document's structure and content dynamically, allowing developers to access and modify elements, attributes, and text as needed.

What will be the output of the below statement - element.lastChild.nextSibling?
Answer: The output will be the next sibling node of the last child of element. If the last child is the last node in the parent, nextSibling will return null.

Can you use document.getElementById() & element.getElementById()?
Answer: You can use document.getElementById() to get an element by its ID, but element.getElementById() will not work because getElementById() is a method of the document object, not an element object.

What does the getElementsByTagName() return?
Answer: getElementsByTagName() returns a live HTMLCollection of elements with the specified tag name in the document.

What is the difference between getElementsByClassName() & getElementsByName()?
Answer:

getElementsByClassName(): Returns a live HTMLCollection of elements that have the specified class name.
getElementsByName(): Returns a live NodeList of elements that have the specified name attribute (commonly used with form elements).
Explain the difference between querySelector() & querySelectorAll().
Answer:

querySelector(): Returns the first element that matches the specified CSS selector.
querySelectorAll(): Returns a static NodeList of all elements that match the specified CSS selector.
How can you search elements using pseudo classes?
Answer: You can search for elements using pseudo-classes by including them in the selector string passed to querySelector() or querySelectorAll().

javascript
Copy code
const firstChild = document.querySelector('li:first-child');
const evenItems = document.querySelectorAll('li:nth-child(even)');
Between getElementBy methods and querySelector methods which is better to use?
Answer: querySelector methods are generally preferred due to their flexibility in accepting any valid CSS selector, which allows for more complex and precise selections. However, getElementById, getElementsByClassName, and getElementsByTagName can be faster for simple queries.

Explain various ways to configure an event with HTML elements.
Answer: You can configure events using:

HTML Attributes: Using attributes like onclick, onchange in the HTML markup.
JavaScript Methods: Using element.onclick, element.onchange to assign functions directly.
addEventListener(): The most versatile method, allowing multiple events of the same type to be attached.
Explain syntax of addEventListener() method.
Answer: The syntax of addEventListener() is:

javascript
Copy code
element.addEventListener(event, function, useCapture);
event: A string representing the event type (e.g., 'click').
function: The function to be executed when the event occurs.
useCapture: A boolean indicating whether to use event capturing (optional, defaults to false).
What is an event object?
Answer: The event object is automatically passed to event handler functions. It contains information about the event that occurred, including properties like type, target, currentTarget, and methods to stop propagation and prevent default actions.

How will you disable right-click on an element?
Answer: You can disable right-click on an element by preventing the default context menu from appearing using event.preventDefault().

javascript
Copy code
element.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
How can you check whether a special key is pressed or not while an event is generated?
Answer: You can check if a special key is pressed by inspecting the event object properties, such as event.shiftKey, event.ctrlKey, event.altKey, and event.metaKey (for the Command key on macOS).

javascript
Copy code
element.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        console.log('Control key is pressed');
    }
});
How do you check mouse button value while an event is generated?
Answer: You can check the mouse button value using event.button, which returns a number representing the mouse button pressed (0: left button, 1: middle button, 2: right button).

javascript
Copy code
element.addEventListener('mousedown', (event) => {
    if (event.button === 2) {
        console.log('Right mouse button clicked');
    }
});
For ctrl key and cmd on mac - how will you write the condition to check the key press?
Answer: You can check for both the Ctrl key (Windows/Linux) and Command key (macOS) using event.ctrlKey and event.metaKey.

javascript
Copy code
element.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey) {
        console.log('Control or Command key is pressed');
    }
});
Explain the difference between clientX/Y and pageX/Y.
Answer:

clientX/Y: The mouse coordinates relative to the viewport (the visible area of the web page).
pageX/Y: The mouse coordinates relative to the entire document, including any parts not currently visible in the viewport.
Explain the difference between clientX/Y and screenX/Y.
Answer:

clientX/Y: Coordinates relative to the viewport.
screenX/Y: Coordinates relative to the user's screen, indicating the position of the mouse pointer on the screen.
How can you check if control and Z is pressed or not?
Answer: You can check for the Ctrl (or Command) key along with the 'Z' key using event.key and event.ctrlKey (or event.metaKey for macOS).

javascript
Copy code
element.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
        console.log('Control + Z pressed');
    }
});
What does event.code return?
Answer: event.code returns a string representing the physical key on the keyboard that was pressed, regardless of the current state of the keyboard (e.g., Caps Lock).

Explain the difference between event.code and event.key.
Answer:

event.code: Represents the physical key (e.g., "KeyA" for the 'A' key).
event.key: Represents the value of the key pressed (e.g., "a" if the 'A' key is pressed with or without Shift).
What is the difference between onblur and onchange event?
Answer:

onblur: Fires when an element loses focus.
onchange: Fires when the value of an input element changes and the element loses focus.
How will you handle events of checkbox and radio buttons [onchange/click]?
Answer: You can handle events of checkboxes and radio buttons using the change event to detect changes in their state.

javascript
Copy code
checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log('Checkbox is checked');
    }
});
Differentiate onkeypress/onkeyup and oninput event.
Answer:

onkeypress: Fires when a key is pressed down, but is deprecated for some key inputs. Only works for character keys.
onkeyup: Fires when a key is released.
oninput: Fires when the value of an input element changes, regardless of how it was changed (keyboard, paste, etc.).
Which event do you prefer with select [i.e. drop down list]?
Answer: The change event is preferred for handling selections in a dropdown list, as it fires when the user selects a different option.

How will you get the text value of the selected item from a select element, i.e., a drop-down list?
Answer: You can get the text value of the selected option using the value property of the select element.

javascript
Copy code
const selectElement = document.querySelector('select');
const selectedText = selectElement.options[selectElement.selectedIndex].text;
console.log(selectedText);
Explain about cut, copy, and paste events.
Answer:

cut: Fired when content is cut from an element, often triggered by keyboard shortcuts (e.g., Ctrl + X).
copy: Fired when content is copied, often triggered by keyboard shortcuts (e.g., Ctrl + C).
paste: Fired when content is pasted into an element, often triggered by keyboard shortcuts (e.g., Ctrl + V).
How can you stop an event of cut, copy, or paste for an element?
Answer: You can stop cut, copy, or paste events by using event.preventDefault() in their respective event handlers.

javascript
Copy code
element.addEventListener('cut', (event) => {
    event.preventDefault(); // Prevent cut event
})

===============================================ASYNC JS ==================================================================
What is a callback function?
Answer: A callback function is a function that is passed as an argument to another function and is executed after some kind of event or operation is completed. It allows you to run code after a certain task has been completed, often used for handling asynchronous operations.

What is an asynchronous process?
Answer: An asynchronous process is one that runs independently of the main program flow, allowing other operations to continue without waiting for the asynchronous operation to complete. This is particularly useful in JavaScript for tasks such as API calls, file reading, or timers.

What is the meaning of callback hell or pyramid of doom?
Answer: Callback hell, often referred to as the pyramid of doom, describes a situation in which multiple nested callback functions lead to code that is difficult to read and maintain. This happens when callbacks are nested within other callbacks, creating a deeply indented structure that resembles a pyramid.

What is a Promise?
Answer: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks to handle the result of the operation when it succeeds (resolved) or fails (rejected).

How will you configure a process that should be executed at the end of promise resolve or reject?
Answer: You can use the .finally() method, which allows you to specify code that should run after the promise has either resolved or rejected, regardless of the outcome.

javascript
Copy code
promise
    .then((result) => {
        // handle success
    })
    .catch((error) => {
        // handle error
    })
    .finally(() => {
        // code to execute at the end
    });
What is chaining the promise? Explain the syntax.
Answer: Chaining promises involves calling .then() (or .catch()) on a promise returned by another promise, allowing you to execute a sequence of asynchronous operations. Each .then() returns a new promise.

javascript
Copy code
promise
    .then((result) => {
        // handle result
        return anotherPromise; // return a new promise
    })
    .then((newResult) => {
        // handle newResult
    });
What will be the output of the given code?
javascript
Copy code
const pr = new Promise((resolve, reject) => {
    resolve("Over");
    setTimeout(() => {
        resolve("Again");
    }, 2000);
});

pr.then((msg) => {
    console.log(msg); // Output: "Over"
    return pr; // returns the same promise
}).then((msg) => {
    console.log(msg); // Output: "Over"
});
Answer: The output will be:

mathematica
Copy code
Over
Over
The second .then() receives the resolved value of the original promise since it returns the same promise.

What is the status of a promise by default?
Answer: A promise is in a "pending" state by default, meaning it has not yet been fulfilled or rejected.

What will be the status of a promise when resolved or rejected?
Answer:

When a promise is resolved, its status changes to "fulfilled."
When a promise is rejected, its status changes to "rejected."
Explain Promise.all() vs. Promise.allSettled() vs. Promise.race().
Answer:

Promise.all(): Takes an iterable of promises and returns a single promise that resolves when all the promises have resolved or rejects as soon as one promise rejects. The resolved value is an array of the resolved values.

Promise.allSettled(): Takes an iterable of promises and returns a promise that resolves after all of the promises have either resolved or rejected. The resolved value is an array of objects describing the outcome of each promise.

Promise.race(): Takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises resolves or rejects, with the value or reason from that promise.

What will be the output if the iterable is not a promise inside all() method arguments, e.g., as shown below where p2 is not a promise?
javascript
Copy code
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1");
    }, 2000);
});

const p2 = "Normal string";

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3");
    }, 2000);
});

Promise.all([p1, p2, p3]).then((prMsgs) => {
    console.log(prMsgs);
}).catch((err) => {
    console.log(err); // Output: "Normal string"
});
Answer: The output will be:

c
Copy code
Normal string
Since p2 is not a promise, the Promise.all() method will reject with that value.

How will you handle rejected multiple promises in the most efficient way?
Answer: Use Promise.allSettled() to handle multiple promises and check the outcome of each, regardless of whether they were fulfilled or rejected.

javascript
Copy code
Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Error:", result.reason);
        }
    });
});
Explain the purpose of the Promise.race() method.
Answer: The purpose of Promise.race() is to return a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, effectively allowing you to respond to the first completed promise.

What will be the output of an empty iterable if given as a parameter inside the race() method as shown in this code?
javascript
Copy code
const obj = Promise.race([]);
console.log(obj); // Output: Promise { <pending> }

setTimeout(() => {
    console.log(obj); // Output: Promise { <pending> }
}, 2000);
Answer: The output will be:

javascript
Copy code
Promise { <pending> }
Promise { <pending> }
Since the iterable is empty, the promise remains pending indefinitely.

Explain the functionality of async/await.
Answer: async/await is a syntactic sugar built on promises, allowing for more readable asynchronous code. An async function always returns a promise, and await pauses the execution of the function until the promise resolves, enabling you to write asynchronous code that looks synchronous.

Can you write await without async?
Answer: No, you cannot use await without async. The await keyword can only be used inside functions declared with async.

Do you need to return a promise from an async function?
Answer: Yes, an async function always returns a promise. If a non-promise value is returned, it will be wrapped in a resolved promise.

Can you have an async IIFE?
Answer: Yes, you can have an async IIFE (Immediately Invoked Function Expression). Here's an example:

javascript
Copy code
(async () => {
    const result = await someAsyncFunction();
    console.log(result);
})();
Which is the best way to handle errors with await?
Answer: The best way to handle errors with await is to use try...catch blocks.

javascript
Copy code
try {
    const result = await someAsyncFunction();
} catch (error) {
    console.error("Error:", error);
}
Explain the syntax of Promise.all() with async/await.
Answer: You can use Promise.all() with async/await to run multiple promises concurrently and wait for all of them to resolve.

javascript
Copy code
async function fetchData() {
    const [result1, result2] = await Promise.all([fetchPromise1(), fetchPromise2()]);
    console.log(result1, result2);
}
What is AJAX?
Answer: AJAX (Asynchronous JavaScript and XML) is a technique used in web development to send and receive data asynchronously from a server without refreshing the entire web page, allowing for dynamic updates to the content.

How will you set a timeout with an XHR request?
Answer: You can set a timeout for an XHR request using the timeout property of the XMLHttpRequest object.

javascript
Copy code
const xhr = new XMLHttpRequest();
xhr.timeout = 5000; // timeout in milliseconds
xhr.ontimeout = () => {
    console.log('Request timed out');
};
How can you set the data format for the response?
Answer: You can set the expected response format using the setRequestHeader() method to specify the Accept header.

javascript
Copy code
xhr.setRequestHeader('Accept', 'application/json');
Explain the readyState property of XHR.
Answer: The readyState property of the XMLHttpRequest object indicates the current state of the request. It has the following values:

0: UNSENT - The request has been created but not yet sent.
1: OPENED - The request has been opened.
2: HEADERS_RECEIVED - The request has been sent and the headers have been received.
3: LOADING - The response is being downloaded.
4: DONE - The request has completed.
Explain the onreadystatechange event.
Answer: The onreadystatechange event is triggered every time the readyState property changes. You can check the readyState and status properties to determine when the request is complete and handle the response accordingly.

javascript
Copy code
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
How can you force the XHR request to stop execution?
Answer: You can call the abort() method on the XMLHttpRequest object to stop the request.

javascript
Copy code
xhr.abort();
When is the load method called?
Answer: The load event is fired when the request completes successfully, and the response has been fully downloaded.

javascript
Copy code
xhr.onload = function () {
    console.log(xhr.responseText);
};
How will you set HTTP headers? Explain the sequence.
Answer: You set HTTP headers using the setRequestHeader() method after opening the request with open(), but before sending it with send().

javascript
Copy code
xhr.open('GET', 'https://api.example.com/data');
xhr.setRequestHeader('Authorization', 'Bearer token');
xhr.send();
Explain different ways of getting response header values.
Answer:

Using getResponseHeader(): You can retrieve a specific header using its name.

javascript
Copy code
const contentType = xhr.getResponseHeader('Content-Type');
Using getAllResponseHeaders(): You can get all response headers as a single string and then parse it.

javascript
Copy code
const headers = xhr.getAllResponseHeaders();
Explain the fetch API functionality.
Answer: The Fetch API provides an interface for making network requests similar to XMLHttpRequest. It returns a promise that resolves to the Response object representing the response to the request.

javascript
Copy code
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
How will you make a DELETE request with the fetch API?
Answer: You can make a DELETE request by specifying the method in the options object passed to fetch().

javascript
Copy code
fetch('https://api.example.com/resource/1', {
    method: 'DELETE'
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
What is Symbol.asyncIterator?
Answer: Symbol.asyncIterator is a well-known symbol that indicates that an object can be iterated asynchronously using a for await...of loop. It is used to define an asynchronous iterator, which allows for iterating over asynchronous data sources.

Can we use the spread operator with async iterator e.g. [...obj]?
Answer: No, you cannot use the spread operator directly on async iterators because it expects a synchronous iterable. Instead, you can create an array from an async iterator using a loop.

How will you handle the async iterator using generator function syntax?
Answer: You can create an async generator function using the async function* syntax, allowing you to yield values asynchronously.

javascript
Copy code
async function* asyncGenerator() {
    yield await fetchData1();
    yield await fetchData2();
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})()

=================== MAP SET WEAKMAP WEAKSET ==============================================================================
What are the advantages of using Map over objects?
Answer:

Key Types: Maps can use any value (objects, functions, primitive types) as keys, while objects only allow strings and symbols as keys.
Order of Insertion: Maps maintain the order of elements based on the order of insertion, while objects do not guarantee any order.
Performance: Maps provide better performance for frequent additions and removals of key-value pairs due to optimized structures, whereas objects can become inefficient as they grow in size.
Size Property: Maps have a size property that directly returns the number of entries, while for objects, you need to compute the size manually (e.g., using Object.keys(obj).length).
Iteration: Maps provide built-in methods for iteration (forEach, keys, values, entries), while iterating over an object requires using for...in or Object.keys().
How will you iterate through Map?
Answer: You can iterate through a Map using several methods:

Using forEach:

javascript
Copy code
const myMap = new Map([['a', 1], ['b', 2]]);
myMap.forEach((value, key) => {
    console.log(key, value);
});
Using for...of:

javascript
Copy code
for (const [key, value] of myMap) {
    console.log(key, value);
}
Using keys(), values(), and entries() methods:

javascript
Copy code
for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

for (const [key, value] of myMap.entries()) {
    console.log(key, value);
}
Can you assign key/values with this syntax? Explain the reason for the answer - map[key]=value
Answer: No, you cannot use the syntax map[key] = value to assign values in a Map. This syntax is used for objects. In Maps, you must use the set method:

javascript
Copy code
myMap.set(key, value);
The reason is that Maps are designed to have keys of any type, whereas the bracket notation is only valid for string or symbol keys in objects.

How can you convert simple objects to Map?
Answer: You can convert a simple object to a Map using Object.entries():

javascript
Copy code
const obj = { a: 1, b: 2 };
const myMap = new Map(Object.entries(obj));
How can you convert a Map into simple objects?
Answer: You can convert a Map to a simple object by using the Object.fromEntries() method:

javascript
Copy code
const myMap = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(myMap);
How will you remove an item or all items from Map?
Answer:

To remove a specific item from a Map, use the delete method:

javascript
Copy code
myMap.delete(key);
To remove all items from a Map, use the clear method:

javascript
Copy code
myMap.clear();
What is the difference between Map and Set?
Answer:

Map: A Map is a collection of key-value pairs, where each key is unique. You can access values by their corresponding keys.
Set: A Set is a collection of unique values, meaning it cannot contain duplicate values. Sets do not associate values with keys; they simply store values.
How will you remove specific values from Set?
Answer: You can remove specific values from a Set using the delete method:

javascript
Copy code
const mySet = new Set([1, 2, 3]);
mySet.delete(2); // Removes the value 2 from the set
What will entries() method with Set return?
Answer: The entries() method for a Set returns an iterator of the form [value, value], where each entry contains the value as both the key and the value. However, it is not commonly used because Sets do not have a concept of key-value pairs like Maps.

javascript
Copy code
const mySet = new Set(['a', 'b']);
const entries = mySet.entries();
console.log(entries.next().value); // Output: ['a', 'a']
Explain the difference between Map and WeakMap.
Answer:

Map: A Map holds strong references to its keys and values, which means that even if there are no other references to a key, it will not be garbage collected until the Map itself is cleared or deleted.
WeakMap: A WeakMap holds weak references to its keys. This means if there are no other references to a key, it can be garbage collected, allowing for memory efficiency. However, WeakMaps do not support iteration and do not have a size property.
Explain the difference between Set and WeakSet.
Answer:

Set: A Set holds strong references to its values, meaning that values in a Set are retained in memory as long as the Set itself exists.
WeakSet: A WeakSet holds weak references to its values. This allows values to be garbage collected if there are no other references to them, making WeakSets memory efficient. However, WeakSets do not support iteration and do not have a size property.

======================= DEBUGGING TECHNIQUE ==============================================================================
**001 Introduction to debugging & Developer Tool**
Debugging is the process of searching and resolving the bugs or errors from the code.
runtime and design time errors :
    Runtime error is a program error that occurs at the time of execution. That is while the program is running. 
    Runtime errors are often referred to as bugs. 
    These errors are faced by the end user. 
Design errors occurs at the time of development, at the time of designing the application. That is while the developer is coding. 
for example, when you accidentally write wrong variables or sometimes when you call the function or use variable names that are not declared or typo in programming language, keywords generate these types of design time errors. 
These types of errors are also call as syntax errors, are generated at the time of compiling the code and can be reduced with advanced code editors. 

"Runtime errors or bugs are faced by the end user that is user of the program. Whereas syntax errors or design time errors are by the developers". 

There are various plugins available in the browser that help you to debug your application like Redux Dev Tools, Dart Debug Extension, X Debug Helper, Google Analytics and many others. 
These are Google Chrome plugins. 

The developer tool is a part of all the browsers. Every browser has a developer tool. The developers have to run logs, debug code, check, response time from the server. All such types of operations you can manage or check using developer tool. 

Ctrl + shift + i : To open developer tool

1.First Icon with the arrow is the inspect element. It is a switch that allows you to inspect any element of the HTML document. When you click the element, it turns on and as soon as you select any element it turns off. In the Elements tab, it shows the source code related to the element you clicked. 
2.Elements tab : which shows the HTML code of the currently open web page. And on the right side it displays the CSS used for this page. 
Developers generally use this to refer and to understand what is happening behind the scene of their web page. 
3.Console tab where you can try various console object statements. Logs, warnings errors are displayed in the console tab and are categorized in the sidebar. 
3.Sources tab : It shows the JavaScript source code of the currently open web page. And on the left side, there is a list of JavaScript files. If you select any of the file, you can see the source code and can check for errors. You can put breaks on these code lines for debugging.
4.Network tab : displays all the requests made to the server along with the response be it an HTML, CSS, image, javascript files or any other asset. It shows the network activity like status, type, initiator, time size, etc. as soon as the page and its resources started loading. 
 
Q1.Explain debugging & run-time vs design-time errors
Debugging is the process of finding and resolving the bugs or errors in the applications. And the difference between runtime and design time is that runtime errors are occurred at the time of execution, whereas the design time errors are the syntax errors that occur at the time of coding, that is at the time of coding or at the time of compiling or at the time of development. 
Runtime errors are faced by the end users, but design time errors are for developers as they can be corrected at the time of compilation. 

Q2.What is a developer tool?
Answer:
Developer tools are built-in tools provided by web browsers (like Chrome, Firefox, and Edge) that help developers inspect, debug, and optimize their web applications. They include features for viewing and modifying HTML/CSS, monitoring network requests, checking console outputs, profiling performance, and debugging JavaScript.

**002 Understanding Developer tool**   
control + shift + i : If you want to modify any text or design and see how it will look without changing your actual code. Then it can be done here in the Elements Panel.  On the right side, you will see the CSS has applied to the page. This is the default CSS of the element. But you can add or change your own CSS using this element.style object which is at the top.
element.style applies style to the selected element temporarily.
So using element.style object you can test and modify the style, layout and design of the elements in the web page and preview them as well. 
This will not change the actual CSS code. 

It is a common practice of developers to print the logs here in the console panel, which is its main use along with running JavaScript. 
You can make changes in the web page using the console as well as it has full access to the page window. 

You can also write commands or expressions in the console. Also you change the content of the HTML element.

The console is considered as an interface. It is also called as Console API of the "window" object for the developers. Console API provides fundamental debugging functionalities like logging, stack traces, timers and counters etc. 
The console object has many default methods like console.assert(), console.log(), console.debug(), console.error(). 

The sources panel is used for many purposes, like to view files, edit CSS and JavaScript, debugging, to create and save JavaScript snippets, or set up a workspace etc. 
To debug the code we use breakpoints. Breakpoint is the point that we put on a line of code where we want the debugger to stop or pause the execution to find the error or exception. 
You can put multiple break points in the code. Here. Also for detailed debugging we can use options like with conditions, with the help of watch, call Stack, Scope and other additional tools. 


Developer tool also provides "mobile simulation" which means you can simulate to mobile devices appearance to inspect how the page looks and works on mobile devices. For this we use toggle device option which is near to inspect element. 
This is used to check if the web page is responsive or not. Responsive means web page is compatible to various devices like mobiles. 
You can add custom device by editing.
If you want to customize the responsive page layout, select responses from here and you can adjust the size the way you want. 

Q1.What is responsive web design (RWD)?
Answer:
Well, responsive web design is something where you design the website which you open on a computer screen. It looks that it is built for that screen only if you open it in a tablet, if you open it in a mobile device. So no matter in which screen you open, it will appear as if it is designed for that particular screen size only. 
There are many ways to make the responsive designs. The key points which make the site responsive is basically the CSS, especially @mediaquery, you can use bootstrap to make site responsive and Flexbox is also widely used to make the layout responsive. 
Q2.What is a breakpoint & how do you place it?
Answer:
A break point simply means a point that you place on a line of code where you want to break or pause the execution of code for debugging or just to evaluate the values of various variables. 
By clicking on the line number, we can place the breakpoint in the source tab. Breakpoint means the execution of code will pause on this line. On the right pane shows the list of break points in the code.

**003 Debugging Pane Tools : Watch, Call stack & Scope**
The Sources tab panel has three parts. First is the file navigation pane that profiles every file that the page requests. The second is the code editor pane. The contents of the selected files are displayed here. And the third one is called the debugging pane that provides various tools for inspecting and debugging JavaScript code. 

Watch : 
Developer tool provides the feature to watch multiple variables and expressions throughout your code. The watch tool lets you do this. 
To add the variable or expression click plus icon add variable name and press enter. After expanding we see all the information related to this variable like id, readOnly, tagName, value, childrenNodes and all others. 

You can also check or evaluate the variable value to inspect the modification. 
Refresh icon used to update variables when their values evaluate as it continues to run. Every watched item gets updated with the current value. 
To remove the added variables click on cross icon in front of the variable. 
When the debugger is paused on a line of code or at the breakpoint. The scope pane shows the local and global scope of current values of the variables defined. It shows the block scope, local and global scope of the variables and their current values. This also shows the closure variables, if any, whenever applicable. To edit any variable value just double click on it. The scope chain will be empty in case the debugger is not paused on a line of code. 
CallStack :  There are many functions in a program that perform different tasks when they are called. To monitor that, on which function calls what action takes place, you can use the call stack pane. 

Call stack can be seen as a data structure that provides information about the current subroutine or function of the program being debugged. 
It displays the stack of all the functions called and currently executing. Using this stack of data (call stack) for the debugging is termed as stack tracing. 

Q1.How does the watch tool help in debugging?
Answer:
The watch tool helps in monitoring multiple variables and expressions throughout the code. You can check values and all other information provided by it for the current and additional variables, along with inspecting the changes as the program continues to run. 

What is stack trace?
Answer:
A stack trace works on the call stack, which shows a stack of functions and subroutines currently under execution. Developers and software experts define it as a list of subroutine calls that are performed at the time of execution. The stack that is the call stack is used to analyse contents of each subroutine and how they run.

**004 Debugging Pane  Code Navigation**
Q1: How to navigate through code while debugging? OR How to navigate through the code at the time of debugging. 
Answer : 
resume/pause script execution button : F8
step over next function call : F10
step into next function call : F11
step out of current function : F11
step : F9
Deactivate all the breakpoints : Ctrl + F8
Once the debugger has paused, you can start navigating throughout the functions and code. To resume the execution, click on this resume script execution icon and it will continue execution until it encounters any other breakpoint. 
When the debugger has paused on a particular region of code and if it seems bug free and you want to skip that code and jump to the next function, then click on step over the next function call option. 

step inside button to step inside the function and step outside button to step out of the function. 

In case you want to debug the code step by step and monitor the code flow. Press the step option which will navigate line by line code. 

Deactivate all breakpoints option deactivate all the breakpoints. 

**005 Event Listener Breakpoints**
When the exact region of the code to debug is known, then we can use line breakpoints. 
Event listener breakpoints : 
Event listener is an internal process that "waits for any event to occur" and when it occurs the action will be execute related to the event. The events can be any key press on the keyboard or the mouse click single or double click by the user. addEventListener() method in JavaScript is an inbuilt function to add event listeners.

The event listener breakpoints are used when you want to pause the execution on the code that runs after an event is fired. 
In the source tab > right side debugging pane > Event Listener Breakpoints : We see different types of events like animation, DOM Mutation, Drag and drop events, Device, Keyboard events. Lord Events, Mouse events, touch event, window events etc.
When we select options like click (mouse) or Set innerHTML (Parse) from the "Event Listener Breakpoints", it will automatically stops execution of the code at thoese points. So these events acts as a breakpoint.

Q1: What are event listeners?
Answer:
Event listener is an internal process that "waits for any event to occur" and when it occurs the action will be execute related to the event. The events can be any key press on the keyboard or the mouse click single or double click by the user. addEventListener() method in JavaScript is an inbuilt function to add event listeners.

**006 Conditional & Programmatic breakpoints**
We used breakpoints in the debugging pane directly, but we can put breakpoints in the program as well. It is same as setting a break point, but because it is set in the program, it is called the programmatic breakpoint. To set it we just need to add the "debugger" keyword inside the code. 
The debugger pause at the point where the "debugger" word is written. 
Avoid writting "debugger" in source tab panel instead write it in the code directly.

Conditional breakpoints : are the breakpoints that will pause the execution only when the provided condition has a truthy result. It will not pause the execution if the condition is false. 
To put conditional breakpoint : In source pane > right click on line number of the code > Add conditional breakpoint > add condition in the dialogue box like n1 > 15 and press enter. If the value of n1 is less than 15 it will not pause the execution.

Q1.How does the programmatic breakpoint work?
Answer:
The programmatic breakpoints are set using "debugger" statements in the code. The debugger pauses when it finds this "debugger" statement in the code. 
If the debugging is not enabled, that is developer tool is not open, then "debugger" statement will not work. 

Q2.How to place a conditional breakpoint?
Answer:
To put conditional breakpoint : In source pane > right click on line number of the code > Add conditional breakpoint > add condition in the dialogue box like n1 > 15 and press enter.

**007 What are DOM breakpoints**
In this lecture, we will learn about the DOM breakpoints. This itself is a question that what are DOM breakpoints and how do they function? 
DOM stands for document object model and every element in the web page is called the DOM Node. 
To break the execution in case of the "DOM structure mutation" or "modification". we used the DOM breakpoints. 
The DOM mutation can be : 
    subtree modification
    attributes modification
    node removal 
To put a down breakpoint : right click on the element of the web page > select inspect > we see highlighted code for that element in the Elements panel > right click on highlighted code > Break on > we see 3 options : subtree modification, attributes modification, node removal > select one of these > the blue dot on the side shows that the breakpoint is set. 

subtree modification breakpoint : will be triggered whenever there are changes like adding, moving or removing the child nodes. That is modification in the subtree.
In the debugging pane, it shows call stack and DOM Breakpoints. The debugger pauses when there is a modification in the subtree. Resuming the execution when needed.
To remove the break point right click on highlighted code > Break on > select subtree modification again. 

attribute modifications : implies that the debugger pauses when there are changes in the attributes of the node or elements.
The attribute modification breakpoint is triggered when the attributes of the selected element change. 

node removal :  pauses the execution when a selected element or node is removed. 

What are DOM breakpoints?
Answer:
To break the execution in case of the "DOM structure mutation" or "modification", we use the DOM breakpoints. DOM breakpoints allow developers to pause execution when changes are made to the DOM. This includes modifications like adding, removing, or changing attributes of DOM elements. Developers can set these breakpoints in the elements panel of developer tools.

Q1.How do the DOM breakpoints work?
Answer:
First we need to right click on the element that we want to debug, then we inspect it. After that the code gets highlighted for the particular element, we right click on highlighted code & select Break on option. This will give another 3 options to add DOM breakpoint :  subtree modification, attributes modification, node removal > select one of these which sets the breakpoint.

**008 How does XHRFetch breakpoints work**
XHR is the abbreviation for "XML HTTP request". If you want to break the execution for the XHR URL request(http request) or a fetch API that the page requests has a specific string pattern. For this XHR or fetch breakpoints are used. 

It fetches the URL and pauses when the debugger runs into the specified string pattern. 
Ctrl + Shift + i > Sources tab > XHR/fetch breakpoints > select Any XHR or fetch  
The debugger pauses every time a URL is fetched or requested because we have selected "Any XHR or fetch" option. 

To pause the execution only when a particular string is encountered :
Ctrl + Shift + i > Sources tab > XHR/fetch breakpoints > click on plus icon > in dialogue box put the string like "www" > uncheck "Any XHR or fetch" option
As soon as it found "www" the execution is paused. 
So this breakpoint pauses the execution only when it finds the specific string in it, if mentioned. Otherwise, you can also pause on every request using "Any XHR or fetch" option.

Q1.How does XHR/Fetch breakpoints work?
Answer:
XHR/Fetch breakpoints pause execution when an XMLHttpRequest or Fetch API call is made. Developers can inspect the request and response objects, check headers, and see the network activity that led to the current state of the application.

**009 Exception Breakpoints**
When you want to pause the execution on a line that is throwing either caught or uncaught exception, then exception breakpoints are used. 

In developer tools > Sources tab > click on "Don't pause on exception" icon (near Deactivate all breakpoints button) > click on "Pause on caught exceptions". 
If we select "Pause on caught exceptions" option the debugger not only pause for the caught exceptions but also pause for the uncaught exceptions. 

Q1.How to debug the code with exceptions?
Answer:
You can set up exception breakpoints in developer tools, which will pause execution whenever an exception is thrown, allowing developers to inspect the error and the context in which it occurred. In Chrome, this can be done by enabling "Pause on exceptions" in the Sources panel.
To debug the code with exceptions we use exception break point. To pause on the exception enable the "Don't pause on exception" icon. And check the option "Pause on caught exceptions" if you want to stop the execution on uncaught exception also.

**010 The console Object Methods**
The console object provides access to the developer tool debugger console from inside the code. Console is part of global window object so you can write "window.console" or you can directly see "console" because it's part of global objects or directly available. 

There are various console object methods :
console.log() method is basically used to print logs in the developer tool console. 
The console.log() method prints the log messages in the console and used to evaluate and inspect the variable values in the program. 
console.info() method which outputs the informative log messages to the console related to the HTML element. For example, console.info() displays the HTML tag with its content and information related to attributes. 

console.table() : 
It is used to display code data in a tabular format in the console, and that can be done using console.table(). This console can be used to write JavaScript directly for testing purposes. 

console.warn(): When you want to provide any custom warning use it. 

console.clear():  Used to clear the console

console.error(): To display any error message in the console 

console.debug() : To debug any function or code snippet.

Q1.Explain different console object methods
Answer:

console.log(): Outputs general information to the console.
console.error(): Outputs error messages to the console.
console.warn(): Outputs warning messages to the console.
console.info(): Outputs informational messages to the console.
console.debug(): Outputs debug information to the console.
console.table(): Displays tabular data as a table in the console.
console.time(): Starts a timer with a specified label.
console.timeEnd(): Stops the timer and logs the elapsed time.

**011 console.time()  related methods**
The code requires a specific time for execution. We can set a timer in the JavaScript code that will display the time taken for execution. But this time is not your setInterval() not the timer in the actual code, but this timer is related to the console only. 
The console.time() method sets a timer and takes a specific name or a label for that timer as a parameter. 
Use console.time() to start the timer & console.timeEnd() to end the timer. It dispays the time taken to execute the piece of code.
Use it when you want to check the response time of your code & manage it.

console.timeLog() provides the current value of the timer, set by the console.time() method. 
console.timeLog() is used in between the console.time() & console.timeEnd().

What does the console.time() method do?
Answer:
The console.time() method starts a timer that can be used to track the duration of a specific operation or block of code. You can give the timer a unique label to distinguish it from others.
It sets timer in JavaScript which returns the time taken by the code to execute.
How to check the current execution time?
Answer:
To check the current execution time, use console.timeEnd(label) after the operation you want to measure. This stops the timer and logs the elapsed time to the console.
It is used to check the current time that is time at a particular point where the statement is found.
    console.time('MyTimer');
    console.timeLog('time1');
    // Some operation
    console.timeEnd('MyTimer'); // Outputs the time taken for the operation









