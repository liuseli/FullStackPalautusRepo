const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return(
    <>
      <Part  part={props.content[0].name} exercises={props.content[0].exercises} />
      <Part  part={props.content[1].name} exercises={props.content[1].exercises} />
      <Part  part={props.content[2].name} exercises={props.content[2].exercises} /> 
    </>
  )
}

const Part = ({part, exercises}) => {
  return (
      <p>{part} {exercises}</p>
  )
}

const Total = (props) => {
  let total = 0
  props.content.forEach(element => {
    total += element.exercises;
  });
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
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
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  )
}

export default App