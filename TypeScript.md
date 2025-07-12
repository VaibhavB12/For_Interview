### **Key Points on TypeScript (TS) vs JavaScript (JS)**  

#### **1. What is TypeScript?**  
- TypeScript is a **strongly typed** language, whereas JavaScript is **loosely typed**.  
- TypeScript is a **superset of JavaScript**, meaning all JavaScript code is valid TypeScript code.  
- TypeScript adds features like **type system, enums, generics, and interfaces** that JavaScript does not have.  

#### **2. Why Use TypeScript Over JavaScript?**  
- **Stronger Type Checking:** Helps catch errors at compile time instead of runtime.  
- **Object-Oriented Features:** Supports **classes, interfaces, and inheritance** for better code organization.  
- **Improved Code Readability & Maintainability:** Enforces strict types, reducing unexpected errors.  

#### **3. Does the Browser Understand TypeScript?**  
- No, the browser only understands JavaScript.  
- TypeScript code is **compiled** into JavaScript before running in the browser.  

---

### **TypeScript Features & Code Examples**  

#### **4. TypeScript is Strongly Typed**  
- In TypeScript, variables have **fixed types**.  
- Example:  
  ```typescript
  let name: string = "John";  
  name = 25; // ❌ This will cause a compile-time error.
  ```  
- In JavaScript, the same variable can hold different types, which can cause **runtime errors**.  

#### **5. TypeScript is a Superset of JavaScript**  
- Any valid JavaScript code will work in TypeScript.  
- Example:  
  ```typescript
  let message = "Hello"; // This is valid JavaScript and also valid TypeScript.
  ```

#### **6. Object-Oriented Features in TypeScript**  
- TypeScript supports **classes and object-oriented programming** like Java and C#.  
- Example:  
  ```typescript
  class Person {
      name: string;
      constructor(name: string) {
          this.name = name;
      }
  }
  ```

#### **7. TypeScript Detects Errors at Compile Time**  
- JavaScript detects errors only when the code runs.  
- TypeScript finds errors before running the code, making it more **reliable**.  

---

### **Installing TypeScript & Checking Version**  
#### **8. Install TypeScript**  
- Run this command:  
  ```
  npm install -g typescript
  ```
- To check the installed version:  
  ```
  tsc --version
  ```

---

### **Differences Between `let` and `var`**  
#### **9. Scope Difference**  
- `var` has **function scope**, meaning it is available inside the function but not limited to a block.  
- `let` has **block scope**, meaning it is available only inside the `{}` block where it is declared.  
- Example:  
  ```typescript
  function test() {
      for (var i = 0; i < 3; i++) {
          console.log(i); // ✅ Works inside loop
      }
      console.log(i); // ✅ Still accessible (bad practice)
  }
  
  function test2() {
      for (let j = 0; j < 3; j++) {
          console.log(j); // ✅ Works inside loop
      }
      console.log(j); // ❌ Error: j is not defined
  }
  ```

---

### **Type Annotations in TypeScript**  
#### **10. What is Type Annotation?**  
- Type annotation **assigns a fixed type** to a variable or object.  
- If we assign a different type, **TypeScript gives a compile-time error**.  
- Example:  
  ```typescript
  let age: number = 25;
  age = "twenty-five"; // ❌ Error: Type 'string' is not assignable to type 'number'
  ```

---

### **Built-in (Primitive) & User-defined (Non-Primitive) Types**  
#### **11. Primitive (Built-in) Types**  
- Used for **simple values**:  
  - `string` → `"Hello"`  
  - `number` → `123`  
  - `boolean` → `true` / `false`  

#### **12. Non-Primitive (User-Defined) Types**  
- Used for **complex values**:  
  - `array` → `let numbers: number[] = [1, 2, 3];`  
  - `tuple` → `let person: [string, number] = ["Alice", 30];`  
  - `enum` → `enum Color { Red, Green, Blue }`  
  - `class` → `class Car { brand: string; constructor(brand: string) { this.brand = brand; } }`  

---

### **Conclusion**  
- TypeScript **improves JavaScript** by adding **strong typing, object-oriented features, and compile-time error checking**.  
- It helps **write better, more structured, and error-free code**.  
- TypeScript code needs to be **compiled** into JavaScript before running in a browser.


### **Key Points About TypeScript Variables & Data Types**  

1. **Variable Declaration**  
   - In TypeScript, you can declare variables using `let`, `var`, or `const`.  
   - `let` is preferred over `var` due to scope differences.  
   - `const` is used for values that should not change.  

2. **Type Annotation**  
   - Unlike JavaScript, TypeScript allows you to specify a variable’s data type using a colon (`:`).  
   - Example: `let a: number = 10;`  

3. **Default Type**  
   - If no type is assigned, TypeScript sets it as `any`, which allows any value.  

4. **JavaScript Compatibility**  
   - TypeScript compiles into JavaScript.  
   - JavaScript does not have strict type checking, while TypeScript does.  

5. **Compilation & Errors**  
   - TypeScript checks for type errors before running the code.  
   - If an incorrect value is assigned, TypeScript gives an error and won’t compile.  

6. **Constant Variables (`const`)**  
   - A `const` variable must be assigned a value when declared.  
   - Once assigned, its value cannot change.  

7. **Variable Naming Rules**  
   - Can contain letters (`a-z, A-Z`) and numbers (`0-9`).  
   - Cannot start with a number.  
   - Can include `_` (underscore) and `$` (dollar sign).  
   - Cannot contain spaces or special characters (except `_` and `$`).  

8. **Primitive Data Types in TypeScript**  
   - `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.  

9. **Strict Type Checking**  
   - TypeScript enforces strict typing to prevent errors.  
   - Example: If a variable is declared as `number`, you cannot assign a `string` to it.  

10. **Hoisting & `var`**  
   - `var` behaves differently due to hoisting, which will be explained separately.  
   - It is recommended to use `let` and `const` instead of `var`.  




==========================================================================================================================
TYPESCRIPT NIRMAL :
JavaScript has "var" & "let" to declare a variable and "const" to declare a constant. It is the same in TypeScript as well But in JavaScript you don't have a choice to explicitly decide the datatype.
let a:number
console.log(a) // undefined
a = 5;
console.log(a) // 5
Syntax of variable declaration :
   let <variableName>:<datatype>=value
   const <variableName>:<datatype>=value
While defining the constant, you have to assign the value along with because later it won't allow you to assign.
A variable name can contain an alphabet or a number A variable name cannot contain spaces in between A variable name cannot start with a number

Primitive Data Types :
1.Numbers :
When we talk about numbers : Number or numeric value Hexadecimal Binary Octal in JavaScript / TypeScript, all of these fall under the numeric category.
When you declare a variable with a number — it means it can store any valid numeric value Like JavaScript, the very same number is also used to store float values So any number typed variable is by default — a floating—point value only.
let b:number = 0.1001
console.log(b) // 0.1001
Whether you give a floating point value or a decimal value it will work with the number datatype itself.
let b:number=0b111010; // binary
let h:number=0x27AD;   // hexadecimal
let o:number=0o2703    // octal
console.log(b,h,o); // 58 10157 1475

1.What all types of values a number can store in TypeScript?
In JavaScript / TypeScript, all the below fall under the number/numeric category 
   Number/ numeric value 
   Float value 
   Hexadecimal 
   Binary 
   Octal
It's not like a traditional programming language like integer, double or may be float TypeScript is considering JavaScript as base, so it's going to follow the same rules

2.How will you store a binary or hex value in TypeScrlpt? 
let b:number=0b111010; // binary
let h:number=0x27AD;   // hexadecimal
let o:number=0o2703    // octal
console.log(b,h,o); // 58 10157 1475
We use these different types in TypeScript in the same way we use in JavaScript

2.Boolean :
A boolean variable contains true / false values Similar to JavaScript, the value you assign to a boolean variable has to be true / false in lower case
With boolean variables, there is a logical operator provision, you can use '!' to negate it.
let a:boolean=true
let b:boolean=!false
console.log(!a); // false
console.log(b);  // true
1.What will be the output of below given code? 
let a:boolean = !true; 
console.log(!a)
Ans : true

3.Null, undefined, void : 
Whenever you declare a variable in JavaScript, it is treated as undefined. undefined is the data type, "undefined" means the variable is written there but there is no existence of it in the memory. By default, any variable declared in TypeScript (like JavaScript) is going to be "undefined".
let a:number;
console.log(typeof a) // undefined
Empty string is not undefined in typescript, it is treated as string.
let a:string='';
console.log(typeof a) // undefined

undefined is data type itself, null actually treated as an object. But if we try to apply Primitive operation on null it will be treated as zero instead of treating as an object.
let a: string | undefined;
a = 'vbn'
console.log(a) // vbn

null is a primitive type in TypeScript. You can explicitly declare a variable as null: 
   let x: null = null 
It is valid but not useful because you can not assign any data type to x later, since strictNullChecks is enabled by default.
Correct Approach is : Best practise to assign null to a variable is using pipe '|' operator (used for type safety)
Using the pipe (|) operator to combine null with another data type is a better approach because it allows flexibility while keeping type safety.
   let username: null; // ❌
   let username: null = null // ❌
   let username: string | null = null; // ✅
   console.log(username) // it will assign default null
   username = 'vai'      
   console.log(username) // vai
IMP : Whenever using null or undefined combine it with another data type, as strictNullChecks is enabled by default.
   let a: null // ❌
   let a: null = null  // ❌ 
   let a: number | null = null  // ✅
   a = 6
   let b: number=5;
   let c: undefined
   console.log(a+b) // 11
   console.log(b+c) // NaN 'c' is possibly 'undefined'

In traditional programming language like C & C++, Whenever you write a function, it has a return type. In typescript you can also decide the return type of the function also using void. void means nothing. You use void when the function is not going to return any values.
We must define return type of the function in typescript. Return type is the type of value the function is going to return after the operation is done.
function sum(a:number, b:number):number {
  return a + b;
}
console.log(sum(6, 7))
In JavaScript by default any function returns undefined. If you do not write return statement at the end of the function all JavaScript functions by default return undefined.
In JavaScript :
function test() {
  console.log('nothing to return')
}
console.log(test()) // nothing to return & undefined
In TypeScript when we define return type, it means you are fixing that function will return specific type of value. But if a function is not returning any type of value or it does not have the return statement at the end then you must use 'void' as return type.
"void" is a kind of datatype which says that there is nothing to return / assign in the function.

1.Explain the difference between null & undefined.
Null is assignable value whereas we don't need to assign undefined as any variable we declare by default it is undefined.
JavaScript implicitly converts null to 0 in arithmetic operations. TypeScript does not allow arithmetic with null as strictNullChecks is enabled by default. null is falsy in logical operations, but not equal to 0 (null == 0 → false).
undefined + number → Results in NaN in both Typescript & JavaScript
   console.log(undefined + 5) // The value 'undefined' cannot be used here. 
   console.log(null + 5) // The value 'null' cannot be used here.
Typescript does not allow any operation with undefined or null unless you explicitly convert them to number.
   console.log(Number(undefined) + 5) // NaN
   console.log(Number(null) + 5)  // 0 + 5 = 5
2.When do you need the void datatype?
A function which does not return any type of value, then in such cases we use the void datatype.

4.any :
"any" is one datatype in TypeScript, which can hold any type of value If you don't specify the type, it will be considered as "any". When we declare variable without specifying data type, typescript assigns it 'any' data type. It means variable can have any type of value.
By default, whenever you declare a variable in JavaScript, it can hold any type of value.
TypeScript assigns the any type to a when declared without an explicit type or initialization.
   let a;  // any data type is assigned by default
   let a: any; // any data type is assigned explicitly
   console.log(typeof a); // undefined

1.When do you think "any" type is useful in your code? 
"any" is often used when you don't know which type of value will be assigned to a variable in future E.g., You have data returning from 3rd party APls, & you want to avoid TypeScript compile time error, then you declare a variable as "any" This is a common practice we see when we are not sure about what type of value will be returned into a variable.

5.Type annotation & Type inference : It means fixing the data type while declaring variable. With the colon (:) sign we explicitly annotate the data type. 
When we can declare variable without data type but typescript will assign 'any' data type to that variable. We mostly use 'any' data type when you don't know which type of value will be assigned to a variable in future.
When we can declare variable & assign value to it without using type annotation (without specifying data type), the typescript compiler infers or assumes the type according to assigned value. This is called as the inference means typeScript infers or assumes the type depending on the assigned value.
let x=3; 
console.log(typeof x) // number
let a = 'vbn'
console.log(typeof a) // string
a = 4  // Error Type 'number' is not assignable to type 'String'
Depending on the type of value assigned to a variable, TypeScript infers / assumes / decides the datatype as well.

1.When does TypeScript infers the datatype ?
There are various situations where, even though we have not given the type annotation that is not explicitly defined the datatype the typeScript infers (assumes) the datatype.
There are 3 situations which i can explain :
   1.TypeScript infers or assumes the datatype when you assign value to the variable without specifying data type. For example let x=4. Here the value assigned to variable is number so typeScript infers that x is of data type number.
   2.When assigning default values to the function parameters, Typescript automatically infers or the data type of the parameters.
   function sum(a=4, b=5){
      return a + b
   } 
   3.When a function is returning a specific type of value or function has specific return type & we assign that returned value to the variable then typeScript will treate variable as that type.
   function sum(a = 3, b = 5): number {
      return a + b;
   }
   console.log(sum()); // 8
   let a = sum(6, 7); 
   console.log(typeof a); // number 
   Here typescript will assign number data type to the variable 'a'

6.Hoisting, function scope, block scope :
Scope : Scope of variable means its the lifetime or availability of the variable. If you declare a variable in one function then it won't be available in the other function. Scope of variable can be local or global. When we declare variable inside a function it is local to that function. To declare the variable as global we declare it ouside all the functions.
   let x: number = 10
   function a(): number {
      x = x + 5
   }
   function b(): number {
      console.log(x)
   }
   console.log(a()) // undefined 15
   console.log(b()) // 10 undefined


Block Scope : A variable is block-scoped when it is accessible only within the block {} where it is declared. Variables declared with "let" and "const" have block scope. Accessing them outside the block results in a ReferenceError.

Function Scope : A variable is function-scoped when it is accessible throughout the function in which it is declared. Variables declared with "var" have function scope. Accessing them outside the function results in a ReferenceError

Hoisting :  Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before execution.
   In case of variable declared with "var" only declarations are hoisted but initialization do not hoisted, that means variable initialized with undefined.
   In the case of a variable declared with let or const, both the declaration and initialization are not hoisted, meaning the variable remains in the Temporal Dead Zone (TDZ) until it is assigned a value. Accessing it before declaration results in a ReferenceError.
   When we try to access a variable declared with var before its declaration, it results in undefined due to hoisting.
   When we try to access a variable declared with let before its declaration, it results in a ReferenceError due to the Temporal Dead Zone (TDZ).
   When we try to access a variable declared with const before its declaration, it results in a ReferenceError due to the Temporal Dead Zone (TDZ).

console.log(y) // ReferenceError: y is not defined
console.log(x) // undefined
var x=9;
console.log(a) // ReferenceError: Cannot access 'a' before initialization
let a;
console.log(b) // SyntaxError: Missing initializer in const declaration
const b

7.String :
let a:string = 'I'm not new to TS'
console.log(a) // SyntaxError: Invalid or unexpected token
To correct this either we use double quotes or escape character "\"
let a:string = "I'm not new to TS"
console.log(a) // I'm not new to TS
let a:string = "I\'m not new to TS"
console.log(a) // I'm not new to TS
let a:string = "I\'m not \n new to TS"  // newline
let a:string = "I\'m not \t new to TS"  // tab

\b Backspace   \v Vertical Tab
\f Form feed   \u For unicode
\n New line    \' Display'
\r Carriagereturn \" Display "
\t Horizontal tab \\ Display\

When you want to diplay \ in sentence
let a:string = 'I'm not \new to TS'
console.log(a) 
// I'm not 
ew to TS
let a:string = 'I'm not \\new to TS'
console.log(a)  // I'm not \new to TS

8.Unicode values with string data type :
\u is an escape sequence which will allow you to work with unicode characters. The string datatype is stored in UTF-16 format. In case if there is a special character to be displayed then unicode is represented with a 4—digit hexadecimal number. To display this character you can use \uHHHH where H is the 4—digit hexadecimal number.
For example : Hex value for '©' sign is 00A9. 
let a:string = "00A9"
console.log(a) // 00A9
let a:string = "\u00A9"  // we have used \u to print hex value ©
console.log(a) // © 
When you have hex value more than 4 digits we use curly brackets 
let a:string = "\u{1F601}"
console.log(a) // 😁
The range for emoji is 1F601 to 1F64F

1.How to deal with Unicode characters?
We can use \u for dealing with unicode characters & for long unicode characters (more than 4 words) we use curly brackets.

9.Type aliases : You can define custom data type in typescript using type aliases.
Type aliases in TypeScript are used to declare custom data types. They allow you to define complex, reusable types with a custom name.
type Address = {
  Street: string,
  City: string,
  PinCode: number
}
function showData(obj:Address){
  console.log(obj.Street, obj.City, obj.PinCode)
}
console.log(showData({Street:'my', City:'your', PinCode: 123})) // my your 123 undefined

You can use a union type with a type alias by using the pipe operator (|) to allow multiple data types.
   The pipe operator (|) allows defining multiple data types in a Type Alias.
   It improves code reusability and type safety.
   Used for variables, function parameters, and object properties.
      type Pincode = number | string;
      let p :Pincode;
      p = 'Test'
      console.log(p)
      p = 123
      console.log(p)

1.How can you define your own or custom datatype?
We can define custom data type using type alias, the "type" keyword is used to do so.


10.never :
In bigger applications, we sometime create functions which handle the errors & this type of functions never return anything, these functions are only used to generate errors.
It means that the function does not finish the process & breaks / crashes in between in a way because there will be a throw statement. It never returns anything, you can set "never" as a return type for such functions.
never Vs void :
never :
   Used for functions that never return anything for example function that throws an error or function with infinite loop
   The function never reaches the end & never return anything
   Use never for functions that always throw errors or run indefinitely.
void :
   Used for functions that return nothing for example logging functions
   The function returns undefined
   Use void for functions that don’t return meaningful values (e.g., logging, event handlers)
Examples :
   1.never Example: Function That Throws an Error
   function throwError(message: string): never {
      throw new Error(message);
   }

   try {
      throwError("Something went wrong!"); // Always throws an error
   } catch (error) {
      console.error("Caught error:", error);
   }
   ✅ Handling Strategy: Use try...catch to catch the error and prevent program crashes.
   2.never Example: Function With an Infinite Loop
   function infiniteLoop(): never {
     while (true) {
       console.log("Running forever...");
      }
   }
   ❌ No handling needed because this function never stops executing.
   3.void Example: Logging Function
   function logMessage(): void {
     console.log("Logging information...");  
   }
   logMessage(); // ✅ Allowed, prints message
   ✅ Handling Strategy: void functions return undefined, so avoid assigning their return value to variables.
   4.void Example: Event Handler
   function handleClick(): void {
     console.log("Button clicked!");
   }
   document.getElementById("myButton")?.addEventListener("click", handleClick);
   ✅ Handling Strategy: No handling required, as the function simply logs an action.

void means “no return value”, which is similar to undefined. If strictNullChecks is enabled, null is not allowed.
never means “a value that will never exist”. You cannot assign anything to never, because it represents an impossible state.

1.What is "never" type? Explain with an example
When you have situations like raising an error or inifinite loop, these kind of functions which never ends & breaks in between in such cases use never.
function raiseError(eN:number, eD:string){
    throw{
        errNumber: eN,
        errDesc: eD
    }
}
raiseError(14, 'Invalid User') // {errNumber: 14, errDesc: 'Invalid User'}
2.What is the difference between "void" & "never" type?
You can assign undefined to void (always), and null if strictNullChecks is false. However, you cannot assign null or undefined to never. Check above


To run typescript file we use : tsc app.ts
For automatically run typescript file on changes : tsc app.ts --watch OR tsc app.ts -w
Watch mode used for hot reloading your typescript file.
Watch mode can keep a watch on individual file, and whenever there is a change made, it will compile it automatically as a JavaScript file.
1.What is the watch mode and how can you run TypeScript compiler in the watch mode?
   by using --watch or -w parameter

Watch mode for entire project :
   tsc --init  : used to initiate the project
   it will create tsconfig.json
   tsc -w
To exclude files from typescript compilation : 
   open tsconfig.json & after second last curly bracket add comma & following code :
      "exclude" : [ "product.ts", "node_module", "*.dev.ts" ]   
   Compiler will not watch for product.ts or it does not compile it. Also we can give folder name in that array like node_module. You can use wildcard * for multiple files
To automatically exclude other files from compilation :
   "include" : ["app.js", "product.ts"]
   Now typescript will only compile these two files, excluding all other files in the project

1.What is the use of tsconfigjson file and how do you create it?
The tsconfig.json file contains the configuration related to the entire project. To create this file we use tsc --init command. 
2.How can you run a specific file in a watch mode ?
Whenever there are changes in the file, & you don't want to stop and re-run the TypeScript compiler, use watch mode —> tsc -w. Watch mode automatically run the typeScript compiler on changes in file
3.How can you avoid selected files from getting compiled?
In tsconfig.json add entry in exclude or include array. "exclude" is an array that can hold a list of files that you want to avoid from compiling when the tsc is running.

Setting compilation target :
In tsconfig.json we have key or property named compilerOptions, which contains multiple options for compilation.
Options in compilerOptions :
1.targat option :
The target option basically decides that the code converted by TypeScript compiler should be in which version of JavaScript
for es5 code -> "target": "es5"  
for es6 code -> "target": "ES2015"  
2.lib option :
JavaScript & Browser APIs including DOM are available in TypeScript by default. In default settings lib is commented & all these are available by default. It also depends on target you selected before.
"lib": ["ES5", "DOM"]
When installing TypeScript, it comes with :—
   JavaScript APIs like Array.prototype.map, promise etc.
   Browser APIs such as the DOM, setTimeout, fetch API, Webworker or console.log etc
These library references are installed under the src/lib folder in the lib directory of TypeScript installation
By default, depending on the target option, libraries are included E.g. If you set the target to ES5, then certainly Promise will not be available as it was introduced in the ES2015 i.e ES6.
So when you set the libraries, you have to take care of all related APIs you use. If they are not set — then by default, it generally takes care of the project and project configuration

What is the purpose of the "lib" option?
So the "lib" option allows you to set the library i.e all the APIs you want to use. The list of APIs available on git repository.

What will be the default value of the "lib" option?
It mainly depends on the target if the target is not set then by default, it includes almost everything. If you want to manually add a few additional libraries, you can write that list in the "lib" option.

3.module option : Defines how TypeScript handles modules (import/export).
   "CommonJS" – Used in Node.js
   "ES6" – Used in modern browsers
   "AMD" – Used in RequireJS
   "ESNext" – Supports the latest ES module features
   {
     "compilerOptions": {
      "module": "ES6"
      }
   }
4.outDir option : Specifies where the compiled JavaScript files should be saved.
   {
     "compilerOptions": {
     "outDir": "./dist"
      }
   }
5.outFile : Combines multiple TypeScript files into one JavaScript file. Instead of multiple .js files, it creates one single bundle.js.
{
  "compilerOptions": {
    "module": "AMD",
    "outFile": "./dist/bundle.js"
  }
}
6.rootDir : Defines the source directory for TypeScript files.
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
7.removeComments & noEmit : 
   removeComments: Removes all comments in the compiled code
   noEmit: Prevents TypeScript from generating JavaScript files. The TypeScript compiler will check for errors, but it won’t generate JavaScript files. Useful if you only want to check for errors without outputting .js files.
{
  "compilerOptions": {
    "removeComments": true
  }
}
{
  "compilerOptions": {
    "noEmit": true
  }
}
8.sourceMap - Generating Source Maps : Creates .map files to debug TypeScript in the browser.
Helps browsers map .js code back to TypeScript for debugging. In Chrome DevTools, you will see TypeScript files instead of JavaScript.
{
  "compilerOptions": {
    "sourceMap": true
  }
}
9.inlineSources - Include Source Code in Source Maps : Embeds TypeScript directly inside the .map file. Useful when debugging without access to the original .ts files.
{
  "compilerOptions": {
    "sourceMap": true,
    "inlineSources": true
  }
}
To apply these settings, create a tsconfig.json file and run : tsc 

Arrays & Tuples :
Array : An array is a collection of values of the same type.
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(numbers[0]); // Output: 1
console.log(names.length); // Output: 3
Modify Arrays :
push() – Add an element at the end.
pop() – Remove the last element.
unshift() – Add an element at the beginning.
shift() – Remove the first element.

Tuple : A tuple is an ordered array with a fixed number of elements, each with a specific type.
let user: [string, number] = ["Alice", 25];
console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 25
The first element must be a string, and the second must be a number.

Union Type : A Union Type allows a variable to hold multiple types.
let value: string | number;
value = "Hello";  // ✅ Allowed
value = 42;       // ✅ Allowed
// value = true;  ❌ Error: Only string or number allowed

Narrowing & Type Guards : TypeScript automatically detects the exact type inside a condition. typeof helps TypeScript narrow down the correct type.
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ TypeScript knows it's a string
  } else {
    console.log(value.toFixed(2)); // ✅ TypeScript knows it's a number
  }
}
printLength("Hello"); // Output: 5
printLength(42.567); // Output: 42.57

map() Method : Creates a new array by applying a function to each element. Returns a new array without changing the original.
let numbers: number[] = [1, 2, 3];
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9]

reduce() & reduceRight() : reduce() – Reduces an array from left to right. reduceRight() – Reduces an array from right to left.
let nums: number[] = [1, 2, 3, 4];
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
let product = nums.reduceRight((acc, num) => acc * num, 1);
console.log(product); // Output: 24

Multidimensional Array : An array of arrays. Array which contains rows & columns called as Multidimensional array.
Single dimensional array contains one row only.
The number of dimensions is based on how deeply nested the arrays are, not how many arrays there are.
Count how many nested arrays it takes before you reach the actual value (like a number or string).

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6

let threeD: number[][][] = 
[[[1, 2],[3, 4] ],[ [5, 6],[7, 8] ] ];



TypeScript is strict datatype language 
JS array can contain any type of data but in case of typescript you have the fixed data type
In memory the each element of array has fixed unique address, to access these element you have to use index number. Index number begins with zero & ends at n - 1, where n is total number of elements in an array
let a:number[] = [1,3,4]
console.log(a[0])  // 1st element
console.log(a[a.length - 1]) // last element
console.log(a.length)  // total length 3
console.log(typeof(a[0])) // number
for(let i=0; i<a.length; i++){
  console.log(a[i])
}
When you use arr.length in for condition always use less than '<'
When you use arr.length - 1 in for condition always use less than '<='

When you declare an array like let a:number[] & try to assign value to it later a[0]=5 it will not work, because JS will assume it as a variable not an array. To overcome this declare array like this : let a:number[]=[];
let a:number[]=[];
a[0] = 5
console.log(a)
Q.What is an array? Explain in detail ?
An array is a data structure which is used to store multiple values in single variable. In JavaScript arrays can store any type of data while in typescript arrays can store only specific type of data like string array stores string values only or number array stores number values only.

Typescript is superset of JavaScript means all the JavaScript features are valid in TypeScript. While arrays in both languages are similar, JavaScript arrays can store values of any data type, whereas TypeScript arrays are type-safe and store values of a specific data type only.
Array is a collection of similar data type values in typescript. We can store multiple values Each element of an array can be accessed with the index number. We can access the elements of an array using index numbers. The last element can be accessed using array.length - 1 & to get the total number of elements using array.length.
Syntax : 
let numbers: number[] = [1, 2, 3];
OR
let numbers: Array<number> = [1, 2, 3];

Q. To get all odd numbers from array ?
let numbers: number[] = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    console.log(numbers[i])
  }
}

Q. To get all even numbers from array ?
let numbers: number[] = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    console.log(numbers[i])
  }
}

Q. To get all prime number from array ?
let numbers: number[] = [1, 2, 3, 4, 5];
function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // If divisible, it's not prime
  }
  return true; // It's a prime number
}
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    console.log(numbers[i]); // Print if it's a prime number
  }
}

Q. To check if given number is prime or not ?
function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i < num; i++) { // No i <= num coz a number is always divisible by itself
    if (num % i === 0) return false; // If divisible, it's not prime
  }
  return true; // It's a prime number
}
console.log(isPrime(5)) // true





ALL TYPESCRIPT DECLARATIONS :
1.Primitive Data Types : number, string, boolean, null, undefined, bigint, and symbol
let age: number = 30;
let name: string = "Alice";
let isActive: boolean = true;

2.Reference Data Types : Arrays, Objects, Functions
Arrays :
let numbers: number[] = [1, 2, 3];
Objects :
interface User {
  id: number;
  name: string;
  email: string;
}
let user: User = {
  id: 1,
  name: "Bob",
  email: "bob@example.com"
};






In JavaScript, everything is an object—including arrays and functions—except for primitive data types, which are immutable. Immutable doesn’t mean you cannot reassign the value; it means the value itself cannot be changed. To allow primitives to use methods, JavaScript temporarily wraps them in their corresponding object wrappers.

Objects store data by reference in memory. So, when you copy an object, both variables refer to the same memory location, and changes made through either variable will be reflected in both.

Everything in JS is an object including arrays & functions, except primitive data types which are immutable also. Immutable does not mean you can not reassign it it means you can not redeclare it. To allow access to methods to primitive data types JS temporarily wraps with objects version. 
Object stores data by reference in memory, so when we copy object both object reference to same location in memory & any changes made will reflect in both objects 
A constructor is a function or class used to create objects with the same structure.
Built-in constructors include Object, Array, Date, Function, RegExp, Error, etc

Final : In JavaScript, there are two main types of values: primitive and reference.
Primitive values (such as strings, numbers, booleans, null, undefined, and symbols) are simple and immutable. Immutable means the value itself cannot be changed, although you can reassign a new value to the variable. Primitive values take up less memory and are stored directly in the call stack.
To allow primitive values to access methods (like .toString() or .slice()), JavaScript temporarily wraps them in their corresponding wrapper objects (like String, Number, or Boolean).
Reference values (objects, arrays, functions) are stored in the heap because they can be large and complex. When you work with objects, variables do not hold the actual object but a reference (or pointer) to the location in memory where the object is stored. If you copy an object variable, both variables refer to the same object in the heap. Therefore, changes made through one reference are visible via the other.


this keyword : this keyword refers to current context of the code
1.In Global Scope this keyword points to global object or window object
console.log(this); // In browser: `window` object

2.In Normal function this keyword points undefined in strict mode & points to the global object in non-strict mode
function sayHello() {
  console.log(this);
}
sayHello(); // In browser: window (or undefined in strict mode)

3.In Objects this keyword points to Object calling that method (NOT THE OBJECT HAVING THAT METHOD).
const obj1 = {
  name: "Vaibhav",
  greet() {
    console.log("Hello from", this.name);
  }
};
const obj2 = {
  name: "Shahrukh",
  greet: obj1.greet // copying the method from obj1
};
obj2.greet(); // Hello from Shahrukh
obj1.greet(); // Hello from Vaibhav

4.In arrow function : Arrow functions do not have their own this. Instead, they capture this from their lexical/surrounding scope the context in which the arrow function was defined.
const user = {
  name: 'Vaibhav',
  greet: () => {
    console.log('Hi ' + this.name);
  },
  greet1() {
    console.log('Hi ' + this.name);
  }
};
user.greet(); // Hi undefined
user.greet1(); // Hi Vaibhav

Borrowing : 
const obj1 = {
  name: 'vbn',
  greet() {
    console.log('Welcome', this.name);
  },
};
const obj2 = {
  name: 'nbv',
};
obj2.greet = obj1.greet;
obj1.greet();
obj2.greet();

forEach : Syntax : arr.forEach((elem,index,array,thisArg))
forEach method used to loop through an array.
When forEach used with arrow function "this" will not refer to itself. forEachO cannot be stopped in between like you break the loop.
let arr: string[] = ['A', 'B', 'C', 'D', 'E'];
arr.forEach((elem, index) => {
  console.log(elem, index);
// below code does not work as forEach does not allow break statement
  if (index === 2) {
    break;
  }
});

let arr: number[] = [7, 9, 5];
console.log(arr[arr.length]); // undefined

Searching in an array : indexOf(), lastIndexOf(), includes()
1.arrName.indexOf(searchElement, startlndex);
indexOf() method returns the index number of the specified element. If the searched element does not exist in the array, then it will return -1. If there are more than one matches found, it will return the index of the first element found. indexOf() performs a case-sensitive search for values.
Example :
let arr: string[] = ['One', 'Two', 'One', 'Three', 'Four', 'One', 'Five'];
console.log(arr.indexOf('One')); // 0
console.log(arr.indexOf('One', 3)); // 5
console.log(arr.indexOf('one')); // -1 'one' is not found

2.arrName.last|ndexOf(searchElement, startlndex);
lastIndexOf() returns the last index of the specified element. It starts searching backward, from the end of the array or string toward the beginning. (arr.length - 1 to 0)
console.log(arr.lastIndexOf('One', 3)); // 2 It starts searching from index 3 backwards

3.arrName.includes(searchElement, startlndex);
It returns true if the element is found otherwise it returns false.
console.log(arr.lastIndexOf('One', 3)); // true


==========================================================================================================================
FUNCTIONS :
39 - Function Basics & 40 - Anonymous Functions
Function is a sub—program which can be called as and when required as many times as we want. In JavaScript, Function is very useful and in some cases syntactically different as well. When JavaScript did not have classes, functions were used to act as classes as well.
With TypeScript, functions are even stricter and are behaving in a more traditional way.
The function always receives some arguments (some information), this information is processed by the function body & it may return some value as well.
If you do not write a return statement, by default in JavaScript, it returns undefined. So by default, when a function is executed, and if there is no return type, then it will return undefined.
In typeScript you always make sure that there is some return type for the function & if there is no return type then we put data type void as return type.
1.Explain the TypeScript function and how is it different from JavaScript?
When you define the function in typescript, you can decide parameter data type. That is the first thing. So each parameter can have data type. Not only that, for a function, you can decide the return type & if there no return type then we put data type void as return type.
Syntax :
1.Function Declaration Syntax :
function functionName(parameter1: type, parameter2?: type, parameter3: type = 'default_parameter'): returnType/void {
  // function body
}
2.Function Expression or Anonymous function Syntax :
let functionName = function (parameter1: type, parameter2?: type, parameter3: type = 'default_parameter'): returnType/void {
  // function body
}
Entire function is assigned to a variable functionName & the variable functionName is object, the object of type function.
3.Arrow Function Syntax :
const functionName = (parameter1: type, parameter2?: type, parameter3: type = 'default_parameter'): returnType/void => {
  // function body
};

function sum(a: number, b: number): number {
  return a + b;
}
console.log(typeof sum); // function
console.log(sum(2, 4));

1.How do you invoke an anonymous function?
In TypeScript, instead of giving a function a name, we can assign the entire function to a variable. This variable acts as a reference (or pointer) to the function and is of the function object type. By using the variable name we call or invoke the function.

41 - Arrow Function
Arrow function (lambda function):
lt's just the way of writing a function, though, there is some behavioral change as well compared to the traditional function, especially with the "this" object. 

DEFAULT VALUE :
When creating a function with parameters, sometimes we need that, there has to be a default value in case there is no value passed to the function. 
function multiply(a: number, b: number): number {
  return a * b;
}
console.log(multiply()); // NaN
After setting default values :
function multiply(a: number = 1, b: number = 2): number {
  return a * b;
}
console.log(multiply()); // 2
When we pass arguments when calling function then default values gets overridden by arguments.
function multiply(a: number = 1, b: number = 2): number {
  return a * b;
}
console.log(multiply(3,2)); // 6

42 - Default Optional Parameters
OPTIONAL PARAMETER :
The optional value may or may not be passed as argument when the function is called. The inference shows either undefined or data type we give. If there is no value passed then it will be undefined.
function sayHi(a: number = 1, b?: string) {
  console.log(a, b);
}
console.log(sayHi(5));

1.How will you pass default values to parameters in a function?
In function parameters, a default value is assigned using the equals (`=`) sign after the type annotation.
2.What is the advantage of optional parameter feature?
When we call the function & do not follow the same number of parameters, typescript will not give any error if the parameter is optional.

43 - Rest Operator
REST OPERATOR :

==========================================================================================================================
6 - ENUM
46 - Enum Type
ENUM : enumeration : Allows you to define constants. It is collection of fixed values where numbers are automatically assigned.
In typescript we can have numeric, string or heterogenius ENUMs. It starts to give value from 0.
We use enum keyword to define the enumeration.
Advantages of using enum : Editor automatically starts suggestion based on enum values, so there are lesser chances of any 
typing error. Also each enum value gets a numeric incremental value starting from 0. We can make it start with 1 or any 
other value. There is always a automatic increment process applied to the enumeration.
1.Numeric Enumerations :
enum WorkDays{
  MON, TUE=1, WED, THUR, FRI, SAT, SUN
}
console.log(WorkDays) // {0: "MON", 1: "TUE", 2: "WED", 3: "THUR"}
enum WorkDays{
  MON=1, TUE=3, WED, THUR, FRI, SAT, SUN
}
In above example from 3 onwards the incremental value is applied.
Only for numeric enumerations incremental values are assigned.
2.String Enumerations :
Dont have incremental values assigned to eum values
enum WorkDays{
  MON="MONDAY", TUE="TUEDAY", WED="WEDNESDAY"
}
console.log(WorkDays) // {MON: "MONDAY", TUE: "TUEDAY", WED: ...}
3.Heterogeneous Enumerations : Enum with number as well as sr
enum WorkDays{
  MON=1, TUE="TUEDAY", WED="WEDNESDAY"
}
console.log(WorkDays) // {1: "MON", MON: 1, TUE: "TUEDAY", WED...}
Enum reduces error as once we declare the enum it will be suggested by the editor, so there are lesser chances of errors.
Enum exists at compile time so it does not allocate memory as well. Enum automatically increments value from the very last 
assignment.

47 - Computed Enum
COMPUTED ENUM MEMBERS :
Enums only allow constant values or computed values that can be evaluated at compile time from constants or previously defined 
enum members. They do not allow dynamic runtime expressions, such as Date.now() or Math.random(). Also we can compute enum member
value by calling function.
enum AppData {
  APPVER = 1.0,
  DT = Date.now(),
}
console.log(AppData);
Above code works but not allowed in typescript.

WHAT ALLOWED AS ENUM MEMBER INITIALIZERS :
Constant literals
Computed values from other enum members or constants
Auto-incremented numeric members (if no initializer is provided)

WHAT NOT ALLOWED AS ENUM MEMBER INITIALIZERS : 
Function calls 
Variables or values that are only known at runtime (variable declared outside the enum)
let x = 10;
enum Example {
  A = x,  // Error: initializer must be constant
}
Expressions involving runtime values (e.g., Date.now(), Math.random())

Below example works but not good practise :
let a: number = 5;
let b: number = 6;
enum RESULTS {
  SUM = sum(a, b),
  PROD = prod(a, b),
}
function sum(x: number, y: number): number {
  return x + y;
}
function prod(x: number, y: number): number {
  return x + y;
}
console.log(RESULTS)

48 - Reverse Mapping :
When TypeScript code is compiled to JavaScript, enum members can be referred to by both their names and values. 
enum Directions {
  Up,
  Down,
  Left,
  Right,
}
console.log(Directions['Up']); // 0 get the index or numeric value for enum member
console.log(Directions.Up); // 0
console.log(Directions[0]); // 'Up' get the enum member
Reverse mapping allows you to retrieve the numeric value from an enum member, as well as obtaining the enum member from its numeric value.

49 - const ambient Enum :


==========================================================================================================================
7 - Object Oriented TypeScript :
50 - Object Literal Introduction
Objects :
It allows you to create a container where you can put a varible & functions in it. It contains data in key-value pair format, 
where key is string & value can be of any data type. The variable you put inside the object is called as property & the 
function added to an object is called as method. Even if you use a number or another data type as a key, JavaScript 
automatically converts it to a string.
In JS :
let obj = {};
obj.pCode = 100;
obj.pName = 'Apples';
obj.price = 222;
// adding function to the object
obj.getData = function () {
  console.log(obj.pCode, obj.pName, obj.price);
};
console.log(obj);

Defining object using object literal :
let obj = {
  pCode: { id: 1, sp: 'ABC' },
  pName: 'Apples',
  price: 222,
  getData: function () {
    console.log(obj.pCode, obj.pName, obj.price);
  },
  // ES6 way of method
  getData1() {
    console.log(obj.pCode, obj.pName, obj.price);
  },
};
console.log(obj);
obj.getData();
obj.getData1();

51 - Dynamic key Method names
Dynamic keys : object keys that are determined at runtime rather than hardcoded
When we use square brackets object literal understand that the key defined is dynamic key, 
Example 1:
let settings = {};
// user chooses this from a dropdown:
const settingName = 'theme';
// value comes from another input
const value = 'dark';
// You don’t want to write code for every possible setting like:
// settings.theme = 'dark';
// settings.fontSize = '16px';
// settings.language = 'en';
// Instead, use dynamic keys:
settings[settingName] = value;
console.log(settings)

Example 2:
// This simulates user choosing an option:
function getUserSelectedSetting() {
  return 'theme'; // user clicked/selects "theme"
}
// This simulates user typing a value:
function getUserInputValue() {
  return 'dark';  // user typed "dark"
}
const settingName = getUserSelectedSetting();  // you get key dynamically here
const value = getUserInputValue();             // you get value dynamically here
const settings = {};
settings[settingName] = value;
console.log(settings); // { theme: 'dark' }

In SHORTS :
settings.settingName	Creates key literally "settingName"
settings[settingName]	Creates key using the value of variable settingName (e.g., "theme")
settings[settingName] = value	Sets key (dynamic) to value (dynamic)
settings[settingName] = [value]	Sets key to an array containing value

53 - Object reference clone creation
let proto = Object.defineProperty({}, 'pCode', {
  writable: true,
  configurable: true,
  value: 2001,
});
const obj = Object.create(proto);
console.log(obj); // {pCode : 2001}
obj.pCode = 1001;
console.log(obj); // {pCode : 1001}

When we set writable to false we see we cant change pCode value
let proto = Object.defineProperty({}, 'pCode', {
  writable: false,
  configurable: true,
  value: 2001,
});
const obj = Object.create(proto);
console.log(obj); // {pCode : 2001}
obj.pCode = 1001;
console.log(obj); // {pCode : 2001}

53 - Object reference clone creation :
You can imagine that 'a' is located somewhere in memory & both obj & obj1 are sharing the same location when you do obj.a and obj1.
To copy or clone object we use Object.assign :
let obj = { a: 'First' };
let obj1 = Object.assign({}, obj);
obj1.a = 'Second';
console.log(obj.a); // First
console.log(obj1.a); // Second

54 - this object
this object contains the current context or this refers to the current context. The this object can have different values depending on where it is placed.
If you console log 'this' object in the browser, it will show the 'window' object. Because window is the global object in the browser. 
When you run console.log(this) in a Node.js module (not inside a function or class), it refers to the current module's exports object, which is initially an empty object ({}).
1.At the top level of a module, this refers to module.exports (an empty object {} by default).
  console.log(this); // {}
  console.log(this === module.exports); // true
  console.log(this === exports);        // true
2.Inside a regular function, this refers to the global object (in non-strict mode) or undefined (in strict mode).
  function test() {
    console.log(this === global); // true (non-strict mode)
  }
  test();

  'use strict';
  function test() {
    console.log(this); // undefined
  }
  test();
3.In arrow functions, this is lexically scoped, inheriting from the enclosing context (e.g., module.exports in modules).
  const obj = {
    arrowFunc: () => console.log(this), // Inherits `this` from the module scope (exports)
    regularFunc: function() {
      console.log(this); // Refers to `obj`
    }
  };
  obj.arrowFunc();   // {} (module.exports)
  obj.regularFunc(); // { arrowFunc: [Function], regularFunc: [Function] }
4.In class methods, this points to the class instance.
  class Test {
    logThis() {
      console.log(this);
    }
  }
  const instance = new Test();
  instance.logThis(); // Test {}
5.In the Node.js REPL, this equals the global object.
  console.log(this === global); // true (in REPL)

55 - Classes
Class :
Classes are the blueprint for creating objects in object-oriented programming.
A class is a blueprint or template used to create objects in object-oriented programming. It defines the properties (also called fields or attributes) and the behaviors (called methods) that the objects will have.

class Car {
  color: string;
  seats: number;
  constructor() {
    console.log('constructor called');
  }
}
let car1 = new Car(); // as soon as we use new keyword the constructor gets called & 'constructor called' is logged
Whatever we put inside ths class is called as the member of the class. 

class Car {
  color: string;
  seats: number;
  constructor() {
    console.log('constructor called');
  }
  buildCar() {
    console.log(color, seats); // this will not work
  }
}
let car1 = new Car();
The color & seats in the method buildCar above will not work coz when you want to refer the local member of the class we must use the 'this' keyword.

class Car {
  color: string;
  seats: number;
  constructor() {
    console.log('constructor called');
  }
  buildCar() {
    console.log(this.color, this.seats);
  }
}
let car1 = new Car('Red', 4);
This will not work coz the values we pass when creating an object are actually passed to the constructor inside the class and we must use this to assign values to the .

class Car {
  color: string;
  seats: number;
  constructor(c: string, ns: number) {
    this.color = c;
    this.seats = ns;
    console.log('constructor called');
  }
  buildCar() {
    console.log(this.color, this.seats);
  }
}
let car1 = new Car('Red', 4); // constructor called
car1.buildCar(); // Red 4
console.log(car1); // Car {color: "Red", seats: 4}


When we create object using new keyword or from the class, we pass the values & these values are actually passed to the constructor. So the constructor must have parameters to catch those values & to store these passed values inside objects properties we must use 'this' keyword.  

Why to use 'this' keyword ?
We use the this keyword to refer to the current object being created or used. When we create an object with the new keyword, JavaScript or TypeScript automatically creates a new object in memory. Inside the constructor or any method, this points to that specific object. So, to store values inside that object, we need to use this.propertyName.

1.How will you create a class in TypeScript?
So the syntax for creating class is : you have to type the class keyword then we give the name of the class then we have to use constructor function if we want to initialize certain properties for the object. This constructor gets called automatically when the object is creatred using the new keyword. Then you can have properties with data type with optional value. And you may have multiple methods.
OR
To create a class in TypeScript, we use the class keyword, followed by the name of the class. If we want to initialize properties for the object, we define a constructor function inside the class. This constructor gets called automatically whenever we create an object using the new keyword. Inside the class, we can define properties along with their data types, and we can also give them optional default values if needed. Additionally, a class can have multiple methods to define behaviors or actions.

2.What is a constructor? How is it called?
A constructor() is basically a method only, which is called automatically So when the object is initialized/created, the constructor() is called

3.How do you refer to the field/property method of a class?
First we create object using new keyword then using objectproperty or object.method() we can access the member of a class.

4.How do you access property within the class?
We use the this object to access property within the class & the this object refers to the current context or scope. For example if we console log this inside the constructor function & create object by using this keyword then it will log the object in console.
When you refer the local members or properties you use the this object. this refers to the current objects scope.

Class members :
✅ 8 Types of Members in a Class:

| **Type of Member**      | **What It Means**                                                         |
| ----------------------- | ------------------------------------------------------------------------- |
| **Properties / Fields** | Variables that store data inside the object                               |
| **Constructor**         | A special method that runs when an object is created                      |
| **Methods**             | Functions inside the class that define behavior                           |
| **Access Modifiers**    | Keywords like `public`, `private`, `protected` that control accessibility |
| **Static Members**      | Belong to the class itself, not to instances (objects)                    |
| **Readonly Members**    | Can be assigned only once, usually during initialization                  |
| **Getters and Setters** | Special methods to read (`get`) or update (`set`) property values         |
| **Index Signatures**    | Allow defining dynamic property keys (less common)                        |
---

### ✅ Short Explanation: PCMSm 
1. **Properties:**
   Holds data (e.g., `color`, `seats`)
2. **Constructor:**
   Initializes the object when we use `new` keyword.
3. **Methods:**
   Functions like `buildCar()`, `startEngine()`
4. **Static Members:**
   Shared across all objects. Called on the class, not the object.
5. **Access Modifiers:**
   Controls visibility (`public`, `private`, `protected`).
6. **Readonly Members:**
   Once set, cannot be changed.
7. **Getters/Setters:**
   Used for controlled access to private properties.
---
### ✅ Quick Interview Answer:
> **"Types of class members include properties, constructor, methods, access modifiers, static members, readonly members, and getters/setters."**
---


Constructor → Used to receive and set values for the object's properties when the object is created.
this keyword → Used to store those values (arguments of object) inside the current object being created.

56 - Inheritance : Inheritance means subclassing, in ES6 we use 'extends' keyword to inherit a class.
Constructor : Constructor is used to initialize object-specific properties along with their values during object creation, ensuring that each object has its own unique set of data.
this : To attach properties and methods to the specific object that is being created. Inside methods, this is also used to access the object's own properties and other methods.
new : To create an instance (object) from the class and automatically trigger the constructor. It allocates memory and returns the newly created object with its own properties and methods
Methods : Methods define behaviors or actions of the object. They are functions written inside a class which work with the object's properties using the this keyword
super : I use super() inside the child class constructor to call the parent class constructor. This allows me to inherit and initialize parent class properties and methods before adding or customizing child-specific properties.

| Keyword     | Purpose                                                   |
| ----------- | --------------------------------------------------------- |
| Constructor | Initialize object properties                              |
| this        | Attach and access properties/methods                      |
| new         | Create object and trigger constructor                     |
| Methods     | Define object behaviors/actions                           |
| super       | Call parent constructor to inherit properties and methods |

Inside the class :
1.When to declare property outside the constructor : When you want to give a default value to every object automatically.
2.When to declare property inside constructor : When the value comes from a parameter passed during object creation.

Example 1 :
class A {
  pMethod() {
    console.log('Parent method called');
  }
}
class B extends A { }
let cObj = new B();
cObj.pMethod(); // Parent method called
pMethod is actually belongs to class A but it is available on object created from class B because we have extended the class B from class A. This is called as inheritance.

Example 2 :
class A {
  pMethod() {
    console.log('Parent method called');
  }
}
class B extends A {
  cMethod() {
    console.log('Child method called');
  }
}
let cObj = new B();
cObj.pMethod();
cObj.cMethod();
Object created from child class B has 2 methods : One is from parent class A & other is from child class B itself. Not only methods but also properties will work the same way. Means child class can have access of properties & methods of parent class.

From above 2 examples inheritance of members of class can easily achieved. But when we have constructor then we have to deal with inheritance in different way. 

Example 3 :
class A {
  constructor() {
    console.log('Parent constructor called');
  }
}
class B extends A {
  cMethod() {
    console.log('Child method called');
  }
}
let cObj = new B();
cObj.cMethod(); // Parent constructor called  Child method called

Example 4 :
class A {
  constructor() {
    console.log('Parent constructor called');
  }
}
class B extends A {
  constructor() {
   // Error : Constructors for derived classes must contain a 'super' call
  }
  cMethod() {
    console.log('Child method called');
  }
}
let cObj = new B(); 
cObj.cMethod();
This will give error because : Whenever you want to use the constructor in child class, make sure that the parent class is instantiated first and parent class constructor should be called with the super() keyword.
Corrected code :
class A {
  constructor() {
    console.log('Parent constructor called');
  }
}
class B extends A {
  constructor() {
    super() // added super to call parent class constructor
  }
  cMethod() {
    console.log('Child method called');
  }
}
let cObj = new B();
cObj.cMethod(); // Parent constructor called  Child method called
If you have constructor in both child & parent classes, you must first instantiate the parent class in the child class by calling constructor of parent class using super keyword.
super constructor also allows to pass parameters to the parent constructor.

IMP : When we pass values while creating an object from a class, those values are passed as parameters to the constructor function. It is necessary to define parameters in the constructor and use the this keyword inside it to attach those values to the object's properties.
In short when you use constructor : 1.define the parameters to the constructor 2.use this keyword inside constructor

Example 5 :
class Vehicle {
  color: string;
  vType: string;
  seats: number;
  constructor(c: string, vt: string, s: number) {
    this.color = c;
    this.vType = vt;
    this.seats = s;
  }
  buildVehicle() {
    console.log(this.color, this.vType, this.seats);
  }
}
class Car extends Vehicle {
  constructor(c: string) {
    super(c, 'CAR', 4);
  }
}
class MotorBike extends Vehicle {
  constructor(c: string) {
    super(c, 'TwoWheeler', 2);
  }
}
let cObj = new Car('Red');
let mObj = new MotorBike('Blue');
cObj.buildVehicle(); // Red CAR 4
mObj.buildVehicle(); // Blue TwoWheeler 2

In case of child class : Whatever values are dynamically provided by the user, we pass them as parameters in the child class constructor. Whatever values are fixed, we directly pass them inside the super() call.
When to keep property dynamic & when to keep static :
We make a property dynamic if it is supposed to change for each object or needs to come from the user. We keep it fixed (static) if it's a business rule or a constant for that class type

1.How do you inherit a Class ?
We inherit a class using extends keyword in typescript. Members of both parent and child class are accessible to the object created from the child class.

2.Why do you need the super() method ? Explain in detail.
To call the parent class constructor in the child class, we need the super() method. We also need to pass both static (fixed) values and dynamic (user-provided) values as arguments to super(), depending on what the parent constructor requires.

57 - Access modifiers : public, private, protected
Members = properties + methods
We use access modifiers to control the scope of class members. Access modifiers like public, private, and protected help you to decide whether the class members (properties and methods) can be accessed from — inside the class, in subclasses, or from outside the class.
TypeScript provides 3 main access modifiers for class members (properties and methods):
public : Members declared with public access modifier are accessible inside the class as well as subclass (child class), and outside the class.
protected : Members declared with protected access modifier are accessible inside the class as well as subclass (child class) but not accessible outside the class
private : Members declared with private access modifier are accessible inside the class but not available inside the  subclass (child class) as well as outside the class

| Modifier    | Accessible Inside Class | Accessible in Child Classes | Accessible Outside |
| ----------- | ----------------------- | --------------------------- | ------------------ |
| `public`    | ✅                       | ✅                           | ✅                  |
| `private`   | ✅                       | ❌                           | ❌                  |
| `protected` | ✅                       | ✅                           | ❌                  |

By default public access modifier is applied to members if you do not define any access modifier explicitly. 

public :
class Vehicle {
  color: string;
  seats: number;
  buildVehicle() {
    console.log(this.color, this.seats);
  }
}
let obj = new Vehicle();
obj.color = 'Red';
obj.seats = 4;
obj.buildVehicle(); // Red 4

OR

class Vehicle {
  public color: string;
  public seats: number;
  buildVehicle() {
    console.log(this.color, this.seats);
  }
}
let obj = new Vehicle();
obj.color = 'Red';
obj.seats = 4;
obj.buildVehicle();

private :
class Vehicle {
  private color: string;
  private seats: number;
  buildVehicle() {
    console.log(this.color, this.seats);
  }
}
let obj = new Vehicle();
obj.color = 'Red'; // Error : Property 'color' is private and only accessible within class 'Vehicle'.
obj.seats = 4; // Error : Property 'seats' is private and only accessible within class 'Vehicle'.

protected :
class Vehicle {
  protected color: string = 'Red';
}
class Car extends Vehicle {
  showData() {
    console.log(this.color); // Red
  }
}
let obj = new Car();
obj.color = 'Blue'; // Error: Property 'color' is protected and only accessible within class 'Vehicle' and its subclasses.
obj.buildVehicle(); // Red 4

1.Explain various access modifiers of a class.
Check above explanation 

2.Which is the default access modifier ?
In TypeScript, the default access modifier is public. This means that even if I don't explicitly write the public keyword, the member is considered public by default and can be accessed from anywhere.

3.Can you have protected modifier without inheritance ?
No, protected access modifier is meaningful only with inheritance, as it allows access in child classes but not outside the class hierarchy. If there’s no child class or inheritance, then the protected access modifier behaves almost like private i.e it is not accessible outside the parent class. Without inheritance, there’s no child class to access the protected member, so its purpose is lost.
Example :
class Parent {
  protected greet() {
    console.log('Hello from parent');
  }
}
class Child extends Parent {
  sayHello() {
    this.greet();  // ✅ Allowed: Accessing protected method inside child class
  }
}
let obj = new Child();
obj.sayHello();       // ✅ Works
// obj.greet();      ❌ Error: Cannot access protected method outside class hierarchy

Property initialization shorthand :
It is just an easier or shorter way to declare the property but you need to define access modifiers explicitly. 
It is simply a shorter and easier way to declare and initialize properties. When there are many members, writing separate property declarations and assigning each one inside the constructor can make the code lengthy. To avoid this, TypeScript provides a property initialization shorthand where we can declare and initialize properties directly in the constructor parameters.

IMP : Defining means declaring the property, initializing means giving it the first value (usually inside constructor), and assigning means setting or updating its value anytime
class Car {
  color: string; // ✅ Defining (just declaring the property, no value yet)
  constructor(c: string) {
    this.color = c;  // ✅ Initializing / Assigning (giving value to the property)
  }
}

Example : Longer way to define & initialize properties
class Vehicle {
  color: string = 'Red'; // declaration of properties
  seats: number;
  constructor(c: string, s: number) { 
    this.color = c; // initialization of properties
    this.seats = s;
  }
  buildVehicle() {
    console.log(this.color, this.seats);
  }
}
let obj = new Vehicle('Red', 4);
let obj1 = new Vehicle('Blue', 6);
obj.buildVehicle(); // Red 4
obj1.buildVehicle(); // Blue 6

Example : Shorthand way to define & initialize properties
class Vehicle {
  constructor(public color: string, public seats: number) {}
  buildVehicle() {
    console.log(this.color, this.seats);
  }
}
let obj = new Vehicle('Red', 4);
let obj1 = new Vehicle('Blue', 6);
obj.buildVehicle(); // Red 4
obj1.buildVehicle(); // Blue 6

Other examples of shorthand :
1.
class Car {
  constructor(public color: string = 'Red', public seats: number) {
    // Now, if no color is passed, it will default to 'Red'
  }
}
let car1 = new Car(undefined, 4);
console.log(car1.color);  // Output: Red
2.
class Car {
  constructor(public seats: number) {
    this.color = 'Red';
  }
  public color: string;  // Define the property manually
}
let car1 = new Car(4);
console.log(car1.color);  // Output: Red
3.
class Car {
  public color: string = 'Red';
  
  constructor(public seats: number) {}
}
let car1 = new Car(4);
console.log(car1.color);  // Output: Red

Summary : We can define & assign value to properties anywhere inside the class (either before or after constructor) but dynamic initialization where values depend on constructor parameters must be done inside the constructor only. 

Class field initialization means directly assigning a value to a property at the time of its declaration inside the class, outside of the constructor. 

IMP : If I only need fixed default values, I don’t need to write a constructor. But for setting dynamic values, or when extending a parent class, a constructor is required.

59 - readonly modifier :
TypeScript provides the readonly modifier, which can be used along with public, private, or protected access modifiers. A readonly property must be assigned a value either during its declaration or inside the constructor.
In lavaScript, there is no such option,though in the object, to make a readonly property, then you can use the 'Object' class.

Example :
class Vehicle {
  public readonly color: string;
  seats: number;
}
let obj = new Vehicle();
obj.color = 'Red'; // Error Cannot assign to 'color' because it is a read-only property

Assigning value to readonly during declaration : 
class Vehicle {
  public readonly color: string = 'Red';
  seats: number;
}
let obj = new Vehicle();
// obj.color = 'Red'; // Cannot assign to 'color' because it is a read-only property
console.log(obj.color) // Red

Assigning value to readonly inside constructor : 
class Vehicle {
  public readonly color: string;
  seats: number;
  constructor(c: string) {
    this.color = c;
  }
}
let obj = new Vehicle('Yellow');
console.log(obj.color);

Assigning value to readonly inside constructor with property shorthand : 
class Vehicle {
  seats: number;
  constructor(readonly color: string) {}
}
let obj = new Vehicle('Yellow');
console.log(obj.color);

IMP : NEVER ASSIGN STATIC VALUE TO THE PROPERTY IF YOU ARE USING SAME PROPERTY INSIDE CONSTRUCTOR BECAUSE CONSTRUCTOR IS USED TO INITIALIZE PROPERTY (ASSIGN VALUES TO PROPERTY) DYNAMICALLY BASED ON INPUT PARAMETERS AT THE TIME OF OBJECT CREATION.


IMP : In TypeScript's constructor parameter shorthand, I must explicitly use an access modifier like public, private, or protected to tell the compiler to automatically create and initialize the property. But if I use readonly, TypeScript treats it as public readonly by default, so adding public becomes optional with readonly.

1.How will you make a property readonly?
2.Can you have a readonly modifier with a public, private or protected modifier?
3.Make a private property readonly with property parameter syntax
4.What is the difference between readonly and const?
You make a property which is inside the class readonly and you make a variable as const.

The big example :
class Vehicle {
  public readonly color: string;
  private readonly seats: number;
  constructor(color: string, seats: number) {
    this.color = color;
    this.seats = seats;
  }
  protected showData() {
    console.log(this.color, this.seats);
  }
}
class Car extends Vehicle {
  showVehicleDetails() {
    this.showData();  // ✅ Allowed: Accessing protected method from child class
  }
}
let obj = new Vehicle('Red', 4);
console.log(obj.color);        // ✅ Allowed: 'color' is public and readonly
// console.log(obj.seats);     // ❌ Error: 'seats' is private, cannot access
// obj.showData();             // ❌ Error: 'showData' is protected, cannot access from outside
let carObj = new Car('Blue', 5);
carObj.showVehicleDetails();   // ✅ Allowed: Accessing protected method via child class method

| Part                    | Meaning                                                                   |
| ----------------------- | ------------------------------------------------------------------------- |
| **public readonly**     | Property `color` can be accessed outside the class but cannot be modified |
| **private readonly**    | Property `seats` accessible only inside the `Vehicle` class               |
| **protected method**    | `showData()` can only be called inside the class or by child classes      |
| **Constructor**         | Initializes both `color` and `seats` properties                           |
| **Child class (`Car`)** | Uses the protected method from parent                                     |


61 - Object Literal Destructuring
Destructuring is concept of breaking data structures like array or object literals into individual variables.
In object destructuring the variable name must match the property or key name in the object. Also you can alias the variable 
name while destructuring. Also we can assign default value to variables while destructuring.  
const obj = {
  pCode: 101,
  pName: 'Apple',
};
let { pCode = 100, pName } = obj;
console.log(pCode, pName); // 101 Apple
// aliasing
let { pCode: code, pName: name } = obj;
console.log(code, name); // 101 Apple

IMP : In case of array destructuring order of elements matters while in case of object destructuring variable name must match
with the property name of the object.

If you don't know the property names before hand for object destructuring then use : 
1.for..in loop to get both keys and values of the object
for (let key in obj) {
  console.log(key, obj[key]); // Logs: pCode 101, then pName Apple
}
2.Use Object.keys(), Object.entries(), or Object.values() with forEach() method
// keys
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
// entries
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

3.Using dynamic key (bracket notation) : If you somehow get the key at runtime from user input or config then use bracket 
notation to get the value from it
let key = 'pName';
console.log(obj[key]); // 'Apple'

A function returning an object also can be destructured :
function test() {
  const obj = {
    pCode: 101,
    pName: 'Apple',
  };
  return obj;
}
let { pCode, pName } = test();
console.log(pCode, pName); // 101 Apple
 
1.Explain practical scenario of Object literal destructuring.
In most of web applications we receive data in JSON(as a string) format from the server, then we convert it into a JavaScript 
object using JSON.parse() or using fetch() or axios(). And once the data is converted to javascript object we can use 
destructuring on that object.  Instead of accessing each property individually, destructuring allows you to extract only 
the specific fields you need in a clean and concise way.
In real-world applications—such as in React components, services, or utility functions—destructuring makes your code simpler 
and more maintainable.

2.Output of this code :
const { a = 90, b } = {};
console.log(a, b); // 90 undefined
Ans : We have default value of 90 assigned to it, so a will be 90 & b will be undefined as there is no value assigned to it.

62 - Abstract Classes
Abstract classes cannot be instantiated i.e you cannot create an instance, but it serves as a base class to the extended classes or subclasses. The abstract keyword is used to make an abstract class.
abstract class Vehicle {
  formatDate() {
    console.log('Displaying formatted data');
  }
}
let obj = new Vehicle(); // Cannot create an instance of an abstract class
The above code shows error that you can not instantiate this class (means you can not create object from this class) as it is abstract class. 
abstract class Vehicle {
  formatData(dt: string) {
    return dt.replace(' ', '-').toLocaleUpperCase();
  }
}
class SUV extends Vehicle {
  model: string;
  constructor() {
    super();
  }
}
const obj = new SUV();
obj.model = 'New Model';
console.log(obj.formatData(obj.model));


Keypoints Abstract class :
It acts as a blueprint for subclasses.
It cannot be instantiated directly. 
We can only declare abstract properties inside the class, but can not assign value to it. We assign values to these properties inside the subclass created from the abstract class.
We can only declare abstract method inside the class, but can not define method body. We implement the method (define method body) inside the subclass created from the abstract class.
Subclass created from abstract class must implement all abstract methods and properties from its parent class.
Abstract classes can have a constructor can also have normal methods with implementation (with body)
Subclass created from abstract class can be abstract also if subclass does not want to implement all abstract members.
We can use access modifiers public, protected, private in abstract class
Abstract class can have implemented methods, constructor, fields with values, access modifiers. Interfaces cannot have implementation or constructors (before TypeScript 4.2).

Normally when you use the abstract class, it means it is a base class which doesn't need to be instantiated, and at the same time, it contains a set of various properties and methods which can be used by various subclasses.

Abstract class Vs Interface :
| Feature                                                | Abstract Class | Interface |
| ------------------------------------------------------ | -------------- | --------- |
| Can have method implementations                        | ✅ Yes          | ❌ No      |
| Can have fields (properties with values)               | ✅ Yes          | ❌ No      |
| Can be instantiated directly                           | ❌ No           | ❌ No      |
| Supports access modifiers (public, private, protected) | ✅ Yes          | ✅ Yes     |

Note : Like class is blueprint for the object, abstract class is blueprint for the subclasses.
1.What is an abstract class ?
An abstract class is treated as a base class or blueprint for various other classes. It can contain properties or methods which can be used by subclasses, but that class cannot be instantiated.

2.Can we create a constructor() in an abstract class ?
Yes abstract class can have its own constructor even if we explicitly do not write it. The constructor is always called when we instatiate the subclass.
abstract class Vehicle {
  constructor() {
    console.log('Abstract class constructor');
  }
}
class SUV extends Vehicle {
  constructor() {
    super();
  }
}
const obj = new SUV(); // Abstract class constructor
A constructor() can be placed in an abstract class and it will be called as other class constructors are called

3.Is it possible to add instance variables in an abstract class ?
Yes, certainly we can as we can add a constructor(), we can add instance variables, we can add static members or instance members in an abstract class; but using instance members needs a subclass instance.

63 - Class Accessors getter setter Methods
The accessors also known as getter or setter methods is an approach to create a property to a class. The get and set keywords are used to create a method which acts as a property.
The getter method is executed when you read/get the value. The setter method is executed when you assign a value to that property.
class Vehicle {
  get model() {
    console.log('Getter Executed');
    return '';
  }
  set model(v: string) {
    console.log('Setter Executed');
  }
}
const obj = new Vehicle();
obj.model = 'SUV'; // Setter Executed
console.log(obj.model); // Getter Executed

Here model is written as a get or set method in the class but it is treated as a property since we called it using dot notation.
Model is treated as a property because it is placed as getter and setter method.
When we try to assign a value like *obj.model = 'SUV'* the setter method is executed and when we try to read the value *console.log(obj.model)* getter method is executed.

Normally, getters & setters are very useful when you want to customize properties or implement validations.
If you keep only the getter method inside the class then it means you are creating a readonly property.
class Vehicle {
  private _model: string = '';
  get model() {
    return this._model;
  }
  set model(v: string) {
    if (v.length < 3) {
      this.model = 'M' + v;
    } else {
      this._model = v;
    }
  }
}
const obj = new Vehicle();
obj.model = 'SUV';
console.log(obj.model); // SUV
obj.model = 'UV';
console.log(obj.model); // MUV
If the length of the value assigned to the _model is less than 3 then add 'M' at the begining otherwise we keep the value intact.

==========================================================================================================================
INTERFACES :
64 - Interface Introduction
Interfaces in TypeScript are like custom data types. They define the shape of an object — that is, what properties and methods 
the object should have. We only declare the properties and methods inside the interface; we don’t instantiate it. The actual 
values are provided when we create an object that implements or follows that interface.

In interface you actually define how the structure of the object should be.
Interface declaration decides the structure of the object literal & therefore interface is known as Object Types in newer 
typescript.

Example :
interface Address {
  address1: string;
  street: string;
  pin: number;
  city: string;
  showAddress(): void;
}
let home: Address;
home = {
  address1: 'my address',
  street: 'my street',
  pin: 123,
  city: 'my city',
  showAddress() {
    console.log(this.address1, this.street, this.pin, this.city);
  },
};
home.showAddress(); // my address my street 123 my city

1.What is a interface or object types in typescript ?
Interface allows you to define the structure of the object or the class. It is like a blueprint for the object or class where 
we define what properties & methods a class or object should have. We dont instantiate the properties & methods inside 
inteface, we instantiate them when creating object from the interface.

2.What is difference between custom types and interface ?
**With custom types(using type) we can define union, primitive, intersection, tuple or any other type of data structure. But 
with interface we can only define the shape of objects — meaning their properties and methods. 
**For classes interface acts as a contract which means class has to strictly follow the interface structure with the help of
'implements' keyword.
**So interface can be used with 'extends' & 'implements' keyword which is not possible with custom type.
Custom type is flexible to any data type but interface is used for object structures and class contracts.
// ✅ Custom Type alias with a union
type ID = string | number;
// ✅ Custom Type alias with a tuple
type Point = [number, number];
// ✅ Interface for object structure
interface User {
  name: string;
  age: number;
}

IMP : "All the properties & methods defined in the interface must be implemented in the object or class created from that 
interface".

65 - Class Interface
Interface also allow us to define structure of the class as well. 
It's not necessary to pass all interface properties through the constructor parameters.
We can define optional property in the interface using '?' optional character & we can also pass optional property inside the
constructor if we need.

Example 1 : 
interface Vehicle {
  vId: number;
  vName: string;
  getBaseVehicleInfo(): string;
}
class Car implements Vehicle {
  seats: number = 4;
  vId: number;
  vName: string;
  constructor(i: number, n: string) {
    this.vId = i;
    this.vName = n;
  }
  getBaseVehicleInfo() {
    return this.vId + ', ' + this.vName;
  }
}
let obj = new Car(1, 'My Car');
console.log(obj.getBaseVehicleInfo()); // 1, My Car

Example 2 :
interface Vehicle {
  vId: number;
  vName: string;
  model?: string;
  getVehicleInfo(): string;
}
class Car implements Vehicle {
  seat: number = 4;
  maxSpeed: number;
  vId: number;
  vName: string;
  model: string;
  constructor(id: number, n: string, max: number, m: string) {
    this.vId = id;
    this.vName = n;
    this.maxSpeed = max;
    this.model = m;
  }
  getVehicleInfo() {
    return this.vId + ', ' + this.vName + ', ' + this.model + ', ' + this.seat;
  }
}
let obj = new Car(1, 'My Car', 120, 'SUV');
console.log(obj.getVehicleInfo()); // 1, My Car, SUV, 4

// OR 
interface Vehicle {
  vId: number;
  vName: string;
  model?: string;
  getVehicleInfo(): string;
}
class Car implements Vehicle {
  constructor(
    public vId: number,
    public vName: string,
    public model: string,
    public maxSpeed: number,
    public seats: number = 4
  ) {}

  getVehicleInfo(): string {
    return `${this.vId}, ${this.vName}, ${this.model}, Seats: ${this.seats}, Max Speed: ${this.maxSpeed}`;
  }
}
const obj = new Car(1, 'My Car', 'SUV', 120);
console.log(obj.getVehicleInfo()); // 1, My Car, SUV, 4

1.How can you make sure that a class follows certain signature ?
OR
1.How do you apply an interface on a class ?
By applying interface to the class it follows a certain signature & interface is applied to a class using 'implements' keyword.
Basically we implement interface on a class & class will make sure that it follows the signature of the predefined interface.
Class can contain its own members (properties & methods) apart from what you have mentioned in the interface. 

2.How can you apply multiple interface on a class ? 
Syntax :
class className implements <interface1>, <interface2>, ..., <interfaceN>{
	// class objects
}

4.How can you provide an optional property inside an interface ?
Using a question mark (?) after the member name in an interface makes it optional. We can make both property and method as a 
optional. When you implement the class or object its not necessory to implement the optional property or method.
optional method :
interface Logger {
  log?(message: string): void; // optional method
}
IMP : If a method is defined with a parameter, then that parameter must be passed when calling the method — unless the 
parameter is explicitly marked as optional. 
We can make method parameters optional by adding a question mark (?) after the parameter name.
interface Logger {
  log?(message?: string): void; // optional method
}

66 - Readonly properties
In interface we can not use public or private with readonly modifier. You can assign value once to a readonly property. 
You cannot use access modifiers (public, private, protected) inside a TypeScript interface. Because an interface is only used to describe the shape of an object, not its access control. Access modifiers are only relevant to class members, not to type declarations.

1.How can you make properties readonly via interface ?
We have already seen the readonly modifier in a class & can use the very same modifier inside interface. We do use public or private with readonly modifier inside a class. But in the interface, we do not use public or private along with readonly. 
interface Vehicle {
  readonly vId: number;
}
const obj: Vehicle = {
  vId: 56,
};
console.log(obj.vId); // 56
In above code inspite of being readonly we are able to assign value to vId because "You can assign a value once to a readonly property". 
obj.vId = 78; // Error : Cannot assign to 'vId' because it is a read-only property
Here we used object, similarly in classes such readonly properties can be used by implementing interface. 
You can assign a value once to a readonly property & wont be allowed to change the value at the later stage.

67 - Interface Inheritance
We use the 'implements' keyword and we push the class to follow the design of interface. This way we implement inheritance on a class. 
Below the class Motor actually implements the SUV interface which is being extended from Vehicle interface.
interface Vehicle {
  id: number;
}
interface SUV extends Vehicle {
  torque: number;
}
class Motor implements SUV {
  id: number = 1;
  torque: number = 230;
}
Whenever SUV interface is implemented it should also be follow Vehicle interface then you can extend interface Vehicle. It is necessory to implement all the values from the interface in the class.
You can also extend multiple interfaces using below syntax :
interface <InterfaceName> extends <Interface1>, <Interface2>, ..., <InterfaceN>{
  // declarations
}

1.How will you inherit an interface ?
You write the interface name then you use the extends keyword & then you give the parent interface name
Syntax : interfaceName extends parentInterface

2.Can you extend multiple interfaces ? How ?
Yes we can extend multiple interfaces using extends keyword with below syntax :
interface <InterfaceName> extends <Interface1>, <Interface2>, ..., <InterfaceN>{
  // declarations
}

==========================================================================================================================
GENERICS :
68 - Generics Basics :
reusable component - a component which is flexible and scalable for long-term usage
Typescript Generics feature is used to develop reusable components. 
Generics allows components to work with any data type instead of restricting to one data type only. 
Generics also allows developers to use these components with their own types.

A generic function can work with any data type, but it makes sure that the input and output are of the same type.
So if you pass in a string, it must return a string. If you pass in a number, it must return a number. The type 
is flexible — but it must stay consistent for that function call.

Example :
function getData(dataPoints: any[]): any[] {
  return new Array().concat(dataPoints);
}
let numDP = getData([30, 560, 120, 90]);
let strDP = getData(['top', 'bottom', 'left']);
numDP.push(68);
strDP.push('right');
console.log(numDP); // [30, 560, 120, 90, 68]
console.log(strDP); // ["top", "bottom", "left", "right"]
numDP.push('Right'); //
strDP.push(110);
console.log(numDP); // [30, 560, 120, 90, 68, 'Right']
console.log(strDP); // ["top", "bottom", "left", "right", 110]

What we want : When we pass numeric data to getData() function it should treat the getData() function as 'numeric' only instead of 'any'. Also when we pass string values it should allow you to pass string values only. This is where generics is useful.
Generics uses a type variable which we put in <> like <T> or <Type>
function getData<T>(dataPoints: T[]): T[] {
  return new Array<T>().concat(dataPoints);
}
let numDP = getData<number>([30, 560, 120, 90]);
let strDP = getData<string>(['top', 'bottom', 'left']);
numDP.push(68);
strDP.push('right');
console.log(numDP); // [30, 560, 120, 90, 68]
console.log(strDP); // ["top", "bottom", "left", "right"]
numDP.push('Right'); // Error : Argument of type 'string' is not assignable to parameter of type 'number'.
strDP.push(110); // Error Argument of type 'number' is not assignable to parameter of type 'string'.

Generics can be used in many ways like Generic Interfaces, Generic Classes etc.
If you do not pass data type along with function call, then typeScript will infer the data type (not a good practice) because of feature of inference. Like getData<number>([30, 560, 120, 90]); => getData([30, 560, 120, 90]);

1.What is TypeScript generics? Explain with syntax.
Typescript's Generics feature is used to develop reusable components. Generics allows components to work with any data type instead of restricting to one data type only. "Generics" also allows developers to use these components with their own types.

2.Is it necessary to pass data type with function call when you call generic function ?
Even if we do not give data type while calling the function it will work and wont give any error because of inference feature of typescript. Typescript will infer the data type automatically. But passing the data type while calling the function is good practise.

Any Vs Generics :
any offers flexibility by turning off type checking, while generics give us flexibility with type safety — making code reusable, reliable, and scalable.
any sacrifices type safety for flexibility, while generics give us both flexibility and type safety — making our code safe, reusable, and maintainable.
| Aspect                          | `any`                                     | Generics (`<T>`)                             |
| ------------------------------- | ----------------------------------------- | -------------------------------------------- |
| **Type Safety**                 | ❌ Lost — anything is allowed              | ✅ Preserved — type is known and checked      |
| **Flexibility**                 | ✅ Flexible (too much)                     | ✅ Flexible, but within correct types         |
| **Type Inference**              | ❌ No inference — always treated as `any`  | ✅ Inferred from input or manually defined    |
| **Autocomplete / IntelliSense** | ❌ Not available or very limited           | ✅ Fully available                            |
| **Error Detection**             | ❌ Runtime errors likely                   | ✅ Compile-time errors detected               |
| **Reusability**                 | 🚫 Reusable but unsafe                    | ✅ Reusable and safe                          |
| **Use Case**                    | When type is truly unknown or unimportant | When type should adapt but still be enforced |
| **Loss of Original Type**       | Yes — all values become `any`             | No — original types are preserved throughout |

69 - Multiple Type Variables 
Depending on requirement we can have multiple type variables.
function add<T, U>(a: T, b: U) {
  console.log(typeof a);
  console.log(typeof b);
}
add<number, string>(4, 'Hi'); // number string
add<string, number>('Hello', 7); // string number
The use of above generic function has the provision to decide the type for each parameter passed.
We can use generic & non-generic types together in one function like below :
function add<T, U>(a: T, b: U, flag: boolean) {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof flag);
}
add<number, string>(4, 'Hi', true); // number string true
add<string, number>('Hello', 7, false); // string number false
In this function we have used flag parameter as a non-generic type & a and b are of generic type.

1.How can you use multiple type variables ?
In type variable angle bracket we just put comma & declare another type variable. Also at the time of calling the function
we specify the type for all the parameters in the angle bracket seperated by comma. 

2.Is it possible to have generic and non-generic types together ?
Yes we can use npn-generic along with generic data type we just need to add non-generic variable in the the parameter section
& at the time of calling the function we do not need to specify the type in angle bracket we just need to enter the value. 

70 - Generic Constraints
1.What is Generic constraints & how we can add it ?
Generic type works with any data type, however we can put a constraint on this behavior. 
function getLength<T>(v: T): void {
  console.log(v.length); // Error : Property 'length' does not exist on type 'T'
}
getLength('Hi');
To deal with the error above : We create interface with "length : number" and extends it in type variable. This adds 
a constraint on type variable 'T' which tells typescript that take only those arguments which have length property.
{ length: number } This is a TypeScript type specifically, an object type that says: An object that must have a property 
called length that is a number OR I want any object that has a length property, and that property must be a number.

SOLUTION FOR ABOVE ERROR : 2 ways 
1.Adding constraint using Interface :
interface IC {
  length: number;
}
function getLength<T extends IC>(v: T): void {
  console.log(v.length);
}
getLength('Hi'); // 2
getLength({ length: 10 }); // 10
getLength([1, 2, 3]); // 3
getLength(42); // undefined ❌ Error — Argument of type 'number' is not assignable to parameter of type 'IC'.

How does it adding constraint works ?
1.When you call a function getLength('Hi'), typescript checks the data type of the argument passed 
2.Here argument passed is 'Hi' which is string
3.Then typescript checks if string have a length property of type number: length: number as defined in the interface
4.Yes strings have length property & it is of type number.Therefore, it's valid to pass 'Hi' as T, and TypeScript 
allows the call.

2.Adding constraint using Class :
class LengthSupport {
  length: number;
}
function getLength<T extends LengthSupport>(v: T): void {
  console.log(v.length);
}
getLength('Hi'); // 2
getLength({ length: 10 }); // 10
getLength([1, 2, 3]); // 3
getLength(42); // undefined ❌ Error — Argument of type 'number' is not assignable to parameter of type 'IC'.

In both using interface & using class as typescript constraint, the interface or class acts as like a type constraint: any 
object passed to your function must be assignable to 'IC' or 'LengthSupport' constraints. 

71 - Generic Classes
1.How to implement generic classes ?
The way we define generic functions, we can also define generic classes.
class Employee<T, U> {
  private eCode: T;
  private eName: U;
  constructor(ec: T, en: U) {
    this.eCode = ec;
    this.eName = en;
  }
  displayData() {
    console.log(this.eCode, this.eName);
  }
}
let obj = new Employee<number, string>(1001, 'First Employee');
obj.displayData(); // 1001 First Employee
let obj1 = new Employee<string, string>('1001', 'First Employee');
obj1.displayData(); // 1001 First Employee

72 - Generic Interfaces
The way we implemented generic classes, it is also possible to create generic interfaces. The syntax is simillar for both : We just need to add generic type variable.
1.Implementing generic interface :
interface Vehicle<T, U> {
  model: T;
  vType: U;
}
let obj: Vehicle<number, string> = { model: 1001, vType: 'SUV' };
let obj1: Vehicle<string, string> = { model: '1002', vType: 'Sedan' };
console.log(obj, obj1); // {model: 1001, vType: "SUV"} {model: "1002", vType: "Sedan"}

2.Implementing generic interface with function :
interface AddOrJoin<T, U> {
  (a: T, b: U): void;
}
function addValues(a: number, b: number): void {
  console.log(a + b);
}
function concatValues(a: string, b: string): void {
  console.log(a + b);
}
let sumVal: AddOrJoin<number, number> = addValues;
let concatVal: AddOrJoin<string, string> = concatValues;
sumVal(5, 6); // 11
concatVal('Hi ', 'There') // Hi There

OR
interface AddOrJoin<T, U> {
  (a: T, b: U): void;
}
function addValues<T, U>(a: T, b: U): void {
  console.log(a + b);
}
let sumVal: AddOrJoin<number, number> = addValues;
let concatVal: AddOrJoin<string, string> = addValues;
sumVal(5, 6); // 11
concatVal('Hi ', 'There') // Hi There

1.Explain syntax of how to define generic interface.
2.Give an example of using generic interface as the function type.

==========================================================================================================================
73 - What is module
Using export and import statements we work with module implementation. 
Normally when you work with frameworks like React or Angular we are able to use import-export directly because there is a 
development server running already like Webpack Dev Server, Vite, Angular CLI's built-in server etc. 

What web server does behind the scene ?
Transpile modern JS/TS to browser-compatible code using Babel.
Resolve imports : turning import React from 'react' into proper module paths
Bundle dependencies and manage module graphs
Serve files dynamically with caching and compression
Handle routing, HMR, and other dev niceties

Webpack build tool VS Webpack Dev Server (WDS)
Webpack build tool bundle your JavaScript files (and other assets) into optimized output for production. It can transform, 
compile, and bundle many types of resources (JS, CSS, images, etc). You configure Webpack with a webpack.config.js file.
Webpack Dev Server (WDS) is a companion tool to Webpack for development. It serves files from memory, enables Hot Module 
Replacement (HMR), and watches for file changes. It does not bundle files to disk — instead, it keeps them in memory for 
faster development.

When you want to run the module file with the "import" & "export" you need to run some server.
If you want to try import & export statement with normal HTML & Javascript file, you will have to make sure that you are 
running a web server.
In short you need web server in running state to import & export the module files.

In normal HTML we use script tag in the body tag with type as module & put import statement inside the script tag like below:
index.html :
  <body>
    <h1>Some content</h1>
    <script type="module">
      import {calc} from './calc.js';
      calc();
    </script>
  </body>
If you do not use type = "module" in script tag it shows syntaxError : Cannot use import statement outside a module.
calc.js :
export function calc() {
  console.log('Module code executed');
}
After running above you see CORS error : Blocked by the CORS policy.
To resolve this we need web server running, so run web server (200 OK Web server for chrome port) : 127.0.0.1:8887

1.What is module ?
A module means basically dividing your code into various logical pieces & importing then when required. ES6 provide a 
provision of importing & exporting of module directly.

2.Can you import any module inside the script tag ?
Yes we can import any module inside the script tag. like below :
    <script type="module">
      import {calc} from './calc.js';
      calc();
    </script> 

3.How will you run import & export statements on a local machine ?
For running import & export statements on a local machine you need to have web server running on local machine. Normally when 
you upload your website data on server also frameworks like react & angular use build tools like webpack which will run the 
relative development server so you do not have problem running import & export statements.
For local machine configure chrome web server. 

74 - Named ExportImport : When a module is exported using its name & using export keyword it is known as named export. And 
when the module is imported using import keyword with exported names inside the curly braces it is called as named import.
There are two ways of using import & export for a module in JS :
1.Named Export-Import
2.Default Export-Import

calc.js 
export function sum() {
  console.log('Module code executed');
}
export function cube(a) {
  return a * a * a;
}
OR 
function sum() {
  console.log('Module code executed');
}
function cube(a) {
  return a * a * a;
}
export {sum as total, cube};

index.html 
    <script type="module">
      import {total, cube} from './calc.js';
      console.log(sum(4,5));
      console.log(cube(4));
    </script> 
Go to : 127.0.0.1:8887 - Make sure that web server running (200 OK Web server for chrome)

To export a function with a different name, use 'as' during export, and import it using the new name — not the original one.
example : export {sum as total, cube};
To import a function with a different name use 'as' during export and must use new name for the further coding.
example : import {sum as total, cube};
To import all the module from a specific file : syntax - import * as obj from './calc.js' : In this case all the modules 
imported from calc.js are now part of object 'obj' & you can use dot operator to access the exports of the module.
    <script type="module">
      import * as calc from './calc.js';
      console.log(calc.sum(4,5));
      console.log(calc.cube(4));
    </script> 
When you have many modules in the file & all must be imported then use above syntax.

In modern build tools like webpack, if some imported modules are not used then those modules get removed automatically by the
build tool which is called as Tree Shaking.

If you are importing all the module use * & if you are importing particular modules only then go with named imports.

1.What is named export and import ?
When you have multiple exports per file or module then you can use named export. 

2.Can you avoid {} while importing the named module ?
No you can not avoid curly brackets {}, if you do not use it, then it wont work.

3.How can you import all named modules from a file ?
To import all the named modules from a file you use '*' with as keyword & object name. Then we use the object with dot 
operator to access the modules of the file.

4.Is it good practise to import all the modules together ?
When you know that you have all the modules used in the application certainly you can use import all syntax. But if only 
2 or 3 modules are used at a specific level & rest are used in some other file then go with named syntax instead of all.
Tree shaking : Unwanted module removal internally by build tools like webpack.

5.Do the modules hoist ?
Yes there is hoisting for module in TS, by using it you can use module before importing it. But its best practise to first 
import the module at the top of your code & then use that module in later stages.
example :
module(); // Using module before import
import module from 'path'; // importing

6.Do you need same name while importing a named module or can you change it ?
Yes you can change the name using the keyword 'as' but for further code you have to use new name not old name.

75 - Default ExportImport
Default exports means there will be one module per file. Generallt this approach is seen in frameworks where one function or
class or component is exported. In other words you export one container which has many things inside it & you import it as 
one module only.

IMP : In default export we have only one export per file but in named export we can have multiple exports from one file. In 
default import we use curly brackets to import a module but in named import we use do not use curly brackets. Name of the 
function does not matter in default import.  

OR
With a default export, only one value can be exported per file. In contrast, named exports allow you to export multiple values 
from the same file. When importing a default export, you do not use curly braces; but when importing named exports, you do 
use curly braces.

Using the default export naturally will increase the number of files as it has only one export per file.
sum.js :
export default function sum(a, b) {
  return a + b;
}

cube.js :
export default function sum(a) {
  return a * a * a;
}

index.html :
    <script type="module">
      import sum from './sum.js'; // not using {} for import
      import cube from './cube.js'; 
      console.log(sum(4,5));
      console.log(cube(4));
    </script> 

76 - Typescript Modules
1.1.How do you deal with modules in TypeScript ?
The import and export statement is used to deal with modules. A file becomes a module and there might be many declarations or 
code inside it. A function, an interface or a class everything can be exported. In TypeScript, when you write the code in a 
project the declarations, functions etc are set global.
We may have multiple files but in TypeScript everything is treated global in a single project. The moment you use the 
"export" statement, it will not remain global. Ideally You should not have global declarations in the project. 
"namespaces" are containers and is a better approach as compared to simply import/export!

To compile specific module with specific type use command OR to select module loader : tsc --module commonjs app.ts
Module loader is the key to perform the import and export, especially at runtime. The module loader is responsible for making 
sure that all the dependencies are available to the respective path.
tsc --module es2020 app.ts

As soon as we use export keyword everything which is global will not be global anymore.

77 - Typescript Namespaces
TypeScript namespace is even better grouping of classes, interfaces, functions and other declarations. We used to create 
object literals to have namespaces like feeling in JavaScript in very early days. But namespace certainly is a good way to 
handle a group of related functionalities together. You may have Classes, interfaces or even a simple variable can be part 
of a namespace.


78 - Introduction
Decorator is a javascript function that begins with '@' sign & it is meta programming technique. Meta program used to control the behavior of other programs. To apply the decorator on a class, we just need to place it on top of the class declaration and the decorator automatically gets invoked when the class is executed at runtime. 
Because decorator is introduced in ES7 we have to turn the 'experimentalDecorators' option 'ON' to activate it. To do so we need to open tsconfig.json file & uncomment the line 'experimentalDecorators: true'. Other way is using command line like this : tsc --target ES5 --experimentalDecorators.
Decorators are proposed in JavaScript, but few frameworks like Angular have implemented it. TypeScript also supports and it is still in the early stage.
There are various types of decorators we can implement; like a class decorator method, property or parameter decorator.
As per the name, Decorator adds some functionality or it decorates a class, method, property or parameter.
For example :
@MyDecorator
class Test{
  // members
}
In above example MyDecorator is decorator which controls the behavior of the class Test.

79 - Class Decorators 
Class decorators are called automatically when the class is defined, not when it's instantiated. If your decorator function expects parameters but receives none, TypeScript will throw the error: accepts too few arguments. In TypeScript, classes are syntactic sugar over constructor functions. "The decorator receives the class constructor (a function) as its parameter."
Even if we do not instatiate the class the decorator gets called automatically. If we do not pass parameter to the decorator function then it will show error : 'ControlVehicle' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@ControlVehicle()'?. 
Why we pass type as Function inside decorator paratemer ? Because class is actually a function in TS means they are just synthetic sugar over over constructor functions means the class is actually constructor function only.

IMP : Must uncomment experimentalDecorators: true in tsconfig.json
function ControlVehicle(target: Function) {
  console.log('Decorator called...');
}
@ControlVehicle
class Vehicle {
  model: number;
  constructor(m: number) {
    this.model = m;
    console.log('Constructor called...');
  }
}
output : Decorator called...

IMP : Constructor function is passed as an argument to the decorator function.
function ControlVehicle(target: Function) {
  console.log(target);
  console.log('Decorator called...');
}
@ControlVehicle
class Vehicle {
  model: number;
  constructor(m: number) {
    this.model = m;
    console.log('Constructor called...');
  }
}
const vehicle = new Vehicle(1000);
output : 
  ƒ Vehicle()
  Decorator called...
  Constructor called...

example :
function ControlVehicle(target: Function) {
  Object.seal(target);
  Object.seal(target.prototype);
}
@ControlVehicle
class Vehicle {
  model: number;
  constructor(m: number) {
    this.model = m;
    console.log('Constructor called...');
  }
}
const vehicle = new Vehicle(1000);
(Vehicle as any).newStaticProp = 'X';           // ❌ Error in strict mode
(Vehicle.prototype as any).newMethod = () => {}; // ❌ Error in strict mode
In this example, the ControlVehicle decorator uses Object.seal() to lock down both the class constructor and its prototype. This prevents adding new static properties or instance methods after the class is defined. However, existing properties — like the model property in the constructor — still work normally. This kind of decorator can be useful for enforcing immutability of class structure during runtime.

1.How will you define decorator for a class ?
In TypeScript, a class decorator is defined as a function that takes the class constructor as its only parameter. The decorator is applied by placing it above the class using the @ symbol.
OR
So in short, a class decorator in TypeScript is a function that takes the class constructor as its argument, and it's applied using @ above the class. Since a class is just a constructor function at runtime, the parameter is typed as Function. The decorator is triggered as soon as the class is declared, even before any object is created.

2.Explain parameters passed to the decorator function when it's applied to the class.
In TypeScript, when we define a class decorator, the decorator function receives exactly one parameter, and that is the constructor function of the class. This is because decorators operate at runtime, and in JavaScript/TypeScript, classes are actually compiled into constructor functions.
The number of parameters a decorator function receives depends entirely on what it's being applied to. For example:
  A method decorator receives three parameters: the target object, method name, and property descriptor.
  A property decorator receives the target object and property name.
  But for a class decorator, it's always just one: the class constructor itself.
We can easily verify this by logging the parameter inside the decorator. It shows the entire class function, confirming that the decorator receives the class constructor. This allows us to extend or modify the class behavior at the time of declaration — even before any instance is created.

80 - Method Decorators
A method decorator is used to decorate methods of the class. They can be either static methods or instance methods. 
In case of method decorators, the decorator function receives three arguments. 

81 - Accessor Decorators
82 - Class Factory
83 - Property Decorators
84 - Parameter Decorators


