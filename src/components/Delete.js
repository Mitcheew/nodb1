import React, { Component } from 'react';
import '../styles/Delete.css'

class Delete extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id
        }
    }
          
      render(){
          return (
              <button onClick={() => {this.props.remove(this.state.id)}}>Delete</button>
          )
      }
}

export default Delete