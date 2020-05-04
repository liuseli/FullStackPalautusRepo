import React from 'react'
import ReactDOM from 'react-dom'

const Hearder = (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part partname = {props.parts[0].name} exN = {props.parts[0].exercises}/>
      <Part partname = {props.parts[1].name} exN = {props.parts[1].exercises}/>
      <Part partname = {props.parts[2].name} exN = {props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.partname} {props.exN}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Hearder text = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))