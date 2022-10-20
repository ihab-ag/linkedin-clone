
const companyMiddleware = (req, res, next) => {
    const TYPE = 'company'
    const type = req.type

    type === TYPE ? next() : res.status(401).send('unauthorized')
}

module.exports = companyMiddleware