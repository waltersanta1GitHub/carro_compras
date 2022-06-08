const express = require('express');
const router = express.Router();
const usuarios = require('../servicios/contextousuarios');

/* GET usuarios */
router.get('/', async function(req, res, next) {
  try {     
    res.json(await usuarios.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});



/* POST usuarios */
router.post('/', async function(req, res, next) {
    try {
      res.json(await usuarios.create(req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });


  /* PUT usuarios */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await usuarios.update(req.params.id, req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });

module.exports = router;