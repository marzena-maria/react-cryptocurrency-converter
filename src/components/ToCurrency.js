import React from 'react';
import './ToCurrency.css';

const ToCurrency = (props) => {
    return (
        <div className='to-currency'>

            <span>To:</span>

            <input 
                onChange={event => {props.onChange(event.target.value)}}
                type='radio' 
                name='to' 
                id='EUR'
                value='EUR' />
            <label htmlFor="EUR">EUR</label> 

            <input 
                onChange={event => {props.onChange(event.target.value)}}
                type='radio' 
                name='to' 
                id='USD' 
                value='USD'/>
            <label htmlFor="USD">USD</label>
        </div>
    )
}

export default ToCurrency;