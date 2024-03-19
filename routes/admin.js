const path = require("path");
const express = require("express");
const users = require("../MOCK_DATA.json");
const router = express.Router();
const bodyParser = require("body-parser");
const { genToken, verifyToken } = require("./jwt");
//router.use(express.urlencoded({extended: true}));
// router.use(bodyParser.json({extended: true}));
//  /users
router.get("/p", (req, res) => {
  //res.send('<h1>This is home page </h1>')
  res.sendFile(path.join(__dirname, "admin.html"));
});
// /users/api/mock
router.get("/api/mock", (req, res) => {
  return res.json(users);
  //res.send('<h1>This is home page </h1>')
});

router.post("/api/getLoginToken", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    const jwtToken = genToken(req.body);
    // const jwtToken= 'eee';
    // const isverfytoken = verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6IjIyMiIsInN1Ym1pdCI6bnVsbCwiaWF0IjoxNzA4NjkwNDEzLCJleHAiOjE3MDg2OTA0MTN9.n-RizTHHgE2nulvX8Xm28-fXPYWLZa-83y5wJbnCPgI')
    // console.log(isverfytoken['err'], "----is");
    
    return res.json({ token: 22222, jwtToken });
  }
});

// /users/api/mock/:id
router.get("/api/mock/:id", (req, res) => {
  const id = Number(req.params.id);
  const currentUser = users.find((user) => user.id === id);
  return res.json(currentUser);
  //res.send('<h1>This is home page </h1>')
});

router.put("/api/mock/:id", (req, res) => {
  return res.json({ status: "update pending" });
});

router.delete("/api/mock/:id", (req, res) => {
  return res.json({ status: "delete pending" });
});

module.exports = router;
