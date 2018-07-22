import React, {Component} from 'react';
import "./BrowseSubscriptions.css";
import API from "../../../utils/API";
import { Link } from "react-router-dom";
import BrowseCard from "../../../components/BrowseCard";
import CatNav from "../../../components/CatNav";
import Wrapper from "../../../components/Wrapper";
import Auth from '../../../Auth';
import Popup from "reactjs-popup";
import jwtDecode from 'jwt-decode';


const auth = new Auth();

class BrowseSubscriptions extends Component {
    state = {   
        subscriptionObject: [],
        categories:[]
        
      };
    

addUserSubscription = (userSubscriptionData) =>{
    API.addUserSubscription(userSubscriptionData);
}


createSubscriptionDBObject = (event)=>{
    event.preventDefault();
    console.log(this.state.subscriptionObject)
    let selectedSubscription = this.state.subscriptionObject.filter(subscription => subscription._id === event.target.dataset.id)

    let newUserSubscription = {
        subscription:selectedSubscription[0]._id,
        description: selectedSubscription[0].description,
        categories:selectedSubscription[0].category,
        iconURL:selectedSubscription[0].iconURL,
        url: selectedSubscription[0].url,
        price: event.target.dataset.price,
        date: "",
        active:true,
        email:this.props.email
    }   

    this.addUserSubscription(newUserSubscription)
    

    // console.log(newUserSubscription)

}

// addToProfile = (event) =>{
//     this.createSubscriptionDBObject(event)
//     this.changeButton()  
// }  

// changeButton = (event) =>{
//     console.log("button clicked")
//     }  

componentDidMount() {
     this.loadSubscriptions();
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
    if (catFilter === "Video Streaming Service") {
        API.getVideo().then(res =>
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
    if (catFilter === "Arts and Crafts") {
        API.getArt().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Games") {
        API.getGames().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Books/Periodicals") {
        API.getBooks().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Outdoor") {
        API.getOutdoor().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Pets") {
        API.getPets().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Children") {
        API.getChildren().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    if (catFilter === "Photos") {
        API.getPhotos().then(res =>
            this.setState({
                subscriptionObject: res.data
            })).catch(err => console.log(err));
    }
    // if (catFilter === "Events") {
    //     API.getEvents().then(res =>
    //         this.setState({
    //             subscriptionObject: res.data
    //         })).catch(err => console.log(err));
    // }
    if (catFilter === "Sports/Fitness") {
        API.getSport().then(res =>
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

    getUserInfo(){
        if(localStorage.getItem('id_token')){
            return jwtDecode(localStorage.getItem('id_token'));
        }

        else{
            return {};
        }

    }

//For testing only
showState = (event) => {
    event.preventDefault();
    console.log(`State ${JSON.stringify(this.state.subscriptionObject)}`);
    console.log(`ID 0: ${this.state.subscriptionObject[0]._id}`);
    console.log(this.getUserInfo());
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

             

       {/* <button onClick={()=>{auth.isAuthenticated()===true ? console.log("not loged in"):console.log("logged out")}}>TEST</button> */}
                </div><br/>
                {auth.isAuthenticated()===true ?

<a href="/subscription/new"><button className="btn-custom">Add a Custom Subscriptions to My Profile</button></a>
: <span></span> }    
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
                createSubscriptionDBObject={this.createSubscriptionDBObject}
                // changeButton={this.changeButton}
                // addToProfile={this.addToProfile}
            />
            ))}
        </div>
    </div>
  </div>    
    {/* <button onClick={this.showState}>Test</button> */}
</div>


</ Wrapper>
</div>
    )
}


}

export default BrowseSubscriptions;