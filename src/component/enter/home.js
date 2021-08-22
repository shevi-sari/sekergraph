import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button, TextField } from '@material-ui/core';
import {getFormsByManeger} from '../api/homeApi';
import './home.css'
import { button} from '../../style'

function   Home() {
   
const [list,setList]=useState([]);
    useEffect(async() => {
        const s=await getFormsByManeger()
        setList(s)
        
    },[]);
 
    const history = useHistory();
    const buttonStyle = button();

    const newForm = () => {
        history.push('/newForm')
    }
   
   
    return (<div  >
	 {/* <img src="_b.png" className='img' /> */}
     <div>הסקרים שלך</div>
     <div className="formList">
    <FormList className="form" list={list}/>
    </div>
      
	<Button className={buttonStyle.root} variant="contained" onClick={newForm}  >new form</Button>
    </div>
    )}
export default Home;

// function Counter(){
//     const [hundleMousePosition,setHundleMousePosition]=useState(0)

//     useEffect(() => {
//        setHundleMousePosition(!hundleMousePosition)
        
//     },[hundleMousePosition]);
 
//     const incremantCount=()=>{
//         setCount(count+1)
//     }
//     return<div>
//         <button onClick={incremantCount}/>
//     </div>
// }

