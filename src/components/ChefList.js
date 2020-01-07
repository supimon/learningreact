import React, { Component } from 'react';
import axios from 'axios';
import Chef from './Chef';

class ChefList extends Component{

  constructor(props){
    super(props);

    this.state = {
      chefs: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8086/chefs/filterBy/all')
      .then(response => {
        this.setState({chefs: response.data.chefItems});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    const { chefs } = this.state;
    return (
      <div>
        <h1>List of Chefs</h1>
        <div>
          { chefs.length ? chefs.map(chef => <Chef key={chef.chefId} chef={chef}/>):null}
        </div>
      </div>
    )
  }
}

export default ChefList;