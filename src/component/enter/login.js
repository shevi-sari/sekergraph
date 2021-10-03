import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { loginApi } from '../api/loginApi.js'
import { textFeild ,button} from '../../style'

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
    const buttonStyle = button();

    const signup = () => {
        history.push('/signup');
        window.location.reload();
    }

    const login = () => {
        loginApi(email, password)
            .then(() => {
                history.push('/home');
                window.location.reload();
            }).catch((error) => console.log("error##########", error))
    }


    const classes = textFeild();
    return (

        <div  >

            <form id="form" noValidate autoComplete="off"><div>
                <TextField id="standard-basic"
                    InputProps={{   style: {
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


                <br /><Button className={buttonStyle.root} variant="contained" onClick={signup}  >signup</Button>
                <br /><Button disabled={hasError} className={buttonStyle.root} variant="contained" onClick={login}  >enter</Button>
            </div>

            </form>





        </div>
    )
}
export default Login;
