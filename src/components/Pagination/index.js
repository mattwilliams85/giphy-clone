import React, { Component } from 'react'
import './style.css'

export default class Pagination extends Component {
  handleClick(offsetChange) {
    const { updateGiphys } = this.props

    updateGiphys(null, offsetChange)
  }

  render() {
    const { offset, total_count, count } = this.props.pagination
    const { handleClick } = this

    return (
      <div className='pagination-wrap'>
        { offset ? 
          <div 
            className={'button'} 
            onClick={ handleClick.bind(this, -12) }>
            PREV
          </div> 
          : <div></div>
        }
        { offset <= total_count - count ? 
          <div
            className={'button'}
            onClick={handleClick.bind(this, 12)}>
            NEXT
          </div> 
          : <div></div>  
        }
      </div>
    )
  }
}