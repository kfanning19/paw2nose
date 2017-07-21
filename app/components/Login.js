import React from 'react'
import { Switch, Route } from 'react-router-dom'
import helpers from '../utils/helpers'

//Component Declaration
class PetProfile extends React.Component{
  // Here we set initial variables for the component to be blanks
  constuctor(props) {
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state= {
      email: "",
      password: ""
    };
  }

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange(event) {
    console.log("TEXT CHANGED");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit(event) {
    event.preventDefault();
    console.log("CLICKED");
    history.push('/userProfile')
  }


  // Here we render the Query component
  render() {

    return (
      <div className="main-container">
                {/* Note how we associate the text-box inputs with the state values */}
        <form action="/login" method="post" className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input value={this.state.email} id="email" type="email" className="validate" onChange={this.handleChange} required/>
              <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" value={this.state.password} type="password" className="validate" onChange={this.handleChange} required/>
                <label for="password">Password</label>
              </div>
            </div>
                  {/* Here we create the onClick event that triggers the HandleSubmit */}
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
            </button>
          </form>

      </div>
    );
  }
};

// Export the module back to the route
export default Login