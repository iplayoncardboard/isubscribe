import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Users from "./pages/Users/Users";
import NoMatch from "./pages/NoMatch";  
import Nav from "./components/Nav";
import NewUser from './pages/Users/NewUsers'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path='/users/new' component={NewUser} />
        <Route exact path="/users/:id" component={Users} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
