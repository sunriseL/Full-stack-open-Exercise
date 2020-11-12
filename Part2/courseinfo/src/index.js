import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (<p>{props.part} {props.exercises}</p>)
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

const Total = (props) => {
  var total = props.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0)
  return (
    <h3>Number of exercises {total}</h3>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content parts={props.course.parts}/>
      <Total  parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <div>
      {courses.map((course) => <Course key={course.id} course={course} />)}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
