import React, { Component } from 'react'
import './style.css'

export default class Count extends Component {
  render() {
    const { pagination, query, offset } = this.props
    const page = Math.floor((offset + 12) / 12)
    const lastPage = Math.floor(pagination.total_count / 12)

    // Format number to include commas
    let total = null
    if (pagination.total_count) {
      const regex = /\B(?=(\d{3})+(?!\d))/g
      total = pagination.total_count.toString().replace(regex, ',')
    }
    
    return (
      <div>
        { query ?
          <div className='count-wrap'>
            <div>
              <span className={'query'}>
                {query}
              </span>
              {total} GIFs found
            </div>
            <div>Page {page} of {lastPage}</div>
          </div> : null
        }
      </div>
    )
  }
}