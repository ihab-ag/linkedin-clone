const User = require('../models/user.model')
const { Cv } = require('../models/cv.model')
const Company = require('../models/company.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup= async (req,res) =>{
    // types
    const USER = 'user'
    const COMPANY = 'company'

    const { name, email, password, type} = req.body

    try{

        if(password.length<6)
            throw 'password too short'

            if(type == USER){
            const user = new User()

            user.name = name
            user.email = email
            user.password = await bcrypt.hash(password,10)
            user.cv = new Cv

            await user.save()

            res.json(user)
        }
        else if(type == COMPANY){
            const company = new Company()

            company.name = name
            company.email = email
            company.password = await bcrypt.hash(password,10)
            company.jobs = []

            await company.save()

            res.json(company)
        }
        else
        throw 'invalid user type'
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = {
    signup
}