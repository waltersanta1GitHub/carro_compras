const express = require('express');
const config = require('../config');
const router = express.Router();
const usuarios = require('../servicios/contextousuarios');
const bcrypt = require('bcrypt');
const jwt = require('../middleware/jwtoken');

/* GET usuarios */
router.get('/', async function(req, res, next) {
  try {     
    res.json(await usuarios.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});


// GEt Autenticar
// autenticar

router.get('/autenticar', async function(req, res, next) {
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

    console.log(oldUser);
    console.log(oldUser.length);

    if (oldUser.length != 0) {
      return res.status(409).send("El usuario ya existe. Por favor use ese nombre de usuario para hacer login");
    }
   
    encryptedPassword = await bcrypt.hash(password, 10);

    // crea el usuario en la base de datos
    const user = await usuarios.create({      
      username: username.toLowerCase(), 
      password: encryptedPassword     
    });

    // Crea el token
    const token = jwt.sign(
      { user_id: user._id, username },
      config.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    
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

      console.log(req.body);
      
      if (!(username && password)) {
        res.status(400).send("usuario o contrasena incompletos");
      }     
      const user = await usuarios.findOne(username);
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, username },
          config.TOKEN_KEY,
          {
            expiresIn: "1h",
          }
        );  
       
        user.token = token;  
      
        res.status(200).json(user);
      }
      res.status(400).send("Usuario o contrrasena invalidos");
    } catch (err) {
      console.log(err);
    }   
  });


module.exports = router;