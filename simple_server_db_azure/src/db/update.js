const mysql = require('mysql');

var config =
{
	host: 'myserver99.database.windows.net',
	user: 'db99admin',
	password: '8suddsk!3',
	server: 'myserver99.database.windows.net',
	database: 'db99',
	port: 1433
};


let data_query_table = {};


/*
 * Incomplete!
*/
data_query_table.insertData = (req, res) => {

	 // connect to your database
	 sql.connect(config, function (err) {

		 if (err) console.log(err);

				 // create Request object
		 var request = new sql.Request();

	 }

};



module.exports = data_query_table;
