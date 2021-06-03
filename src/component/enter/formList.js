import React from 'react';
import { useHistory } from 'react-router-dom'
import './formList.css'

function FormList(props) {
    const history = useHistory();
    const formDetailes = () => {

        history.push('/formDetailes')
    }

    console.log(props)
    const getList = () => {
        return props.list.map((f) => {
            return (
                <div  >
                    <svg class="Rectangle_195">
                        <rect onClick={formDetailes} id="Rectangle_195" rx="0" ry="0" x="0" y="0" width="398" height="97">
                        </rect>
                    </svg>
                    <labal id="_2" >survey num:{f.formNum}</labal>
                    <label id="_2">send in :{f.date}</label>

                </div>
            )
        })
    }
    return <div>{getList()}</div>
}
export default FormList;