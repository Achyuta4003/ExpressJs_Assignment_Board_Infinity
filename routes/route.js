const router = require('express').Router();
const fs = require('fs');

const jsonDataPath = './data.json'

router.get('/studentList',(req,res)=>{
    fs.readFile(jsonDataPath, 'utf-8',(err, data)=>{
        if(err){
            throw err;
        }
        res.status(200).send(data)
    })
})

module.exports = router
