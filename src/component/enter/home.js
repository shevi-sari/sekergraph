import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button, TextField } from '@material-ui/core';
import { getFormsByManeger } from '../api/homeApi';
import './home.css'
import { button } from '../../style'
import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../redux/actions/formAction';


function Home() {

    const [list, setList] = useState([]);
    useEffect(async () => {
        const s = await getFormsByManeger()
        setList(s)
        dispatch(initialState())
    }, []);

    const history = useHistory();
    const buttonStyle = button();
    const dispatch = useDispatch();
    const newForm = () => {
        history.push('/newForm');
        window.location.reload();
    }


    return (<div className="div" >


        <div>הסקרים שלך</div>
        <div className="formList">
            <FormList className="form" list={list} />
        </div>

        <Button className={buttonStyle.root} variant="contained" onClick={newForm}  >new form</Button>
        <img src="_b1.png" className='img' no-repeat />
    </div>
    )
}
export default Home;
