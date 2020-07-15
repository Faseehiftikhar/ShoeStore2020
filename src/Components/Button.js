import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import  { useNavigate} from 'react-router-dom'

import StoreIcon from '@material-ui/icons/Store';



const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color:'white',
    backgroundColor:'black'
  },
}));

export default function ShopNowButton() {
  const classes = useStyles();
  const navigate= useNavigate()

  return (
    
     
      
     <div>
      <Button
        variant="contained"
        className={classes.button}
        endIcon={< StoreIcon/>}
        onClick={()=>{navigate('/shoes')}}
      >
        Shop Now
      </Button>
      
     
      
      
    </div>
  );
}