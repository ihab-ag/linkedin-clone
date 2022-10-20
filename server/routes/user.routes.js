const { Router } = require('express')
const { getUser, updateUser, followUnfollowCompany, getCompany, searchJobs, applyJob, getNotifications } = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')
const user = require('../middleware/user.middleware')
const router = Router()

router.get('/', auth, user, getUser)

router.put('/', auth, user, updateUser)

router.put('/follow-unfollow', auth, user, followUnfollowCompany)

router.get('/company/:company_id', auth, user, getCompany)

router.get('/jobs', auth, user, searchJobs)

router.get('/notifications', auth, user, getNotifications)

router.post('/job', auth, user, applyJob)

module.exports = router