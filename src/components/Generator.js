import React from 'react';
import '../styles/Generator.css'

function Generator(props) {
    return (
        <div id='Button_listener'>
            <div id="Quote_Box">
                <p>{props.quote}</p>
            </div>
            <button className='Quote_Button' onClick={() => {props.generate()}}>Generate Quote</button>
            <button className='Save_Button' onClick={() => {props.save()}}>Save quote</button>
        </div>
    )
}

export default Generator