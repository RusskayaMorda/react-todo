import React from "react";
import {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import style from './InputWithLabel.module.css';

const InputWithLabel = ({id, value, onChange, children, shouldFocus}) => {
    const inputRef = useRef();

    useEffect(()=>{
        if (shouldFocus && inputRef.current){
            inputRef.current.focus();
        }
    },[shouldFocus])
    return(
        <React.Fragment>
            <label htmlFor={id}  className={style.label}>{children}</label>
            <input type="text" id={id} value={value} onChange={onChange} ref={inputRef}/>
        </React.Fragment>
    )
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    shouldFocus: PropTypes.bool,
};

export default InputWithLabel;