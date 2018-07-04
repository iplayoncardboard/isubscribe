import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Users from "./pages/Users/Users";
import NoMatch from "./pages/NoMatch";  
import Nav from "./components/Nav";
import NewUser from './pages/Users/NewUsers'
import Login from './pages/LogIn'
import Wrapper from './components/Wrapper'
import NewSubscription from './pages/Subscriptions/NewSubscription'
import BrowseSubscriptions from './pages/Subscriptions/BrowseSubscriptions'
import "./App.css";


const App = () => (
  <Router>
    <div>
      <Nav />
      <Wrapper>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users/new' component={NewUser} />
        <Route exact path="/users/:id" component={Users} />
        <Route exact path='/subscription/new' component={NewSubscription} />
        <Route exact path='/subscription' component={BrowseSubscriptions} />
        <Route component={NoMatch} />
      </Switch>
      </ Wrapper>
    </div>
  </Router>
);

export default App;
