/*
 Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
*/
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part1} {props.exercises1}
    </p>
  );
};

const Content = () => {
  return (
    <>
      <Part part1="Fundamentals of React" exercises1={10} />
      <Part part1="Using props to pass data" exercises1={7} />
      <Part part1="State of a component" exercises1={14} />
    </>
  );
};

const Total = (props) => (
  <p>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
)

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  );
};

export default App;
