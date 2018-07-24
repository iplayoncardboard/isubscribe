import React, {Component} from 'react';
import "./Profile.css";
import API from "../../utils/API";
import Charts from "../../components/Charts";
import { Input, FormBtn } from "../../components/Form";
import FusionCharts from 'fusioncharts';
import SubCard from '../../components/SubCard';



class Profile extends Component {
    state = {   
        user: "",
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        // copied from newUser
        email:"",
        firstName:"",
        lastName:"",
        imageURL:this.props.imageURL,
        street:"",
        apartment: "",
        city:"",
        state:"",
        zip:"",
        age:"",
        userSubscriptions:[],
        editing: false,
        reload: true
      };


getUser = (email) => {
    console.log(`email for lookup ${email}`)
    API.getUser(email).then(
        res => {
            console.log('res data' + JSON.stringify(res.data));
        this.setState({
            email: res.data.email,
            firstName:res.data.firstName,
            lastName:res.data.lastName,
            imageURL:res.data.picture,
            age:res.data.age,
            street: res.data.address.street,
            appartment: res.data.address.appartment,
            city: res.data.address.city,
            state: res.data.address.state,
            zip: res.data.address.zip

            })
        console.log("API RESPONSE: "+JSON.stringify(res.data))
        }
    )
    .catch(err => console.log(err));
}

getUserSubscriptions = (email) => {
    
    API.getUserSubscriptions(email)
    .then(res => this.setState({userSubscriptions:res.data}))
}

updateUser = (state) => {
    API.updateUser(state)
    .then(
        // this.setState({editing:false})
        console.log(`user update sent: ${this.state.zip}`)
    )
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

updateUser = (state) => {
    API.updateUser(state)
    .then(
        // this.setState({editing:false})
        console.log(`user update sent: ${JSON.stringify(state)}`)
    )
}

handleUserUpdate = (event)=>{
    event.preventDefault();
    console.log(this.state.firstName)
    let payload = {
     email: this.props.email,
     alias: this.state.user,
     firstName: this.state.firstName,
     lastName: this.state.lastName,
     age:this.state.age,
     imageURL:this.state.imageURL,
     address: {
         street: this.state.street,
         appartment: this.state.appartment,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip
         }
     }
     console.log(`Payload ${JSON.stringify(payload)}`)
     this.updateUser(payload);
 };

handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
          console.log(this.state.zip)
    };

removeSubscription = event => {
    event.preventDefault();
    // console.log('I Work'+ event.target.dataset.id)
    API.removeUserSubscription(event.target.dataset.id)
    .then(()=>{
        this.setState({reload:true})
        this.getUserSubscriptions(this.props.email)
    }).then(
        window.location.reload()
    )
    ;
}



componentDidMount() {
    if(this.props.email){
        this.getUser(this.props.email);
        this.getUserSubscriptions(this.props.email)
    }
   
        // this.loadSubscriptions();
     console.log("props"+JSON.stringify(this.props));   

}

render(){
    return(
        <div>
            <img src={this.props.imageURL} className='profilepic'/><br/><br/>
        <h3>Welcome {this.props.name}</h3>
        <p>Your email is {this.props.email}</p>
        {/* <p>Found user {this.state.email}</p> */}
        
        <div className='form-container'>
        <h4> Update Your User Information</h4>
        <form>
            <label>First Name</label>
            <Input name='firstName' value={this.state.firstName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Last Name</label>
            <Input name='lastName' value={this.state.lastName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Age</label>
            <Input name='age' value={this.state.age} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Image</label>
            <Input name='imageURL' value={this.state.imageURL} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Street</label>
            <Input name='street' value={this.state.street} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Apartment Number</label>
            <Input name='apartment' value={this.state.apartment} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>City</label>
            <Input name='city' value={this.state.city} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>State</label>
            <Input name='state' value={this.state.state} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Zip</label>
            <Input name='zip' value={this.state.zip} onChange={this.handleInputChange} type='text' className='user-input'/>
            <FormBtn onClick={this.handleUserUpdate}>Submit</FormBtn>
        </form>
    </div>
    <br /><br/>
        {/* <h3>Charts</h3> */}

            <Charts firstName={this.state.firstName}/>

 <br/><br/><h3> Manage My Subscriptions</h3>
 <div className="subscription-feed">
        {this.state.userSubscriptions.map((userSub)=>{
            return(
                <SubCard 
                id={userSub._id}
                name={userSub.subscriptionName}
                price={userSub.price}
                category={userSub.category}
                description={userSub.description}
                iconURL={userSub.iconURL}
                removeSubscription={this.removeSubscription}
                />
            )
        }
        )}
    </div>
</div>


    )
}
}

export default Profile;