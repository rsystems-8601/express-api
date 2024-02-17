const path = require("path");
const express = require("express");
const users = require("../MOCK_DATA.json");
const router = express.Router();
//  /users
router.get('/',(req, res)=>{
    //res.send('<h1>This is home page </h1>')
    res.sendFile(path.join(__dirname,'admin.html'));
})
// /users/api/mock
router.get('/api/mock',(req, res)=>{
    return res.json(users);
    //res.send('<h1>This is home page </h1>')
})

// /users/api/mock/:id
router.get('/api/mock/:id',(req, res)=>{
    const id =  Number(req.params.id);
    const currentUser = users.find((user) => user.id === id);
    return res.json(currentUser);
    //res.send('<h1>This is home page </h1>')
})

router.put('/api/mock/:id',(req, res)=>{
    return res.json({status: "update pending"});
})

router.delete('/api/mock/:id',(req, res)=>{
    return res.json({status: "delete pending"});
})

module.exports = router;