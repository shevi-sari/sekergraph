import React, {useState}from 'react';
import { Button, Input, TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function Signup(){

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const history = useHistory();
    const login = () => {
        history.push('/');
    }
    return(
        <div>
             <h1>wellcom</h1>
           <h3>we happy you choose to use ower sekerGraph </h3>
            <p>enter your name:</p>
            <ValidatorForm onChange={(e) => setName(e.target.value)} >
                <TextValidator
                    label="Name"
                    onChange={(e) => setName(e.target.value)}
                    name="name"    
                    value={name}
                    // validators={['required', 'isEmail']}
                    errorMessages={['this field is required']}
                /></ValidatorForm>
            <p>enter your email:</p>
            <ValidatorForm onChange={(e) => setEmail(e.target.value)} >
                <TextValidator
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"    
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required','email is not valid']}
                /></ValidatorForm>
            <p>enter your password:</p>
            <input /><br/><br/>
            <Button variant="contained" color="secondary" onClick={login}>Registration</Button>
        </div>
    )
}
export default Signup;