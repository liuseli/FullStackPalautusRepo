import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Header = ({headline}) => {
  return(
    <h1>{headline}</h1>
  )
  }

const App = (props) => {
  const [selected, setSelected] = useState([0,0,0,0,0,0])
  const [ind, setInd] = useState(0)

  const handleClick = () => {
    const min = 0
    const max = 5
    const rand = Math.floor(Math.random() * (max - min + 1) ) + min
    setInd(rand)
  }

  const voteFor = () => {
    const copy = [...selected]
    copy[ind] += 1
    setSelected(copy)
  }

  return (
    <div>
      <Header headline = 'Anecdote of the day' />
      <p>{props.anecdotes[ind]}</p>
      <Button onClick = {handleClick} text = 'Next anecdote' />
      <Button onClick = {voteFor} text = 'Vote' />
      <p>Has {selected[ind]} votes</p>
      <Header headline = 'Anecdote with most votes' />
      <p>{props.anecdotes[selected.findIndex((element) => element === Math.max(...selected))]}</p>
      <p>Has {selected[selected.findIndex((element) => element === Math.max(...selected))]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
