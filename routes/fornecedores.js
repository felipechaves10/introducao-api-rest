import express from "express"

const router = express.Router()

const fornecedores = [
    {id: 1, nome: "amaral abeçoado"},
    {id: 2, nome: "frank do saegados"},
]

router.get("/", (req, res) => {
    res.status(200).json(fornecedores)
})

export default router
