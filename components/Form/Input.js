import React from 'react'

function Input({type, name, onChange, className, register, placeholder, errorWrapper, grid}) {
    return (
        <div className={`form-group ${grid} ${errorWrapper.name ? "error" : ''}`}>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} className={`form-input ${className}`} ref={register} />
            <p>{errorWrapper.name?.message}</p>
        </div>
    )
}

export default Input
