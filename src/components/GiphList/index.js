import React, { Component } from 'react'
import './style.css'

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