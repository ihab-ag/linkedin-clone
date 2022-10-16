const { Router } = require('express')
const { getUser, updateUser, followUnfollowCompany, getCompany } = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const user = require('../middleware/user.middleware')
const router = Router()

router.get('/', auth, user, getUser)

router.put('/', auth, user, updateUser)

router.put('/follow-unfollow', auth, user, followUnfollowCompany)

router.get('/company/:company_id', auth, user, getCompany)
