import React from 'react';


async function fetchData(setScreenValue) {
  const url = 'http://localhost:5000/joke';
  console.log(url);
  try {
    const response = await fetch(url);

    // Always check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON data
    console.log(data);
    //alert(data);
    setScreenValue(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

export default fetchData;
