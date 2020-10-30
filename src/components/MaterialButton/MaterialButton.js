import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const MaterialButton = ()=>{

    const useStyles = makeStyles((theme) => ({
        root:{
            border : '1px solid black',
            height :'45px',
            '&:hover':{
                background: theme.palette.secondary.main,
                color: '#fff'
            },
            color:theme.palette.secondary.main
        }
    }));

    const classes = useStyles();

    return (<Button 
        variant="outlined" 
        classes={{root: classes.root}}
        >Login/Signup</Button>);

}

export default MaterialButton ; 