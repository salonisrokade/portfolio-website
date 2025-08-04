import * as React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
import { Typography } from '@mui/material'

export interface TimelineData {
  name: string;
  content: string;
}
interface TimelineListProps {
  data: TimelineData[]; // Array of User objects
}
const BasicTimeline: React.FC<TimelineListProps> =({data}) => {
  return (
    <Timeline>
        { data.map((item) => {
            return (
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>{item.name}</Typography>
                        <Typography sx={{fontSize: '1rem'}}>{item.content}</Typography>
                    </TimelineContent>
                </TimelineItem>

            )
        })}
    </Timeline>
  )
}
export default BasicTimeline