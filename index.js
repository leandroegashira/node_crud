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


// alterar usuário
server.put('/users/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body

    users[index] = name

    return res.json(users)
})


// deletar usuário
server.put('/users/:index', (req, res) => {

    users.splice(index, 1)
    
})

server.listen(3000)