import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.css'
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js'
import { makeStyles } from '@material-ui/core/styles';
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
    const useStyles = makeStyles((theme) => ({
        root: {
            '& label.Mui-focused': {
                color: 'white',
            }, '& label.Mui-focused': {
                color: 'white',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
            },
            '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'white',
                },
                '&:hover fieldset': {
                    borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                    borderColor: 'white',
                },
            
                
            }
        }
    }));
    const classes = useStyles();
    return (

        <div  >

            <form id="form" noValidate autoComplete="off"><div>
                <TextField id="standard-basic"
                    className={classes.root}
                    label="enter your Email*"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
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


                <Button className="button" variant="contained" onClick={signup} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >signup</Button>
                <Button disabled={hasError} className="button" variant="contained" onClick={login} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >enter</Button>
            </div>

            </form>
        </div>
    )
}
export default Login;
