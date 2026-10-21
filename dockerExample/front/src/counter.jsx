import React, { useState } from 'react';
import fetchData from './fetchData.jsx';


function Counter() {
  // 1. Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);
  const [myjoke, setMyjoke] = useState("a joke");
  //var jk = fetchData(setMyjoke);
  console.log("HERE 0");
  const handleTrigger = () => {
    // Pass the setter function to the external file function
    console.log("HERE");
    fetchData(setMyjoke);
  };

  return (
   <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {count}</h2>
      <h2>Joke: {myjoke}</h2>
      
      {/* 2. Update state when buttons are clicked */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '0 10px' }}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    <br />
    <div>
      <button onClick={() =>  {handleTrigger()}}>Get a joke</button>
    </div>
   </>
  );
}

export default Counter;
