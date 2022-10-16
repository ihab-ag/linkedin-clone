const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./config/db.config')

const app = express();

app.use(express.json());
app.use(cors())

const authRouter = require('./routes/auth.routes')
app.use('/auth', authRouter)

const userRouter = require('./routes/user.routes')
app.use('/user', userRouter)

const companyRouter = require('./routes/company.routes')
app.use('/company', companyRouter)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})