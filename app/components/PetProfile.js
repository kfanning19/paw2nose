// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
var
var PetProfile = React.createClass({
	render:function(){
		return (<div className="container">
			        <h3 className="center"></h3>
			        <div className="row">
			            <div className="col s12">
			                <ul className="tabs">
			                    <li className="tab col s1"><Link className="active" to="#dashboard"><i className="material-icons">assessment</i></Link></li>
			                    <li className="tab col s2"><Link to="/activity">Activity</Link></li>
			                    <li className="tab col s2"><Link to="/contacts">Contacts</Link></li>
			                    <li className="tab col s1"><Link to="/diet">Diet</Link></li>
			                    <li className="tab col s2"><Link to="/health">Health</Link></li>
			                    <li className="tab col s2"><Link to="/medications">Medications</Link></li>
			                    <li className="tab col s2"><Link to="/settings">Settings</Link></li>
			                </ul>
			            </div>
		
			        </div>
			        	{this.props.children}
			    </div>)
	}

});
module.exports = PetProfile