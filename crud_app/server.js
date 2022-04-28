const express = require('express');
const dotenv = require("dotenv")
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080


//log requests
app.use(morgan("tiny"));

//mongoDB connection
connectDB();


//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))




app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log("Server is running on http://localhost: $(9001)")})


app.post("/regu", function (req, res) {
    var fname = req.body.fullname;
    var email = req.body.email;
    var username= req.body.username;
    // var Phone = req.body.phone;
    var password = req.body.passkey;
    var medical = req.body.med;
    var data = {
      "name": fname,
      "email": email,
      // "phone": Phone,
      // "medical":medical,
      "username":username
      // "password":password
    };
  
    db.collection("s").insertOne(data, function (err, collection) {
      if (err) throw err;
      console.log("Record inserted Successfully");
    });
  
    return res.redirect("home.html");
  });
  
  //doctor registration
  app.post("/regd", function (req, res) {
    var fname = req.body.fullname;
    var email = req.body.email;
    var username= req.body.username;
    var phone = req.body.contactno;
    var password = req.body.passkey;
    var file = req.body.file;
    var data = {
      "fname": fname,
      "email": email,
      "phone": phone,
      "file":file,
      "username":username,
      "password":password
    };
  
    db.collection("doctorreg").insertOne(data, function (err, collection) {
      if (err) throw err;
      console.log("Record inserted Successfully");
    });
  
    return res.redirect("/public/home.html");
  });
