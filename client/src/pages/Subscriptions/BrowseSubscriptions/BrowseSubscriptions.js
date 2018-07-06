import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
import Wrapper from "../../../components/Wrapper";
//import subscriptions from "../../../puppies.json";

class BrowseSubscriptions extends Component {
    state = {   
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        categories: "",
      };

          
componentDidMount() {
     this.loadSubscriptions();
    //  this.getCategories(); //ADDED THIS
}
      
loadSubscriptions = () => {
    API.getSubscriptions()
        .then(res =>
            this.setState({
            subscriptionName: res.data, 
            price: res.data,
            description: "", 
            category: "",
            iconURL: "",
            url: ""
         })
    )
        .catch(err => console.log(err));
};

// //ADDDED THIS
// getCategories = () =>
//     {
//         API.getCategories()
//         .then(response => {
//             console.log(response)
//             this.setState({categories:response.data})});
//     }

      
handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
    };

    // showDefaultPrice = id => {
    //     for (i=0, price.leg)
    //     if (this.price[i].default === true) {
    //      clickedItems.push(id);
    //      this.shuffleArray(puppies);
    //      this.setState(puppies);  
    //      scoreVar++;
    //    };

render(){
    return(
        <div>
             <Wrapper>
        <h1>Browse Subscriptions</h1>
        <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">All Subscriptions</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Category 1</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Category 2</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Category 3</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        {this.state.subscriptionName.map(subscriptions => (
            <BrowseCard
            //   key={subscriptions._id}
                name={subscriptions.subscriptionName}
                price={subscriptions.price}
                category={subscriptions.category}
                description={subscriptions.description}
                iconURL={subscriptions.iconURL}
                url={subscriptions.url}
            />
            ))}

        </div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
</ Wrapper>
</div>
    )
}


}

export default BrowseSubscriptions;