import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
import CatNav from "../../../components/CatNav";
import Wrapper from "../../../components/Wrapper";
import Auth from '../../../Auth';




class BrowseSubscriptions extends Component {
    state = {   
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        categories:[]
      };

          
componentDidMount() {
     this.loadSubscriptions();
     const auth = new Auth();
     auth.handleAuthentication();
     this.getCategories(); //added this
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
            url: "",
            
         })
    )
        .catch(err => console.log(err));
};

// //ADDDED THIS
getCategories = () =>
    {
        API.getCategories()
        .then(response => {
            this.setState({
                categories:response.data
            })});
    }

      
handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
    };

render(){
    return(
        <div>
             <Wrapper>

        <h1>Browse Subscriptions</h1>
        <div className="row">
            <div className="col-4">
                <div className="list-group" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">All Subscriptions</a>
                    {this.state.categories.map(categoryName =>(
                        <CatNav key={categoryName._id} categoryName={categoryName.name}/> 
                    ))} 
                </div>    
            </div>

  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      
        {this.state.subscriptionName.map(subscriptions => (
            <BrowseCard
               key={subscriptions._id}
                name={subscriptions.subscriptionName}
                price={subscriptions.price}
                category={subscriptions.category}
                description={subscriptions.description}
                iconURL={subscriptions.iconURL}
                url={subscriptions.url}
            />
            ))}

        </div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
</ Wrapper>
</div>
    )
}


}

export default BrowseSubscriptions;