var express = require('express');
var app = express();
const dbConnect = require("./database/dbconnect");
const bodyParser = require('body-parser');

const path = require("path");
const cors = require("cors");

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json());


dbConnect();


const authRoutes = require('./routes/authRoutes');


app.use('/auth', authRoutes);



app.listen(3000, function () {
  console.log('Listening on port 3000!');
});