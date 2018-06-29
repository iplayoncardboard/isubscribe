import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
//import subscriptions from "../../../puppies.json";

class BrowseSubscriptions extends Component {
    state = {
        
        subscriptionName: [],
        description: "",
        category: "",
      };

     
      
componentDidMount() {
     this.loadSubscriptions();
}
      
    loadSubscriptions = () => {
          API.getSubscriptions()
            .then(res =>
              
                this.setState({ subscriptionName: res.data, description: "", category: "" })
            )
            
            .catch(err => console.log(err));
        };
      
    handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
    };

render(){
    return(
        <div>
        <h1>Browse Subscriptions</h1>
        {this.state.subscriptionName.map(subscriptions => (
          
          <BrowseCard
            key={subscriptions.category}
            name={subscriptions.subscriptionName}
            image={subscriptions.description}
          />
        ))}
        <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
</div>
    )
}


}

export default BrowseSubscriptions;