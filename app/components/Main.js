// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
  <div className="navbar-fixed">
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">PhiloPet</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
    </div>
  </nav>
</div>



  <ul id="slide-out" className="side-nav">
    <li>
      <div className="user-view">
        <div className="background">
          <img src="images/office.jpg">
        </div>

        <a href="#!user"><img className="circle" src="http://i.imgur.com/fRlgNEE.jpg"></a>
        <a href="#!name"><span className="white-text name">Susan Heiniger</span></a>
        <a href="#!email"><span className="white-text email">susan.heiniger@gmail.com</span></a>
      </div>
    </li>

    <li><a href="#!">???</a></li>
    <li><a href="#!">User Profile</a></li>
    <li><a href="#!">About Us</a></li>
    <li><a href="#!">FAQ</a></li>
    <li><a href="#!">Logout</a></li>

  </ul>

  <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">view_headline</i></a>


          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

              <footer className="page-footer">
                 <div className="container">
                    <div className="row">
                      <div className="col s10">
                        <h5 className="white-text">PhiloPet © 2017</h5>
                      </div>

                      <div className="col s2">
                        <a className="white-text " href="#!">
                          <i className="fa fa-github-alt fa-3x" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;