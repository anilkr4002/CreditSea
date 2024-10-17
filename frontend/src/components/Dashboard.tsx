import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    const response = await fetch('http://localhost:5000/api/loans');
    const data = await response.json();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <Container maxWidth="md">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/loan-form">Apply for a Loan</Button>
          <Button color="inherit" component={Link} to="/loan-stats">Loan Stats</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" gutterBottom>Loan Applications</Typography>
      <Paper elevation={3}>
        <List>
          {
          applications.map((app: any) => (
            <ListItem key={app._id} divider>
              <ListItemText
                primary={`${app.name} - $${app.amount}`}
                secondary={`Duration: ${app.duration} months`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Dashboard;
