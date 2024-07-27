var express = require('express')
var router = express.Router()
const userController = require('../controller/userController')


router.get('/:id', userController.getSingleUSer)
router.get('/', userController.get_data)
router.post('/', userController.register)
router.put('/:id', userController.update_data)
router.delete('/:id', userController.delete_data)
router.post('/chat', userController.chat)

module.exports = router
