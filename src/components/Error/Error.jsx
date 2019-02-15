import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Error = ({ error }) => (
  <Grid container direction="column">
    <Grid item>
      <Typography variant="subtitle1">Error</Typography>
    </Grid>
    <Grid item>
      <Grid container>
        <Typography mode="paragraph" color="secondary">
          <pre>{JSON.stringify(error, undefined, 2)}</pre>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
)

export default Error
