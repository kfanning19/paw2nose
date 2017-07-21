import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import FAQ from './FAQ'
import Login from './Login'
import Profile from './Profile'
import Axios from 'axios'

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    axios.get('/api/user/profile').then((res)=>
	    if(res){
	        this.isAuthenticated = true
	    }else{
	    	this.isAuthenticated = false
	    }
	)   
  },
  signout(cb) {
    this.isAuthenticated = false
    axios.get('/logout')
  }
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/faq' component={FAQ}/>
      <AuthRoute path='/userprofile' component={Profile}/>
    </Switch>
  </main>
)
export default Main