const User = require('../models/user.model')

const getUser = async (req, res) => {
    const id = req.id

    const user = await User.findById(id)

    res.json(user)
}

module.exports = {
    getUser
}