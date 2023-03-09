import React, {useState} from "react";

function Jumbotron(props) {
  const { yourname, yourgreeting, setMyStateVariable } = props;
  // const yourname = props.yourname;

  // create new state variable to hold your count
  let [ theCount, setTheCount ] = useState(0);

  // function handleIncrementCounter() {}
  const handleIncrementCounter = () => {
    console.log('Button was clicked!');
    setTheCount(theCount + 1); // theCount = theCount + 1;
  }
  const handleDecrementCounter = () => {
    console.log('Button was clicked!');
    setTheCount(theCount - 1); // theCount = theCount + 1;
  }

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{yourname}</h1>
        <p className="lead">{yourgreeting}</p>
        <button onClick={() => setMyStateVariable({myName: 'James', lead: ''})}>Click me</button>
        <button onClick={handleIncrementCounter}>Increment {theCount}</button>
        <button onClick={handleDecrementCounter}>Decrement {theCount}</button>

      </div>
    </div>
  );
}

export default Jumbotron;
