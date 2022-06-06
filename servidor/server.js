

const express = require("express");
const app = express();
const operaciones = require('./rutas/rutaservidor');
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.get("/", (req, res) => {
  res.json({ message: "Servidor API de Carrito de Compras corriendo OK" });
});



app.use("/operaciones", operaciones);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});




app.listen(port, () => {
  console.log(`El servidor API DE CARRITO DE COMPRAS ejecutandose en http://localhost:${port}`);
});