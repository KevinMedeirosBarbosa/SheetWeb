const express = require("express");
const router = express.Router();
const Clients = require("../models/Clients");

router.post("/add", (req, res) => {
  let { name, ownerName } = req.body;

  // Insert
  Clients.create({
    name,
    ownerName,
    createdAt: new Date(),
  })
    .then((clienteCriado) => {
      // Aqui acessamos o cliente criado
      res.status(200).json({
        success: true,
        message: "Cliente criado com sucesso!",
        client: clienteCriado,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Erro ao criar cliente",
        error: err.message,
      });
    });
});

router.get("/list", async (req, res) => {
  try {
    const clients = await Clients.findAll();

    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ocorreu um erro ao buscar os clientes." });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const { ids } = req.body;
    await Clients.destroy({ where: { id: ids } });
    res.json({ message: "Cliente(s) deletado(s) com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar cliente(s)" });
  }
});

module.exports = router;
