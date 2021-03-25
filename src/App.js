
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Ingrese Valor" variant="outlined" />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 1
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 2
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 3
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 /
              </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 4
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 5
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 6
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 *
              </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 7
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 8
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 9
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 +
              </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 .
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 0
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 =
              </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                 -
              </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
   
  );
}

export default App;
