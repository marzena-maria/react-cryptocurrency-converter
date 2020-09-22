import React from 'react';
import './ConvertButton.css';

const ConvertButton = (props) => {



    return (
        <div className='convert-button'>
            <button
                className='button'
                onClick={event => {props.onClick(event)}}
            >
            CONVERT
            </button>
        </div>
    )
}

export default ConvertButton;
