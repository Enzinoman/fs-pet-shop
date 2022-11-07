// set up dependencies
const express = require('express');
const { get } = require('httpie');
const app = express();
const port = 4000;
const petFile = require('./pets.json');
const share = require('./shared');
// const errObj = new Error('<h1> There was an error! Please try again</h1>');



const multipleDigits = /^\/pets\/(\d*)$/;
const cond1 = /^\/pets$/;
const cond2 = /^\/pets\/$/;

/* const cond3 = /^\/pets\/(\d)$/;
const cond4 = /^\/pets\/(\d\d)$/;
const cond5 = /^\/pets\/(\d\d\d)$/;
const cond6 = /^\/pets\/(\d\d\d\d)$/;  // /pets/3224kdjsalf (42) + (38) + (fred) */



// Use the subtract function
const subResult = share.subtract(6, 3);
// Use the add function
const addResult = share.add(6, 3);




const outOfBoundsLit = "Your search does not match the requirements of our database. \n Please use the syntax as follows: '/pets' or '/pets/(single digit number)' or '/pets/(double digit number)' or '/pets/(triple digit number)' or '/pets/(quadruple digit number)'. \n If you've already used this similar syntac, then your search number likely exceeds the size of our database.";
 




app.get('/boom' , function (req, res, next){
    // /^\/pets age$/
    
    console.log(`Condition 'boom!' is working`);
    res.status(500).send('Internal Server Error');
    
   
})


app.get(cond2 , function (req, res, next){
    // /^\/pets\/$/
    
    console.log('Condition 2 is working');
    res.send(petFile);
    
   
})

app.get(cond1, function (req, res, next){
    // /^\/pets$/   
    
    
    console.log('Condition 1 is working');
    res.send(petFile);
    
    
    // next(errObj);
   
})

app.get('/pets/-*',(req, res, next) => {
    // res.status(errObj)
    

        res.status(404).send('Not Found');
    
    
    
  }) 



app.get(multipleDigits, function (req, res, next){
    // /^\/pets\/(\d\d\d\d)$/ 
    // console.log(petFile[req.path.slice(6, 10)]);
    console.log(petFile.length);
    console.log('condition met');
    console.log(req.path.slice(6, 10));
    if(req.path.slice(6, 10) <= (petFile.length-1)){
        res.status(200).send(petFile[req.path.slice(6, 10)]);
    }

    if(req.path.slice(6, 10) > petFile.length-1){
        res.status(404).send('Not Found');
    }
    
    
})

app.get('/pets/-*',(req, res, next) => {
    // res.status(errObj)
    

        res.status(404).send('Not Found');
    
    
    
  }) 


  app.use((req, res, next) => {
    console.log(req.path.split("/"));
    res.status(404).send('Not Found');
  })
   
  








  

// listen on a port
app.listen(port, function() {
    console.log('Listening on port', port);
  });

  module.exports = petFile;