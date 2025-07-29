import { Box, Checkbox, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addGoal, updateGoal } from './duck/goalsSlice'

export default function Goals() {
  const dispatch = useDispatch()
  const goals = useSelector((state: RootState) => state.goals.goalsList)
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(addGoal({ title: inputValue, checked: false }))
      setInputValue('')
    }
  }
  const handleChecked = (goal: any, index: number) => {
    goals.map((goal, i) => {
      return i === index
        ? dispatch(
            updateGoal({
              data: { ...goal, checked: !goal.checked },
              index: i,
            })
          )
        : goal
    })
  }
  return (
    <Box border={1} borderRadius={2} padding={2}>
      <Typography textAlign={'left'} marginBottom={2} sx={{fontSize: '18px', fontWeight: 'bold'}}>
        Goals
      </Typography>
      <Box marginBottom={1}>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSubmit}
        fullWidth
        size="small"
        placeholder="Add a new goal"
      /></Box>
      <Box textAlign={'left'}>
        {goals.map((goal, index) => {
          return (
            <div>
              <Checkbox
                onClick={() => handleChecked(goal, index)}
                size="small"
              />
              <span
                style={{
                  textDecorationLine: goal.checked ? 'line-through' : 'none',
                }}
              >
                {goal.title}
              </span>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}
