import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
import CatNav from "../../../components/CatNav";
import Wrapper from "../../../components/Wrapper";
import Auth from '../../../Auth';
import Popup from "reactjs-popup";

class BrowseSubscriptions extends Component {
    state = {   
        subscriptionObject: [],
        categories:[],
        addSubscription: this.addSubscription
      };


addSubscription = () =>{
    API.
}

componentDidMount() {
     this.loadSubscriptions();
     const auth = new Auth();
     auth.handleAuthentication();
     this.getCategories();
}
      
loadSubscriptions = () => {
     API.getSubscriptions() 
    // API.getMusic()   
        .then(res => {
            // console.log(res.data[0]._id);
            this.setState({
            subscriptionObject: res.data
         })
        }
    )
    .catch(err => console.log(err));

};

loadCatSubscriptions = catFilter => {
    if (catFilter === "Music Streaming") {
        API.getMusic().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Food") {
        API.getFood().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Fashion") {
        API.getFashion().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Video Streaming Service") {
        API.getVideo().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
};


getCategories = () =>
    {API.getCategories()
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

showState = (event) => {
    event.preventDefault();
    console.log(`State ${JSON.stringify(this.state.subscriptionObject)}`);
    console.log(`ID 0: ${this.state.subscriptionObject[0]._id}`);
}

render(){
    return(
        <div>
             <Wrapper>

<br/><br/>
        <div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
                 <button className="left-menu" onClick={() => this.loadSubscriptions()}><b>All Subscriptions</b></button>
                 
                {/* <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home" onClick={() => this.loadSubscriptions()}>All Subscriptions</a> */}
                    {this.state.categories.map(categoryName =>( 
                        <CatNav id={categoryName._id} categoryName={categoryName.name} loadCatSubscriptions={this.loadCatSubscriptions}/> 
                    ))} 
                </div>    
            </div>

  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      
        {this.state.subscriptionObject.map((subscription) => (
            <BrowseCard
                id={subscription._id}
                name={subscription.subscriptionName}
                price={subscription.price}
                category={subscription.category}
                description={subscription.description}
                iconURL={subscription.iconURL}
                url={subscription.url}
            />
            ))}
        </div>
    </div>
  </div>    
  <button onClick={this.showState}> Show State </button>
</div>


</ Wrapper>
</div>
    )
}


}

export default BrowseSubscriptions;