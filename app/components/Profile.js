import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfile from './UserProfile'
import PetProfile from './PetProfile'

// The Roster component matches one of two different routes
// depending on the full pathname
const Profile = () => (
  <Switch>
    <Route exact path='/userProfile' component={UserProfile}/>
    <Route path='/userProfile/:petId' component={PetProfile}/>
  </Switch>
)


export default Profile