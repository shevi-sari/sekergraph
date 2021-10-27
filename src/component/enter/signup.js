import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { textFeild } from '../../style';
import { signupApi } from '../api/signupApi'
import './signup.css'


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flagPassword, setFlagPassword] = useState(false);
    const [flagEmail, setFlagEmail] = useState(false);
    const [flagName, setFlagName] = useState(false);
    const [emailMass, setEmailMass] = useState('');
    const [passwordMass, setPasswordMass] = useState('');
    const [nameMass, setNameMass] = useState('');
    const [hasError, setHasError] = useState(true);

    const history = useHistory();

    const signup = () => {
        signupApi ({ email, password, name }).then(() => {
            history.push('/');
           // window.location.reload();
        }).catch   ( (error)=>console.log("error##########", error))
        }
    

    useEffect(() => {
        if (email !== "" && name !== "" && password !== "" && !flagPassword & !flagEmail)
            setHasError(false)
        else
            setHasError(true)
    }, [email, name, password]);


    function isNotEmail() {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!regEmail.test(email))
    }
  
    const classes = textFeild();
    return (
        <div>
             <form id="form" className={classes.root} noValidate autoComplete="off">

                <div  viewBox="0 0 460.192 1">
                    <TextField id="Line_1" d="M 460.1918029785156 0 L 0 0"
                    size={'small'}
                     className={classes.root}
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
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setFlagEmail(false);
                            setEmailMass("")

                        }}
                        error={flagEmail}
                        label="enter your Email*"
                        onBlur={() => {
                            if (isNotEmail()) {
                                setEmailMass("email is not valid")
                                setFlagEmail(true);
                            }
                            else { setEmailMass("") }
                        }}
                        helperText={emailMass}
                    />
                </div>
                <div>
                    <TextField
                    size={'big'}
                     className={classes.root}
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
                        error={flagPassword}
                        id="standard-error-helper-text"
                        label="enter your password*"
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setPasswordMass("");
                            setFlagPassword(false);
                        }
                        }
                        type="password"
                        helperText={passwordMass}
                        onBlur={() => {
                            if (password.length < 8) {
                                setPasswordMass("must be at least 8 chars");
                                setFlagPassword(true);
                            }
                        }}
                    />
                </div>

                <div>
                    <TextField
                     className={classes.root}
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
                        error={flagName}
                        id="standard-error-helper-text"
                        label="enter your name*"
                        onChange={(e) => {
                            setName(e.target.value);
                            if (name !== "") {
                                setNameMass("");
                                setFlagName(false);
                            }
                        }}
                        helperText={nameMass}
                        onBlur={() => {
                            if (name === "") {
                                setNameMass("must be full");
                                setFlagName(true)
                            }
                        }}
                        style={{ color: 'white' }}
                    />
                </div>


                <Button disabled={hasError} className="button" variant="contained" onClick={signup} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >connect</Button>
            </form>
        </div>
    )
}
export default Signup;