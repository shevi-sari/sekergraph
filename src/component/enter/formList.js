import React from 'react';
import {useHistory} from 'react-router-dom'
import './formList.css'

function FormList(props) {
    const history = useHistory();
    const formDetailes = () => {

        history.push('/formDetailes')
    }

    console.log(props)
    const getList = () => {
        return props.list.map((f) => {
            return <div className="div1" onClick={formDetailes} >
                <labal >survey num:{f.formNum}</labal>
                <label>send in :{f.date}</label>

            </div>
        })
    }
    return <div>{getList()}</div>
}
export default FormList;