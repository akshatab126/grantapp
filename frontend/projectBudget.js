const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  projectID: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  totalBudget: { type: Number, required: true },
  fundingRequested: { type: Number, required: true },
  expensesBreakdown: { type: [String] }, 
  justificationForFunding: { type: String },
  previousGrantFunding: { type: [String] }, 
  publicationsResearchOutputs: { type: [String] }, //publications
  awardsRecognitions: { type: [String] } //awards or recognitions
});

module.exports = mongoose.model('Budget', budgetSchema);
