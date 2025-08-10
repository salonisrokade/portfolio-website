import { Box, Checkbox, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addGoal, updateGoal } from './duck/goalsSlice'
import styled from '@emotion/styled'

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '0.5rem 1.3rem',
    borderRadius: '4px',
    color: '#f1f1f1',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '.3s ease',
    border: '2px solid #202023',
    '&.Mui-focused': {
      border: '2px solid #353538',
    },
  },
})
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
    <Box className="card">
      <p className="heading">Goals</p>
      <Box marginBottom={1}>
        <CustomTextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSubmit}
          fullWidth
          size="small"
          placeholder="Add a new goal"
        />
      </Box>
      <Box textAlign={'left'} minHeight={'120px'} maxHeight={'120px'} textOverflow={'clip'}>
        {
          goals.length > 0 ? 
          goals.map((goal, index) => {
            return (
              <div className="card highlight">
                <Checkbox
                  onClick={() => handleChecked(goal, index)}
                  size="small"
                  sx={{ color: '#f1f1f1' }}
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
          }) :
          <div className='card empty-container'>No goals added</div>
        }
        
      </Box>
    </Box>
  )
}
