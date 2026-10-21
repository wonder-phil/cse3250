import React, { useState } from 'react';
import ReadFileFromBackend from './ReadFileFromBackend.js';


function Display() {
  // 1. Declare a state variable named "count" initialized to 0
  const [count, setCount] = useState(0);
  const [alljokes, setAlljokes] = useState("");
  //var jk = fetchData(setMyjoke);
  console.log("HERE 0");
  
  const handleTrigger = () => {
    // Pass the setter function to the external file function
    console.log("HERE 1");
    ReadFileFromBackend(setAlljokes);
  };

  return (
   <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>All jokes dashboard</h2>
      <h2>Joke: {alljokes}</h2>
    </div>
    <br />
    <div>
      {/* get all jokes */}
      <button onClick={() =>  {handleTrigger()}}>Get a joke</button>
    </div>
   </>
  );
}

export default Display;
