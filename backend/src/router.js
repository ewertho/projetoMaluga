const express = require('express')
const router = express.Router()
const controleController = require('./controllers/controleController')

router.get('/index', controleController.index)
router.post('/procurar', controleController.procurar)
router.post('/guardar', controleController.guardar)
router.put('/alterar',controleController.alterar)
router.delete('/remover', controleController.remover)

module.exports = router