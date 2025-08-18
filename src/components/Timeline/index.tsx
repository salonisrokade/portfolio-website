import * as React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from '@mui/lab'
import { Grid, Typography } from '@mui/material'
export interface TimelineData {
  name: string
  position: string
  content: string
  year: string
  imageUrl: string
}
interface TimelineListProps {
  data: TimelineData[]
}
const BasicTimeline = ({ data }: TimelineListProps) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {data.map((item) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent>{item.year}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#ea4c89' }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{marginBottom: '24px'}}>
              <Grid container spacing={1} alignItems={'flex-start'}>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    {item.name} <span className='position'>- {item.position}</span>
                  </Typography>
                  <Typography sx={{ fontSize: '1rem' }}>
                    {item.content}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 3 }} borderRadius={'4px'}>
                  <img
                    src={`${process.env.PUBLIC_URL}${item.imageUrl}`}
                    alt={item.name}
                    className='rounded-border'
                  />
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
export default BasicTimeline
