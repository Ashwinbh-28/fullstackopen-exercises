# Introduction to React using the FullStack Open Course

This is the source code for the React-Vite Notes using the FullStack Open Course.

**Keep in mind that First letter of React component names must be capitalized**


## JSX - JavaScript XML

- It seems like React components are returning HTML markup.
- Although JSX looks like HTML, we are dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript.

- Under the hood, it looks like this:
``` js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
```
- The compliation process is done by Babel.


## Multiple Components

- NB: export at the bottom is left out in these examples, now and in the future. It is still needed for the code to work


### Do not Render **Objects**

```jsx
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </div>
  )
}

export default App
```

The Objects are not valid children in the React child.

The code tries to render the information of one friend as follows:
``` jsx
<p> {friends[0]}</p>
```
but done by the following code:
```jsx
{ name: 'Peter', age: 4 }
```

To fix this issue in the React components:
We use the following way to rewrite the code:

```jsx
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App
```


Here, we need to call them in the value of pair for each of the friends called upon.

