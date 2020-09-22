import React, {useState} from 'react';
import './AmountInput.css';

const AmountInput = (props) => {

    return (
        <div className='amount-input'>
        <label htmlFor='amount'>Amount to convert:</label>
        <br />
        <input 
            onChange={event => {props.onChange(event.target.value)}}
            className='input-field'
            type='number' 
            id='amount' />
        </div>
    )
}

export default AmountInput;