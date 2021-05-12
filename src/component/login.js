import React, { useState } from 'react';
import { Button, Input, TextField } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './login.css'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
    const  register= useForm();
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const history = useHistory();
    const home = () => {

        history.push('/home')
    }

    const signup = () => {
        history.push('/signup');
    }
    
    return (
        <div>
           <h1>wellcom</h1>
           <h3>we happy you return to ower sekerGraph </h3>
            <ValidatorForm >
             {/* onChange={(e) => check(e.target.value)} > */}
                <TextValidator
                    label="enter your email:"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"    
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required','email is not valid']}
                />
                {/* </ValidatorForm> */}

            {/* <ValidatorForm onChange={(e) => setPassword(e.target.value)} > */}
                <TextValidator
                    label="enter your password:"
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"    
                    type="password"
                    validators={['required','minLength:8', 'maxLength:15']}
                    errorMessages={['this field is required','must be between 8-15 chars','must be  8-15 chars']}
                    value={password}
                />
                </ValidatorForm>
            <Button type="submit" variant="contained" color="secondary" onClick={home}>ENTER</Button><br /><br />
            <Button variant="contained" color="secondary" onClick={signup}>CONNECTION</Button>
           
               
            
        </div>
    )

}
export default Login;