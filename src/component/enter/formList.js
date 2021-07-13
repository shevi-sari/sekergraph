import React from 'react';
import { useHistory } from 'react-router-dom'

function FormList(props) {
    const history = useHistory();
    const formDetailes = (f) => {
        sessionStorage.setItem('form', JSON.stringify(f));
        history.push('/formDetailes')
    }
    debugger
    console.log(props)
    //     const getList = () => {
    //         return props.list.map((f) => {
    //             return (
    //                 <div onClick={formDetailes(f)} >
    //                     <labal >survey num:{f.name}</labal>
    //                     <label >send in :{f.date}</label>
    //                 </div>
    //             )
    //         })
    //     }
    //     return <div>{getList()}</div>
    // }
    return props.list.map((f) => {
        return (
            <div onClick={() => formDetailes(f)} >
                <labal >survey num:{f.name}</labal>
                <label >send in :{f.date}</label>
            </div>
        )
    })
}
export default FormList;