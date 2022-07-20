const router = require('express').Router();
const fs = require('fs');

//set the json file path
const jsonDataPath = './data.json'


//set router for get studentList
router.get('/studentList',(req,res)=>{
    fs.readFile(jsonDataPath, 'utf-8',(err, data)=>{
        if(err){
            throw err;
        }
        res.status(200).json(JSON.parse(data))
    })
})

module.exports = router;
