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
        
        <div>נראה אם את רואה את זה</div>
	<Button  className="button" variant="contained" onClick={newForm} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >new form</Button>
    </div>
    )}
export default Home;