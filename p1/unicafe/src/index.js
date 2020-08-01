import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good !== 0 && neutral !== 0 && bad !== 0)
  return (
    <div>
    <h2>Give your feedback!</h2>
    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>


    <Stats good={good} neutral={neutral} bad={bad} total={good+neutral+bad} average={(good+neutral+bad)/3} posfeed={(good / (good+neutral+bad))*100} />
    </div>
  )
  return (
    <div>
    <h2>Give your feedback!</h2>
    <button onClick={() => setGood(good + 1)}>Good</button>
    <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
    <button onClick={() => setBad(bad + 1)}>Bad</button>

    <h2> Statistical Results:</h2>
    Collecting feedbacks...Psst...clicks all buttons
    </div>
  )
}

const Stats = (props) => {
  return (
    <div>
    <h2>Statistical Results:</h2>
    <table>
      <tbody>
      <tr>
        <th>Parameters</th>
        <th>Values</th>
      </tr>
      <tr>
        <th bgcolor="black"></th>
        <th bgcolor="black"></th>
      </tr>
      <tr>
        <th>good</th>
        <th>{props.good}</th>
      </tr>
      <tr>
        <th>neutral</th>
        <th>{props.neutral}</th>
      </tr>
      <tr>
        <th>bad</th>
        <th>{props.bad}</th>
      </tr>
      <tr>
        <th bgcolor="black"></th>
        <th bgcolor="black"></th>
      </tr>
      <tr>
        <th>total</th>
        <th>{props.total}</th>
      </tr>
      <tr>
        <th>average</th>
        <th>{props.average}</th>
      </tr>
      <tr>
        <th>posfeed</th>
        <th>{props.posfeed}%</th>
      </tr>
      </tbody>
    </table>
    </div>
  )
}




ReactDOM.render(<App />, 
  document.getElementById('root')
)

