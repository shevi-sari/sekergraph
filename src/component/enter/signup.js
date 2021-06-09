import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
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
    const [hasErrror, setHasErrror] = useState(true);

    const history = useHistory();

    const login = () => {
        signupApi({ email, password, name }).then(() => {
            history.push('/');
        }).catch(() => {

        })
    }

    useEffect(() => {
        if (email !== "" && name !== "" && password !== "" && !flagPassword & !flagEmail)
            setHasErrror(false)
        else
            setHasErrror(true)
    }, [email, name, password]);

    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles();

    function isNotEmail() {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!regEmail.test(email))
    }

    return (
        <div className="body" >
            <div id="Group_176">
                <svg className="Path_374_bc" viewBox="471.676 156.562 12.673 47.78">
                    <path id="Path_374_bc" d="M 471.6759948730469 204.3419952392578 C 475.0339965820313 202.7819976806641 476.6709899902344 201.3099975585938 479.0289916992188 199.5200042724609 C 480.8949890136719 198.1020050048828 482.6700134277344 196.3040008544922 484.3489990234375 194.7200012207031 C 484.3489990234375 183.677001953125 484.322998046875 167.6060028076172 484.322998046875 156.5619964599609 L 471.6759948730469 163.22900390625 L 471.6759948730469 204.3419952392578 Z">
                    </path>
                </svg>
                <svg className="Path_375_bd" viewBox="453.709 165.924 12.672 42.556">
                    <path id="Path_375_bd" d="M 453.7090148925781 208.4799957275391 C 456.0260009765625 208.4320068359375 458.4089965820313 208.2220001220703 460.6830139160156 207.8650054931641 C 462.6329956054688 207.5599975585938 464.489013671875 206.9900054931641 466.3810119628906 206.4940032958984 L 466.3810119628906 165.9239959716797 L 453.7090148925781 172.875 L 453.7090148925781 208.4799957275391 Z">
                    </path>
                </svg>
                <svg className="Path_376_be" viewBox="435.93 175.428 12.672 32.839">
                    <path id="Path_376_be" d="M 435.9299926757813 205.0749969482422 C 437.8919982910156 205.8560028076172 439.8070068359375 206.5879974365234 441.7219848632813 207.0379943847656 C 444.1059875488281 207.5970001220703 446.0249938964844 208.0780029296875 448.5780029296875 208.2669982910156 C 448.5780029296875 198.8000030517578 448.6019897460938 184.89599609375 448.6019897460938 175.4279937744141 L 435.9299926757813 181.8119964599609 L 435.9299926757813 205.0749969482422 Z">
                    </path>
                </svg>
                <svg className="Path_377_bf" viewBox="414.349 126.076 86.235 88.228">
                    <path id="Path_377_bf" d="M 491.4450073242188 196.0229949951172 C 500.2049865722656 184.5760040283203 503.2829895019531 168.8589935302734 497.9590148925781 154.4429931640625 C 489.864013671875 132.5240020751953 464.8999938964844 120.4980010986328 442.6369934082031 128.6260070800781 C 421.3250122070313 136.4080047607422 409.4869995117188 160.1060028076172 416.2529907226563 182.2460021972656 L 422.2109985351563 179.4089965820313 C 418.2470092773438 161.7920074462891 426.1700134277344 144.1450042724609 440.6510009765625 136.5700073242188 C 459.1289978027344 126.9049987792969 483.8999938964844 135.927001953125 492.0020141601563 155.5780029296875 C 500.9410095214844 177.2619934082031 484.3380126953125 200.14599609375 466.7520141601563 206.3609924316406 C 452.6860046386719 211.3309936523438 437.9670104980469 205.6430053710938 433.5589904785156 203.2400054931641 C 428.5719909667969 200.52099609375 424.5159912109375 196.6609954833984 424.5159912109375 196.6609954833984 C 423.1690063476563 195.3780059814453 422.114990234375 194.2050018310547 421.3599853515625 193.3099975585938 L 424.7640075683594 197.5659942626953 C 437.9349975585938 211.9660034179688 458.4559936523438 216.4290008544922 475.2630004882813 208.9140014648438 L 496.8240051269531 214.3040008544922 L 492.0020141601563 195.5800018310547 L 491.4450073242188 196.0229949951172 Z">
                    </path>
                </svg>
                <div id="sekergraph_bg">
                    <span>sekergraph</span>
                </div>
            </div>





            <form id="form" className={classes.root} noValidate autoComplete="off">

                <div class="Line_1" viewBox="0 0 460.192 1">
                    <TextField id="Line_1" d="M 460.1918029785156 0 L 0 0"
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
                        style={{color:'white'}}
                    />
                </div>


                <Button disabled={hasErrror} className="button" variant="contained" onClick={login} style={{ 'font-size': '1rem', margin: '2rem ', background: '#e06c79', color: 'white', 'border-radius': '1.5625rem', padding: '0.65rem 6.25rem' }} >connect</Button>
            </form>
        </div>
    )
}
export default Signup;