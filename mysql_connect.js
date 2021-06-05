var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'nodedb'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});


// select function
 function select(){
   connection.query("SELECT * FROM TODO", function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    //console.log(result);

for (index = 0; index < result.length; index++) {
    console.log(result[index]);
}

  });

 }


 //TODO
 //insertfunction
function insert(ID, NAME, DESC){
	var sql = "INSERT INTO TODO values ("+ID+",'"+NAME+"','"+DESC+"')";
	console.log(sql)

connection.query(sql, function(err, result, fields) {
	if(err) throw err;
	console.log("inserted");
});
}

 //TODO
 //deleteFunction
function delete1(ID){
  
  var sql="DELETE FROM TODO WHERE ID="+ID+" "
  connection.query(sql, function (err) {
  if (err) throw err;
  console.log("deleted");
});
}

module.exports = { connection, select, insert, delete1 }
