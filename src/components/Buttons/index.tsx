import styled from "@emotion/styled"
import { Button } from "@mui/material"

const PrimaryButton = styled(Button)({
  padding: '.3rem .5rem',
  borderRadius: '4px',
  color: '#f1f1f1',
  fontSize: '14px',
//   fontWeight: 'bold',
  cursor: 'pointer',
  transition: '.3s ease',
  backgroundColor: '#202023',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#262629'
  }
})
// const SecondaryButton = styled(Button)({
//   padding: '.3rem .5rem',
//   borderRadius: '4px',
//   color: '#f1f1f1',
//   fontSize: '1rem',
//   cursor: 'pointer',
//   transition: '.3s ease',
//   border:'1px solid #5c5c61',
//   textTransform: 'capitalize',
//   '&:hover': {
//     backgroundColor: '#353538',
//     borderColor: '#5c5c61',
//   }
// })
const SecondaryButton = styled(Button)({
  padding: '.3rem .5rem',
  borderRadius: '4px',
  color: '#f1f1f1',
  fontSize: '14px',
//   fontWeight: 'bold',
  cursor: 'pointer',
  transition: '.3s ease',
  border:'1px solid #5c5c61',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#353538',
    borderColor: '#5c5c61',
  }
})
export { PrimaryButton, SecondaryButton }