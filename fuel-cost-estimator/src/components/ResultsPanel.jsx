import { Box, Typography, Paper } from '@mui/material';

function ResultsPanel({ results }) {
  if (!results) return null;

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Trip Summary
      </Typography>
      <Typography>Distance: {results.distance} km</Typography>
      <Typography>Estimated Fuel Cost: €{results.cost}</Typography>
      <Typography>Fuel Type: {results.fuelType}</Typography>
      <Typography>Consumption: {results.consumption} {results.fuelType === 'electric' ? 'kWh/100km' : 'L/100km'}</Typography>
      <Typography>Fuel Price: €{results.price} per {results.fuelType === 'electric' ? 'kWh' : 'liter'}</Typography>
    </Paper>
  );
}

export default ResultsPanel;