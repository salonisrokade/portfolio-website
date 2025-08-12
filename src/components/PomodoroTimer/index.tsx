import styled from '@emotion/styled'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ToastMsgContainer from '../ToastMsg'
import { PrimaryButton, SecondaryButton } from '../Buttons'

export default function PomodoroTimer() {
  const [targetTime, setTargetTime] = useState<number>(1500)
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
      <Typography sx={{fontSize: '90px', fontWeight: 'bold'}} textAlign={'center'}>{formatTime(targetTime)}</Typography>
      <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
        <SecondaryButton size='small' onClick={handleResetTimer}>Reset</SecondaryButton>
        <PrimaryButton size='small' onClick={handlePauseTimer}>
          {hasRun ? pauseTimer? 'Resume' :'Pause' : 'Start' }
        </PrimaryButton>
      </Grid>
      <ToastMsgContainer/>
    </Box>
  )
}