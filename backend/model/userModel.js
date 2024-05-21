const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    gender: { type: String },
    role: { type: String },
    membership_id: { type: String }, // Like IEEE, etc.
    organization: {
      orgName: { type: String, required: true },
      missionStatement: { type: String, required: true },
      website: { type: String },
      overview: { type: String },
    }
});

const UserInfo = new mongoose.model('UserProfile', userProfileSchema);  
module.exports= UserInfo;  
