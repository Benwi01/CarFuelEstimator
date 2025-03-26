import { useState } from 'react';
import axios from 'axios';
import MapComponent from './components/MapComponent';
import RouteControls from './components/RouteControls';
import FuelCalculator from './components/FuelCalculator';
import ResultsPanel from './components/ResultsPanel';
import './App.css';

function App() {
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);
  const [results, setResults] = useState(null);

  const calculateRoute = async ({ start, end, waypoints }) => {
    try {
      // Mock implementation
      const mockCoords = [
        [55.6761, 12.5683], // Copenhagen
        [52.5200, 13.4050], // Berlin
        [48.8566, 2.3522],  // Paris
        [45.4642, 9.1900],  // Milan
        [41.9028, 12.4964]  // Rome
      ];
      
      setRouteCoordinates(mockCoords);
      setDistance(2200 * 1000);
      setResults(null);
    } catch (error) {
      console.error('Error calculating route:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Car Fuel Cost Estimator</h1>
      
      <div className="content-container">
        <MapComponent routeCoordinates={routeCoordinates} />
        <RouteControls onRouteCalculate={calculateRoute} />
        {distance > 0 && (
          <FuelCalculator 
            distance={distance} 
            onCalculate={setResults} 
          />
        )}
        {results && <ResultsPanel results={results} />}
      </div>
    </div>
  );
}

export default App;