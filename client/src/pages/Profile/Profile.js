import React, {Component} from 'react';
import "./Profile.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Charts from "../../components/Charts";
import { Input, FormBtn } from "../../components/Form";
import FusionCharts from 'fusioncharts';


FusionCharts.ready(function() {

    
    var columnChart = new FusionCharts({
        "type": "column3d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource": {
            "chart": {
                "caption": "This chart is from the instance",
                "subCaption": "Subscription Costs",
                "xAxisName": "Subscriptions",
                "yAxisName": "Cost (USD)/Month",
                "theme": "fint"
            },
            "data": [
                
                {
                    "label": "Amazon Prime",
                    "value": "9.92"
                },
                {
                    "label": "Hulu",
                    "value": "8.00"
                },
                {
                    "label": "Gold Box",
                    "value": "85.00"
                },
                {
                    "label": "Walt Life",
                    "value": "39.00"
                },
                {
                    "label": "Nook Magazine",
                    "value": "25.00"
                }
            ]
        }
    });

    columnChart.render();
    
});

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
        imageURL:"",
        street:"",
        apartment: this.props.imageURL,
        city:"",
        state:"",
        zip:"",
        age:"",
        subscriptions:[],
        editing: false
      };


getUser = (email) => {
    API.getUser(email).then(
        res => {
            console.log(res.data);
        this.setState({
            email: res.data.email,
            firstName:res.data.firstName,
            lastName:res.data.lastName,
            imageURL:res.data.picture
            })
        console.log("API RESPONSE: "+JSON.stringify(res.data))
        }
    )
    .catch(err => console.log(err));
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

handleUserUpdate = ()=>{
    let payload = {
     email: this.state.email,
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
     this.updateUser(payload);
 };

handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
          console.log(this.state.zip)
    };

    componentDidMount() {
        this.getUser(this.props.email);
         this.loadSubscriptions();
         console.log("props"+JSON.stringify(this.props));   
    
    }

render(){
    return(
        <div>
        <h1>Welcome {this.props.name}</h1>
        <h2>Your email is {this.props.email}</h2>
        <h3>Found user {this.state.email}</h3>
        <div className='form-container'>
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
            <FormBtn onClick={this.handleUserUpdate()}>Submit</FormBtn>
        </form>
    </div>
        <h3>Charts</h3>

            <Charts/>

 
</div>
    )
}
}

export default Profile;