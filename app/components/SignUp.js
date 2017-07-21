import React from 'react'
import { Switch, Route } from 'react-router-dom'
import helpers from '../utils/helpers'

// Query Component Declaration
class PetProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name:"",
      last_name:"",
      phone:""      
    }
    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  // Whenever we detect ANY change in the textbox, we register it.
  handleChange(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    helpers.logIn(event, this.state.email, this.props.history);
  }

  // Here we render the SignUp component
  render() {
    return (
      <div class="container" id="signup-container">
        <div class="row">
            <h4>Sign up!</h4>
        </div> 
        <div class="row">
            <form class="col s12" action="/newUser" method="POST" onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="input-field col s6">
                        <input value={this.state.first_name} id="signup_first" type="text" class="validate" onChange={this.handleChange} required/>
                        <label for="signup_first">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="signup_last" value={this.state.last_name} type="text" class="validate" onChange={this.handleChange} required/>
                        <label for="signup_last">Last Name</label>
                    </div>
                </div>

                 <div class="row">
                    <div class="input-field col s6">
                        <input value={this.state.email} id="signup_email" type="email" class="validate" onChange={this.handleChange} required/>
                        <label for="signup_email">Email Address</label>
                    </div>
                    <div class="input-field col s6">
                        <input value={this.state.phone} id="signup_phone" type="number" class="validate"/>
                        <label for="signup_phone"onChange={this.handleChange}>Phone Number</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6">
                        <input value={this.state.password} id="signup_password" type="password" class="validate"/>
                        <label for="signup_password" onChange={this.handleChange}>Password</label>
                    </div>
                </div>

                <div class="file-field input-field">
                  <div class="btn">
                    <span>File</span>
                    <input type="file" value={this.state.image} onChange={this.handleChange}/>
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" onChange={this.handleChange} type="text"/>
                  </div>
                </div>
                <button class="waves-effect waves-light btn">Submit</button>
              </form>
            </div>
          </div>
    );
  }
};

// Export the module back to the route
export default SignUp