const User = require('../models/User');

const createUser = async(req,res)=>{
try{
    const {name,age,mobile,city,section} = req.body;

    const user = new User({
        name,
        age,
        mobile,
        city,
        section
    })
    await user.save();
    res.status(201).json(user)
}
catch(err){res.status(500).json({message:"Server Error"}) }
}

module.exports = {createUser}