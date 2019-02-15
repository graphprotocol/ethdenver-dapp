import React from 'react'
import { Grid, Typography, createStyles, withStyles } from '@material-ui/core'

const errorStyles = theme =>
  createStyles({
    errorText: {
      fontFamily: 'Inconsolata, Monaco, monospace',
    },
  })

const Error = ({ classes, error }) => (
  <Grid container direction="column">
    <Grid item>
      <Typography variant="h6" component="h3" className={classes.displayName}>
        Error
      </Typography>
    </Grid>
    <Grid item>
      <Grid container>
        <Typography mode="paragraph" color="secondary">
          <pre className={classes.errorText}>{JSON.stringify(error, undefined, 2)}</pre>
        </Typography>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(errorStyles)(Error)
