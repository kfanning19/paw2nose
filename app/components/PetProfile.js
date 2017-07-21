import React from 'react'
import { Switch, Route } from 'react-router-dom'
import helpers from '../utils/helpers'
import Dashboard from '../PetProfile/Dashboard'
import Activity from '../PetProfile/Activity'
import Contacts from '../PetProfile/Contacts'
import Diet from '../PetProfile/Diet'
import Health from '../PetProfile/Health'
import Medications from '../PetProfile/Medications'
import Settings from '../PetProfile/Settings'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class PetProfile extends React.Component{
	constructors(){
		super();
		this.state={
			pet:{}
		}
	}
	componentDidMount(){
		let id=parseInt(props.match.params.petId);
		helpers.getPet(id).then(function(petData){
			console.log(petData)
			this.setState({pet: petData})
		}
	}
	render(){
	return (<div className='container'>
			        <h3 className='center'>{pet.name}</h3>
			        <div className='row'>
			            <div className='col s12'>
			              <Tabs>
						    <TabList>
						      <Tab><i className='material-icons'>assessment</i></Tab>
						      <Tab>Activity</Tab>
						      <Tab>Contacts</Tab>
						      <Tab>Diet</Tab>
						      <Tab>Health</Tab>
						      <Tab>Medications</Tab>
						      <Tab>Settings</Tab>
						    </TabList>

						    <TabPanel>
						      <Dashboard />
						    </TabPanel>
						    <TabPanel>
						      <Activity />
						    </TabPanel>
						    <TabPanel>
						      <Contacts />
						    </TabPanel>
						    <TabPanel>
						      <Diet />
						    </TabPanel>
						    <TabPanel>
						      <Health />
						    </TabPanel>
						    <TabPanel>
						      <Medications />
						    </TabPanel>
						    <TabPanel>
						      <Settings />
						    </TabPanel>
						  </Tabs>
			            </div>
			        </div>
			    </div>)
	}

};
export default PetProfile