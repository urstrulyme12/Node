const express = require('express');
const helmet = require('helmet');


const app = express();

const port=5500;
app.use((req,res,next)=>{
        if(10<20){
            next()
        }else{
            console.log('U are not allowed')
        }
})

const homeCheck = (req, res, next)=>{
    if(6<5){
        next();
    }else{
        console.log('U are not allowed')
    }
}
const aboutCheck = (req, res, next)=>{
    if(3<6){
        next();
    }else{
        console.log('U are not allowed')
    }
}

const userCheck = (req, res, next)=>{
    if(5<6){
        next();
    }
}

app.get('/home',homeCheck,(req,res)=>{
    res.send("This is Home page")
})
app.get('/about',aboutCheck,(req,res)=>{
    res.send("This is About page")
})
app.get('/user/:121',userCheck,(req,res)=>{
    res.send("This is User Account")
})
app.listen(port,() => {
    console.log('Server started listening on port');
});

