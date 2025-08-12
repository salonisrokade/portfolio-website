import { Grid } from '@mui/material'
import EnterAnimation from '../components/EnterAnimation'
import Goals from '../components/goals'
import PomodoroTimer from '../components/PomodoroTimer'

const Playground = () => {
  return (
    <div id="playground" className="section">
      <div className="wrapper">
        <EnterAnimation>
          <p className="section-title">Playground</p>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Goals />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <PomodoroTimer />
            </Grid>
          </Grid>
        </EnterAnimation>
      </div>
    </div>
  )
}

export default Playground