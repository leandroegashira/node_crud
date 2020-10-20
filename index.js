const express = require('express')          

const server = express()

const users = ['leandro', 'amanda', 'hideki', 'naomi']

server.use(express.json())


// lista usuários
server.get('/users', (req, res) => {

    return res.json(users)
})


// criando usuário
server.post('/users', (req, res) => {
    const {name} = req.body

    users.push(name)

    return res.json(users)
})