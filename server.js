const express = require('express')
const cors = require('cors')

const userRoute = require('./route/userRoute')

const {attachDb} = require('./middleware')

const port = 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(attachDb)

app.use('/api/auth', userRoute)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})