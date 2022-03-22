import React, { Component } from 'react'

import axios from 'axios';

export default class App extends Component {
   constructor(props){
     super(props);

     this.state={
        foods:[]
     };
   }
    
   componentDidMount(){
     this.retrievePosts();
   }
    
   retrievePosts(){
     axios.get("http://localhost:8000/foods").then(res =>{
       if(res.data.success){
         this.setState({
           foods:res.data.existingPosts
         });
         console.log(this.state.foods)
       }
     })
   }
   
  

   

  render() {
    return (
      <div>
        {this.state.foods.map(foods =>(
        <div>
          <p>{foods.Foodname}</p>
          <p>{foods.Itemprice}</p>
          <p>{foods.Foodcategory}</p>
          <p>{foods.Foodstatus}</p>
        </div>
        )
          )}
      </div>
    )
  }
}

