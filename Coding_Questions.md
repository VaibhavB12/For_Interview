Reverse Number :
Math.sign(number) : If we pass positive number to this function it will return +1 & if we pass negative number then it will return -1
Math.sign(4000) // +1
Math.sign(-4000) // -1
To convert number to string use toString() and to convert string to number use parseInt()

function reverseInt(n){
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed);
}
console.log(reverseInt(-5)) // 5

We are getting 5 as output because parseInt() reads the number from the beginning of the string and stops as soon as it finds something that's not a number.

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  if (n < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}
console.log(reverseInt(-5)); // -5

This is working solution but its not ideal solution because the function calling parseInt() twice & returning twice. So its better to use Math.sign() instead of using if block.

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-5)); // -5

One-line solution :
function reverseInt(n) {
  const reversed = n.toString().replace('-', '').split('').reverse().join('');
  return parseInt(reversed, 10) * Math.sign(n); // used 10 because decimal number system base
}
console.log(reverseInt(-5)); 

===========================================================================================================================
Max Char :
'apple 123111' : here 12111 is considered as a string not the number
Question can be : 
    most common character in a string
    anagram - does string 1 has same characters as string 2
    any repeated character in the string
Anything related to counting or comparing number of characters we use this technique.
Technique : Convert the string into the object, where keys of the object are characters of the string and values are number of occurances of character in the string.

function maxChar(str) {
  let obj = {};
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  return obj;
}
console.log(maxChar('Hello'));











function chunk(array, size) {
  let chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1]; // Retrieves the most recently added chunk from chunked.
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}
console.log(chunk([1, 2, 3, 4, 5], 2));



function step(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) { // IMP condition whole function falls here
        stair = stair + '#';
      } else {
        stair = stair + ' ';
      }
    }
    console.log(stair);
  }
}
step(3)



IMP :
for steps problem : for loop for row > empty string 'stair' > for loop for column > if col <= row add # to stair else add space > console log stair in first for loopFrom diagram we derived that if col <= row add # else add ' ' => N (rows) = columns 

for pyramid :
From 0 to n (iterate through rows)
  Create an empty string 'level'
  From 0 to ??? (columns)
    IF the column should have a # 
      Add a '#' to 'level' 
    ELSE Add a space to 'level' 
  console log 'level'

From diagram we derived that 2n - 1, since N = 2 has 3 columns, N = 3 has 5 columns, N = 4 has 7 columns => 2 * N - 1
So when rows are 2 we need 4 columns => 2 * rows - 1 => 2 * n - 1 => this condition for column for loop

```js
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair = stair + '*';
      } else {
        stair = stair + ' ';
      }
    }
    console.log(stair);
  }
}
steps(4);
```

```js
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    const midpoint = Math.floor((2 * n - 1) / 2);
    let level = '';
    for (let col = 0; col < 2 * n - 1; col++) {  // we get number of col from 2 * n - 1
      if (midpoint - row <= col && midpoint + row >= col) {
        level = level + '#';
      } else {
        level = level + ' ';
      }
    }
    console.log(level);
  }
}
pyramid(3)
```
iterations
1.n=3, row=0, midpoint=3, 3-0 <= 0




for diamond pattern : 




