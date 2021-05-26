import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.css'
import { useHistory } from "react-router-dom";
import {loginApi} from '../api/loginApi.js'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasErrror, setHasErrror] = useState(true);

    useEffect(() => {
        if (email !== "" & password !== "")
            setHasErrror(false)
        else
            setHasErrror(true)
    }, [email, password]);

   

    const history = useHistory();
    const home = () => {

        history.push('/home')
    }

    const signup = () => {
        history.push('/signup');
    }

    const func = () => {
        loginApi(email,password)
        home()
    }

    return (
        <div>
            <h1>wellcom</h1>
            <h3>we happy you return to owur sekerGraph </h3>
            <form noValidate autoComplete="off"><div>
                <TextField id="standard-basic" label="enter your Email*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} /></div>
                <div>
                    <TextField id="standard-basic" type="password" label="enter your password*"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} /></div>
                <Button type="submit" disabled={hasErrror} variant="contained" color="secondary" onClick={func}>ENTER</Button><br /><br />
                <Button variant="contained" color="secondary" onClick={signup}>CONNECTION</Button>
            </form>
        </div>
    )
}
export default Login;