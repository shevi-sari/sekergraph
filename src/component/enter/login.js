import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.css'
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(true);

    useEffect(() => {
        if (email !== "" & password !== "")
            setHasError(false)
        else
            setHasError(true)
    }, [email, password]);

    const history = useHistory();


    const signup = () => {
        history.push('/signup');
    }

    const login = () => {
        loginApi(email, password)
            // .then(() => {
                history.push('/home');
            // }).catch((error) => console.log("error##########", error))
    }
    return (
        <div  >
          
            <form id="form" noValidate autoComplete="off"><div>



                <TextField id="standard-basic"
                    label="enter your Email*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <TextField id="standard-basic" type="password"
                    label="enter your password*"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />


                <Button className="button" variant="contained" onClick={signup} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >signup</Button>
                <Button disabled={hasError} className="button" variant="contained" onClick={login} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >enter</Button>
            </div>

            </form>
        </div>
    )
}
export default Login;