const express = require('express');
const router = express.Router();
const operaciones = require('../servicios/contextodb');

/* GET Servidor */
router.get('/', async function(req, res, next) {
  try {
    res.json(await operaciones.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting operaciones `, err.message);
    next(err);
  }
});



/* POST operaciones */
router.post('/', async function(req, res, next) {
    try {
      res.json(await operaciones.create(req.body));
    } catch (err) {
      console.error(`Error while creating operaciones`, err.message);
      next(err);
    }
  });


  /* PUT operaciones */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await operaciones.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating operaciones`, err.message);
      next(err);
    }
  });


  /* DELETE operaciones */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await operaciones.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting operaciones`, err.message);
      next(err);
    }
  });



module.exports = router;