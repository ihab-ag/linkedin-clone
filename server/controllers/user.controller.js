const User = require('../models/user.model')
const Following = require('../models/following.model')
const Company = require('../models/company.model')
const Job =require('../models/job.model')
const Notifications =require('../models/notifications.model')

const getUser = async (req, res) => {
    try{
        const id = req.id

        const user = await User.findById(id)

        res.json(user)
    }catch(error){
        res.status(404).send(error.message)
    }
}

const updateUser = async (req, res) => {
    try{
        const id = req.id
        const {name, bio, experience} = req.body

        const user = await User.findById(id)

        user.name = name
        user.cv.bio = bio
        user.cv.experience = experience == null ? [] : experience

        await user.save()

        const userNew = await User.findById(id)
        res.json(user)
    }catch(error){
        res.status(404).send(error.message)
    }
}

const followUnfollowCompany = async (req, res) => {
    const id = req.id
    const { company_id } = req.body

    try{
        let userFollowing = await Following.findOne({'user' : id,});

        let company = await Company.findById(company_id);

        if(!userFollowing){

            userFollowing = new Following
            userFollowing.user = id
            userFollowing.companies = [company]

            await userFollowing.save()
            return res.json(userFollowing)
        }
        
        const companyIndex = userFollowing.companies.findIndex((item) => item == company.id)
        
        if(companyIndex === -1)

            userFollowing.companies = [...userFollowing.companies, company_id]

        else{

            userFollowing.companies.splice(companyIndex, 1)

        }

        await userFollowing.save()

        res.json(userFollowing)
    }catch(error){
        res.status(400).send(error.message)
    }

}

const getCompany = async (req,res) =>{

    company_id = req.params.company_id

    try{
        const company = await Company.findById(company_id)

        if(!company)
        return res.status(404).send('company not found')

        res.json(company)
    }catch(error){
        res.status(404).send(error.message)
    }
}

const getNotifications = async (req, res) =>{

    const id = req.id

    const notifications = await Notifications.find({user : id}).populate('jobs','-applicants')

    res.json(notifications)
}

const searchJobs = async (req, res) => {

    const { search } = req.query

    const jobs = await Job.find({desc : { $regex: search }})

    res.json(jobs)
}
module.exports = {
    getUser,
    updateUser,
    followUnfollowCompany,
    getCompany,
    getNotifications,
    searchJobs
}