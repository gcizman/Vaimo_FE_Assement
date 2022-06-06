import { React, useState} from 'react'
import {useEffect } from 'react'
import './styles.css';
import Posts from './components/Posts';
import { useForm } from "react-hook-form";
import ReactDom from 'react-dom';
import Card from '@mui/material/Card';
import {CardContent, Typography} from '@mui/material/';

/**
 * Creating some card for shipping details.
 * @returns card with details */



/**
 * Function register themese and styles for card.
 * @returns 
 */


   export default function App() {
  
/**
 * Logic to create a decrease and increase value for product details.
 */

     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const [counter, setCounter] = useState(0);

      //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };

       //decrease counter
       const decrease = () => {
        setCounter(count => count - 1);
      };

       //reset counter 
    const reset = () =>{
      setCounter(0)
    }

    //decrease counter val if its 0
    const decrease_val = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

       return (
        <Card sx={{ maxWidth: 800 }}  className="text-center">
        <img alt="drone" src={require('./components/images/drone_image.png')} />
        
         <div>
            <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={increase}>+</button>
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
         </div>
         <Posts/>
         </div>
           
          
         </Card>
          
       
       )
   }
  
  
