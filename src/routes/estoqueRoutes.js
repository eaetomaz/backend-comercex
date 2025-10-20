const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

router.get('/', estoqueController.listar);
router.post('/', estoqueController.add);
router.put('/:id', estoqueController.alter);
router.delete('/:id', estoqueController.delete);
router.get('/:id', estoqueController.search);


module.exports = router;
