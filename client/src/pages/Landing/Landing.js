import React, { Component } from "react";
import "./Landing.css";
import Jumbotron from "../../components/Jumbotron";
import HomepageCallouts from "../../components/HomepageCallouts";
import HomepageCard from "../../components/HomepageCard";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class Landing extends Component{
    state = {
        user: {},
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        price: {},
        categories:[],
       featured: [],
       featured2: [],
      };
    
componentDidMount() {
     this.loadSubscriptions();
     
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
            featured: []
            
         })
        
    ).then(res =>
       // console.log(res)
        this.getFeatured(this.state.subscriptionName)
        
    ).then (res =>
        this.getFeatured2(this.state.subscriptionName)
    )
    .catch(err => console.log(err));
    
};

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
};

getFeatured = array => {
    var featuredArray = array.slice(3,7);   
    this.setState({
        featured: featuredArray
      });
      console.log(featuredArray);
}

getFeatured2 = array => {
    var featuredArray2 = array.slice(8,12);   
    this.setState({
        featured2: featuredArray2
      });
      console.log(featuredArray2);
}

render(){
        return(
            <div>
  <Jumbotron {...this.props}/>
  <HomepageCallouts/>
  <br/><br/><br/><br/>
<center><h3>Featured Subscriptions</h3></center>  <br/> 
  <div className="card-deck">

{this.state.featured.map(subscriptions => (
    
// {this.state.subscriptionName.map(subscriptions => (
    <HomepageCard
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
    </div><br/><br/>
    <div className="card-deck">

{this.state.featured2.map(subscriptions => (
    
// {this.state.subscriptionName.map(subscriptions => (
    <HomepageCard
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
        )
    }

}

export default Landing;