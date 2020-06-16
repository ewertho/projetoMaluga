const express = require('express')
const router = express.Router()
const controleController = require('./controllers/controleController')

router.post('/verificar', controleController.index)
router.post('/inserir', controleController.store)
router.put('/alterar',controleController.alter)
router.delete('/remover', controleController.remove)

module.exports = router