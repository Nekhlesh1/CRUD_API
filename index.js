const express = require('express')
require('./db.js')

const app = express()
const PORT = 8000

app.use(express.json())

app.use('/user',require('./routes/index.js'))

app.listen(PORT, (err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log(`listening to port ${PORT}`)
})