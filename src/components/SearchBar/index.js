import React, { Component } from 'react'
import 'whatwg-fetch'
import search from '../../search.gif'
import './style.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { value: '' }
  }

  handleSubmit = (event) => {
    const { updateGiphys } = this.props 
    const { value } = this.state

    updateGiphys(value)
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { handleChange, handleSubmit } = this
    const { value } = this.state

    return (
      <form onSubmit={handleSubmit}>
        <input 
          placeholder={'Search for GIFs & JIFs'} 
          type='text' 
          value={value} 
          onChange={handleChange}/>
        <img 
          src={search}
          className='search-gif'
          onClick={handleSubmit} 
          alt='search-gif'/>
      </form>
    )
  }
}