const express = require('express');
const db_insert = require('../db/insert');
const db_select = require('../db/select');
const router = express.Router();

function no_cors_setup(res) {

  //Access-Control-Allow-Origin
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
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


/*
 *
 * 
 * curl "http://localhost:3001/insert?id=2&name=Phil&address=Stamford_CT"
 *
*/
router.get('/insert', async (req,res, next) => {
  no_cors_setup(res);
  try {

	console.log("value: " + req.query.value);
  let results = await db_insert.insertData(req,res);
    console.log(results);
    res.json(results);

  } catch(e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});

/*
 * Make this SELECT interesting by passing in values to query
 */

 /*
  * 
  * curl http://localhost:3001/select?value=my_name
 */

router.get('/select', async (req,res, next) => {
  no_cors_setup(res);
  try {

	console.log("value: " + req.query.value);
      let results = await db_select.selectData(req,res);
      res.json(results);
  } catch(e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});


module.exports = router;
