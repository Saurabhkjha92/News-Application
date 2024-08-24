import React, { Component } from 'react'

export class NewsItem extends Component {



  
  render() {
    let {title,description, imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>         
                        <div className="card" style={{width: "18rem"}}>
                <img src={!imageUrl?"https://s.yimg.com/ny/api/res/1.2/ZIy_RfPQgjqnfZAVF2QHuw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-04/7474cb50-05dc-11ef-a775-e3c535e27cfb":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small class="text-body-secondary">by {!author?"unknown":author} on {date}</small></p>
                    <a  rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-primary">READ MORE..</a>
          
                </div>
                </div>
                
      </div>
    )
  }
}

export default NewsItem
