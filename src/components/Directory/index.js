import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import foto1 from './../../assets/foto1.png';
import './styles.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 340,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(1);
  const classes = useStyles();



  return (
    <div class="directorio">
      <p className="titulo">
        Nuestros productos
      </p>
      <Grid container className={classes.root} >
        <Grid item xs={12}>
          <Grid container justify="center">
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper className="prueba" elevation={3}
                  style={
                    {
                      backgroundImage: `url(${foto1})`
                    }
                  } />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>


  )
}