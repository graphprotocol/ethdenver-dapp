import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core'

const gravatarStyles = theme =>
  createStyles({
    actionArea: {
      maxWidth: 300,
    },
    image: {
      height: 150,
    },
    displayName: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    id: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    owner: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })

const Gravatar = ({ classes, id, displayName, imageUrl, owner }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        {imageUrl && (
          <CardMedia className={classes.image} image={imageUrl} title={displayName} />
        )}
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.displayName}>
            {displayName || '—'}
          </Typography>
          <Typography color="textSecondary">ID</Typography>
          <Typography component="p" className={classes.id}>
            {id}
          </Typography>
          <Typography color="textSecondary">Owner</Typography>
          <Typography component="p" className={classes.owner}>
            {owner}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

const StyledGravatar = withStyles(gravatarStyles)(Gravatar)

const gravatarsStyles = theme =>
  createStyles({
    title: {
      marginTop: theme.spacing.unit * 2,
    },
  })

const Gravatars = ({ classes, gravatars }) => (
  <Grid container direction="column" spacing={16}>
    <Grid item>
      <Typography variant="title" className={classes.title}>
        {gravatars.length} Gravatars
      </Typography>
    </Grid>
    <Grid item>
      <Grid container direction="row" spacing={16}>
        {gravatars.map(gravatar => (
          <StyledGravatar key={gravatar.id} {...gravatar} />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(gravatarsStyles)(Gravatars)
