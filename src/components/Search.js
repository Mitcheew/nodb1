import React, { Component } from 'react';
import axios from 'axios'
import SearchCard from './SearchCard'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            result: [],
            search: ''
        }
    }

    handleChange(value) {
        this.setState({
            search: value
        })
    }

    handleSearch(search) {
        console.log(search)
        axios.get(`/api/collection?search=${search}`)
            .then(res => {
                this.setState({
                    result: res.data
                })
            })
    }

    render() {
        const display = this.state.result.map(result => {
            return (
                <SearchCard key={result.id} id={result.id} quote={result.quote} />
            )
        })
        return (
            <div>
                <input placeholder='Search collection here' onChange={(e) => { this.handleChange(e.target.value) }} />
                <button onClick={() => this.handleSearch(this.state.search)}>Search</button>
                <section className='flex_display'>
                    {display}
                </section>
            </div>
        )
    }
}

export default Search;