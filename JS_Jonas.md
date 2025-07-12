Headspace Guide to Meditation, The Mind, Explained, Heal documentary, The Secret, Ram Dass, Going Home
The Mindfulness Movie, InnSæi: The Power of Intuition, The Honest Guys, Jason Stephenson - Sleep Meditation Music,
Mindful Movement, Calm app, Gaia streaming platform, Gaiam TV, Mindful.org, The Mindful Kind, 10% Happier with Dan Harris

015 Type Conversion and Coercion
Type Conversion : Manually convert from one data type to another
Type Coersion : Javascript automatically/implicitly converts data types behind the scenes
Type Conversion : We can convert to a number , to a string , to a boolean 
Strings to Numbers :
const inputYear = 1991;
console.log(Number(inputYear), inputYear); 1991 & '1991' Number converts string to number & string '1991'
console.log(inputYear + 18); 199118 concatination happens coz inputYear is still string here
console.log(Number(inputYear) + 18); 2009 addition happens coz we converted 1991 string to number

console.log(Number('Jonas')); NaN Not a number : Javascript returns NaN when operation fails to produce a new number
NaN means invalid number
console.log(typeof(NaN)); number, NaN means invalid number

Numbers to Strings  :
console.log(String(23), 23); //'23', 23 

Type Coersion : It happens when operator dealing with 2 values with different data types 
console.log('I am' + 23 + 'years old'); I am 23 years old , String + Number + String 
console.log('23' + '10' -3); 10
console.log('23' * '2'); 46
console.log('23' * '2'); 11.5
console.log('23' > '18'); true
Whenever there is operation between strings & numbers : 
if operation is addition a number converted to string & concatination happens
And if operation is subtraction string converted to number & subtraction happens 
And if operation is multiplication string converted to number & multiplication happens 
And if operation is division string converted to number & division happens 
And if operation is logical string converted to number & comparison happens 

let n = '1' + 1; 11 
n = n - 1; 11 - 1
console.log(n); 10

console.log(2 + 3 + 4 + '2'); 92
console.log('10' - '4' - '3' - 2 + '5'); 15

016 Truthy and Falsy Values : 5 falsy values : 0, '', undefined, null, NaN
falsy values are values that are not exactly false but will become false when we try to convert them into a boolean
All 5 falsy values will be converted to false when we try to convert them to boolean
Every thing else called truthy value, values that will be converted to true 
e.g number that is not zero, any string that is not empty string will be converted to true when we try to convert them to boolean
console.log(Boolean(0)); false
console.log(Boolean('')); false
console.log(Boolean(undefined)); false
console.log(Boolean(null)); false
console.log(Boolean(NaN)); false
console.log(Boolean('Jonas')); true
console.log(Boolean({})); true
Javascript does it automatically behind the scenes, 
Type Coercion to booleans happens in 2 scenarios :
1.When using logical operators  
2.Logical context like if-else statements 
2.Logical context like if-else statements : 
if block executes when value is truthy/true, else block executes when value is falsy/false  
const money = 0 else block executes
const money = 100 if block executes
if (money) {
    'Dont spend it all'
} else {
    'You should get a job'
}
if a variable is defined or not :
let height ; height has no value assigned to it so it is undefined & undefined is falsy value so else part run
let height = 10 ; height is defined here so if block executed 
let height = 0 ; height is 0 here & 0 is falsy so else block executed which is a bug coz zero is perfectly calid number
We can fix this bug using logical operators
if(height) {
    'YAY! Height is defined'
}else {
    'Height is UNDEFINED'
}

017 Equality Operators_ == vs. === :
const age = 18 ; if block ewxecutes
const age = 19 ; if block doesnt ewxecutes
if(age === 18) console.log('You just became an adult');
Equality Operators (== & ===) returns true or false values , if both sides are same true is value else false  
=== is strict equality operator does NOT do type coersion
console.log(18 === 18); true
console.log(18 === 19); false
== is lose equality operator DOES type coersion
console.log('18' == 18); true
console.log('18' === 18); false

const age = '18' 2nd if block executed
const age = 18 1st if block executed
if(age === 18) console.log('You just became an a :dult (strict)');
if(age == 18) console.log('You just became an adult (loose)');

!= not eqaual loose & !== not eqaual strict
propmt returns string NOT number  

018 Boolean Logic :
AND (&&) : A AND B , only if both A & B are true result is true , else all combinations are false
OR (||) : A OR B , if A or B is true result is true , if both A & B are false result is false
NOT (!) : it inverts the value 

021 The switch Statement : e.g monday-sunday days
Used when we want to compare one value to multiple different options 
Syntax : break stops further execution of code & exits the switch
switch(expression) {
    case x:
      code block
      break;
    case y:
      code block
      break;
    default:
      code block
  }

022 Statements and Expressions :
Expressions is piece of code that produces value
Statement is full sentence that translate our actions , its like bigger piece of code that does not produces value
whenever line ends with semicolon its a statement
In template literals we can only insert Expressions NOT statements

023 The Conditional (Ternary) Operator : if-else statement in one line , used when we need to take QUICK DECISION
Syntax : condition ? if block : else block
Ternary operator is an expression we can use it in template literal, write inside ternary operator placeholder ${}
const age1 = 15 ;
console.log(`I like to drink ${age >=18 ? Wine : Water}`);

025 JavaScript Releases_ ES5, ES6+ and ESNext:
JavaScript is backward compatible, older features are never removed, it gives incremental updates, Websites keep working forever
But JavaScript is not forward compatible, current browsers do not understand codes from future
How to use modern JavaScript today ? 
Ans: 1. During developement : use latest Google Chrome
     2. During production : We can't assume all our users uses latest browsers, solution to this is to convert
     modern JavaScript versions back to ES5 using process called Transpiling & Polyfilling, We use BABEL tool to transpile code
Check out compatiblity table Kangax.github.io

Fundamentals Part 2
003 Functions : Piece of code that we can reuse over & over again, fruitProcessor apples & oranges
return : value return from Functions can be used anywhere in code , return statement immediately exits the function
anything written after return statement does not executes
if we want to use the value that was returned , store the Function call into variable
we could also return expressions directly
parameter is placeholder & argument is actual value to fill in placeholder / parameter

004 Function Declarations vs. Expressions :
Function Declaration : function that can be used before its declared
Function Expressions : function value stored in variable
Arrow function : Great for one liner functions & has no this keyword
Function Declarations simple function, we can call function Declarations before they defined in code
Function Expressions is anonymous function assigned to variable , anonymous function is an expression & expression produce values
we cant call function expressions before they defined in code it throws error ReferenceError, this happens due to hoising

1.function name > 2.Parameters (placeholders that receives argument values,used in function body also like local variables) 
> 3.function body : piece of code that we want to reuse is placed here, function input data is processed & returned
> 4. return used to output the value from function , it also immediately terminates the exewcution of function
> 5. we call function with parenthesis, without parenthesis the function is just a value  
> 6. variable to save returned value from function(function output)

005 Arrow Functions : special form of function expression that is shorter & faster to write
Syntax : variable = Paramter => expression ;
Return happens implicitly in one liner arrow function, value automatically returns
if function has more than one line of code , we must use return 
Arrow functions do not get this keyword

006 Functions Calling Other Functions : cutPieces(fruit)  & fruitProcessor(apples,oranges)
Value of apples from fruitProcessor(apples,oranges) function is used to call cutPieces function , values of apples 
is argument to cutPieces function, apples value replaces fruit parameter cutPieces, result of cutPieces will be returned 
to cutPieces function in fruitProcessor

007 Reviewing Functions : calcAge(birthYear) & yearsUntilRetirement(birthYear, firstName)

009 Introduction to Arrays : Datastructure used to store multiple related values in structured manner in same variable, 
We cant reference array elements by name but only in order number / index 
Programming is all about data , we get data from somewhere, we store & process data , we give some data back
and to store that data we use data structures, 2 imp data structures arrays & objects
array[0]  array.length  array[array.length - 1] we can put any expression inside this brackets 
array[indexOfelementWantToReplace] = [new element to replace old one] ; to replace element from array with new element 
Only primitive values are immutable, Array is not a primitive value so we can change it even array declared with const 
we cant replace entire array
we cant put different types of data in a single array, like string number expression array variables  

010 Basic Array Operations (Methods) :
const friends = ['Micheal', 'Steven', 'Peter']
friends.push('Jay'); adds element to end of array, returns length of new array
const newlength = friends.push('Jay'); returns new length
friends.unshift('John') adds element to begining of array, returns length of new array
friends.pop() removes last element from array, no need pass argument, returns removed element
const popped = friends.pop() returns removed element
friends.shift() removes first element from array, no need pass argument, returns removed element
friends.indexOf('Steven') returns index of element
friends.indexOf('Bob') returns -1 coz element that does not exists in array
friends.includes('Steven') Uses strict equality operator === returns true coz Steven is present in array
friends.includes('Bob') returns false coz not present in array 
friends.push(23);
console.log(friends.includes('23')); return false Uses strict equality operator === , 23 === '23'
Use of includes : TO write conditionals like if-else
if(friends.includes('Peter')) {
    console.log(`You've friend called Peter` );
}

012 Introduction to Objects : Datastructure used to store data in key-value pairs in unstructured manner
We cant reference object by order / index

013 Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedatman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Steven', 'Peter']
}
getting property from object
console.log(jonas.lastName); dot Notation, here we can not put any expression
console.log(jonas['lastName']); bracket Notation, here we can put any expression
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); JS creates a string firstName from expression 
console.log(jonas['last' + nameKey]); JS creates a string lastName from expression 
if we need to compute property name use dot Notation unless use dot Notation
propmt is also expression, we can use it with bracket notation but not with dot notation

add new property to object
jonas.location = 'india';
jonas['twitter'] = '@jonas.io'
jonas.friends.length returns length of friends array in jonas object
jonas.friends[0] //

014 Object Methods  :
console.log(jonas.calAge(1992));
console.log(jonas['calAge'](1992));
this keyword is equal to the object on which method is called
Functions are just values that means we can create a key value pair in which value is a function, that means
we can add functions to objects called as methods , Any function attached to objects 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedatman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Steven', 'Peter'],
    hasDriverLicence: false,
    1st way
    calAge: function (birthYear) {
        return 2037 - birthYear
    },
    2nd way
    calAge: function () { no need to pass argument while calling function
        console.log(this); we get whole jonas object
        return 2037 - this.birthYear
    },
    3rd way Best way
    calcAge: function () { 
        this.age = 2037 - this.birthYear  this.age is like jonas.age , new property age is created here with this
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, & he has ${this.hasDriverLicence ? 'a' : 'no'} drivers licence`
        we must use this.calcAge() not age only coz we cant assume calcAge is called already before
        And only after calling calcAge we can access age property  
    }
}
console.log(jonas.calAge(1991)); for 1st
console.log(jonas['calAge'](1991)); for 1st
console.log(jonas.calAge()); for 2nd
console.log(jonas.calcAge()); for 3rd we calculated age once, & retrived property age multiple times here 
console.log(jonas.age); only after calling calcAge we can use age property like this here
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());
1991 argument here is already defined in jonas object, its not ideal coz we are repeating code KEEP THE CODE DRY
we could access birthYear property directly without passing it in as a parameter in calcAge function using this keyword
also no need to pass 1991 
for 3rd : if we need to access age in multiple places, so the function will get called everytime & everytime 
2037 - birthYear calculation is done , its a bad practice, so we create age property store result in seperate object 
& access it as per our need  

016 Iteration_ The for Loop : e.g gym weight lifts 
Loops allows us to automate repititive tasks

017 Looping Arrays, Breaking and Continuing :
console.log(`for loop - Counter; condition; Counter update`);
const jonasArray = [
    'Jonas',
    'Schmedatman',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Lavda', 'Lasun'],
    true
]
log each element & type of element from array :
for (let i = 0; i < jonasArray.length; i++){
    console.log(jonasArray[i], typeof jonasArray[i]);
}
create new array which contains all the types for elements in jonasArray
const types = []; empty array
for (let i = 0; i < jonasArray.length; i++){
    types.push(typeof jonasArray[i])
}
console.log(types);

calculate ages from years & push them to ages array
const years = [1991, 1992, 1993, 1994, 1995];
const ages = [];
for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i])
}
console.log(ages);

Continue & break statement : 
Continue just skip/exit the iteration based on condition 
only element with strings type will be displayed 
console.log(`------ ONLY STRING PRINTED ---------`);
for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] !== 'string') continue; if typeof is other than string continue will skip that iteration
    3rd element is 46 which is not a string , so continue will exit the loop immediately for 3rd element, it will not print it
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`------ BREAK AFTER FIRST NUMBER FOUND ---------`);
Log no other element after we find first number element
for (let i = 0; i < jonasArray.length; i++) {
    if ( typeof jonasArray[i] === 'number') break ;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

018 Looping Backwards and Loops in Loops :
reversing array :
console.log(`------- REVERSE ARRAY ---------`);
for (let i = jonasArray.length - 1; i >= 0; i-- ) {
    console.log(i , jonasArray[i]);
}

console.log(`-------- Loop inside loop (repitition loop inside exercise loop)---------`);
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Exercise number:${exercise}`);
    for (let rep = 1; rep < 5; rep ++) {
        console.log(`Exercise ${exercise}: Lifting weight repitition: ${rep}`);
    }
}

019 The while Loop : Use it when you do not know beforehand HOW MANY ITERATIONS LOPP WILL HAVE
Keep running the loop until we get 6 
let dice = Math.trunc(Math.random() * 6) + 1;
Math.random() * 6 gives number between 0 to 5 & then we add 1 to it now we get 1 to 6
console.log(dice);
while (dice !== 6) { when dice is 6 it will not execute the loop ; when first dice is 6 loop has zero iterations
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end... `);
}
we do not know how many times we role a dice thats different from 6 , no need of counter here
When we know how many times loop will run , we need a counter, e.g looping over array , we already know
how many elements that array has so we know how many iterations do we need


003 Destructuring Arrays : Its an ES6 feature
Destructuring means unpacking values from array or object into seperate variables.
Its like breaking complex data structure into smaller data structure like a variable 
Retrieve elements from array & store them into variable , original array not affected / mutated
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}  
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]
const [x, y, z] = arr; [x, y, z] is destructuring assignment not array 
whenever JS sees array like structure on left side of the equal sign it knows that it is destructuring 
must use const to declare variable
console.log(x, y, z); 2 3 4

const [first, second] = restaurant.categories; first 2 elements from array 'categories'
console.log(first, second); Italian Pizzeria

const [first1, ,second1] = restaurant.categories; first & third elements from array 'categories'
console.log(first1, second1); Italian Vegetarian

1.switch Italian <=> Vegetarian
Without destructuring :
let [main, secondary] = restaurant.categories;
console.log(main, secondary); Italian Vegetarian
const temp = main; temp <=> main <=> secondary <=> temp
main = secondary
secondary = temp;
console.log(main, secondary); Vegetarian Italian
with destructuring :
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary); Italian Vegetarian
[main, secondary] = [secondary, main]
console.log(main, secondary); Vegetarian Italian

2.Return multiple values from function using destructuring :
function return an array & immediately destruct result into different variables
Receive 2 return values from a function
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  }
}  
console.log(restaurant.order(2, 0)); ['Garlic Bread', 'Pizza'] in array
const [starter, mainCourse] = restaurant.order(2, 0) ; destructured above array
console.log(starter, mainCourse); Garlic Bread Pizza

3.Destructuring nested arrays : skip using space & comma
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested; 
console.log(i,j); 2 (2) [5, 6]
4.Nested destructuring : to get seperate variables , destructuring inside destructuring
const [a, ,[b, c]] = nested;
console.log(a, b, c); 2,5,6  as seperate variables

5.Default values for variables : If we dont know the length of the array
const [p, q, r] = [8, 9] 8, 9, undefined
const [p=1, q=1, r=1] = [8, 9]; set default value to 1
console.log(p, q, r); 8, 9, 1 we first get 8, 9, undefined , setting default to 1 gives us 1 instead of undefined

004 Destructuring Objects : No need to skip elements manually like arrays [, ,] coz order of elements doesnt matter in objects
must write exact property names of object to extract variables from object 
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
      thur: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, Open 24 hours
        close: 24,
      },
    },
  order: function(starterIndex, mainIndex){ indexes for starterMenu & mainMenu 
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}  
1.Destructure objects : simple
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
2.Giving new variable names to property names : {property_name: variable_name}
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);
3.set default values '=' if property does not exists in object
const {menu = [], starterMenu: starters = []} = restaurant;
here menu doesnot exists so default value [] applied to menu, starterMenu exists in restaurant so it doesnt take default value '[]'
we can also set default value for existing property of object like starterMenu: starters = []
console.log(menu, starters);
4.Mutating variables : Just wrap whole expression of destructuring in () : ({a, b} = obj); 
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 14 };
mutate variables a & b (changing values of both from 111 & 222 to 23 & 7 ) 
we can do let {a, b} = obj; or const {a, b} = obj; coz we already declared them above & also we can not do {a, b} = obj;
coz JS will think of it as code block & return SyntaxError : unexpected token "=" 
({a, b} = obj);
console.log(a, b); 23, 7 instead of 111 & 222 we mutated variables a & b

4.Nested objects ':' Simply use object brackets 
const {fri: {open: o, close: c}} = openingHours;
here in openingHours > fri > {open:11, close:23} , we renamed open & close to o & cl viz. 
console.log(o, c); 11 23 

IMP : function with lot of parameters use this trick
passing object into function as an argument to destructure that object
added objectDelivery method check it in restaurant
we pass one object into orderDelivery not 4 arguments here
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
      thur: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, Open 24 hours
        close: 24,
      },
    },
  order: function(starterIndex, mainIndex){ 
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time ='20:00', address}){
      console.log(`Order recieved! ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]}
      will be delivered to ${address} at ${time}`);
  }
}  
restaurant.orderDelivery({ we are calling method orderDelivery here with only one argument & that is object (Not with 4 arguments)
    time: '22:30',
    address: 'Via del sole, 21',
    mainIndex: 2,
    starterIndex: 2
});
check out destructuring in orderDelivery method
below we call orderDelivery with default values , we set default values in orderDelivery parameters
restaurant.orderDelivery({
    address: 'Via del sole, 21',
    starterIndex: 1 we have set default time is 20:00 & default mainIndex is 0 so we get pizza here
});

005 The Spread Operator (...) : Whenever we need elements of array individually we use spread operator
To expand array into all its elements or basically unpack all array elements at once
uses 1.expand/build the array 2. when we pass multiple arguments into functions 3.NOT in template literals 
use it when we want multiple values seperated by commas, when we need elements individually 
Spread operator doent create new variables, we use it where we need value seperated by commas
const arr = [6, 7, 8];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray); [1, 2, 6, 7, 8]
using spread :
const newArray = [1, 2, ...arr];
console.log(newArray); [1, 2, 6, 7, 8]
console.log(...newArray); 1 2 6 7 8 expands array into all its individual elements

const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        openingHours: {
            thur: {
              open: 12,
              close: 22,
            },
            fri: {
              open: 11,
              close: 23,
            },
            sat: {
              open: 0, Open 24 hours
              close: 24,
            },
          }
}
creating newMenu array with new element added Gnocchi :
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
Difference spread vs destructuring : 
Spread operator takes all the elements from the array & it does not create new variables like destructuring does.
So we use spread only when we need values seperated by commas
Shallow Copy of array :
const mainMenuCopy = [...restaurant.mainMenu] like object.assign read MDN

Merge or Join 2 array :
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

Spread operator works on all the Iterables : Arrays, strings, maps, sets NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); each letter of string is individual element in an array
console.log(...str); J o n a s not in array only individual elements
We can not use spread operator with strings in template literal
console.log(`${...str} Schemadtmann`); We see SyntaxError unexpected token '...'

Using spread operator to pass multiple elements into the method or function
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
      thur: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, Open 24 hours
        close: 24,
      },
    },
  orderPasta: function(ing1, ing2, ing3){
      console.log(`Here is your delicious pasta with ${ing1},${ing2} & ${ing3}`);
  }
}
const ingredients = [
    prompt('Let\'s make pasta! Ingredient1'), 
    prompt('Let\'s make pasta! Ingredient2'), 
    prompt('Let\'s make pasta! Ingredient3')
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[2], ingredients[2]) old way without spread operator
restaurant.orderPasta(...ingredients); we expanded elements of ingredients array which is prompted by user

Spread operator also works on objects yet objects are not Iterables
const newRestaurant = {foundedIn: 2005, ...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant); get object with restaurant & foundedIn & founder
Shallow copy of objects :
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); Ristorante Roma
console.log(restaurant.name); Classico Italiano
Objects are reference type changing in one object will affect other object also. By using spread operator we can shallow
copy the object without this reference problem

006 Rest patterns & parameters : Its opposite of spread operator which is used to expand the array into individual elements 
Rest on the other hand used to collect multiple elements & condense them into an array.Both uses same syntax
Destructuring is used to extract individual elements from array into variables
Spread used to unpack an array while rest used to pack array elements into an array
Spread coz on RIGHT side of '='
const arr = [1, 2, ...[3, 4]];  spread
Rest coz LEFT side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

Rest operator collects all the array elements after the last variable & it does not include skipped elements 
rest element must be last element : No more elements/variables after we use rest pattern
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, Open 24 hours
      close: 24,
    },
  }
}
1) Rest used for destructuring assignments 
const [pizza, , Rissotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
does not include skipped element 'Pasta' & rest element must be last element

Objects : create object with thur & fri of openingHours object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); we see object with thur & fri not sat

2) Rest used for functions : packs multiple arguments into one single array 
const add = function(..numbers) {
  console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
}
add(2, 3) [2, 3]
add(5,3,4,6); [5,3,4,6]
add(1,2,3,4,5,6,7,8,9,10) [1,2,3,4,5,6,7,8,9,10]
const x = [23, 55, 88];
add(...x); spread is used to extract individual elements & rest is used in function to collect all these element into one array

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(...mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
}
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); mushrooms ['onion', 'olives', 'spinach']
all the remaining arguments of this function are stored into an array using rest operator
restaurant.orderPizza('mushrooms') mushrooms []
Difference spread vs rest :
Spread is used where we write values seperated by commas & rest operator is used where we write variable names seperated by commas
IMP : values seperated by commas use spread ; variables seperated by commas use rest


007 Short Circuiting (&& and __) :
Properties of logical operators : They can use any data type, return any data type & they use short circuiting
OR operator returns first truthy value & if no truthy value it return last falsy value 
falsy value : 0, '', undefined, null, NaN  
console.log(`----------- OR Shortcircuting ----------`);
console.log(3 || 'Jonas'); 3
console.log('' || 'Jonas'); 'Jonas'
console.log(true || '0'); true
console.log(undefined || null); null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); Hello

restaurant.numGuests = 23;
if we set numGuests to 0 it shows result of 10 which is a bug solved by nullish operator
const guest = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guest); 10 since numGuests does not exists (undefined)
OR
const guest1 = restaurant.numGuests || 10; if we comment 'restaurant.numGuests = 23' we see 10 as result 
console.log(guest1); 

console.log(`----------- AND Shortcircuting ----------`);
AND operator returns first falsy value & if no falsy value it return last truthy value 
console.log(0 && 'Jonas'); 0
console.log(7 && 'Jonas'); Jonas
console.log(undefined && 0 && '' && 'Hello' && 23 && null); undefined

Check certain property or value already exists or not
if orderPizza method exists then we call it
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}
OR
    restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')
IMP: we can use OR to set default values & AND to execute code in the second operand if the first operand is true

008 The Nullish Coalescing Operator (??) : nullish means only null & undefined (NO OTHER FALSY VALUE 0, '', false)
Nullish Coalescing operator works with idea of nullish values (null & undefined) instead of falsy values
It does not include 0 & '' are not falsy(truthy) values for Nullish Coalescing operator
if we set numGuests to 0 it shows result of 10 which is a bug solved bu nullish operator
restaurant.numGuests = 0; if numGuests is null or undefined then 10 will be executed , 0 is not nullish value 
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guest2); 
const guestCorrect = restaurant.numGuests || 10; if numGuests is 0 then 10 will be executed
console.log(guestCorrect); 10
const guestCorrect = restaurant.numGuests ?? 10; if numGuests is null or undefined then 10 will be executed
console.log(guestCorrect); 0

010 Looping Arrays : The for-of Loop :
It gives you current element of array, We can get index of each element by array.entries()
IMP : we can use continue & break statement in for-of loop
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thur: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, Open 24 hours
          close: 24,
        },
      },
}
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); return all element of array (NOT ARRAY) Focaccia Bruschetta Garlic Bread Caprese Salad
here item is current array element & item variable is always a current element in each iteration 
We can use continue & break keywords in for..of loop
2.To get index of each element :
for (const item of menu.entries()) {
    console.log(item);return an array of index & its element [0, 'Focaccia'] [1, 'Bruschetta'] ...
} 
console.log([...menu.entries()]) menu.entries() is array of arrays with element & index number 

Print a nice menu starting at '1'
for (const item of menu.entries()) { menu.entries() is array of arrays with element & index number 
    console.log(`${item[0] + 1}: ${item[1]}`);
}
OR by destructuring BEST WAY
for (const [i, el] of menu.entries()) { item variable destructured & created 2 variables 'i' & 'el'
    console.log(`${i + 1}: ${el}`);
}


Weird output
for (const item of menu) {
    console.log(`${item[0]}: ${item[1]}`);
}  

011 Enhanced Object Literals:
1. To add openingHours object(seperate object) to restaurant object just add openingHours to the new line
openingHours: openingHours is same as openingHours;
2. Methods enhancement : removed function keyword & semicolon still method works 
3. we can compute property name instead of writing them manually [`day-${2 + 4}`]
Before we could compute only values, Now we can compute property name also 
We are going to compute weekdays in openingHours object
const weekdays = ['mon', 'tue', 'wed','thur', 'fri', 'sat', 'sun']
const openingHours = {
    [weekdays[3]]: { thur
      open: 12,
      close: 22,
    },
    [weekdays[4]]: { fri
      open: 11,
      close: 23,
    },
    [`day-${2 + 4}`]: { 3.we can computed property name here using template literal & expression
    [weekdays[5]]: { sat
      open: 0, Open 24 hours
      close: 12 + 12,
      close: 24,
    },
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    old way : openingHours: openingHours
    ES6 enhanced object literal : create property name in restaurant object with variable name openingHours above  
    openingHours,
    ES6 way to write method :
    order(starterIndex, mainIndex){ indexes for starterMenu & mainMenu 
         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
}

012 Optional Chaining (?.)  : check if property exists or not
to check if restaurant opens on mon or not :
console.log(restaurant.openingHours.mon.open); result of restaurant.openingHours.mon is undefined & undefined.open is error
to check if restaurant object have openingHours and if restaurant opens on mon or not :
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); 
if we have deeply nested objects with lots of optional properties its hard to check every property
Solution : optional chaining below
console.log(restaurant.openingHours?.mon?.open); above if else in short by optional chaining undefined
only if mon exists open property will be read from there if not undefined returned 
property exists means not null & not undefined, nullish concept, if property is 0 or '' property exists
if property is null or undefined property does not exists (nullish coalescing) & if property is 0 or '' property exists
we can have multiple optional chaining in single expressions
Example :
const days = ['mon', 'tue', 'wed','thur', 'fri', 'sat', 'sun']
for (day of days) {
    console.log(day);
    const open = restaurant.openingHours.day?.open ;
    IMP : if you want to use variable name as property name use [] instead of .dot
    const open = restaurant.openingHours[day]?.open; 
    const open = restaurant.openingHours[day]?.open ; 
    console.log(`On ${day} we open at ${open}`);
    we get undefined here so lets set a default value 
    const open = restaurant.openingHours[day]?.open || 'closed'; 
    console.log(`On ${day} we open at ${open}`);
    we get closed on sat but actually restaurant opens at 0 & 0 is falsy value 
    so better use nullish Coalescing operator ?? instead of ||
    const open = restaurant.openingHours[day]?.open ?? 'closed'; 
    console.log(`On ${day} we open at ${open}`);
}
IMP: Whenever there is zero 0 conflict use nullish coalescing operator

Optional chaining on methods :
We can check if method already exists before we call it
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exists');
console.log(restaurant.orderRissotto?.(0, 1) ?? 'Method doesnt exists');
if method exists call it with arguments & if does not exists return Method doesnt exists 

Optional chaining on arrays : IMP
const users = [{name: 'Jonas', email: 'jonas.io'}];  
console.log(users[0]); 0th index is whole object here
console.log(users[0]?.name ?? 'User not found'); Jonas
OR
if(users.length > 0) console.log(users[0].name);
else console.log('User does not exists');
IMP : Use optional chaining operator(?.) with nullish coalescing(??) operator to get enhanced results

013 Looping Objects_ Object Keys, Values, and Entries:
Objects are not Iterables, but we can loop over objects in a indirect way
Loop over object property name(keys) or object values or both
Object.keys, Object.values & Object.entries returns array so we loop over array actually
Loop over Property names : Object.keys return array of properties > loop over this array using for...of loop
const properties = Object.keys(openingHours); returns array with property names of openingHours
console.log(properties); ['thur', 'fri', 'sat']
let openStr = `We're open on ${properties.length} days`; We're open on 3 days
for (const day of properties) { we used properties here which is Object.keys(openingHours)
    openStr += `${day}, ` openStr = openStr + `${day}` for each iteration
}
console.log(openStr); We're open on 3 days: thur, fri, sat, 

Loop over values : Object.values return array of values > loop over this array using for...of loop
const values = Object.values(openingHours)
console.log(values); [{…}, {…}, {…}] array of object values

Loop over entire object : Object.entries return index number(key) & element of array(value) > loop over object using 
for...of loop & destructure it same time
const entries = Object.entries(openingHours);
console.log(entries);  [Array(2), Array(2), Array(2)]  Array Literals
for (x of entries) {
    console.log(x); ['thur', {…}] ['fri', {…}] ['sat', {…}]
    here we see another object inside array, so lets destructure both the array & object inside also
for([key, value] of entries) 
for ([key, {open, close}] of entries){ since value is object we immediately destructured it value = {open, close}
    console.log(`On ${day} we open at ${open} & close at ${close}`);
}
o/p : On sun we open at 12 & close at 22   On sun we open at 11 & close at 23  On sun we open at 0 & close at 24
IMP : we can not use for..of & spread operator on objects directly coz they are not iterables
IMP : Spread operator works on all the iterables (except object)

In ES6 sets & maps added, so we got 4 Datastructures in JS : Arrays Objects Sets Maps
015 Sets : collection of unique values NO DUPLICATES
Sets can hold mixed data types
Sets Vs Arrays : No key value pairs in both, Just a bunch of values grouped together & both are iterables
Elements of set are unique & Order of elements in the Set doesnt matter & .size used to check length (NOT .length)
Sets have has method, arrays have include method
Syntax : new Set(IterablesOnly)
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissotto', 'Pasta', 'Pizza']);
console.log(ordersSet); Set(3) {'Pasta', 'Pizza', 'Rissotto'} , No duplicates
console.log(new Set('Jonas')); Set(5) {'J', 'o', 'n', 'a', 's'}, Strings also iterables
console.log(new Set()); Set could also be empty
console.log(ordersSet.size); 3 how many different meals are going to cook (not length)
Element exists or not in a set : has method simillar to include method of array
console.log(ordersSet.has('Pizza')); true
console.log(ordersSet.has('Bread')); false
add element to set (to the last but order does not matter in set)
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); Set(4) {'Pasta', 'Pizza', 'Rissotto', 'Garlic Bread'} 
Garlic Bread added once coz set contains unique element only, 2nd one ignored
delete element to set
ordersSet.delete('Rissotto');
console.log(ordersSet); Set(3) {'Pasta', 'Pizza', 'Garlic Bread'}
Check out how to delete elements from array ??? 
retrieve values out of set : There is no point in retrieving values out of set coz all values are unique & order doesnt matter
To delete all elements from set :
ordersSet.clear(); to delete all elements from set

loop over sets :
for (const order of ordersSet) console.log(order); Pasta Pizza Garlic Bread

Real use of set : remove duplicate values from arrays : unique arrays
Ans : convert array to set & spread operator on it [...new Set(array)]
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); //Set(3) {'Waiter', 'Chef', 'Manager'} but we need it in array
const staffUnique1 = [...new Set(staff)] add whole expression to bracket NOT staff only
console.log(staffUnique1); //['Waiter', 'Chef', 'Manager']  
To check how many unique values in array 
console.log(new Set (['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
always take from new Set for destructuring or for size
To check how many unique letters in string 
console.log(new Set('Vaibhav').size); 6
IMP : When you need to manipulate data, store values in order with duplicate values ALWAYS USE ARRAYS
Sets has unique property

016 Maps_ Fundamentals: Map is data structure to map values to keys
Data stored in key-value pairs like objects. In maps keys can have any data type (not only strings)
Dont use same key name again & if we do it map will return second key not first key
create empty map > fill map using 'set' method > read data from map use 'get method'
Maps vs Objects :
Maps can have any data type as key, Objects can have only strings as keys 
has method in maps & hasOwnProperty in objects, 
map.set(key, value) method in maps & obj.newProperty/key = 'value' OR obj[newProperty/key] = 'value'
map.get(key) method in maps & obj.property/key OR obj[property/key] 
map.size & obj.length
const rest = new Map(); create empty map
rest.set('name', 'Classico Italiano'); fill map with set method
rest.set(1, 'Firenze, Italy'); key can be a number 
rest.set(2, 'Lisbon, Portugal'); 
console.log(rest); 
We can chain set method, coz calling set method not only update the map but also return updated map
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed')
get method : To read data from map get method map.get(key), data type of key matters
console.log(rest.get('name')) Classico Italiano
console.log(rest.get(true)) We are open
console.log(rest.get(1)) Firenze, Italy

const time = 8; if time is between 11 & 23 We are open unless We are closed
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); We are closed
Above expression returns true or false & these values are mapped to 'We are open' & 'We are closed' statements

Methods on map : set(key), get(key), has(key), delete(key)
delete property from object - deleteOperator (Dont use it its slow)
hasOwnProperty for objects to check property exists or not
console.log(rest.has('categories')); true
rest.delete(2); 
console.log(rest);
console.log(rest.size);  7
rest.clear();

Using arrays or objects as keys of map : to get value of key i.e object or array first save that key in variable & then use get method on it
rest.set([1,2], 'Test') 
console.log(rest);
console.log(rest.get([1,2])) undefined , coz key [1,2] refers different place in memory, so first create array 
const arr = [1, 2];  
rest.set(arr, 'Test')  
console.log(rest.get(arr)) Test
rest.set(document.querySelector('h1'), 'Heading'); h1 is the key & Heading is value
console.log(rest.get(h1)); Didnt work coz its a DOM element
console.log(rest); we see {h1 => Heading}

017 Maps_ Iteration:
Use below method to create a map, And to add new element use set method
const openingHours =  {
            thur: {
              open: 12,
              close: 22,
            },
            fri: {
              open: 11,
              close: 23,
            },
            sat: {
              open: 0, Open 24 hours
              close: 24,
            },
    }
Example :
    const question = new Map([
    ['question', 'What is the best programming language in the world ?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct!!'],
    [false, 'Try again']
]);
console.log(question);
Above structure is array of arrays which is similar to Object.entries
console.log(Object.entries(openingHours)); this also return array of arrays [Array(2), Array(2), Array(2)]
IMP : Convert objects to map 
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap); Map(3) {'thur' => {…}, 'fri' => {…}, 'sat' => {…}}

IMP: Object is not iterable we convert it to iterable using Object.entries(object_name)
Looping maps :
console.log(question.get('question')); What is the best programming language in the world ?
for (const [key, value] of question) { to loop over objects we need Object.entries(question)
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
Answer 1: C, Answer 2: Java, Answer 3:Javascript
const answer = Number(prompt('Your Answer: ')); prompt returns string convert it to number
const answer = 3 ; Just dont need pop up
console.log(answer); 
console.log(question.get(question.get('correct') === answer));inner get method returns true & true is mapped to Correct so o/p is Correct
question.get('correct') === answer returns true so question.get(true) which is Correct !!

IMP : Convert map to array : Create array & use spread operator with map
console.log([...question]); (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]); (7) ['question', 1, 2, 3, 'correct', true, false]
console.log([...question.values()]); (7) ['What is the best programming language in the world ?', 'C', 'Java', 'Javascript', 3, 'Correct!!', 'Try again']
console.log([...question.entries()]); (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

018 Summary: When to use which Data Structure to Use
3 sources of Data :
1.Data from within program source code , status msgs 
2.Data from UI/ Webpage e.g data input from user in form, data written in DOM
3.Data from external sources , e.g API about movies,currency conversion rates, current weather
We use web apis to get data from other web applications 
Collection of data we store in Data structures > 4 built in data structures in JS Array, Object, Map, Set
Other built-in data structures in JS : WeakMap, WeakSet
Data structures not built in JS : Stacks, Queues, Linked lists, Trees, hash tables
Data from Web API is in JSON format. Creating an array of objects is common practise in JS 
1.Arrays Vs Sets : When we want simple list of values do not need to describe values
When to use Arrays : 1.When you want to store values in order 2.When values might contain duplicates 3.When you want to manipulate data
When to use Sets : 1.When you want to store unique values 2.When high performance is required coz searching & deleting is 10x faster than array 3.When you want to remove duplicate values from array
2.Objects Vs Maps : When we want to describe values using keys. Maps gives more performace than objects coz it can have any data type, easy to iterate, easy to compute the size of map 
When to use Objects : 1.Easy to write & access (by dot or bracket)  2. When you want functions as values(methods) use object, we can use this keyword to access propeties of object  
When to use Maps : When you want to map keys (that are not strings) to values. When you dont want to use methods 
We dont convert objects to map & work on them. We just use objects for everytime

020 Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
To get character from string at certain position. It returns string only
console.log(plane[0]); A string
console.log(plane[1]); 3 string
console.log(plane[2]); 2 string
console.log('B737'[0]); B string 
console.log(airline.length); 16 number
console.log('B737'.length); 4 number  
String Methods : space also count as character. If we input wrong string in methods it returns -1
1.indexOf returns first occurance of index
console.log(airline.indexOf('r')); 6 number 
2.lastIndexOf returns last occurance of index
console.log(airline.lastIndexOf('r')); 10 number
console.log(airline.indexOf('portugal')); -1 coz wrong string entered in input
console.log(airline.indexOf('Portugal')); 8 number
3.slice : extract string on the basis of its index. Does not mutate original string coz strings are primitive data type 
It always return a new string
console.log(airline.slice(4)); Air Portugal To use this string store it in variable or data structure 
console.log(airline.slice(4, 7)) Air End value is not included in slice here '7' 
length of extracted string from slice is : endIndex - startIndex = length '7 - 4 = 3' Air
If we dont know the string that we received yet : slice string with indexOf for first occurance & lastIndexOf for last occurance
console.log(airline.slice(0, airline.indexOf(' '))); 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ')));  ' Portugal' it include space also so add 1 to it
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) 'Portugal'
console.log(airline.slice(-2)); al  It start extracting from end -1 is first index
console.log(airline.slice(1, -1)); 'AP Air Portuga'

Write function that receives an airplane seat & logs to console whether its a middle seat or not. B & E are middle seats
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You are lucky');
}
checkMiddleSeat('11B')
checkMiddleSeat('3E')
checkMiddleSeat('23C')
Boxing : whenever we call method on a string JS will automatically behind the scenes converts that string primitive to string object. And we call method on that converted object.
This process is called as Boxing.
console.log(new String('Jonas')); {'Jonas'}  boxing
console.log(typeof new String('Jonas')); object  string is converted automatically to object when we call method on string
What happens : 1.We call method on string 2.JS automatically convert string to object & runs method on it 3.Object converted to regular string primitive & returned
All string methods return primitives even if called on string object 
console.log(typeof new String('Jonas').slice(1)); string 

021 Working With Strings - Part 2
4.toLowerCase :
console.log(airline.toLowerCase()); 'tap air portugal'
console.log('jonas'.toLowerCase());
5.toUpperCase :
console.log(airline.toUpperCase()); 'TAP AIR PORTUGAL'
console.log('jonas'.toUpperCase());
Fix capitalization in passenger name
const passenger = 'jOnAS'
const passengerLower = toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); Jonas
5.trim :  remove whitespace & whitespace characters like \n \t from both ends of a string
trimStart & trimEnd used to remove whitespaces from begining & ending
Comparing emails
const email = 'hello@jonas.io'
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); 'hello@jonas.io'  
OR
const normalizedEmail = loginEmail.toLowerCase().trim(); 'hello@jonas.io'  
console.log(email === normalizedEmail); true
6.replace method : arguments : 1.What string / character we want to replace 2.string / character that will replace first one
does not mutate original string. it replaces first occurance of string only
replacing string
const priceGB = '288,97€'
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS); '288.97$' 

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate') ); 'All passengers come to boarding gate 23. Boarding door 23!'
It replaces only first occurance i.e first 'door' with 'gate'
To replace all occurances use regular expression with replace
console.log(announcement.replace(/door/g, "gate")); "All passengers come to boarding gate 23. Boarding gate 23!"
//g means global replacing

7.Booleans : includes, startsWith & endsWith
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); true
console.log(plane.includes('Boeing')) ; false
console.log(plane.startsWith('Air')); true 
console.log(plane.startsWith('Airbus')); true
if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the new Airbus family'); true
}

Practise : Baggage allowed on plane or not
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  }else{
    console.log('Welcome on board');
  }
}
checkBaggage('Gun & knife'); 'You are NOT allowed on board'
checkBaggage('Food & camera'); 'Welcome on board'

022 Working With Strings - Part 3
split vs join : Split Works on string & return array. Join Works on array & return string
8.split method: split the string by delimiter which we give it as an argument & returns array
Only works on strings
console.log('a+very+nice+pen'.split('+'));['a', 'very', 'nice', 'pen'] 
console.log('Vaibhav Nikalje'.split(' ')); ['Vaibhav', 'Nikalje']
Destructuring & split 
const [firstName, lastName] = 'Vaibhav Nikalje'.split(' '); 
console.log(firstName, lastName); Vaibhav, Nikalje
9.Join method : joins all elements of an array into a single string by seperator which we give it as an argument & returns string
Only works on arrays
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); Mr. Vaibhav NIKALJE
Capitalize first letter of entire name : split toUpperCase slice join OR split toUpperCase replace join
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis'); 'Jessica Ann Smith Davis'

10. padStart & padEnd : 
padStart() method pads the string with another string (repeated, if needed) until the resulting string reaches the given length.
string.padStart/padEnd(targetLength, padString)  targetLength is total length of string & padString is string that we want to pad
In padStart padding starts at the start of the string while in padEnd padding starts at the end of the string
const message = 'Go to hell!';
console.log(message.padStart(20, '+')); +++++++++Go to hell!   total length of string is 20 here
console.log(message.padEnd(20, '+')); Go to hell!+++++++++
console.log('Vaibhav'.padStart(20, '-').padEnd(30, '-')); -------------Vaibhav---------- total length is 30
Whatever maximum value is the total length of the string

mask the first digits of credit card (show only last 4 digits)   *****7564
IMP : 1.number + '' converts number into string 2.slice string 3.padStart string
IMP : If there is any operation with number first convert it to string (coz we dont have methods for numbers)
const maskCreditCard = function (number) {
  const str = number + ''; 
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(78337564));  ****7564

11.Repeat method : repeat same string multiple times 
const message2 = 'Bad weather...All Departures Delayed...  '
console.log(message2.repeat(4)); we see four times 'Bad weather...All Departures Delayed...  '

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈ '.repeat(n)}`);
}
planesInLine(5); There are 5 planes in line ✈ ✈ ✈ ✈ ✈   we have repeated airplane emoji 
IMP : To use array methods on string we first need to use split on string & perform array method on resulted array
IMP : split with for...of 
12. concat & reverse : concat used to concat two or more strings 
reverse is array method to use it on string 1.use split method on string 2.reverse 3.join method  
let string1 = "Hello, ";
let string2 = "world!";
let concatenatedString = string1.concat(string2);

let str = "racecar";
let reversedString = str.split('').reverse().join('');
console.log(reversedString); racecar
024 String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
Convert above string to below format
🔴 Delayed Departure from FAO to TXL (11h25)
             Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
           Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();
for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const output = `${type} ${from} ${to} (${time})`;
  const output = `${type} ${from} ${to} (${time.replace(':', 'h')})`;
  const output = `${type.replaceAll('_', ' ')} ${from} ${to} (${time.replace(':', 'h')})`;
  const output = `${type.replaceAll('_', ' ')} ${from} ${to} (${time.replace(':', 'h')})`;
  const output = `${type.startsWith('_Delayed') ? '🔴' : '' }${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`;
  const output = `${type.startsWith('_Delayed') ? '🔴' : '' }${type.replaceAll('_', ' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(39);
  console.log(output);
}

/////////////10 - A Closer Look at Functions - IMP /////////////////////////////////////////////////////////////////
'use strict';
003 Default Parameters :
If we did not provide all argument while calling function we get undefined to resolve this we set default value to parameters
ES5: we set default parameter inside function : numPassengers = numPassengers || 1, price = price || 199
ES6: we set default parameter directly in parameter section : numPassengers = 1, price = 199
We can provide expression instead of just value in default paramter : price = 199 * 1.2 or price = 199 * numPassengers
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  ES5 :
  numPassengers = numPassengers || 1;
  price = price || 199 ;
  const booking = {
    flightNum, numPassengers, price
  }
  console.log(booking);
  bookings.push(booking);

}
createBooking('LH123'); 
we see object with LH123, undefined, undefined. Coz we did not provided arguments for numPassengers & price and we did not set default value to these parameters we get undefined
createBooking('LH123', 2, 800);

004 How Passing Arguments Works_ Value vs. Reference
How Primitives & Objects works in the context of function
IMP :
1.Passing Primitive values as argument to the function : changes in primtive affect original value(passing copy)
when you pass a primitive type to a function, the function receives a copy of the value.So changes made inside the function to that primitive will not affect original value
2.Passing Reference values as argument to the function : changes in reference affect original value
when you pass a reference type to a function, the function receives reference of original value.So changes made inside the function to that reference value will affect original value
IMP : whenever you pass reference value in function as argument check its consequences first.
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schimattman',
    passport: 2468343849
}
const checkIn = function (flightNum, passenger) {
    flightNum ='LH999',
    passenger.name = 'Mr.' + passenger.name

    if(passenger.passport === 2468343849) {
        alert('Checked In')
    } else {
        alert('Wrong Passport')
    }
}
checkIn(flight,jonas);
console.log(flight); we get LH234 not LH999 which we have updated inside function coz its primitive value
console.log(jonas); we get Mr.Jonas Schimattman instead of Jonas Schimattman which we have updated inside function coz its reference value

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}
newPassport(jonas);
checkIn(flight,jonas)
IMP : Here newPassport & checkIn these 2 function are manipulating same object jonas so that creates a problem & result is wrong passport
Primitive : a primitive variable's information is stored as the value of that variable
Here flight is primitive type so it will not change in output even if we changed flightNum in checkIn function
Reference : a reference variable holds a reference to information related to that variable 
Here jonas is reference type (object) so it will change in output coz changes in copy will also happens in original 
flightNum contains copy of flight variable not the original value
IMP : JavaScript does not have passing by reference it has only passing by values. We pass a reference to the function but we do not pass by a reference.
Other languages have both passing by value & passing by reference

005 First-Class and Higher-Order Functions :
A) FIRST CLASS FUNCTIONS : functions are objects are values => functions are values 
Javascript treats function as first class citizens, this means functions are treated like just values in JS. 
functions are really just another type of objects in JS, and since objects are values functions are values too 
Since functions are values we can do following this with them :
1. Store functions in variables 
const add = (a, b) => a + b;
2. Store functions in object properties (method) : inc is method
const counter = {
  value: 3,
  inc: function (){
      this.value++;}
    }
3.Pass functions as arguments to other functions 
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet)
4.We can return a function from another function
5.Call methods on functions : bind call apply
counter.inc.bind(someOtherObject);
const counter = {
    value: 3,
    inc: function (){
        this.value++;
    }
}

B) HIGHER ORDER FUNCTIONS : 1.function as argument 2.return new function
function that receives another function as an argument that return a new function or both
1. functions that receives another function :
const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click',greet)
Here addEventListener function is higher order function coz it receive another function greet as an input.
So greet is callback function & addEventListener is higher order function.Callback function greet will be called later by the higher order function addEventListener
addEventListener calls greet function as soon as click event happens.(So callback function must have condition when to call it)
2. function that returns another functions :
count is higher order function which returns function
function count() {
    let counter = 0;
    return function () {
        counter++;
    }
}
IMP : First class function is a feature or concept of Javascript all it means that all functions are values. 
Higher order functions are possible in practice coz Javascript supports first class functions concept.

006 Functions Accepting Callback Functions :
const oneWord = function (str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original String : ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`); functions can have methods & properties here name is property of function fn
}
transformer('Javascript is the best',upperFirstWord) we are passing function value of upperFirstWord not calling the function upperFirstWord
transformer('Vaibhav Nikalje',oneWord);
Here transformer function is higher order function & upperFirstWord & oneWord are call back functions
IMP : we call the callback function inside higher order function.But while passing callback function as argument we must not call it
IMP : function in javascript is reference type.When you pass a function as an argument to higher order function in JavaScript, you are passing a reference to that function. 
This reference allows the receiving function to call the passed function later in its execution flow or at a specific event.
मुद्दाम आपण function कॉल नाही करत argument मध्ये जर तसे केल तर घंटा callback होणारे
piece of memory in the callstack has reference to the piece of memory in the heap
primitive : Callstack : identifier(variable) => Address => value
both variable & value stored in callstack
reference : Callstack : identifier(variable) => Address => value(heap Address reference) Heap: Address Value
only variable stored in callstack while its value is stored in heap & that value is referenced in callstack 
We call them Callback functions coz we do not call them ourselves but instead we tell javascript to call them later 
 In above example calling the callback function happens at this point ${fn(str)} 
functions can even have properties, name is property of function which returns name of the function ${fn.name}
const high5 = function () {
    console.log('Hi');
}
document.body.addEventListener('click',high5);   high5 is callback function

['Jonas', 'Martha', 'Adam'].forEach(high5);
IMP : 2 primary scenarios where a callback function can be invoked
1. When Higher-Order Function Calls the Callback: transformer example
2. When Event or Asynchronous Operation Triggers the Callback  

Why callback functions are so much used in JavaScript ? 1.split code 2.Abstraction
1. Split up code into more reusable & interconnected parts 
2. callback functions allows us to create abstraction. Abstraction means we hide the details of some code implementation .
Here transformer is higher order function coz it operates at higher level of abstraction , leaving low level details to low level functions like upperFirstWord & oneWord

007 Functions Returning Functions : Mostly used in functional programming paradigm
the returned function is stored into the variable & that variable works as function now. So we call that function again to get the results
Returned function is inner function we store it in variable & then call that variable which in turn calls outer function
we can call both inner & outer function in one line : outerFunction(outerFunction_argument)(innerFunction_argument)
for arrow function: const arrowFunction = outerFunction_parameter = innerFunction_parameter => code
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }   
}
const greeterHey = greet('Hey')  
greeterHey('Jonas'); greeterHey is inner function , Jonas is name here , greeting is coming from greet function All this works coz of closures
greeterHey('Steven');
We can call it like below also
greet('hello')('Jonas');
greet('hello') is now a function so we can call it by ('Jonas')
OR By arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Vaibhav')

कौन कहता है आसमाँ में सुराख नहीं हो सकता, एक पत्थर तो तबीयत से उछालो यारों
008 The call and apply Methods : set 'this' keyword manually
IMP :If we want to access object property inside it method use 'this' keyword before property name which points to object itself
IMP : In regular function call this keyword points to undefined (in strict mode)
'this' keyword function depends on how the function is actually called
const lufthansa = {
    airline:'lufthansa',
    iatacode:'LH',
    bookings: [],
    book(flightNum, name) { method
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
        this.bookings.push({flight : `${this.iatacode}${flightNum}`, name}) added new object for bookings by book method
    },
}
lufthansa.book(235,'Vaibhav Nikalje');
lufthansa.book(675,'Jonas Schimadtman');
console.log(lufthansa);
lufthansa group created new airline called eurowings
const eurowings = {
    airline: 'eurowings',
    iatacode:'EW',
    bookings: [],
}
We want to use book method in eurowings object but copying & pasting same method is not good practise
so we take the book method & store it in external function & use that function for eurowings 
const book = lufthansa.book  here we stored book method in external function book so that we can use that method for eurowings also
book(23,'Sarah Williams'); Error - Cannot read property 'airline' of undefined
Error occurs coz - Here book function is now just a regular function call & in regular function call this keyword points to undefined 
book function is copy of lufthansa.book but when we stored it in book variable it is not a method anymore coz it is a function now
The best solution for this is to set 'this' keyword explicitly (manually) & call, apply, bind methods allows us to do it.
To resolve this error use 3 methods - CALL APPLY BIND :
IMP : this keyword point to an object & this keyword depends on HOW THE FUNCTION IS ACTUALLY CALLED
functions are objects have methods => functions can also have methods too

method borrowing : borrow method from one object & use it in other object
Steps : 1.Store method in external function (const externalFunction = objectName.method) 2.Call 'call' method on this function
1.Call Method : to set 'this' keyword explicitly & manually, first parameter of call method is 'this' keyword
book.call(eurowings, 23, 'Sarah Williams'); here first parameter is this keyword which we set to eurowings
console.log(eurowings);
we can call 'call' method on both objects 
'this' keyword from lufthansa 
book.call(lufthansa, 26, 'Maria Sharapova');
console.log(lufthansa);
book.call(eurowings, 29, 'Serena Williams');
console.log(eurowings);
Must use same property names while creating new object / airline like eurowings
const swiss = {
    airline: 'Swizz Air Lines',
    iatacode: 'LX',
    bookings: [],
}
book.call(swiss, 33, 'Marry Cooper');
console.log(swiss);

2.Apply Method : works same as call method to set 'this' keyword explicitly & manually but it takes array of arguments after 'this' keyword
It takes elements from array & pass it to the function.First argument is 'this' keyword
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
OR use call method & destructuring instead of apply method (Best way)
book.call(swiss, ...flightData);
console.log(swiss);
IMP : Both apply & call methods call the function immedietly when they are used 

Difference call-apply-bind :
With call and apply, you set the this context and invoke the function immediately in one single step.
With bind, you set the this context and optionally preset some arguments, but you don't invoke the function immediately. Instead, you create a new function that can be invoked later with the preset this value and arguments.

009 The bind Method : IMP We define this keyword once with bind (while storing method) by doing so we did not call bind method on function immediately 
Steps: 1.store object method into a variable(which become function) 2.apply these 3 methods on it (call-apply-bind)
Manually & explicitly set this keyword. It doesnot immediately call the function instead it return a new function where the this keyword is bound
When calling function no need to specify first parameter which is this keyword. Call this like normal function call
const bookEW = book.bind(eurowings); this will always be set to eurowings
bookEW(23, 'Johny Walker') no need to specify this keyword (eurowings) coz bookEW function has the this keyword set in stone
const bookLH = book.bind(lufthansa);
bookEW(233, 'Johny Gaddar')
const bookLX = book.bind(swiss);
bookEW(566, 'Johny Dukkar');
Bind for specific airline & specific flight number
const bookEW23 = book.bind(eurowings,23); Here first argument flightNum is already set so we dont need to call it below again
23 is preset flight number in book.bind 
It is called partial application - specifying Parts of argument beforehand , Here 23 
bookEW23('Seema Nikalje');
bookEW23('Kuhu Salve');
Use 2 - Objects together with event listener 
lufthansa.planes = 300;
lufthansa.buyPlane = function() { added new method to lufthansa object
    console.log(this);
    this.planes++; we add new plane whenever click on Buy New Plane button
    console.log(this.planes);
}
lufthansa.buyPlane(); here 'this' keyword points to lufthansa but in case of event listener it points to button class 
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane);
We get this.planes as NaN coz In an event handler function the this keyword always points to element on which that handler attached to
Here lufthansa.buyPlane is handler function & this keyword attached to the buy button in html class
To solve this NaN error we must use bind method coz we need to passing the function in addEventListener NOT to call the function
Call method immediately call the function so we did not use it. But we want to call the function when click event happens so we use bind method which does not invoke immediatelt
document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));
When we click on Buy New Plane Button it will return lufthansa object
In an event listener, the this keyword by default refers to the HTML element that triggered the event. To make this refer to an object, we use the bind method.

Use 3 - Partial application - No this keyword (null) + Bind - order of arguments important
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 100));
consider we need to one tax for all the time. Pre set the rate to 23% for VAT 
const addVAT = addTax.bind(null, 0.23);
We dont need this keyword coz we didnt used it in addTax instead of this we used null here also we preset the rate to 0.23
console.log(addVAT(100)); we just passed value argument here , rate parameter is set to 0.23 default above
console.log(addVAT(1000));
We are creating brand new more specific function addVAT on general function addTax
Above example with function returning new function :
const addTaxRate = function (rate) {
    return function (value) { 
        return value = value * rate ;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(1000));

Answer Poll Challange :
IMP : Check out question - Lets see what it has to look like
const poll = {
    question: 'What is your favourite programming language',
    options: ['0: JavaScript','1: Python','2: C##','3: VB Script'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        Get Answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write your option Number)`
            )
        );
        console.log(answer); 0 if we entered 0 in prompt 
        Register the answer - if value is actually a number
        typeof answer === 'number' && answer < this.options.length && this.answers[answer]++; 
        here we defined answers which means if answers is upto 4 fill it from 0 
        this.answers[answer]++ - will increase the answers array to correct position, max reply that we accept is 3 so we need to increase answer by 1
        console.log(this.answers); 
        if we entered 0 in prompt we get array [1,0,0,0] , everytime we enter the value in prompt respective position of array increased by 1 
        this.displayResults();
        this.displayResults('string');
    }, 
    displayResults(type = 'array') { default parameters ES6
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            Poll results are 13,2,4,1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};
poll.registerNewAnswer();
Below will call the method registerNewAnswer whenever we click on Answer poll button
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
Here this keyword right now points to Answer Poll button / poll class element , so we need to bind it to poll object coz in event handler function this keyword point to which is attched here poll button
if we click on Answer Poll button & enter the answer the count of the answer we entered will be increased by 1 in an array each time we do this
Now we want to call displayResults method not with answers: new Array(4).fill(0) array but with [5,2,3] array so we need to use call method here to assign this keyword to [5,2,3] array
poll.displayResults.call({answers:[5, 2, 3]},'string');
displayResults method looking for this.answers but our array is [5,2,3] so we need a way to make this.answers equal to [5,2,3] thats why we used call method so that we could manually set this keyword to new object which has answers property with [5,2,3] array
poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string');

011 Immediately Invoked Function Expressions (IIFE) : function that will execute only once
This is one & only use of IIFE : When we need a function that disappears right after calling it ONCE
const runOnce = function () {
    console.log('This will never run again');
}
runOnce();
runOnce(); this will run again and again thats wrong way
Write function expression / arrow function inside () to call this (function expression/arrow function)();
Wrap function expression (without assigning it to any variable) with parenthesis () & call immediately with () again
Syntax : (function_expression)()   or   (() => code_inside_function)()
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();
we immediately called function here We can not access variables defined inside function outside the function
Inner scope can access global scope variables but global scope cant access variables inside inner scope called data incapsulation
console.log(isPrivate); this wont work
With arrow
    (() => console.log('This will never run again'))();
variables declared with var creates global scope but variables declared with const creates inner scope only
{
    const isPrivate = 23;
    var notPrivate = 46;
}
console.log(isPrivate); we cant access isPrivate coz it is declared with const
console.log(notPrivate); we can access notPrivate coz it is declared with var

012 Closures : closures happens automatically in certain situations we just need to recognize those situations 
Any function has always access to the 'variable environment' of the 'execution context' in which the function was created event after that execution context is gone
booker function was created in the execution context of secureBooking
Closure is variable environment attached to the function, exactly as it was at the time & place the function was created
Closure means a function remembers and can access the variables that were available to it when it was created event after that execution context is gone
Scope chain is actually preserved through the closure even when a scope has already been destroyed coz its execution context is gone.
Even though the execution context has atually been destroyed the variable environment somehow keeps living in the engine
Closure has priority over the scope chain
const secureBooking = function () {
    let passengerCount = 0;
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  const booker = secureBooking();
  booker();
  booker();
  booker();
  console.dir(booker); [[Scopes]] => Closure (secureBooking)  [[]] means internal property that we can not access from our code 
we get function ,in that function Scopes is internal property which is variable environment of booker function
In Scopes we can see Closure coming from secureBooking with passengerCount ;
secureBooking with passengerCount is beign preserved by closure even if entire secureBooking function is gone coz closures can get access the variables that were present at the time when function was created
IMP : Closures enable inner functions to access variables from their outer scope, maintaining access to those variables even after the outer function has finished executing.
When closure created : 1.function returns function 2.Reassigning functions even without returning them 3.callback function of setTimeout  Ex 2:
4.Immediately Invoked Function Expressions (IIFE) 5.Event listeners 6.Iterators and generators 7.Module pattern
8.Asynchronous operations (e.g., fetch) 9.Function factories 10.Creating private variables
Ex.1 : Closure happens even if variable is not defined inside variable environment of function like below f defined outside the function in global scope

let f;
const g = function(){
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}
g();
f(); 46 = 23 * 2
console.dir(f)  we found value of a in closure
function f is reassigned by h function
h();
f(); 1554 = 777 * 2 
When we reassigned function the old closure which has value 'a=23' will disappears & new value of closure is 'b=777'
Conclusion : Closure can change as the variable is reassigned
console.dir(f) we found value of b in closure not of a 
Ex.2 :
const boardPassengers = function(n, wait){
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
}
const perGroup = 1000; 
closure have priority over scope chain coz this perGroup(1000) is defined in global scope but callback function of setTimeout still uses perGroup(n/3) from its parent function
boardPassengers(180, 3);
callback function of setTimeout got access to perGroup variable of boardPassengers function due to closure 
  
//////////////////         11 - Working With Arrays IMP               /////////////////////////////////////////////////////////////////
ARRAYS : Methods - (22) - push, unshift, pop, shift, indexOf, includes, slice, splice, reverse, concat, join
Why arrays have methods :
Arrays are objects so array methods are simply functions that are attched to all arrays
  
  let arr = ['a', 'b', 'c', 'd', 'e'];
  //SLICE METHOD : it creates new array without deleting element from old array
  console.log(arr.slice(2)); [ 'c','d', 'e']
  console.log(arr.slice(2, 4)); [ 'b','c']
  console.log(arr.slice(-1)); ['e']
  console.log(arr.slice(-2)); ['d','e']
  console.log(arr.slice(1, -2)); [ 'b','c']
  console.log(arr.slice()); shallow copy of array
  console.log([...arr]); shallow copy of array
  
  //SPLICE METHOD : delete elements from original array , it mutates/changes original array
  console.log(arr.splice(2)) [ 'c','d', 'e']
  arr.splice(-1); deletes last element of array
  console.log(arr);
  ['a', 'b', 'c', 'd'];
  arr.splice(1, 2); b & c are deleted ['a','d']
  console.log(arr);
  
  //REVERSE : it reverse & mutate original array
  const arr2 = ['j', 'i', 'h', 'g', 'f'];
  console.log(arr2.reverse()); reverse array element
  console.log(arr2); ['f', 'g', 'h', 'i', 'j']
  
  CONCAT :
  const letters = arr.concat(arr2);
  console.log(letters);
  console.log([...arr, ...arr2]);
  
  //JOIN : result is string with seperator
  console.log(letters.join('-')); //a-d-f-g-h-i-j
  
  004 Looping Arrays_ forEach :
  for-of looping :
  console.log('-------------for-of---------------');
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  for (const movement of movements) {
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You withdraw ${Math.abs(movement)}`);
    }
  }
  forEach looping :
  forEach passes current element as an argument to callback function
  console.log('--------------forEach-----------');
  movements.forEach(function (movement) {
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You withdraw ${Math.abs(movement)}`);
    }
  });
  iteration be like  0: function(200) 1: function(450) 2: function(400) ... and so on
  
  for-of with counter variable :
  console.log('-----------for-of with counter variable-----------');
  movements.entries() is array method that returns array of arrays
  for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
      console.log(`Movement${i + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement${i + 1}:You withdraw ${Math.abs(movement)}`);
    }
  }
  forEach with counter variable : it passes current element , current index & entire array that we are looping
  console.log('-----------forEach with counter variable-----------');
  movements.forEach(function (movement, i, arr) {
    (currentElement, currentIndex, array)
    if (movement > 0) {
      console.log(`Movement${i + 1}: You deposited ${movement}`);
    } else {
      console.log(`Movement${i + 1}:You withdraw ${Math.abs(movement)}`);
    }
  });
  
  //IMP : we can not break out of forEach loop i.e continue & break statements do not work in forEach loop
  
  005 forEach With Maps and Sets :
  Maps :
  const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pounds'],
  ]);
  currencies.forEach(function (value, key, map) {
    console.log(`${key} : ${value}`);
  });
  IMP - Sets : Sets doesnt have keys & indexes so we get output USD : USD GBP : GBP EUR : EUR
  const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
  console.log(currenciesUnique);
  currenciesUnique.forEach(function (value, _, map) {
    _ is throwaway variable - variable that is completely unnecessary
    console.log(`${value} : ${value}`);
  });

006 PROJECT_ _Bankist_ App
'use strict';
/////////////////////////BANKIST APP ////////////////////////////////////////////////////////////
Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

009 Data Transformations_ map, filter, reduce
//1.forEach method :
Philosopy : Each function should actually receive the data that it should work with instead using global variable
We could use movements directly from global variable but we stored it in new function & then used it
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  As we click on button of sort displayMovements function gets called with sort paramter set to true
  const movs = sort ? movements.slice().sort((a, b) => a -b) : movements;
  As sort mutate original array we used slice to make copy of original data ; we are in chain so we cant use spread operator
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} EUR</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplaybalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance; instead we stored this value immediately above
  this works coz setting balance property is same as when we first defined the object ; both points to same object in heap
  labelBalance.textContent = `${acc.balance} EUR`
}

010 The map Method : loop over arrays, returns new array (does not mutate original array)
3 parameters access for map & forEach method: currentElement, currentIndex, wholeArray (order matters) 
modifying external/global variables or mutating original arrays or objects creates side effect.
Whether side effects are good or bad depends on the context and the design principles you follow
Function which creates side effect are impure functions while which does not create side effects are pure functions
IMP: forEach vs map: forEach creates side effects while map method does not create side effects
Convert euros to US dollars
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
map method : we use function to create new array, used in functional programming
const movementUSD = movements.map(function(mov){
  return mov * eurToUsd;
})
OR using arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements); original array not mutated
console.log(movementsUSD);
for..of loop : we loop over array & manually created new array
const movementsUSDfor = [];
for(const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);
3 parameters access : currentIndex, currentElement, wholeArray
const movementsDescription = movements.map((mov, i, arr) => {
  if (mov>0){
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You deposited ${Math.abs(mov)}`;
  }
})
OR arrow function
const movementsDescription = movements.map((mov, i) => 
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`;
) 
Each time map method calls callback it will pass currentIndex, currentElement & wholeArray
we can use multiple return statements in one function as long as only one of them is executed
map method returns new array so we store it in variable like movementsDescription above
Bankist app computing usernames by forEach & map  : getting username for one user
const user = 'Steven Thomas Williams'; need o/p 'stw'
const username = user.toLowerCase().split(' ').map(function(name){ split returns array & we loop that array using map
  return name[0];  steven => 's' thomas => 't' williams => 'w'
}).join('') stw
console.log(username); stw
OR arrow function
const usernameArr = user.toLowerCase().split(' ').map(name => name[0]).join('');
console.log(usernameArr);  stw
create function for above  :
const createUsernames = function (user) {
  const username = user.toLowerCase().split(' ').map(function(name){
    return name[0]; 
  }).join('');
  return username;
}
console.log(createUsernames('Steven Thomas Williams'));

compute one username for each of the account holder (from accounts array) : we just want to modify the objects from
accounts array that is array1, array2, array3, array4   
IMP: Each function should actually receive the data that it should work with instead of using global variable coz does not it create side effects 
IMP : best way is to store function call in a new variable so it does not mutate original global variable
const createUsernames = function (accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    here we are creating new property 'username' in each object of accounts array
  })
}
createUsernames(accounts);
console.log(accounts) we see 'username' property added to each object of accounts array

012 The filter Method : filter elements that satisfy certain condition using callback function
does not mutate original array create new array
filter parameters : currentIndex, currentElement, wholeArray
const deposits = movements.filter(function(mov){ deposits are positive values (above zero) so remove all negative values from array
  return mov > 0;
})
console.log(movements);
console.log(deposits); we only see positive values from movements array

const depositsFor = [];
for(const mov of movements) if(mov > 10) depositsFor.push(mov);
console.log(depositsFor); we only see positive values from movements array
IMP : using functional code in JS we can chain methods together (functional code means callbacks)
const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls); we only see negative values from movements array

013 The reduce Method : boil down all the elements of array to one single value
reduce has 2 parameters : 1.callback function with 4 parameters 2.Initial value of accumulator 
We can decide from which point accumulation start by 2nd parameter which is Initial value of accumulator
When no initial value is provided, the reduce method starts accumulating from the first element of the array.
reduce callback function has 4 parameters : accumulator, currentIndex, currentElement, wholeArray
accumulator is like a snowball which keeps accumulaing value on callback condition & finally returns it
const balance = movements.reduce(function(acc, cur, i, arr){
  console.log(`Iteration ${i}: ${acc}`); we see first Iteration 0 has 0 value as we specify second parameter
  return acc + cur;
}, 0)
console.log(balance); 3840
OR
let balance2 = 0; Initial accumulator value : map, reduce, filter avoid this extra global variable declaration & in turn avoid side effects
for(const mov of movements) balance2 += mov;
console.log(balance2);

Calculating & Displaying total balance to user in bankist app
const calcDisplaybalance = function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  acc
  labelBalance.textContent = `${balance} EUR`  we have declared labelBalance variable above
}
calcDisplaybalance(account1.movements); 3840

Max value from movements array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
The behavior of callback function & its parameters depend on logic written in it. Just read the logic carefully
const max = movements.reduce((acc, mov) => {
  here accumulator is not accumulating values it is comparing values 
  if(acc > mov) return acc;
  else return mov;
}, movements[0])
console.log(max);
Iteration 1: acc(200) > mov(200) is false return mov(200) 
Iteration 2: acc(200) > mov(450) is false return mov(450) 
Iteration 3: acc(450) > mov(-400) is true return acc(450) 
Iteration 4: acc(450) > mov(3000) is false return acc(3000) 
Iteration 3: acc(3000) > mov(-650) is true return acc(3000)
Iteration 3: acc(3000) > mov(130) is true return acc(3000)
//OR arrow method 
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov);
console.log(max); 3000

min value from movements array
const min = movements.reduce((acc, mov) => acc < mov ? acc : mov)
console.log(min); -650

015 The Magic of Chaining Methods
take all deposits from movements array then convert them from euros to dollars & finally add them up (total in dollars)
We can chain methods as long as each of them returns new array so after filter we can not chain methods anymore
const eurToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); 5522
IMP: to debug/inspect the chained methods : each method has access to wholeArray parameter, log this whole array & debug it
const totalDepositsUSD = movements
.filter(mov => mov < 0) made mistake used < instead of >. To debug use wholeArray of map method
.map((mov, i, arr) => {
  console.log(arr); this returns all negative value which means  there is mistake in filter method
  mov * eurToUsd;
})
.reduce((acc, mov) => acc + mov, 0);

calculate deposits(IN), withdrawals(OUT) & interest that bank pay us in bankist app
IMP : To do DOM manipulation : select what you want to manipulate from HTML page > right click & inspect > copy name 
of element > select that element using querySelector & store it in variable > perform operation on it using its properties like textContent or value
const calcDisplaySummary = function (movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}₤`
  const incomes = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}₤` math.abs removes negative sign from value of page
  const interest = movements.filter(mov => mov > 0).map(deposit => deposit * 1.2/100).filter((int, i, arr) => {
    console.log(arr);
    return int >= 1; only interest equal to or above 1 percent or 1 percent will be considered by bank for total interest
  }).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}₤`
  get all deposits by filter, calculated interest for each deposit using map, get all interest equal to or above 1 by filter, get total interest by reduce method
  IMP : NEVER CHAIN METHODS THAT MUTATES ORIGINAL ARRAYS like splice or reverse in real time
} 
calcDisplaySummary(account1.movements)

017 The find Method : returns 'first element' of an array that satisfies the condition specified in callback
it does not return array or mutate array it will only return the 1st element of array that satisfies the condition
Array method callbacks that returns boolean values : find, filter, every, some methods return boolean values
Array method callbacks that returns other values : map, reduce, forEach, sort methods return boolean values
const firstWithdrwal = movements.find(mov => mov < 0);
console.log(firstWithdrwal); -400
filter vs find : filter returns all elements matching condition in new array while find returns only first element matching condition & does not return any array
find vs findIndex : find method returns "first element" that satisfies the callback condition while findIndex returns "first index" that satisfies the callback condition
IMP : always use strict equality '===' operator with find method 
find account of user by using owner name in bankist app
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); each of current element is account object in accounts array
console.log(account);
OR
let accountFor = null;
for(const acc of accounts) acc.owner ==='Jessica Davis' ? accountFor = acc : 'No account with this name' 
Array of object : for..of, map, reduce, forEach, find, filter, map

018 Implementing Login
Event handlers :
let currentAccount;
btnLogin.addEventListener('click', function(e){
  e.preventDefault()  Prevent form from submitting ; Hitting enter same as clicking both trigger click event
  console.log(`LOGIN`);In HTML when click submit button default behaviour is page reloads to stop this we used preventDefault
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value); we defined this outside so we can access it for later use
  console.log(currentAccount); when we enter js in username field it returns object
  for pin check 
  if (currentAccount.pin === Number(inputLoginPin.value)){
    console.log('LOGIN'); enter js & 1111 we get login
  };
  but if we entered wrong username we get error Uncaught TypeError: Cannot read properties of undefined (reading 'pin')
  at HTMLButtonElement.<anonymous> but we need undefined as output ; so we use optional chaining (? before .pin)
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    console.log('LOGIN'); enter js & 1111 we get login
    Display UI & message :
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}` this display firstname only
    When we log user in opacity should change from 0 to 100 ; so user can see his dashboard
    since opacity is under .app class we used containerApp 
    containerApp.style.opacity = 100 ;
    remove calls of displayMovements calcDisplaybalance calcDisplaySummary coz we dont want to call this functions right in the begining
    clear input fields : disappear user & PIN credentials after login
      inputLoginUsername.value = inputLoginPin.value = ''; assignment operator works from right to left
      inputLoginPin.blur();this will hide cursor in user & PIN field
    Create updateUI for below calling functions : 
    Display movements
    displayMovements(currentAccount.movements);
    displayMovements(currentAccount.movements); 
    Display balance
    calcDisplaybalance(currentAccount.movements);
    calcDisplaybalance(currentAccount);
    Display summary
    calcDisplaySummary(currentAccount.movements);
    calcDisplaySummary(currentAccount); we call this using entire account since we need different interest rates 
    updateUI function called here
    updateUI(currentAccount);
  };
})

019 Implementing Transfers
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);
  o/p - 100 {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222, username: 'jd'}
    inputTransferAmount = inputTransferTo = '';this will clear input fields (Tranfer to & Amount) of transfer
    if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
      console.log(`Transfer Valid`); when we get Transfer Valid in console that means all conditions above are valid
      Doing the transfer 
      currentAccount.movements.push(-amount); transferer amount deleted 
      receiverAcc.movements.push(amount);  receivers amount added
      updateUI function called here
      updateUI(currentAccount);
    }
  Transfer can only happen : 1.If transfer amount is greater than zero 2.Check ir receiver username exits or not
  2.Current user needs to have enough money to do transfer 3.Should not transfer money to own account 
  4.Check if receiver account actually exists receiverAcc?.username
});

console.log(`---------------------Request loan to bank through bankist app-----------------`);
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  loan sanctioned only when there is any deposit greater or equal to 10 % of requested amount of loan 
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    for js max deposit is 3000 so loan js can request maximum is 30000 (3000 * 0.1)
    Add positive movement to current data
    currentAccount.movements.push(amount);
    update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

020 The findIndex Method : Close/Delete Account in Bankist App
works same as find but 'findIndex returns index of the first element' that satisfies the callback condition while 'find returns the first element' that satisfies the callback condition 
It returns index of the element NOT the element itself
btnClose.addEventListener('click', function(e) {
  e.preventDefault();
console.log(`Delete`); as we click on arrow of close account it logs Delete
//check if user & pin is correct before deleting account
if (
  inputCloseUsername.value === currentAccount.username 
  && Number(inputClosePin.value) === currentAccount.pin
  ); {
  const index = accounts.findIndex(
    acc => acc.username === currentAccount.username
    );
  fincIndex method return first index of element that matches above condition
  indexOf(3) method tells us if element in array exists or not (true/false)
  console.log(index);
  Delete account
  accounts.splice(index, 1);
  Hide UI after deleting user
  containerApp.style.opacity = 0;
}
inputCloseUsername.value = inputClosePin.value = '';to clear input fields of close button
}); 
Note : both find & fincIndex get access to current index & current entire array 
console.log(`-----------------Sort button bankist app----------------------------`);
when we click sort it will give you ascending order from bottom to top
let sorted = false;
btnSort.addEventListener('click', function(e){
e.preventDefault();
displayMovements(currentAccount.movements, !sorted);
sorted = !sorted; this switch sorted from true to false & vice versa so we could sort again & again
})

021 some and every method
console.log(`-------------------------Some Method--------------------------------`);
console.log(movements);
check for equality - includes
console.log(movements.includes(-130)); o/p - true ; check if array include certain value
check for condition - some
console.log(movements.some(mov => mov === -130)); true
const anyDeposits = movements.some(mov => mov > 0); true
const anyDeposits = movements.some(mov => mov > 5000); false
const anyDeposits = movements.some(mov => mov > 1500); true

console.log(anyDeposits);

console.log(`-------------------------Every Method-----------------------------------------`);
Every only returns true if all of the elements in the array satisfy the condition that we pass in
console.log(movements.every(mov => mov > 0)); false - coz all movements are not deposits / greater than 0
console.log(account4.movements.every(mov => mov > 0)); true - coz every element is above 0
Seperate callback : we stored callback function in variable so that we could reuse that callback function for different methods
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); true
console.log(movements.every(deposit)); false
console.log(movements.filter(deposit)); (5) [200, 450, 3000, 70, 1300]

022 flat and flatMap
console.log(`--------flat & flatMap method-------------------------------------------------`);
flat removes the nested arrays & flattened array (in single array) ; it works for any level of nesting
const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1,2], 3], [4, [5,6]], 7, 8]; //(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat()); //default is one level deep for nesting (6) [Array(2), 3, 4, Array(2), 7, 
console.log(arrDeep.flat(2)); 2 level deep by using debt as 2 (8) [1, 2, 3, 4, 5, 6, 7, 8]

console.log(`--------------Bank want to calculate overall balance of all the movements of all the accounts-----------------`);
const accountMovements = accounts.map(acc => acc.movements); 
we are taking all the movements out of accounts array & putting them in new array
console.log(accountMovements); o/p (4) [Array(8), Array(8), Array(8), Array(5)]
const allMovements = accountMovements.flat();
console.log(allMovements); we get single array with all of the accounts movements
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); 17840
By chaining methods :
const overallBalance1 = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance1); 17840
By flatMap method : IMP flat map goes only one level deep of nesting
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); 17840

023 Sorting Arrays
console.log(`-----------------------Sorting Arrays--------------------------------------`);
Be caresful with this method - this MUTATES original array ; Sort array of STRINGS only (NOT NUMBERS) in ascending order , 
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
for sorting number : by using compare callback function
Ascending order array of numbers sorting : 
console.log(movements);
movements.sort((a, b) => { here a & b are cureent value & next value like 2 consecutive numbers
if we return negative value or less than 0 then a,b (a will be put before b) - keep order 
if we return positive value or greater than 0 then b,a (b will be put before a) - switch order
if (a > b) return 1;
if (a < b) return -1;
});
console.log(movements); number array sorted in ascending order(8) [-650, -400, -130, 70, 200, 450, 1300, 3000] 
Descending order array of numbers sorting : 
movements.sort((a, b) => {
if (a > b) return -1;
if (a < b) return 1;
});
console.log(movements);
Simple way -
Ascending number :
movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

024 More Ways of Creating and Filling Arrays
console.log(`---------Create & filling arrays programatically fill() method----------------------------`);
fill method fill array with element & it MUTATES array : syntax - fill(element,beginingIndex,finalIndex(not included))
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

const x = new Array(7); o/p - (7) [empty × 7] creates new array with 7 empty elements DOESNT WORK
console.log(x);
console.log(x.map(() => 5)); //o/p - (7) [empty × 7] DOESNT WORK
x.fill(1);
console.log(x); (7) [1, 1, 1, 1, 1, 1, 1]
x.fill(1,3);
console.log(x); starts filling at index 3 - (7) [empty × 3, 1, 1, 1, 1]
x.fill(1, 3, 5); 1 - element , 3 - start filling at 3rd index , 5 - fill upto 4th index 5th not filled/included 
console.log(x); (7) [empty × 3, 1, 1, empty × 2]

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr.fill(23, 4, 6);
console.log(); [1, 2, 3, 4, 23, 23, 7, 8]

console.log(`---------------Create & filling arrays programatically by Array.from() function----------------------------`);
Array.from(lengthOfArray: ,mappingFunction(callback function)) 
callback function is like a map method
const y = Array.from({length: 7}, () => 1);
console.log(y); (7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({length: 7}, (cur, i) => i + 1); use _ as throw away varible - coz we dont used cur in code
const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z); (7) [1, 2, 3, 4, 5, 6, 7]

console.log(`----------------Array.from() on Nodelist of querySelectorAll----------------------------`);
querySelectorAll return nodelist which looks like array but methods dont work on nodelist
to use array methods on nodelist we need to convert it into array by Array.from()
const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); (2) [div.movements__value, div.movements__value] 
we could read only 2 elements from nodelist here to read all 7 elements we must read it from addEventListener
labelBalance.addEventListener('click', function () {
const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); 
as we click on 3840EUR of page we get (8) [div.movements__value, div.movements__value....] 
to remove EUR from array of (8) we used map & replace methods
console.log(movementsUI.map(el => Number(el.textContent.replace('EUR', ''))));
As we click on 3840EUR of page we get array of numbers (8) [1300, 70, -130, -650, 3000, -400, 450, 200]
});
Second argument of Array.from is mapping callback so we can modify above code like below written
labelBalance.addEventListener('click', function () {
const movementsUI = Array.from(document.querySelectorAll('.movements__value'), 
el => Number(el.textContent.replace('EUR', '')));
console.log(movementsUI); 
As we click on 3840EUR of page we get array of numbers (8) [1300, 70, -130, -650, 3000, -400, 450, 200]
});
we could use spread operator to convert nodelist to array but we need to mappin seperately so above method is BEST
 const movementsUI2 = [...document.querySelectorAll('.movements__value')];





















012 The filter Method : creates new array
create array of deposits 
const deposits = movements.filter(function(mov, i, arr){
  return mov > 0;
}) 
console.log(deposits);
console.log(movements);
OR by for-of
const depositsFor = [];
for (const mov of movements) if (mov > 0);
depositsFor.push(mov);
console.log(depositsFor);
create array of withdrawl
const withdrawls = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawls);
IMP : Using map forEach filter reduce method is useful than forOf coz you can chain all these methods 
side effect means direct effect/mutation changing existing object not creating values ,forEach method creates side effects

013 The reduce Method : It returns single value , To calculate global balance bankist app
callback function of  forEach map filter has 3 parameters : currentElement, currentIndex, EntireArray
Reduce method has 2 parameters : 1. Callback function 2. initialValueOfAccumulator
callback function has 5 parameters reduce method : accumulator, currentElement, currentIndex, EntireArray, initialValueOfAccumulator
accumulator keeps accumulating values that we ultimately want to return , like a snowball
const balance = movements.reduce(function(acc, cur, i, arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); initialValueOfAccumulator is 0 here it starts with 0 you can change it to anything
console.log(balance); o/p 3840 

Reduce using arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

Maximum value of movements array by reduce method
const max = movements.reduce((acc, mov) => {
  if(acc > mov) return acc; acc = 200 & mov = 450 acc < mov so it returns mov which is the new acc for comparing next mov
  else 
    return mov; 
}, movements[0]);
console.log(`Max Value is: ${max}`);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

2. map method : map method create brand new array , while foreach dont create new array it mutate existing array  ; new array contains result of applying callback function to original array elements 
Syntax : array.map(function(currentElement, currentIndex, EntireArray ) { ...logic with return}) ; Map returns array so store it in variable 
We can apply any operation (+,-,/,*,etc...) on entire array using map method
const eurToUsd = 1.1;
const movementUSD = movements.map(function(mov){
  return mov * eurToUsd;
})
console.log(movements);
console.log(movementUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

const movementUSDarr = movements.map(mov => mov * eurToUsd);
console.log(movementUSDarr);

Map With counter variable :
const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
})
console.log(movementsDescription);
Map With counter variable using Arrow method :
const movementsDescriptionArr = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptionArr);
In forEach we have printed each element line by line to console , in each of the iterations we performed some action that was then visible in console this is called side effects
In map method all results to new array & we logged entire array to console 

015 The Magic of Chaining Methods
console.log(`--------------------- Chaining methods ----------------------`);
//IMP : 1.Do not overuse chaining coz chaining tons of methods coz performance issues instead create little methods 
     2.Do not chanin methods that mutates original array like splice , reverse    
const eurToUsd = 1.1;
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0)
result of filter method is we get new array of deposits only ; results of map is we converted deposit from euro to Usd
result of reduce is we add all of values from map method array 
IMP : we chain method only if first one return an array
console.log(totalDepositsUSD);

To check errors from chaining method use arr parameter : 
let us say error (mov < 0 instead of mov > 0 for deposits)is in filter method so we need to check it in map method
const totalDepositsUSD = movements.filter(mov => mov < 0)
.map((mov, i, arr) => {
  console.log(arr); result is logged in console 3 times coz we have 3 values in array & these values call back in each iteration 
  Here we find reason of the  error 
  return mov * eurToUsd;
})
.reduce((acc, mov) => acc + mov);
console.log(totalDepositsUSD);

017 The find Method
console.log(`-------------------- find method ---------------------------------------------------`);
retrieve one element of array based on condition ; while filter returns all the elements that match the condition
unlike filter method find did not return new array it ONLY return FIRST element of array
const firstWithdrwal = movements.find(mov => mov < 0)
console.log(movements);
console.log(firstWithdrwal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

018 Implementing Login & 019 Implementing Transfers is above 


025 Summary_ Which Array Method to Use_ & 026 Array Methods Practice remaining

003 Asynchronous JavaScript, AJAX and APIs
Synchronous : Code execution line by line in execution thread (part of execution context); Most code is Synchronous
Each line of code waits until previous line of code is finished.But this will block the code execution.
For e.g alert function which blocks execution until we click ok on pop up

Asynchronous : It also execute code line by line but by using callbacks it runs long running tasks in background which does not block main execution thread
For e.g setTimeout function
IMP : Callback function alone do not make code asynchronous

All async Methods & Functions in JS (18): "setTimeout", "setInterval", "Promise", "async/await", "fetch", "XMLHttpRequest", 
"process.nextTick", "setImmediate", "addEventListener", "requestAnimationFrame", "Web Workers", "Observable", 
"queueMicrotask", "MessageChannel", "import", "FileReader", "ReadableStream", "WritableStream"

AJAX : Asynchronous Javascript And XML : with AJAX calls we can request data from web servers dynamically
APIs: is a set of rules and protocols for building and interacting with software applications.APIs allow different 
software systems to communicate with each other, enabling integration and functionality sharing.
Types of APIs : DOM API, Geolocation API, Own Class API, Online API / API / Web API
API is basically application running on web server which receives requests for data then retrieves this data from some 
database & then sends it back to the client.
Most API uses JSON data format not XML.
CORS : without CORS we can not access third API from our code 

Callback hell : Code that is hard to understand is bad code & contains more bugs
Triangular shape formed in the code
setTimeout(() => {
  console.log('1 Second Passed');
  setTimeout(() => {
    console.log('2 Seconds Passed');
    setTimeout(() => {
      console.log('3 Seconds Passed');
      setTimeout(() => {
        console.log('4 Seconds Passed');
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);