import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <div>
      <h1>{props.header}</h1>
    </div>
  )
}

const Statisticsline = (props) => {
  if (isNaN(props.value)) {
    return(
      <td>
        No feedback given
      </td>
    )
  }
  if (props.text === 'Positive') {
    return(
      <td>
        {props.text} {props.value} %
      </td>
    )
  }
  return(
    <td>
      {props.text} {props.value}
    </td>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick = {onClick}>{text}</button>
)


const App = () => {
  const head = 'Give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFB, setAll] = useState([])


  const handleGood = () => {
    setGood(good +1)
    setAll(allFB.concat(1)) 
  }

  const handleNeutral = () => {
    setNeutral(neutral +1)
    setAll(allFB.concat(0)) 
  }

  const handleBad = () => {
    setBad(bad +1)
    setAll(allFB.concat(-1)) 
  }

  return(
    <div>
      <Header header={head} />
      <Button onClick = {handleGood} text = 'Good' />
      <Button onClick = {handleNeutral} text = 'Neutral' />
      <Button onClick = {handleBad} text = 'Bad' />
      <Header header = 'Statistics' />
      <table>
        <tbody>
          <tr>
            <Statisticsline value = {good} text = 'Good' />
          </tr>
          <tr>
            <Statisticsline value = {neutral} text = 'Neutral' />
          </tr>
          <tr>
            <Statisticsline value = {bad} text = 'Bad' />
          </tr>
          <tr>
            <Statisticsline value = {allFB.length} text = 'All' />
          </tr>
          <tr>
            <Statisticsline value = {(good-bad)/allFB.length} text = 'Average' />
          </tr>
          <tr>
            <Statisticsline value = {(good)/allFB.length * 100} text = 'Positive' />
          </tr>
        </tbody>
      </table>
    </div>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))
