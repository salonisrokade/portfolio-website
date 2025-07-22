import { Box, Checkbox, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export default function Goals() {
  const [goals, setGoalsList] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const handleSubmit = (e: any) => {
    if (e.key === 'Enter') {
      console.log('goal entered', inputValue)
      setGoalsList((prev: string[]) => [...goals, inputValue])
      setInputValue('')
    }
  }
  return (
    <Box>
      <Typography>Goals</Typography>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSubmit}
        fullWidth
        size="small"
        placeholder="Add a new goal"
      />
      <Box textAlign={'left'}>
        {goals.map((goal) => {
          return (
            <div>
              <Checkbox size="small" />
              <span>{goal}</span>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}
