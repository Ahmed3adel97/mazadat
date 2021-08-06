import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../assests/mazadatlogo.jpeg'
export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" color="inhert" className={classes.image}>
                        <img src={logo} alt="mazadat.js" height="60px" width="60px" />
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                    mazadat.at
                    </Typography>
                </Toolbar>
            </AppBar>            
        </div>
    )
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
  },
  image:{
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,

  }
}));
