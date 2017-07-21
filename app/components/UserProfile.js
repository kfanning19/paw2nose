import React from 'react'
import { Link } from 'react-router-dom'
// Include Pet Profile 
import PetProfile from './PetProfile"'

// Include the helpers for making API calls
import helpers from '../utils/helpers'


class UserProfile extends React.Component({
	constructors(){
		this.state= {
			userDetails:""
		}
	this.handleClick=this.handleClick.bind(this);
	}
	componentDidMount(){
		helpers.getUser.then(function(user){
			this.setState({userDetails: user})
		}).bind(this)
	}
	render(){
		return(
		<div className="container">
	        <div className="row">
	            <div className="col s4">
	                <img src=`{userDetails.image}`/>
	            </div>
	            <div className="col s8">
	                <h2>{userDetails.first_name} {userDetails.last_name}</h2>
	                <p>{user.email}</p>
	                <p>{user.phone}</p>
	                <button className="waves-effect waves-light btn-large"><i className="material-icons left">mode_edit</i>Edit Your Information</button>
	                <a className="waves-effect waves-light btn-large"><i className="material-icons left" href="/add-pet">mode_edit</i>Add a Pet</a>
	            </div>
	        </div>
	        <div className="divider"></div>
	        <div id="display-pets"></div>
	        	{this.state.userDetails.map(function(user,i){
	        		return(
	        			<Link to={`/userProfile/${user.Pet.id}`}>
	        				<div key={i}>
			        			<div class="col s6 m4">
		             					<div class="card horizontal">
			        						<div class="card-image">
			        							<img src={user.Pet[i].image}/>
			        						</div>
			        						<div class="card-stacked">
			        							<div class="card-content">
			        								<p>{user.Pet[i].name}</p>
			        								<p>Birthday:{user.Pet[i].dob}.</p>
			        								<p>I love {user.Pet[i].favorite_toy}</p>
			        							</div>
			        						</div>
			        					</div>
			        				</div>
			        			</div>
	        				</Link>

	        			).bind(this);
				})}
	    </div>
			)
	}
})

export default UserProfile;