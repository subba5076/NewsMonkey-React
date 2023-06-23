//rce
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
   
    static defaultProps = {
      country :'in',
      pagesize:8,
      category: 'general',
    }

    static propTypes = {
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string,

    }
    constructor(){
        super();

        this.state={
            articles:[],
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cf4b70e1de4d1ea371646bf2e1eaa4&page=1&pagesize=${this.props.pagesize}` ;
    this.setState({
      loading:true
    })
        let data=await fetch(url);
    let ParseData=await data.json();
    this.setState({
      articles: ParseData.articles,
      totalResults:ParseData.totalResults,
      loading:false
    })

    }
     handleNextclick=async()=>{
if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)){
}else{



      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cf4b70e1de4d1ea371646bf2e1eaa4&page=${this.state.page +1}&pagesize=${this.props.pagesize}` ;
      this.setState({
        loading: true
      })
    let data=await fetch(url);
    let ParseData=await data.json();


this.setState({
   page: this.state.page +1,
   articles: ParseData.articles,
   loading: false
})
}
    }
     handlePreviousclick=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cf4b70e1de4d1ea371646bf2e1eaa4&page=${this.state.page-1}&pagesize=${this.props.pagesize}` ;
   this.setState({
    loading:true
   })
      let data=await fetch(url);
    let ParseData=await data.json();
    
this.setState({
  page:this.state.page-1,
  articles:ParseData.articles,
  loading:false
})
    }
  render() {
    return (
      <div>
        <div className="container">
        <h1 className="text-center mb-4" style={{margin:'35px'}}>NewsMonkey-Top {this.props.category} Headlines </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
            { !this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url} >
                    <Newsitem title={element.title?element.title:""} discription={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url} /></div>
            })}
            
      </div>
  
        </div>
        <div className="container d-flex justify-content-between my-4">

        <button disabled={this.state.page===1} className="btn btn-dark " onClick={this.handlePreviousclick}>	&larr;Previous</button>
        <button disabled={this.state.page + 1 > this.state.totalResults/this.props.pagesize} className="btn btn-dark" onClick={this.handleNextclick}>Next 	&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
