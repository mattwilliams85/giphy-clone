import React, { Component } from 'react'
import './style.css'

// Getting the randomly sized gifs to fit together was a bit of a challenge.
export default class GiphList extends Component {
  render() {
    const { giphs } = this.props
    
    return (
      <div className='giph-wrap'>
        { giphs.map((giph, i) => 
          <div key={ i } className='giph'>
            <img 
              className='img' 
              src={ giph.images.downsized_medium.url } 
              alt='gif'/>
          </div>
        ) }
      </div>
    )
  }
}