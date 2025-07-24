import { Box, Grid, ToggleButton } from '@mui/material';
import './App.css';
import Goals from './components/goals/goalsList';
import PomodoroTimer from './components/pomodoroTimer';

function App() {
  return (
    <div className="App">
      Dev Dash
      <Grid container spacing={2}>
        <Grid size={6}><Goals/></Grid>
        <Grid size={6}><PomodoroTimer/></Grid>
      </Grid>
    </div>
  );
}

export default App;
