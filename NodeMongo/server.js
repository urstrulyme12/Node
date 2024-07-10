const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const employeeRoutes = require('./Routes/employeeRoutes');
const userRoutes = require('./Routes/userRoutes');

const app = express();
const port = process.env.PORT || 5000

dotEnv.config();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDB  Connected');
})
.catch(err =>{
    console.log(`Error connecting to MongoDB: ${err}`);
});

//register routes
app.use('/employees',employeeRoutes)
app.use('/users',userRoutes);

app.listen(port,()=>{
console.log(`server started at ${port}`);
});