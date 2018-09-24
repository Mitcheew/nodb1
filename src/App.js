import React, { Component } from 'react';
import './styles/App.css';
import Generator from './components/Generator';
import axios from 'axios'
import Card from './components/Card'
import Search from './components/Search'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      id: 0,
      quote: ''
    }
    this.handleGenerate = this.handleGenerate.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
  }

  componentDidMount() {
    axios.get('/api/collection/')
      .then(res => {
        this.setState({ cards: res.data });
      });
  }

  handleGenerate() {
    axios.get('/api/card/')
      .then(res => {
        this.setState({
          quote: res.data
        })
      })

  }

  handleSave() {
    let { quote } = this.state;
    if (quote) {
      axios.post('/api/collection/', { quote })
        .then(res => {
          this.setState({
            cards: res.data,
            quote: ''
          })
        })
    } else {
      alert('must generate quote first!')
    }


  }

  handleRemoval(id) {
    axios.delete(`/api/collection/${id}`)
      .then(res => {
        this.setState({
          cards: res.data
        })
      })

  }

  render() {
    const collection = this.state.cards.map(card => {
      return (
        <Card key={card.id} id={card.id} quote={card.quote} remove={this.handleRemoval} />
      )
    })
    return (
      <div id='background'>
        <div className="App-container">
          <h1>Bob Ross' Feel Good Generator</h1>
          <Generator quote={this.state.quote} generate={this.handleGenerate} save={this.handleSave} />
          <section className='flex_display'>
            {collection}
          </section>
          {/* <h1>Search Collection</h1>
          <Search /> */}
        </div>
      </div>
    );
  }
}

export default App;
