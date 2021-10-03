import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { saveForm } from '../../redux/actions/formAction';
import './formList.css';
import { useDispatch, useSelector } from 'react-redux';

function FormList(props) {

    const [push, setPush] = useState(false)
    const [pushf, setPushf] = useState(false)
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (pushf)
         {  history.push('/formDetailes');
          
        window.location.reload();}
        else
            setPushf(true)
    }, [push]);
    const formDetailes = (f) => {
        // debugger
        dispatch(saveForm(f))
         setPush(true)
        // console.log('f^^^^^^^^^:', f._id);
        // console.log("form:::::::::",form.form);
        // history.push('/formDetailes');
        // window.location.reload();
    }

    return props.list.map((f) => {
        return (<div className="">
            <div className="form" onClick={() => formDetailes(f)} >
                <p className="test">survey name : {f.name}</p>
                <p className="test">send in : {Date(f.date)}</p>
            </div></div>
        )
    })
}
export default FormList;

