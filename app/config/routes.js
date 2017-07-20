// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Search = require("../components/Search");
var Saved = require("../components/Saved");


// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="/about" component={About}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/forgot-password" component={Forgot}/>
      <Route path="/login" component={Login}/>
      <Route path="/userProfile/:userId" component={UserProfile}>
        <Route path="/userProfile/:userId/petProfile/:petId" component={PetProfile}>
          <Route path="/userProfile/:userId/petProfile/:petId/dashboard" component={Dashboard}/>
          <Route path="/userProfile/:userId/petProfile/:petId/activity" component={Activity}/>
          <Route path="/userProfile/:userId/petProfile/:petId/contacts" component={Contacts}/>
          <Route path="/userProfile/:userId/petProfile/:petId/diet" component={Diet}/>
          <Route path="/userProfile/:userId/petProfile/:petId/health" component={Health}/>
          <Route path="/userProfile/:userId/petProfile/:petId/medications" component={Medications}/>
          <Route path="/userProfile/:userId/petProfile/:petId/settings" component={Settings}/>
        </Route>
      </Route> 
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Login}>

    </Route>
  </Router>
);