const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/contactos', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactos.html'));
});

app.get('/tarefas', (req, res) => {
    res.status(404).send("erroooooo");
});

app.get('/pagamentos', (req, res) => {
    res.sendStatus (403);
});
app.get('/search_users', (req, res) =>{
    const reqn= req.query.name;
    const reqid= req.query.id;
    res.send(`O utilizador ${reqid} com nome ${reqn} não foi encontrado`);
}) 

app.get('/livro', (request, response) => {
 
    const livro = request.body.nome;
    const artista = request.body.artista;
    const ano = request.body.ano;
 
    console.log(livro)    
    response.send(`Foi feito um pedido do livro ${livro}, do artista ${artista}, escrito no ano ${ano}`)
});
 
 
let moneyBalance = null;                        
 
app.get ('/balance', (req, res)=> {    
    res.send(`Dinheiro: ${moneyBalance}`);
});
 
app.post ('/balance', (req, res)=> {
    if (moneyBalance == null){
    moneyBalance = req.body.balance;
    res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
 
app.put ('/balance', (req, res)=> {
    if (moneyBalance != null){
        moneyBalance = req.body.balance;
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
 
app.delete ('/balance', (req, res)=> {
    if (moneyBalance != null){
    moneyBalance = null;
    res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
 
 
 
const users = [
    {
        id: 0,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com'
    },
    {
        id: 1,
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alicesmith@example.com'
    },
];
 
let currentId = 2;
 
app.get('/users', (req, res) =>{
    response.send(users)
  })
 
  app.post('/users', (req, res) =>{
    const nuser = req.body;
    users.push(nuser)
    res.sendStatus(200);
  });
 
  app.put('/users', (req, res) =>{
    
  });
 
  app.delete('/users', (req, res) =>{
   
    
    response.sendStatus(200);
 
   
  }
  );
 
 
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
})