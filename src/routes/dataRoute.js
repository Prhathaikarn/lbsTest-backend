const express = require('express')
const router = express.Router()

const dataController = require('../controllers/data-controller')

router.get('/', dataController.getAllData)
router.post('/add', dataController.createData)
router.put('/edit/:id', dataController.updateData)

module.exports = router