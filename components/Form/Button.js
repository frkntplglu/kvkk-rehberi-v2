import React from 'react'

function Button({className, onClick, disabled, children }) {
    const handleButtonClick = e => {
        onClick(e);
    }
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button
