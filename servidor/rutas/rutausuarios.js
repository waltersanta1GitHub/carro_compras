const express = require("express");
const config = require("../config");
const cryptor = require("../crypto");
const router = express.Router();
const usuarios = require("../servicios/contextousuarios");
const jwt = require("jsonwebtoken");

/* GET usuarios */
router.get("/", async function (req, res, next) {
  try {
    res.json(await usuarios.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});


// Registro
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("Todos los datos son requeridos");
    }
    const oldUser = await usuarios.findOne(username);

    if (oldUser.length != 0) {
      return res
        .status(409)
        .send(
          "El usuario ya existe. Por favor use ese nombre de usuario para hacer login"
        );
    }

    encryptedPassword = cryptor.encrypt(password);
    finalencrypt = encryptedPassword.iv + ":" + encryptedPassword.content;

    // crea el usuario en la base de datos
    const user = await usuarios.create({
      username: username.toLowerCase(),
      password: finalencrypt,
    });

    // Crea el token
    const token = jwt.sign({ user_id: user._id, username }, config.TOKEN_KEY, {
      expiresIn: "1h",
    });

    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("usuario o contrasena incompletos");
    }
    const user = await usuarios.findOne(username);

    var hash_value = user[0].password.split(":");
    var iv_value = hash_value[0];
    var content_value = hash_value[1];

    decryptedPassword = cryptor.decrypt({
      iv: iv_value,
      content: content_value,
    });    
    if (user && decryptedPassword == password) {
      // Crea el token
      const token = jwt.sign(
        { user_id: user[0]._id, username },
        config.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      ); 

      res.status(200).json( { user:user[0],token: token });
    }
    res.status(400).send("Usuario o contrasena invalidos");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
