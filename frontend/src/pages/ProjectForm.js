import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './projectForm.css'; // Import CSS file for styling

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectBudget: '',
    projectTimeline: '',
    projectTeam: '',
    projectImpact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      projectName: '',
      projectDescription: '',
      projectBudget: '',
      projectTimeline: '',
      projectTeam: '',
      projectImpact: ''
    });
  };

  return (
    <div className="project-form" style={{ paddingTop: '20px' }}>
      <div>
        <h1>Project Form</h1><br></br>
          <form onSubmit={handleSubmit}>
          <div className="form-section">
            <Typography variant="h6" gutterBottom>
              Enter Project Details
            </Typography>
            <TextField
              label="Project Name"
              variant="outlined"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Project Description"
              variant="outlined"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
            />
            <TextField
              label="Project Budget"
              variant="outlined"
              name="projectBudget"
              value={formData.projectBudget}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Project Timeline"
              variant="outlined"
              name="projectTimeline"
              value={formData.projectTimeline}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
          </div>
          <div className="form-section">
            <Typography variant="h6" gutterBottom>
              Team Details
            </Typography>
            <TextField
              label="Project Team"
              variant="outlined"
              name="projectTeam"
              value={formData.projectTeam}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Project Impact"
              variant="outlined"
              name="projectImpact"
              value={formData.projectImpact}
              onChange={handleChange}
              fullWidth
              required
              multiline
              rows={4}
              margin="normal"
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
