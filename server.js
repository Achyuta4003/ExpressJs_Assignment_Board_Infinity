const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const PORT = 8080;
const studentRoute = require('./routes/route')

//body parser setup
app.use(bodyParser.json())

//student route
app.use('/student',studentRoute)

//handle bad request
app.use((req, res)=>{
    res.status(404).json({
        erroe:"Bad request"
    })
})

//server listening
app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))