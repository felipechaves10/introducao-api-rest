import express from 'express'

import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'
const app = express()
const port = 3000




//permitir  ler json no corpo da requisiçao
app.use(express.json())

app.use('/usuarios', usuariosRoutes)
app.use("/fornecedores", fornecedoresRoutes)

app.get('/', (req, res) => {
    res.send('hello world!')
})

    
    


app.listen(port, () => {
    console.log(`exemplo app listening on port ${port}`)
})




