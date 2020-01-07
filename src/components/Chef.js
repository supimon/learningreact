import React, { Component } from 'react';
import axios from 'axios';

class Chef extends Component{

  constructor(props){
    super(props);
    this.state = {
      popup: null,
      statusUpdate: "Show Details"
    }
  }

  showPopupHandler(){
    this.setState({
      statusUpdate: "LOADING...."
    });
    axios.get('http://localhost:8086/chefs/'+this.props.chef.chefId)
      .then(response => {
        this.setState({
          popup: (
            <div className="absolute-more-details">
              <h6 onClick={this.closePopupHandler.bind(this)}>Close</h6>
                <div className="chef">
                  <div className="left">
                    <img src={this.props.chef.imgUrl} alt={this.props.chef.name}/>
                  </div>
                  <div className="right">
                    <h2>Chef Name: <span>{this.props.chef.name}</span></h2>
                    <p><b>Chef Skills:</b> {this.props.chef.skills}</p>
                    <p><b>Years of Experience:</b> {this.props.chef.experience}</p>
                    <p><b>Phone Number:</b> {response.data.phoneNumber}</p>
                    <p><b>Speciality:</b> {response.data.speciality}</p>
                    <p><b>Self Introduction:</b> {response.data.desc}</p>
                    <p><b>Expected Salary:</b> {response.data.expectedSalary} INR per month</p>
                    <p><b>Mother Tongue:</b> {response.data.motherTongue}</p>
                    <p><b>Email ID:</b> {response.data.emailId}</p>
                    <p><b>Notice Period:</b> {response.data.noticePeriod} days</p>
                    <p><b>Rating:</b> {response.data.rating}</p>
                    <p><b>Recommended by:</b> {response.data.recommendations}</p>
                    <p><b>Verification status:</b> {response.data.verified ? "True": "False"}</p>
                  </div>
                </div>
            </div>
          ),
          statusUpdate: "Show Details"
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  closePopupHandler(){
    this.setState({
      popup: null
    })
  }

  render(){

    return (
      <div className="chef">
        <div className="left">
          <img src={this.props.chef.imgUrl} alt={this.props.chef.name}/>
        </div>
        <div className="right">
          <h2>Chef Name: <span>{this.props.chef.name}</span></h2>
          <p>Chef Skills: {this.props.chef.skills}</p>
          <p>Years of Experience: {this.props.chef.experience}</p>
          <h6 onClick={this.showPopupHandler.bind(this)}>{this.state.statusUpdate}</h6>
        </div>
        { this.state.popup }
      </div>
    );
  }
}

export default Chef;