const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const studentRouter = require('./routes/route')

//router
app.use('/student', studentRouter);


//handle bad request
app.use((req, res) => {
    res.status(404).json({
        error: "bad request"
    })
})

//server listening
app.listen(PORT, () => console.log(`server running on port ${PORT}`))

//heroku deployment link : https://boardinfinity-assignment-expre.herokuapp.com/student/studentList