import React from 'react'

function AlertMessage(props) {
    return (
        <div className={`alert ${props.type}`}>
            {props.message}
        </div>
    )
}

export default AlertMessage
