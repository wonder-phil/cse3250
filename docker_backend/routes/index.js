const express = require('express');
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
    990,
    991,
    992,
    993,
    994,
    995
];

var index = 0;


/*
 *
 * curl http://localhost:3010/get_backend_data
*/
router.get('/get_backend_data', async (req,res, next) => {
  no_cors_setup(res);
  try {

      var str= "data: " + JSON.stringify(my_data[index]);
      console.log(str);
      index = (index+1) % my_data.length;
	
      res.json("{ \"backend\" : " + str + " }" );
      
  } catch(e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});


module.exports = router;
