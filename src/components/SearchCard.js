import React, { Component } from 'react';
import '../styles/Card.css'

class SearchCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            quote: props.quote
        }
    }


    render() {
        return (
            <div className='Card_Container' >
                <p>{this.state.quote}</p>
            </div>
        )
    }

}

export default SearchCard