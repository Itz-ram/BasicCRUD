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


 //insertfunction
function insert(ID, NAME, DESC){
	var sql = "INSERT INTO TODO values ("+ID+",'"+NAME+"','"+DESC+"')";
	console.log(sql)

connection.query(sql, function(err, result, fields) {
	if(err) throw err;
	console.log("inserted");
});
}

 //deleteFunction
function delete1(ID){
  
  var sql="DELETE FROM TODO WHERE ID="+ID+" "
  connection.query(sql, function (err) {
  if (err) throw err;
  console.log("deleted");
});
}

//updateFunction
function update(ID,NAME, DESC){
    var sql = "UPDATE TODO SET NAME = '"+ NAME +"', DESCR = '" + DESC + "' WHERE ID = " + ID;
    connection.query(sql,function(err){
      if (err) throw err
        console.log("Updated values for ID : " + ID)
    });

}

module.exports = { connection, select, insert, delete1, update }
