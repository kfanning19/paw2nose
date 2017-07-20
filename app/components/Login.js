// Include React as a dependency
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Query Component Declaration
var Login = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      email: "",
      password: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    this.loggingIn(this.state.email, this.state.password);
  },
  loggingIn: function(newEmail,newpassword){
      helpers.logIn(newEmail, newpassword).then()
  },

  // Here we render the Query component
  render: function() {

    return (
      <div className="main-container">

  

                {/* Note how we associate the text-box inputs with the state values */}
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input value={this.state.email} id="email" type="email" className="validate" required>
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="password" value={this.state.password} type="password" className="validate" required>
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
});

// Export the module back to the route
module.exports = Login;