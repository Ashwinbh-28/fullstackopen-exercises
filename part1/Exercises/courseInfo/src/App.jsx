/*
 Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.
*/
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <>
      <Part part1= "Fundamentals of React" exercises1={10} />
      <Part part1="Using props to pass data" exercises1={7} />
      <Part part1="State of a component" exercises1={14} />
    </>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Header course="Half Stack application development" />
      <Content/>
      <Total exercises1={10} exercises2={7} exercises3={14} />
    </div>
  );
};

export default App;
