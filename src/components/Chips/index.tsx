import { Chip } from '@mui/material'

interface PillProps {
  label: string
}
const Pill = ({ label }: PillProps) => {
  return (
    <Chip
      sx={{
        marginRight: '8px',
        '& .MuiChip-label': {
          padding: '2px 10px',
          borderRadius: '24px',
          color: '#f1f1f1',
          backgroundColor: '#202023',
          fontWeight: '500'
        },
      }}
      label={label}
    />
  )
}
export default Pill
