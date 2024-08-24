import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Lattu from './Lattu';
import PropTypes from 'prop-types'



export class News extends Component {
 static defaultProps ={
  country : 'in',
  category: 'general'
 }

 static propTypes={
  country : PropTypes.string,
  category: PropTypes.string,
 }
 
 
  constructor(props){

    super(props);
    
    
    this.state={
      articles: [],
      loading:false,
      page:1
    }
    document.title=`${  this.props.category}-TV NEWS`;
  }

  async componentDidMount(){
  
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=509f0dd8a73c41d2a7ca8a509fd07aab&page=1&pageSize=10`;
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({loading:false})
    this.setState({articles:parseData.articles})
  
  }
  handlePreClick= async()=>{

  

  
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=509f0dd8a73c41d2a7ca8a509fd07aab&page=${this.state.page -1}&pageSize=10`;
   
    this.setState({loading:true})
   
    let data = await fetch(url)
    let parseData = await data.json()
   

    this.setState({loading:false})
    this.setState({
      page:  this.state.page- 1,
      articles:parseData.articles
    })
    
  }
  handleNextClick= async ()=>
  {
    
    if(!(this.state.page +1>Math.ceil(this.state.totaResults/20)))
    {
      
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=509f0dd8a73c41d2a7ca8a509fd07aab&page=${this.state.page +1}&pageSize=10`;
     this.setState({loading:true})
   
      let data = await fetch(url)
      let parseData = await data.json()
      
      this.setState({loading:false})
      this.setState({
        page:  this.state.page+ 1,
        articles:parseData.articles
      })

      
      

    }
   
  
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className="text-center">NEWS TV from {this.props.category}</h2>
        {this.state.loading &&<Lattu/>}
      
        <div className="row">
          {!this.state.articles.loading && this.state.articles.map((e)=>{  

             return     <div className="col-md-4 d-flex align-items-stretch card-deck" key={e.url}>
                  <NewsItem  title={e.title} description={e.description} imageUrl={e.urlToImage}
                   newsUrl={e.url} author={e.author} date={e.publishedAt} />
                  </div>
                  

          })}
         
        </div>
          <div className="container d-flex justify-content-between">
          <button  disabled={this.state.page<=1} type="button" class="btn btn-dark"onClick={this.handlePreClick}>&larr; previous</button>
          <button disabled={this.state.page +1>Math.ceil(this.state.totaResults/20)} type="button" class="btn btn-dark"onClick={this.handleNextClick}>next &rarr;</button>
          </div>
      
      </div>
    )
  }
}

export default News
