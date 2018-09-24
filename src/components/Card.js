import React, { Component } from 'react';
import axios from 'axios'
import '../styles/Card.css'
import Trade from './Trade'
import Delete from './Delete'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            quote: props.quote
        }
        // this.handleRemoval = this.handleRemoval.bind(this);
        this.handleTrade = this.handleTrade.bind(this);
    }
    handleTrade() {
        axios.put(`/api/collection/${this.state.id}`)
            .then(res => {
                this.setState({
                    quote: res.data
                })
            })
    
    }



    render() {
        return (
            <div className='Card_Container' >
                <p>{this.state.quote}</p>
                <Trade id={this.state.id} trade={this.handleTrade} />
                <Delete id={this.state.id} remove={this.props.remove} />
            </div>
        )
    }

}

export default Card