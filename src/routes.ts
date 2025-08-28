import express from "express";
//add multer import e arquivo multerConfig

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: "Rota padrão" })
});


export { router }