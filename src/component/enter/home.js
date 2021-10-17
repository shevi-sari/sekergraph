import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button, TextField } from '@material-ui/core';
import './home.css'
import { button } from '../../style';
import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../redux/actions/formAction';

function Home() {
    
    const [list, setList] = useState(''); 
     const forms = useSelector(state => state.user.user);
  //  setList( useSelector(state => state.userReducer))
    useEffect( () => {
       
     setList(forms) 
 //setList(forms)
        console.log('uuuuuuuuser',forms);
       
//dispatch(initialState())
        
    }, []);

   // const dispatch = useDispatch()
    const history = useHistory();
    const buttonStyle = button();
  
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
        <img src="_b.png" className='img' no-repeat="true" />
    </div>
    )
}
export default Home;
