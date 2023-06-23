//rce
import React, { Component } from 'react'



export class Newsitem extends Component {
 
  render() {
    let {title,discription,imageurl,newsurl} = this.props;
    return (
      
       
        <div className="card" >
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text"> {discription}...</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      
    )
  }
}

export default Newsitem
