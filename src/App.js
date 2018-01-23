import React, { Component } from 'react';
import { SearchBar, GiphList, Pagination, Count } from './components'

// Decided not to use Redux because it seemed like overkill
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      pagination: {},
      offset: 0,
      cache: {},
    }
  }

  // there are better ways to store data, but this was the easiest to implement quickly
  setGiphState = (json, query, offset) => {
    const { pagination, data } = json
    const prevCache = this.state.cache

    let cache = {}
    cache[query + offset] = json
    cache = Object.assign({}, prevCache, cache)

    this.setState({ 
      cache, data, query, pagination, offset
    })
  }

  // Clearing the gifs provided a less jaring transition between pages
  clearGiphs = () =>  {
    this.setState({ data: []})
  }

  fetchGiphs = (url, query, offset) => {
    const { setGiphState } = this

    fetch(url)
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        setGiphState(json, query, offset)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
  }

  fetchCache = (query, offset) => {
    const { cache } = this.state
    const { data, pagination } = cache[query + offset]
    
    this.setState({
      data, query, pagination, offset
    })
  }

  updateGiphys = (query, offsetChange = 0) => {
    const { fetchGiphs, clearGiphs, fetchCache } = this
    const { cache } = this.state
    const apiKey = 'brXMsD0cTFgrd7yQh6u17ilSMIhDz2t9'
    const offset = this.state.offset + offsetChange

    query = query || this.state.query
    query = query.replace(/ /g, '+')

    clearGiphs()
    // Use cache only if the query / offset being requested is already stored
    if (cache[query + offset]) return fetchCache(query, offset)

    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=12&offset=${offset}`

    fetchGiphs(url, query, offset)
  }

  render() {
    const { updateGiphys } = this
    const { data, pagination, query, offset } = this.state

    return (
      <div className="App">
        <SearchBar updateGiphys={updateGiphys}/>
        <Count pagination={pagination} query={query} offset={offset}/>
        <GiphList giphs={data} updateGiphys={updateGiphys}/>
        <Pagination pagination={pagination} updateGiphys={updateGiphys} />
      </div>
    );
  }
}

export default App;
