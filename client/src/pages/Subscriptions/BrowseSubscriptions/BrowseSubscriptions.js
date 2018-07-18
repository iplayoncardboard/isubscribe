import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
import CatNav from "../../../components/CatNav";
import Wrapper from "../../../components/Wrapper";
import Auth from '../../../Auth';
import Popup from "reactjs-popup";

const auth = new Auth();

class BrowseSubscriptions extends Component {
    state = {   
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        price: {},
        categories:[],
      };
      


componentDidMount() {
     this.loadSubscriptions();
    
     auth.handleAuthentication();
     this.getCategories();
}
      
loadSubscriptions = () => {
     API.getSubscriptions() 
    // API.getMusic()   
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

loadCatSubscriptions = catFilter => {
    if (catFilter === "Music Streaming") {
        API.getMusic().then(res =>
            this.setState({
                subscriptionName: res.data, 
                price: res.data,
                description: "",
                category: "",
                iconURL: "",
                url: "",
            })).catch(err => console.log(err));
    }
    if (catFilter === "Food") {
        API.getFood().then(res =>
            this.setState({
                subscriptionName: res.data, 
                price: res.data,
                description: "",
                category: "",
                iconURL: "",
                url: "",
            })).catch(err => console.log(err));
    }
    if (catFilter === "Fashion") {
        API.getFashion().then(res =>
            this.setState({
                subscriptionName: res.data, 
                price: res.data,
                description: "",
                category: "",
                iconURL: "",
                url: "",
            })).catch(err => console.log(err));
    }
    if (catFilter === "Video Streaming Service") {
        API.getVideo().then(res =>
            this.setState({
                subscriptionName: res.data, 
                price: res.data,
                description: "",
                category: "",
                iconURL: "",
                url: "",
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
                        <CatNav key={categoryName._id} categoryName={categoryName.name} loadCatSubscriptions={this.loadCatSubscriptions}/> 
                    ))} 

             

       {/* <button onClick={()=>{auth.isAuthenticated()===true ? console.log("not loged in"):console.log("logged out")}}>TEST</button> */}
                </div><br/>
                {auth.isAuthenticated()===true ?

<a href="/subscription/new"><button className="btn-custom">Add a Custom Subscriptions to My Profile</button></a>
: <span></span> }    
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
                price={subscriptions.price}
            />      
            ))}

        </div>
    </div>
  </div>    
</div>


</ Wrapper>
</div>
    )
}


}

export default BrowseSubscriptions;