import React, {useEffect, useState} from "react";


const Status = (props) => {
    let [edit, setEdit] = useState(false)
    let [status, setStatus] = useState(props.userStatus)
    useEffect(()=>{
        setStatus(props.userStatus)
    },[props.userStatus])
    let activate = () => {
        setEdit(true)
    }
    let deactivate = () => {
        setEdit(false)
        props.setMyStatus(status)
    }
    let pushStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div> {!edit && <div>
            <span onClick={activate}>{props.userStatus ? props.userStatus : 'No status'} </span>
        </div>}
            {edit && <div>
                <input onBlur={deactivate} onChange={pushStatus} value={status}/>
            </div>}
        </div>
    );

}
export default Status