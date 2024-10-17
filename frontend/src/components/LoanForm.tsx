import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoanForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: 0,
    duration: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/loans', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Apply for a Loan</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Loan Amount"
          variant="outlined"
          name="amount"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Duration (Months)"
          variant="outlined"
          name="duration"
          type="number"
          onChange={handleChange}
          required
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoanForm;
