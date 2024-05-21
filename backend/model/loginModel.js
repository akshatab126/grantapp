const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

const User = new mongoose.model("User", newSchema);  
module.exports= User;  
