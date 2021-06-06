//var http = require('http');
const mysql = require('./mysql_connect')
const date = require('./date')

// read from console
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function printChoice(){
  console.log('CURRENT TIME : ' + date.myDateTime())
  console.log('Choose your operation')
  console.log('1. Select')
  console.log('2. Insert')
  console.log('3. Delete')
  console.log('4. Update')  
}
printChoice()

rl.question('Enter your CHOICE', (choice) => {
switch(choice){
case '1':
selectFunction()
break;
case '2':
insertFunction()
break;
case '3':
deleteFunction()
break;
case '4':
updateFunction()
default:
console.log('Enter correct choice . Restart and try again')
}
});



function selectFunction(){
  mysql.select()
}

function insertFunction(){
// console.log("insert function")
rl.question('Enter ID ', (id) => {
    rl.question('Enter NAME ', (name) => {
        rl.question('Enter DESC ', (desc) => {
          mysql.insert(id, name, desc)
      });
    });
});


}

function deleteFunction(){
  // console.log("delete function")
  rl.question('Enter ID ',(id) =>{
      mysql.delete1(id)
  });
}

function updateFunction(){
  rl.question('Enter the ID ',(id) =>{
    rl.question('Enter the NAME ',(name) =>{
      rl.question('Enter the DESC ',(desc) =>{
          mysql.update(id, name, desc)
      });
    });
  });

}
 

//create a server object:


/*
http.createServer(function (req, res) {
res.write("Hello "); //write a response to the client
  res.end(); //end the response
}).listen(8080);
*/