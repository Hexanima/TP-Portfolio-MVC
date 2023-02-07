const express = require("express");
const app = express();
const PORT = 3000;

/* Enrutadores */

const mainRouter = require("./routers/mainRouter")

app.use(express.static("public"))

app.use("/", mainRouter);

app.listen(PORT, () => console.log(`Servidor escuchando al ${PORT}`));