
import express from 'express'
const app = express ()
const port = 3000
const usuarios =[
    {
        id: 1, nome : "joão", email:"joão@email.com"
    },
    {id: 2, nome : "ana", email:"ana@mail.com"}
]



//permitir  ler json no corpo da requisiçao
app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world!')
})

app.post("/criarUsuario",(req, res) => {
    const {id, nome, email} = req.body
    res.send(id,nome, email)

})
/**
 * crie uma rota(endpoint) do tipo  GET com URI : /usuarios
 * que evie uma resposta (mensagem) com todos os 
 * usuarios cadastrados no "bonco de dados fake".
 * 
 */

app.get("/usuarios",(req, res) => {
    res.send(usuarios)
})

app.listen(port, () => {
    console.log(`exemplo app listening on port ${port}`)
})




