const User = require('../models/user.model')

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

module.exports = {
    getUser,
    updateUser
}