const Company = require('../models/company.model')
const Job = require('../models/job.model')

const postJob = async (req, res) => {

    const id = req.id
    
    const { desc } = req.body

    try{
        const company = await Company.findById(id)

        if(!company)
            throw 'invalid request'

        const job = new Job

        job.company = company
        job.desc = desc

        await job.save()
        
        company.jobs = [...company.jobs, job]

        await company.save()

        res.json(job)

    }catch(error){
        res.status(404).send(error.message)
    }
}

module.exports = {
    postJob
}