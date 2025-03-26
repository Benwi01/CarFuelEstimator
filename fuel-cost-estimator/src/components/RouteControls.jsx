import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function RouteControls({ onRouteCalculate }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [waypoints, setWaypoints] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRouteCalculate({ start, end, waypoints: waypoints.filter(wp => wp) });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Start Location"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Destination"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        fullWidth
        margin="normal"
      />
      {waypoints.map((wp, i) => (
        <TextField
          key={i}
          label={`Waypoint ${i + 1}`}
          value={wp}
          onChange={(e) => {
            const newWaypoints = [...waypoints];
            newWaypoints[i] = e.target.value;
            setWaypoints(newWaypoints);
          }}
          fullWidth
          margin="normal"
        />
      ))}
      <Button 
        type="button" 
        onClick={() => setWaypoints([...waypoints, ''])}
        sx={{ mt: 1 }}
      >
        Add Waypoint
      </Button>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Calculate Route
      </Button>
    </Box>
  );
}

export default RouteControls;