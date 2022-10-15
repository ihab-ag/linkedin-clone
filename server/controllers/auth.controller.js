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

    if(type == USER){
        try{const user = new User()

        user.name = name
        user.email = email
        user.password = await bcrypt.hash(password,10)
        user.cv = new Cv

        await user.save()

        res.json(user)}
        catch(err){
            res.send(err)
        }
    }
    else
    res.status(401).send("test")
}

module.exports = {
    signup
}