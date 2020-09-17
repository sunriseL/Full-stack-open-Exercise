import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  var str = props.parts.map((item, index) => { 
    return <p>{props.parts[index]} {props.exercises[index]} </p> 
  })
  return [
    str
  ]
}

const Total = (props) => {
  var total = 0;
  for (var i = 0; i < props.exercises.length; i++) {
    total += props.exercises[i];
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]
  const exercises = [10, 7, 14]
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises}/>
      <Total  exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
