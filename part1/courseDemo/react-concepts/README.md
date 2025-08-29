# React components using FullStack Open

# Defactoring

- Here the props and declared in the () of the function in form of various types:

```jsx
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

OR

```jsx
const Hello = (props) => {
  const { name, age } = props
```
or
```jsx
const Hello = ({ name, age }) => {
```

# Page Re-rendering

```jsx
let counter = 1

setInterval(() => {
    counter++
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App counter={counter} />
    )
}, 1000)
```

- This above example helps us to understand the use of react as the page re-rendering component usability.
