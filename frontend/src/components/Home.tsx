import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/loan-form">Apply for a Loan</Button>
          <Button color="inherit" component={Link} to="/loan-stats">Loan Stats</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h2" gutterBottom>
        Welcome to CreditSea Loan Manager
      </Typography>
      <Typography variant="h6">
        Manage your loans efficiently using our platform.
      </Typography>
    </Container>
  );
};

export default Home;
