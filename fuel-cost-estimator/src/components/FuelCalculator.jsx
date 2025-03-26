import { useState } from 'react';
import { 
  TextField, 
  MenuItem, 
  Box, 
  Typography,
  Button
} from '@mui/material';

const fuelTypes = [
  { value: 'gasoline', label: 'Gasoline' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'electric', label: 'Electric' },
];

function FuelCalculator({ distance, onCalculate }) {
  const [fuelType, setFuelType] = useState('gasoline');
  const [consumption, setConsumption] = useState(7); // liters/100km
  const [price, setPrice] = useState(1.8); // price per liter

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert distance from meters to kilometers first
    const distanceKm = distance / 1000;
    // Then calculate cost
    const cost = (distanceKm / 100) * consumption * price;
    onCalculate({
      fuelType,
      consumption,
      price,
      cost: cost.toFixed(2),
      distance: distanceKm.toFixed(1)
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Fuel Information
      </Typography>
      <TextField
        select
        label="Fuel Type"
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
        fullWidth
        margin="normal"
      >
        {fuelTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label={`Consumption (${fuelType === 'electric' ? 'kWh/100km' : 'L/100km'})`}
        type="number"
        value={consumption}
        onChange={(e) => setConsumption(parseFloat(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label={`Price (per ${fuelType === 'electric' ? 'kWh' : 'liter'})`}
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        fullWidth
        margin="normal"
        step="0.01"
      />
      {distance > 0 && (
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Calculate Cost
        </Button>
      )}
    </Box>
  );
}

export default FuelCalculator;