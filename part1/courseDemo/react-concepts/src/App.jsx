import { useState } from "react";
const Display =({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0);
  const decrementValue = () => setCounter(counter - 1);
  const incrementValue = () => setCounter(counter + 1);
  const resetValue = () => setCounter(0);
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={decrementValue} text="decrement" />
      <Button onClick={resetValue} text="reset" />
      <Button onClick={incrementValue} text="increment" />
    </div>
  );
};

export default App;
