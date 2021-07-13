import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button, TextField } from '@material-ui/core';
import {getFormsByManeger} from '../api/homeApi';
import './home.css'
function   Home() {
   
const [list,setList]=useState([]);
    useEffect(async() => {
        const s=await getFormsByManeger()
        setList(s)
        
    },[]);
 
    const history = useHistory();
    const newForm = () => {

        history.push('/newForm')
    }
   
   
    return (<div  >
	
    <FormList list={list}/>
<<<<<<< HEAD
        
=======
        <div>נראה אם את רואה את זה</div>
>>>>>>> 68c4376fae57c40203d1bc81bc38127ce3340b1b
	<Button  className="button" variant="contained" onClick={newForm} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >new form</Button>
    </div>
    )}
export default Home;