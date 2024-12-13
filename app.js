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
app.get('/user/:name/natiounality/:country', (req, res) =>{
    const reqn= req.params.name;
    const reqc= req.params.country;
    res.send(`O ${reqn} tem nacionalidade ${reqc}`);
}) 

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
})