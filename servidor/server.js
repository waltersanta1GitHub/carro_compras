

const express = require("express");
const app = express();

const productos = require('./rutas/rutaproducto');
const usuarios = require('./rutas/rutausuarios');


const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});


app.get("/", (req, res) => {
  res.json({ message: "Servidor API de Carrito de Compras corriendo OK" });
});



app.use("/api/productos", productos);
app.use("/api/usuarios", usuarios);


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