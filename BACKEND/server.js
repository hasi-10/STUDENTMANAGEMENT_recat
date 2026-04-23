const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;   //server ek connect wela port ek define krnwa methna 

app.use(cors());
app.use(bodyParser.json());

//const URL = process.env.MONGODB_URL;  // url eka metnt gatta 
//mongoose.connect(URL);

const URL = process.env.MONGODB_URL;  // url eka metnt gatta 
mongoose.connect(URL, {
  
  tls: true,
  tlsAllowInvalidCertificates: true,
  serverSelectionTimeoutMS: 5000,
});

const connection = mongoose.connection;
connection.once("open", () => {  // hadagttu connection ek open kr gnnw
    console.log("Mongodb connection success!");
})


const studentRouter = require("./routes/student.js");

app.use("/student",studentRouter);


app.listen(PORT, () => {
console.log(`server is up and running on port number: ${PORT}`);
}) 