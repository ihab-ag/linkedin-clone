const Company = require('../models/company.model')
const Job = require('../models/job.model')
const Following =require('../models/following.model')
const Notifications = require('../models/notifications.model')

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

        const users = await Following.find({"companies": company})

        for(const user of users){
            
            let userNotifications = await Notifications.findOne({'user' : user.user,});

            if(!userNotifications){

                userNotifications = new Notifications
                userNotifications.user = user.user
                userNotifications.jobs = [job]

                await userNotifications.save()
                
                continue
            }

            userNotifications.jobs= [...userNotifications.jobs, job]
            await userNotifications.save()
        }

        res.json(users)

    }catch(error){
        res.status(404).send(error.message)
    }
}

module.exports = {
    postJob
}