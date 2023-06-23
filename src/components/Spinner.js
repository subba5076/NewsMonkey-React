import React, { Component } from 'react'
import Loading from './loading-87.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img   src={Loading} alt="loading..."/>
      </div>
    )
  }
}

export default Spinner
