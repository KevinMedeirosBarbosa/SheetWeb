const express = require("express");
const app = express();
const db = require("./db/connection");
const bodyParser = require("body-parser");
const clientRouter = require("./routers/clients");
const cors = require("cors");

const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/client", clientRouter);

db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar ao banco", err);
  });

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
