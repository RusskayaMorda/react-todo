import React from "react";
import {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const InputWithLabel = ({id, value, onChange, children}) => {
    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[value])
    return(
        <React.Fragment>
            <label htmlFor={id}>{children}</label>
            <input type="text" id={id} value={value} onChange={onChange} ref={inputRef}/>
        </React.Fragment>
    )
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default InputWithLabel;