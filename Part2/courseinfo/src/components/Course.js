import React from 'react';

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
export default Course;