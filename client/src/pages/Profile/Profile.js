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
        user: {},
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
        street:"",
        apartment:"",
        city:"",
        state:"",
        zip:"",
        age:""
      };

componentDidMount() {
    this.getUser(this.props.email);
     this.loadSubscriptions();
     
    //  console.log("props"+JSON.stringify(this.props));   

}

getUser = (email) => {
    API.getUser(email).then(
        res => {
        this.setState({user:{
            email: res.data.email
            
        }})
        console.log("API RESPONSE: "+JSON.stringify(res.data))
        }
    )
    .catch(err => console.log(err));
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
      
handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
    };



render(){
    return(
        <div>
        <h1>Welcome {this.props.name}</h1>
        <h2>Your email is {this.props.email}</h2>
        <h3>Found user {this.state.user.name}</h3>
        <div className='form-container'>
        <form>
            <label>Email Address</label>
            <Input name='email' value={this.state.email} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>password</label>
            <Input name='password' value={this.state.password} onChange={this.handleInputChange} type='password' className='user-input'/>
            <label>First Name</label>
            <Input name='firstName' value={this.state.firstName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Last Name</label>
            <Input name='lastName' value={this.state.lastName} onChange={this.handleInputChange} type='text' className='user-input'/>
            <label>Age</label>
            <Input name='age' value={this.state.age} onChange={this.handleInputChange} type='text' className='user-input'/>
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
            <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
        </form>
    </div>
        <h3>Charts</h3>

            <Charts/>

 
</div>
    )
}
}

export default Profile;