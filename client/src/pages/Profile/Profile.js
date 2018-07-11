import React, {Component} from 'react';
import "./Profile.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Charts from "../../components/Charts";
import Wrapper from "../../components/Wrapper";
import FusionCharts from 'fusioncharts';

class Profile extends Component {
    state = {   
        subscriptionName: [], 
        price: [],
        description: "",
        category: "",
        iconURL: "",
        url: "",
        categories:[],
      };

componentDidMount() {
     this.loadSubscriptions();
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
             <Wrapper>
        <h1>Charts</h1>

{FusionCharts.ready(function() {
    var columnChart = new FusionCharts({
        "type": "column3d",
        "renderAt": "columnChartContainer",
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
            "data": [{
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
    
})}

<div id="columnChartContainer">FusionCharts XT will load here!</div>
</ Wrapper>
</div>
    )
}
}

export default Profile;