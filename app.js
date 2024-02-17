// http://localhost:7001/users/api/mock/2
const express = require('express');
const http = require('http');
const bodyParser = require("body-parser");
// node simple
// const app = http.createServer(function(req, res){

// });
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
  console.log("first");
  next();
});

app.use((req, res, next)=>{
  console.log("second");
  next();
});

const adminRoutes = require('./routes/admin');
app.use('/users', adminRoutes);

app.use('/kav',(req, res, next)=>{
  console.log(req.body);
  res.send("this is kav page");
  res.redirect('/')
})
app.use('/',(req, res, next)=>{
  res.send("this is home page");
})

app.use((req, res)=>{
  res.status(404).send("<h1>page not found</h1>");
})

app.listen(7001, ()=>{
  console.log("listen port")
})