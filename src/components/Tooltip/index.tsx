import { Tooltip } from '@mui/material'
import { ReactElement } from 'react'

interface TooltipProps {
  title: string
  children: ReactElement
}
const CustomTooltip = ({ children, title }: TooltipProps) => {
  return (
    <Tooltip
     placement='top' title={title}>
      {children}
    </Tooltip>
  )
}
export default CustomTooltip
