import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.css'
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js'
//import { withStyles } from "@material-ui/core/styles"
import {textFeild} from '../../style'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasError, setHasError] = useState(true);
   // const [disabled, setDisabled] = React.useState(true);
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
        .then(() => {
        history.push('/home');
        }).catch((error) => console.log("error##########", error))
    }
   
   
    const classes = textFeild();
    return (

        <div  >

            <form id="form" noValidate autoComplete="off"><div>
                <TextField id="standard-basic"
                    InputProps={{
                        style: {
                            color: "white",
                        }
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                        }
                    }}
                    className={classes.root}
                    label="enter your Email*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} /><br />
                <TextField id="standard-basic"
                    className={classes.root}
                    type="password"
                    InputProps={{
                        style: {
                            color: "white",
                        }
                    }}
                    InputLabelProps={{
                        style: {
                            color: "white",
                        }
                    }}

                    label="enter your password*"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />


                <br /><Button className="button" variant="contained" onClick={signup} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >signup</Button>
                <br /><Button disabled={hasError} className={"botton"} variant="contained" onClick={login} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >enter</Button>
            </div>

            </form>
          

    
    
  
        </div>
    )
}
export default Login;
