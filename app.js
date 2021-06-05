//var http = require('http');
const mysql = require('./mysql_connect')

// read from console
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



//console.log("Server Started");

// var run = true;
// while(run){
  console.log("Choose your operation")
  console.log("1. Select")
  console.log("2. Insert")
  console.log("3. Delete")
rl.question('Enter your CHOICE', (choice) => {
switch(choice){
case "1":
selectFunction()
break;
case "2":
insertFunction()
break;
case "3":
deleteFunction()
break;
}
});



function selectFunction(){
  mysql.select()
}


function insertFunction(){
// console.log("insert function")
rl.question('Enter ID', (answer1) => {
    rl.question('Enter NAME', (answer2) => {
        rl.question('Enter DESC', (answer3) => {
          console.log(answer1) 
          console.log(answer2)
          console.log(answer3)
          mysql.insert(answer1,answer2,answer3)

      });
    });
});


}

function deleteFunction(){
  // console.log("delete function")
  rl.question('Enter ID',(answer) =>{
      mysql.delete1(answer)
  });
}
 

//create a server object:


/*
http.createServer(function (req, res) {
res.write("Hello "); //write a response to the client
  res.end(); //end the response
}).listen(8080);
*/