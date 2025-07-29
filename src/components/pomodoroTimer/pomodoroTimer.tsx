import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export default function PomodoroTimer() {
  const [targetTime, setTargetTime] = useState<number>(1500)
  const [pauseTimer, setPauseTimer] = useState<boolean>(false)
  const [hasRun, setHasRun] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!pauseTimer && hasRun) {
      intervalRef.current = setInterval(() => {
        setTargetTime((prev) => prev - 1)
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [hasRun, pauseTimer])

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')}:${Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0')}`
  }
  const handleResetTimer = () => {
    setTargetTime(1500)
    setHasRun(false)
    setPauseTimer(false)
  }
  const handlePauseTimer = () => {
    hasRun ? setPauseTimer((prev) => !prev) : setHasRun(true)
  }
 
  return (
    <Box border={1} borderRadius={2} padding={2}>
      <Typography sx={{fontSize: '18px', fontWeight: 'bold'}} textAlign={'left'} marginBottom={2}>Pomodoro Timer</Typography>
      <Typography sx={{fontSize: '85px', fontWeight: 'bold'}}>{formatTime(targetTime)}</Typography>
      <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
        <Button variant={'contained'} size='small' onClick={handleResetTimer}>reset</Button>
        <Button variant={'contained'} size='small' onClick={handlePauseTimer}>
          {hasRun ? pauseTimer? 'resume' :'pause' : 'start' }
        </Button>

      </Grid>
    </Box>
  )
}