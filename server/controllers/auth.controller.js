const User = require('../models/user.model')
const { Cv } = require('../models/cv.model')
const Company = require('../models/company.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// types
const USER = 'user'
const COMPANY = 'company'


const signup= async (req, res) =>{

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

const login = async (req, res) =>{
    const {email, password, type} = req.body

    try
   { 
        if(type == USER){

            const user = await User.findOne({email}).select("+password");

            if(!user) 
                throw "Invalid Credentials";

            const isMatch = bcrypt.compare(password, user.password)

            if(!isMatch)
                throw "Invalid Credentials";

            const token = jwt.sign({
                id: user._id,
                type: type
                }, 
                process.env.JWT_SECRET_KEY,{
                expiresIn: '1h'
            });

            return res.json({
                authorisation:{
                    token: token,
                    type: 'bearer',
                }})
        }
        else if(type == COMPANY){

            const company = await Company.findOne({email}).select("+password");

            if(!company) 
                throw "Invalid Credentials";

            const isMatch = bcrypt.compare(password, company.password)

            if(!isMatch)
                throw "Invalid Credentials";

            const token = jwt.sign({
                id: company._id,
                type: type
                },
                process.env.JWT_SECRET_KEY,{
                expiresIn: '1h'
            });
            
            return res.json({
                authorisation:{
                    token: token,
                    type: 'bearer',
                }})
        }
    }catch(error){
        res.status(404).send(error.message)
    } 
    
}

module.exports = {
    signup,
    login
}