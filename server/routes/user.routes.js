const { Router } = require('express')
const { getUser, updateUser } = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const user = require('../middleware/user.middleware')
const router = Router()

router.get('/', auth, user, getUser)

router.put('/', auth, user, updateUser)
