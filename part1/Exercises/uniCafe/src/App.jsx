import { useState } from 'react'
const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}{props.text === 'positive' ? '%' : ''}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
        <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <StatisticLine text="positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App

