const express  = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite conexão com o frontend
app.use(express.json());

const PORT = 3000;


let users = [];
let idxuser = 1;


// Pegar todos os users na Api
app.get('/usuarios', (req, res) =>
{
    res.status(200).json(users);
})

// Pegar um user especifico
app.get('/usuarios/:id', (req, res) =>
{
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user)
        res.status(400).json({message: "Usuario nao encontrado"});
    res.status(200).json(user);
});

// Cadastrar os dados do user
app.post('/usuarios', (req, res) =>
{
    const {name, email} = req.body;
    if (!name || !email)
        return res.status(400).json({message: "Nome e Email Obrigatorios"});
    const newUser = {
        id: idxuser++,
        name : name,
        email: email
    };
    users.push(newUser);
    res.status(200).json(users);
});

app.put("/usuarios/:id", (req, res)=>
{
    const id = parseInt(req.params.id);
    const {name, email} = req.body;

    const user = users.find(u => u.id === id);
    if (!user)
        return res.status(404).json({message: "User not found"});
    if (name)
        user.name = name;
    if (email)
        user.email = email;
    res.status(200).json({message: "user update with sucess", data: user});
})

app.delete('/usuarios/:id', (req, res) =>
{
    const id = parseInt(req.params.id);
    const idx = users.findIndex(u => u.id === id);

    if (idx === -1)
        res.status(400).json({message: "User not found"});
    users.splice(idx, 1);
    res.status(200).json({message: "user delete with sucess"});
})

app.listen(PORT, ()=>
{
    console.log(`Server Rodando na Porta ${PORT}`);
})