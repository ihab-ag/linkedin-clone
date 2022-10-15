const { Router } = require('express')
const { getUser } = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const user = require('../middleware/user.middleware')
const router = Router()

router.get('/', auth, user, getUser)
