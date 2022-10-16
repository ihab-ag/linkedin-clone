const { Router } = require('express')
const { postJob, getJobs } = require('../controllers/company.controller')
const auth = require('../middleware/auth.middleware')
const company = require('../middleware/company.middleware')
const router = Router()

router.post('/job', auth, company, postJob)

router.get('jobs', auth, company, getJobs)