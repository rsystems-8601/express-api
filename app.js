// http://localhost:7001/users/api/mock/2
const express = require('express');
var cors = require('cors')
const http = require('http');
const bodyParser = require("body-parser");
// node simple
// const app = http.createServer(function(req, res){

// });
const app = express();
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({extended: false}));
//app.use(express.urlencoded({extended: false}));

const allowedOrigins = ['localhost', '15.207.254.188'];
app.use(cors({
  origin: function(origin, callback){
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));

app.use((req, res, next)=>{
  console.log("first");
  res.locals.city="noida";
  next();
  
});

app.use((req, res, next)=>{
  console.log(res.locals.city, "city")
  next();
});

app.use('/avinash',(req, res, next)=>{
  // console.log(req.body);
  res.send("<h1>this is avinash  page</h1>");
  // res.redirect('/')
})

const adminRoutes = require('./routes/admin');
app.use('/users', adminRoutes);

app.use('/kav',(req, res, next)=>{
  // console.log(req.body);
  res.send("this is kav page");
  // res.redirect('/')
})
app.use('/index',(req, res, next)=>{
  res.send("this is home page");
})

app.use((req, res)=>{
  res.status(404).send("<h1>page not found</h1>");
})

app.listen(7001, ()=>{
  //console.log("listen port")
})