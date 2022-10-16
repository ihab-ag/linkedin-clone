const { Router } = require('express')
const { postJob } = require('../controllers/company.controller')
const router = Router()

router.post('/job', postJob)