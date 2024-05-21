const mongoose = require('mongoose');

const grantPreferencesSchema = new mongoose.Schema({
  projectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, 
  grantID: { type: String, required: true }, 
  name: { type: String, required: true }, 
  description: { type: String }, 
  grantType: { type: String, required: true }, 
  fundingAmount: { type: Number }, // Amount of funding requested for this grant
  fundingSource: { type: String }, // Source of funding for this grant
  applicationDeadline: { type: Date }, 
  evaluationCriteria: { type: String }, // Criteria used to evaluate grant applications
});

const grantPref = new mongoose.model('GrantPref', grantPreferencesSchema);
module.exports= grantPref;  