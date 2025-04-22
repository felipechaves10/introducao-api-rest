import express from"express"

const router = express.Router()

const usuarios = [
    {
        id: 1, nome: "joão", email: "joão@email.com"
    },
    { id: 2, nome: "ana", email: "ana@mail.com" }
]


router.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body
    usuarios.push({
        id: usuarios[usuarios.length-1].id +1,
        nome: nome,
        email: email
    })
    
    res.status(201).json(usuarios) 
   
})

router.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body
    const index = usuarios.findIndex((usuario) => {
        return usuario.id == id
    })

    if (index == -1) {
        return res.status(404).json({mensagem:"usuario não encotrado!"})
    }

    res.send(`
        id: ${id}
        novo nome: ${novoNome}
        novo email ${novoEmail}`)
})

/**
 * crie uma rota(endpoint) do tipo  GET com URI : /usuarios
 * que evie uma resposta (mensagem) com todos os 
 * usuarios cadastrados no "bonco de dados fake".
 * 
 */

router.get("/usuarios", (req, res) => {
    res.status(200).json(usuarios)
})

router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params
    const index = usuarios.findIndex(usuario => usuario.id == id)
  
    if (index == -1) {
        return res.status(404).json({mensagem: "usuario não encontrado"})
    }
    usuarios.splice(index, 1)
    
    res.send(usuarios)
    })

export default router