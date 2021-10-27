import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import FormList from './formList';
import { Button, TextField } from '@material-ui/core';
import './home.css'
import { button } from '../../style';
import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../redux/actions/formAction';

function Home() {

   // const [list, setList] = useState('');
    const list = useSelector(state => state.user.user);
    // setList( useSelector(state => state.user.user))
    useEffect(() => {
       // setList(forms)
     //   console.log(list);
        
        console.log('uuuuuser', list);
        //dispatch(initialState())
    }, []);

    // const dispatch = useDispatch()
    const history = useHistory();
    const buttonStyle = button();

    const newForm = () => {

        history.push('/newForm');
      //  window.location.reload();
    }


    return (<div className="div" >
   <img src="_b1.png" className='img' no-repeat="true" />
<div>
        <div>הסקרים שלך</div>
        <div className="formList">
            {list && <FormList className="form" list={list} />}
        </div>

        <Button className={buttonStyle.root} variant="contained" onClick={newForm}  >new form</Button>
        </div>
    </div>
    )
}
export default Home;
