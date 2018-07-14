import React, {Component} from 'react';
import "./Profile.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Charts from "../../components/Charts";
import Wrapper from "../../components/Wrapper";
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
      };

componentDidMount() {
     this.loadSubscriptions();
     this.getUser(this.props.email);
    //  console.log("props"+JSON.stringify(this.props));   

}

getUser = (email) => {
    API.getUser(email).then(
        res => 
        this.setState({user:res.data})
    )
    .then(console.log("State: "+JSON.stringify(this.state)))
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
        <h3>Charts</h3>

            <Charts/>

 
</div>
    )
}
}

export default Profile;