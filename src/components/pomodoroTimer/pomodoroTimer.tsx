import styled from '@emotion/styled'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ToastMsgContainer from '../ToastMsg/toastContainer'

const PrimaryButton = styled(Button)({
  padding: '0.5rem 1.3rem',
  borderRadius: '4px',
  color: '#f1f1f1',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '.3s ease',
  backgroundColor: '#202023',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: '#262629'
  }
})
const SecondaryButton = styled(Button)({
  padding: '0.5rem 1.3rem',
  borderRadius: '4px',
  color: '#f1f1f1',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '.3s ease',
  border:'1px solid #202023',
  textTransform: 'capitalize',
  '&:hover': {
    borderColor: '#353538',
  }
})
export default function PomodoroTimer() {
  const [targetTime, setTargetTime] = useState<number>(5)
  const [pauseTimer, setPauseTimer] = useState<boolean>(false)
  const [hasRun, setHasRun] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [isTimerCompleted, setIsTimerCompleted] = useState<boolean>(false)

  useEffect(() => {
    if (!pauseTimer && hasRun && targetTime > 0) {
      intervalRef.current = setInterval(() => {
        setTargetTime((prev) => {
          if(prev <= 1){
            clearInterval(intervalRef.current!);
            handleResetTimer()
            if (!isTimerCompleted) {
              toast("⏰ Pomodoro complete! Take a break.")
              setIsTimerCompleted(true)
            }
            return 0
          }
          return prev - 1
        })
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
    setTargetTime(targetTime)
    setHasRun(false)
    setPauseTimer(false)
    setIsTimerCompleted(false)
  }
  const handlePauseTimer = () => {
    hasRun ? setPauseTimer((prev) => !prev) : setHasRun(true)
  }
 
  return (
    <Box className='card'>
      <p className='heading'>Pomodoro Timer</p>
      <Typography sx={{fontSize: '85px', fontWeight: 'bold'}} textAlign={'center'}>{formatTime(targetTime)}</Typography>
      <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
        <SecondaryButton size='small' onClick={handleResetTimer}>reset</SecondaryButton>
        <PrimaryButton size='small' onClick={handlePauseTimer}>
          {hasRun ? pauseTimer? 'resume' :'pause' : 'start' }
        </PrimaryButton>
      </Grid>
      <ToastMsgContainer/>
    </Box>
  )
}