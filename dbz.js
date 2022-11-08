const express = require('express');
const { Client } = require('pg');
const app = express();
app.use(express.json());
const PORT = 8001;

const morGan = require('morgan');
const cond1 = /^\/pets\/(\d\d\d\d)$/;  
const cond2 = /^\/pets\/(\d\d\d)$/;
const cond3 = /^\/pets\/(\d\d)$/;
const cond4 = /^\/pets\/(\d)$/;
const cond5 = /^\/pets$/;
const cond6 = /^\/pets\/$/;
const cond7 = /^(\d)$/;
const cond8 = /^(\d\d)$/;
const cond9 = /^(\d\d\d)$/;
//const http = require('http');
// const config = require('./config.json')[process.env.NODE_ENV || "dev"]

const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/fs_pet_shop';
const client = new Client({
    connectionString: connectionString,
});
client.connect();



app.get('/pets', (req, res) => {
    client.query('SELECT * FROM pets')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 



  app.post('/pets', (req, res) => {
    let pets = req.body;
    let age = pets.age;
    let kind = pets.kind;
    let name = pets.name;
    console.log(pets);
    client.query(`INSERT INTO pets (age, kind, name)
    VALUES (${age}, '${kind}', '${name}') RETURNING *`)
    .then(result =>{
        
        res.status(200).send(result.rows);
    })
});



app.patch("/pets/:id", (req, res) => {
    console.log(req.body);
    let animal = req.body;
    let setStr = "";
    let elements = [];
    for (element in animal) {
      console.log(element, animal[element]);
      elements.push(element + "='" + animal[element] + "'");
    }
    console.log(elements.toString());
  
    client.query(`UPDATE pets SET ${elements.toString()} WHERE id=${req.params.id} `)
      .then((result) => {
        res.send(req.body);
      });
  });

  app.delete("/pets/:id", (req, res) => {
    client.query(`DELETE FROM pets WHERE id = ${req.params.id}`)
      //   res.send("DELETE pets Called");
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.send(err);
        console.error(err);
      });
  });


app.use((req, res, next) => {
    console.log(req.path.split("/"));
    res.status(404).send('Not Found');
  });

app.listen(PORT, () => {
    console.log(`Our app running on ${PORT}`)
});