import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
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
import Secret from './components/Secret'
import { PromiseProvider } from "mongoose";
import Auth from './Auth'



const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    props.auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)



class App extends Component {
  render() {
    return(
  <Router>
    <div>
      <Nav {...this.props}/>
      <div>{this.props.name}</div>
      <Wrapper>
      <Switch>
        <Route exact path="/" component={Landing} data />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users/new' component={NewUser} />
        <Route exact path="/users/:id" component={Users} />
        <Route exact path='/subscription/new' component={NewSubscription} />
        <Route exact path='/subscription' component={BrowseSubscriptions} />
        <PrivateRoute {...this.props} exact path='/secret' component={Secret} />
        <Route component={NoMatch} />
      </Switch>
      </ Wrapper>
    </div>
  </Router>
    )
  }
}

export default App;
