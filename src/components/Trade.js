import React from 'react';
import '../styles/Trade.css'

function Trade(props) {

    return (
        <button onClick={() => {props.trade()}}>Trade</button>
    )


}

export default Trade