import React from 'react';
import './App.css';
import { Routes, useNavigate,Route } from 'react-router-dom';
// IMPORTING MATERIAL AND ICONS
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import StorefrontIcon from '@material-ui/icons/Storefront';


// IMPORTING COMPONENTS
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error'
import MainShoes from './Components/Shoes';
import ShoesDeatils from './Components/ShoesDeatils';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor:'#D9E4F5',
    margin:'auto',

  },
});




function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const navigate= useNavigate()

  return (
    <div><div><Paper square className={classes.root}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab icon={<HomeIcon/>} label="HOME" onClick={()=>{navigate('/')}}/>
      
      <Tab icon={<InfoIcon/>} label="ABOUT" onClick={()=>{navigate('/about')}} />
      <Tab icon={<StorefrontIcon/>} label="Products" onClick={()=>{navigate('/shoes')}} />
      
      
    </Tabs>
  </Paper>
</div>
  
<Routes>
          
          
                <Route exact path="/" element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route exact path="shoes/" element={<MainShoes />}/>
                <Route path="/shoes/:id" element={<ShoesDeatils/>}/>
                <Route path='*' element={<Error />}/>
           
        </Routes>
</div>
  
   
    
  );
}

export default App;
