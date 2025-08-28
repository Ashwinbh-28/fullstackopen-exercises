# Javascript from FullStack Open

Node.js is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine and works practically anywhere - from servers to mobile phones.

The newest revisions of Chrome handle the newer features of JavaScript pretty well without transpiling the code. Alternatively, you can use a tool like JS Bin.

# Variables:

- For a long time, var was the only way to define variables. The keywords const and let were introduced in 2015 with the release of ES6.

# Array

Notable in this example is the fact that although a variable declared with const cannot be reassigned to a different value, the contents of the object it references can still be modified. This is because the const declaration ensures the immutability of the reference itself, not the data it points to. Think of it like changing the furniture inside a house, while the address of the house remains the same.

```js
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})
```
-  In React code, it is preferable to use the method concat, which creates a new array with the added item. This ensures the original array remains unchanged.

```js
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```
- Note that to spread the elements length use the spread operator syntax
```js
const t = [2,3,4]

const [first, second, ...rest] = t

console.log(first, second) // 2,3
console.log(rest) // 4
```


