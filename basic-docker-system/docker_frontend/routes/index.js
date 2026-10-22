const axios = require('axios');
const express = require('express');
//const db = require('../db');
const router = express.Router();



function no_cors_setup(res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);
  //console.log("no-cors done");
}

const my_data = [
    0,
    1,
    2,
    3,
    4,
    5
];

var index = 0;


/*
 *
 * curl http://localhost:3009/get_data
*/
router.get('/get_data', async (req,res, next) => {
  no_cors_setup(res);
  try {

      var str= "data: " + JSON.stringify(my_data[index]);
      console.log(str);
      index = (index+1) % my_data.length;


      axios.get('http://backend:3010/get_backend_data') // http://192.168.254.20:3010/get_backend_data
	  .then(function (response) {
	      console.log(response.data);
	      str = response.data;
	  })
	  .catch(function (error) {
	      console.log("error");
	  });
  
      
      res.json("{" + str + " }" );
      
  } catch(e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});


module.exports = router;
