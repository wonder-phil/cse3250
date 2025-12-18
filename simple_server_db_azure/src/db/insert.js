const sql = require('mssql');

var config =
{
	host: 'pgb3.database.windows.net',
	user: 'pgb',
	password: 'SDOld0!mf;',
	server: 'pgb3.database.windows.net',
	database: 'pgb',
	port: 1433
};

// ssl: true

let data_query_table = {};

/*
 * 'INSERT INTO people (name, address, number) VALUES (?, ?, ?);', ['orange', 'one university plaza', 154]
 */
data_query_table.insertData = (req, res) => {

		// connect to your database
    sql.connect(config, function (err) {

	    if (err) console.log(err);

	        // create Request object
	    var request = new sql.Request();
		str = 'INSERT INTO people (id, name, address) VALUES (' + req.query.id + ',\'' + req.query.name + '\',\'' + req.query.address + '\')';
		console.log(str);
		request.query(str,
				function (err, recordset) {

				    if (err) console.log(err)

						console.log('Done.');

	    		});
	});
}

module.exports = data_query_table;
