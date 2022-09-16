const Header = (props) => (<h1>{props.course}</h1>);

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => <Part key={part.name} name={part.name} exercises={part.exercises}/>)}
    </div>
  );
}

const Total = (props) => {
  // I kept it simple and avoided using Array.reduce
  const [part1, part2, part3] = props.parts;
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  );
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
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App