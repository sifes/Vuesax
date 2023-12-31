import React from 'react'
import { Box, Typography, FormControlLabel, Rating, Radio, RadioGroup, Stack } from '@mui/material'
import { RatingProps } from 'src/utils/types'
import * as styles from '../Filters/ui'

export const RatingFilter: React.FC<RatingProps> = ({
  activeRating,
  setActiveRating,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveRating(+e.target.value)
  }
  return (
    <Box>
      <Typography variant='h6'>Rating</Typography>
      <RadioGroup sx={styles.FormGroupStyles}>
        {[5, 4, 3, 2, 1].map(rating => (
          <FormControlLabel
            key={rating}
            control={
              <Radio
                value={rating}
                checked={activeRating === rating}
                onChange={onChange}
              />
            }
            label={
              <Stack alignItems='center' flexDirection={'row'} gap={1}>
                <Rating name='read-only' value={+rating} readOnly />
                <Typography variant='caption' sx={styles.RatingTextStyles}>
                  {+rating - 1}&nbsp;+
                </Typography>
              </Stack>
            }
          />
        ))}
      </RadioGroup>
    </Box>
  )
}
