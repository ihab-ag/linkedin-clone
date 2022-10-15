
const userMiddleware = (req, res, next) => {
    const TYPE = 'user'
    const type = req.type

    type === TYPE ? next() : res.status(401).send('unauthorized')
}

module.exports = userMiddleware