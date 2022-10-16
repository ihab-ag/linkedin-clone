const User = require('../models/user.model')
const Following = require('../models/following.model')
const Company = require('../models/company.model')

const getUser = async (req, res) => {
    const id = req.id

    const user = await User.findById(id)

    res.json(user)
}

const updateUser = async (req, res) => {
    const id = req.id
    const {name, bio, experience} = req.body

    const user = await User.findById(id)

    user.name = name
    user.cv.bio = bio
    user.cv.experience = experience == null ? [] : experience

    await user.save()

    const userNew = await User.findById(id)
    res.json(user)
    
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
        res.status(400).send(error)
    }

}

module.exports = {
    getUser,
    updateUser,
    followUnfollowCompany
}