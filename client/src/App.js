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
import Callback from './pages/Callback'
import Profile from './pages/Profile'
import "./App.css";
import Secret from './components/Secret'
import { PromiseProvider } from "mongoose";
import Auth from './Auth'



const auth = new Auth();

const PrivateRoute = ({ render: Component, ...rest}) => (

  <Route {...rest} render={(props) => (
    auth.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


class App extends Component {

state = {

  name:"Log In",
  email:"",
  auth,
  navMessage:"Log In"

};


componentDidMount() {
  let profile = auth.getProfile()
  console.log(profile);
  if(profile.nickname){
    if(profile.sub.startsWith('google-oauth2')){
      console.log('Google')
      this.setState({email:`${profile.nickname}@gmail.com`})
      this.setState({name:profile.name})
    }
    else if(profile.sub.startsWith('auth0')){
      console.log('Email')
      this.setState({email:profile.name})
      this.setState({name:profile.nickname})
    }
    
  }
  else {
    this.setState({navMessage:"Log In"});
    console.log(this.state);
  }
}

  render() {
    return(
      <Router>
        <div>
          <Nav {...this.state}/>
        <Wrapper>
          <Switch>
            <Route exact path="/" render={(props) =><Landing {...props} auth={this.state.auth}/>} />
            <Route exact path='/login' component={Login} auth={this.state.auth}/>
            <Route exact path='/users/new' component={NewUser} />
            <Route exact path="/users/:id" component={Users} />
            <Route exact path='/subscription/new' component={NewSubscription} />
            <Route exact path='/subscription' component={BrowseSubscriptions} />
            <PrivateRoute  exact path='/profile' render={(props) =>(<Profile {...props} name= {this.state.name} email={this.state.email} />) }   />
            <Route exact path='/callback' component={Callback} />
            <PrivateRoute auth={this.state.auth} exact path='/secret' component={Secret} />
            <Route component={NoMatch} />
          </Switch>
          </ Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
