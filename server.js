const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const studentRouter = require('./routes/route')

//router
app.use('/student', studentRouter);



app.use((req, res) => {
    res.status(404).json({
        error: "bad request"
    })
})
app.listen(PORT, () => console.log(`server running on port ${PORT}`))