//var http = require('http');
const mysql = require('./mysql_connect')


console.log("Server Started");

 mysql.connection.query("SELECT * FROM TODO", function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    //console.log(result);

for (index = 0; index < result.length; index++) {
    console.log(result[index]);
}

  });
//contributed dhanish/praveen/ram
//read from console
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// readline.question('Who are you?', name => {
// var greet =  `Hey there ${name}!`;
  
//   readline.close();
// }); 

//create a server object:


/*
http.createServer(function (req, res) {
res.write("Hello "); //write a response to the client
  res.end(); //end the response
}).listen(8080);
*/