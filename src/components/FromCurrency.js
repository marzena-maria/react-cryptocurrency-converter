import React from 'react';
import './FromCurrency.css';

const FromCurrency = (props) => {


    return (
        <div className='from-currency'>

            <span>From:</span><br />

            <input 
                onChange={event => {props.onChange(event.target.value)}}
                type='radio' 
                name='from' 
                id='BTC' 
                value='BTC' />
            <label htmlFor="BTC">BTC</label>

            <input 
                onChange={event => {props.onChange(event.target.value)}}
                type='radio' 
                name='from' 
                id='ETH' 
                value='ETH' />
            <label htmlFor="ETH">ETH</label>

            <input 
                onChange={event => {props.onChange(event.target.value)}}
                type='radio' 
                name='from' 
                id='LTC' 
                value='LTC' />
            <label htmlFor="LTC">LTC</label>

            
        </div>
    )
};

export default FromCurrency;