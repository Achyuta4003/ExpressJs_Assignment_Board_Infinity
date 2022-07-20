const router = require('express').Router();
const fs = require('fs')

const jsonDataPath = './studentData.json'

//helper function : get data from json file
const getJsonData = () => {
    const jsonData = fs.readFileSync(jsonDataPath)
    return JSON.parse(jsonData)
}

//helper function : save data in json file
const saveJsonData = (data) => {
    const stringifydata = JSON.stringify(data)
    fs.writeFileSync(jsonDataPath, stringifydata)
}

//get Json data 
router.get('/getDetails', (req, res) => {
    fs.readFile(jsonDataPath, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        res.status(200).json(JSON.parse(data))
    })
})

//post Json data
router.post('/add', (req, res) => {
    const studentData = getJsonData();
    const newId = Math.floor(100000 + Math.random() * 900000)
    studentData[newId] = req.body;
    saveJsonData(studentData)
    res.status(200).json({
        "result": "Success"
    })
})

module.exports = router;
