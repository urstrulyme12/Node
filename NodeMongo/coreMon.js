const express = require("express");
const dotEnv = require("dotenv");
const { MongoClient } = require("mongodb");

const app = express();
dotEnv.config();
MongoClient.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MONGODB Connected Successfully");
  })
  .catch((err) => {
    console.log("Error:" + err);
  });

  
const port = 5000;
// console.log(process.env);
app.listen(port, () => {
  console.log(`server started and running on port ${port}`);
});
