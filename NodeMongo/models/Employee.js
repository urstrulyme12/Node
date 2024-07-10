const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  //id,name,email,phone,city
  // id:{
  //     type:'integer',
  //     re
  // },
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  phone: {
    type: Number,
    default: false,
  },
  city: {
    type: "string",
  },
});
module.exports = mongoose.model("Employee", employeeSchema);
