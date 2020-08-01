import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [g, setGood] = useState(0)
  const [n, setNeutral] = useState(0)
  const [b, setBad] = useState(0)
  const objRate = {
    text: { g: "Good", n: "Neutral", b: "Bad", t: "Total", a: "Average", p: "Positive Feedback"},
    value: { g: g, n: n, b: b, t: g+n+b, a: (g-b)/(g+n+b), p: ((g / (g+n+b))*100)+" %"},
    event: { g: () => setGood(g + 1), n: () => setNeutral(n + 1), b: () => setBad(b + 1)}
  }

  return (
    <div>
    <UI objRate={objRate} />
    <Stats objRate={objRate} />
    </div>
  )
}

const UI = (props) => {

  return (
  <div>
    <h2>Give your feedback!</h2>
    <button onClick={props.objRate.event.g}>{props.objRate.text.g}</button>
    <button onClick={props.objRate.event.n}>{props.objRate.text.n}</button>
    <button onClick={props.objRate.event.b}>{props.objRate.text.b}</button>
  </div>
  )
}


const Stats = (props) => {
console.log("Stats: ",props.objRate.value.g)
if ({props.objRate.value.g}) !== 0) {
//if ( {props.objRate.value.g} !== 0 ) && {props.objRate.value.n} !== 0 && {props.objRate.value.b} !== 0 ){
//if (1 !== 1) {
  return (
    <div>
    <h2>Stats:</h2>
    <table>
      <tbody>
      <tr>
        <th>Parameters</th>
        <th>Values</th>
      </tr>
      <tr>
        <th>{props.objRate.text.g}</th>
        <th>{props.objRate.value.g}</th>
      </tr>
      <tr>
        <th>{props.objRate.text.n}</th>
        <th>{props.objRate.value.n}</th>
      </tr>
      <tr>
        <th>{props.objRate.text.b}</th>
        <th>{props.objRate.value.b}</th>
      </tr>
      <tr>
        <th>{props.objRate.text.t}</th>
        <th>{props.objRate.value.t}</th>
      </tr>
      <tr>
        <th>{props.objRate.text.a}</th>
        <th>{props.objRate.value.a}</th>
      </tr>
      <tr>
        <th>{props.objRate.text.p}</th>
        <th>{props.objRate.value.p}</th>
      </tr>
      </tbody>
    </table>
    </div>
  )
  } else {
    return(
      <div>
      <h2> Stats:</h2>
      Collecting feedback...<br />Click all buttons to show results.
      </div>
    )
  }
}




ReactDOM.render(<App />,
  document.getElementById('root')
)
