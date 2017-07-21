import React from 'react'
import Messages from '../Dashboard/Messages'
import Calender from '../Dashboard/Calendar'
import BasicInfo from '../Dashboard/BasicInfo'

class Dashboard extends React.Component{
	constructors(){
		super();
		this.state.petId= ''
	}
	componentDidMount(){
		setId();
	}
	setId(){
		let id=parseInt(props.match.params.petId);
		this.setState({petId: id})
	}
	render(){
		return(
			<div id="dashboard" className="col s12">
			    <div className="row">
			        <div className="col s6">
			            <div className="row">
			                <div className="col s12" id="pet-info">
			                	<BasicInfo petId={this.state.petId}/>
			                </div>
			            </div>
			        	<div className="row">
				            <div className="col s12" id="message-board">
				                <Messages petId={this.state.petId}/>
				            </div>
				        </div>
			        </div>
			        <div className="col s6" id="calendar">
			            <Calendar petId={this.state.petId}/>
			        </div>
			    </div>
			</div>)
	}
}
export default Dashboard