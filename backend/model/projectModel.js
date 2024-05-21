const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  orgID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
  title: { type: String, required: true },
  problemStatementSolution: { type: String, required: true },
  description: { type: String, required: true },
  objectives: { type: String, required: true },
  researchArea: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  impactOutcomes: { type: String, required: true },
  programWebsite: { type: String },
  coordinators: [{ type: String }]
});

const project = new mongoose.model('Project', projectSchema); 
module.exports= project;  

/*
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
*/
