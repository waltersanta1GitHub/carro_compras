const express = require('express');
const router = express.Router();
const productos = require('../servicios/contextoproductos');

/* GET Productos */
router.get('/', async function(req, res, next) {
  try {    
    res.json(await productos.getMultiple(req.query.page));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});


/* POST productos */
router.post('/', async function(req, res, next) {
    try {
      res.json(await productos.create(req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });


  /* PUT productos */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await productos.update(req.params.id, req.body));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });


  /* DELETE productos */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await productos.remove(req.params.id));
    } catch (err) {
      console.error(err.message);
      next(err);
    }
  });

module.exports = router;