const fs = require('fs');
const http = require('http');
const port = 8000;
const outOfBoundsLit = "Your search does not match the requirements of our database. \n Please use the syntax as follows: '/pets' or '/pets/(single digit number)' or '/pets/(double digit number)' or '/pets/(triple digit number)' or '/pets/(quadruple digit number)'. \n If you've already used this similar syntac, then your search number likely exceeds the size of our database.";
           

const cond1 = /^\/pets\/(\d\d\d\d)$/;  
const cond2 = /^\/pets\/(\d\d\d)$/;
const cond3 = /^\/pets\/(\d\d)$/;
const cond4 = /^\/pets\/(\d)$/;
const cond5 = /^\/pets$/;
const cond6 = /^\/pets\/$/;

// const allOtherCond = (cond1 || cond2 || cond3 || cond4);


var server = http.createServer((req, res) => {
    let urlShortString = "";
    for(let i = 0; i < req.url.length; i++ ){

        urlShortString += req.url[i];

    }
       
   /*    if(cond5.test(urlShortString)){

        console.log('it matches');
       } */

         if(cond5.test(urlShortString) || cond6.test(urlShortString)){
  
            fs.readFile('pets.json','utf8',(error, data) =>{
                if(error){
                    throw error;
                } else {
        
                    if(error){
                        throw error;
                    } else {
            
                        let pets = JSON.parse(data);
                        console.log(pets);
                        var jsonPets = JSON.stringify(pets);
                        
                        res.setHeader('Content-Type', 'application/json');
                        // res.write(jsonPets);
                        res.end(jsonPets);
    
                    
    
                    }
       
                
                    }
                })
        
             
         // }else if(urlShortString.length > 7){
           // }else if( urlShortString.slice(0, 6) === '/pets/' && !isNaN(parseInt(req.url[6]))){
         }else if(cond4.test(urlShortString)){

                fs.readFile('pets.json','utf8',(error, data) =>{
                    if(error){
                        throw error;
                    } else {
            
                        if(error){
                            throw error;
                        } else {
                            if(req.url.length < 10){

                                console.log("Yes, I work!");
                            
                               let num = parseInt(req.url[6]);
                               console.log(req.url.length);
                               let pets = JSON.parse(data);
                               let result = pets[num];
                            
                               let jsonResult = JSON.stringify(result);
                            
                               res.setHeader('Content-Type', 'application/json');
                            
                               res.end(jsonResult);
                               } 
                           
                        
        
                        }
           
                    
                        }
                    });

            }else if(cond3.test(urlShortString)){

                fs.readFile('pets.json','utf8',(error, data) =>{
                    if(error){
                        throw error;
                    } else {
            
                        if(error){
                            throw error;
                        } else {
                            if(req.url.length < 100){
                            let num = parseInt(req.url.slice(6, 8));
                            console.log(num);
                            
                            let pets = JSON.parse(data);
                            let result = pets[num];
                            
                            let jsonResult = JSON.stringify(result);
                            
                            res.setHeader('Content-Type', 'application/json');
                            
                            res.end(jsonResult);
                        } 
        
                        
        
                        }
           
                    
                        }
                    });
            }else if(cond2.test(urlShortString)){

                fs.readFile('pets.json','utf8',(error, data) =>{
                    if(error){
                        throw error;
                    } else {
            
                        if(error){
                            throw error;
                        } else {
                            if(req.url.length < 1000){
                            let num = parseInt(req.url.slice(6, 9));
                            console.log(num);
                            
                            let pets = JSON.parse(data);
                            let result = pets[num];
                            
                            let jsonResult = JSON.stringify(result);
                            
                            res.setHeader('Content-Type', 'application/json');
                            
                            res.end(jsonResult);
                        } 
        
                        
        
                        }
           
                    
                        }
                    });
            }else if(cond1.test(urlShortString)){

                fs.readFile('pets.json','utf8',(error, data) =>{
                    if(error){
                        throw error;
                    } else {
            
                        if(error){
                            throw error;
                        } else {
                            if(req.url.length < 1000){
                            let num = parseInt(req.url.slice(6, 10));
                            console.log(num);
                            
                            let pets = JSON.parse(data);
                            let result = pets[num];
                            
                            let jsonResult = JSON.stringify(result);
                            
                            res.setHeader('Content-Type', 'application/json');
                            
                            res.end(jsonResult);
                        }
        
                        
        
                        }
           
                    
                        }
                    });
            }else{
                // throw outOfBoundsLit;
                console.log(outOfBoundsLit);
                // process.exit(1);
             }
             

        // }

       
       

    
    });




        server.listen(port, function() {
            console.log('Listening on port', port);
          });


      