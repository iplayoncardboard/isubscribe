import FusionCharts from 'fusioncharts';
import React, {Component} from "react";
import "./Charts.css";
import ReactFC from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';

Chart(FusionCharts);

//Need to update price to be the one that's set to default, not just the first one in array
class Charts extends Component {
state={


  pieSource:{
    data:[{
      label: "Music Streaming Service",
      value: "2"
  },
  {
      label: "Video Streaming Service",
      value: "1"
  },
  {
      label: "Fashion",
      value: "2"
  },
  {
      label: "Food",
      value: "1"
  }],
    chart:{caption: "Stephanie's Subscription Usage",
    captionFontBold: "1",
    subCaption: "by Category",
    theme: "fint",
    baseFont: "Verdana",
    baseFontSize: "13",
    baseFontColor: "#0066cc",
    decimals: "2"}
  },

  colSource:{
    data:[{
      label: "Amazon Prime",
      value: "12.99",

  },
  {
      label: "Le Tote",
      value: "79.00"
  },
  {
      label: "Rent The Runway",
      value: "159.00"
  },
  {
      label: "Plated",
      value: "9.95"
  },
  {
      label: "Spotify Premium",
      value: "9.99"
  },
  {
      label: "Apple Music",
      value: "9.99"
  }
],
    chart:{caption: `'s Subscriptions`,
    subCaption: "by Cost",
    xAxisName: "Subscriptions",
    yAxisName: "Price (USD)/Month",
    xAxisNameFontBold: "1",
    yAxisNameFontBold: "1",
    numberPrefix: "$",
    decimals: "2",
    forceDecimals: "1",
    theme: "fint",
    showToolTip: "0",
    baseFont: "Verdana",
    baseFontSize: "13",
    baseFontColor: "#0066cc",
}
  },
  colConfig:{ type: "column3d",
  renderAt: "chartContainer",
  width: "500",
  height: "300",
  dataFormat: "json",
  dataSource:{}},

  pieConfig:{
    type: "pie3d",
    renderAt: "piechartContainer",
    width: "500",
    height: "300",
    dataFormat: "json",
    dataSource:{}
}

};

renderColumnCharts = () => {
    let colTemp = {...this.state.colConfig}
  colTemp.dataSource = {...this.state.colSource}
  this.setState({colConfig:colTemp})
}

renderPieCharts = () => {
  let pieTemp = {...this.state.pieConfig}
pieTemp.dataSource = {...this.state.pieSource}
this.setState({pieConfig:pieTemp})
}

// renderCharts = (chartConfig, chartSource) => {
//   console.log('CFG: '+ JSON.stringify(chartConfig));
//   let temp = {...chartConfig}
//   temp.dataSource = {...chartSource}
//   this.setState({chartConfig:temp})
// }

componentDidMount(){
this.renderColumnCharts();
this.renderPieCharts();
}
  
render(){

return(
  <div>
  {/* <div id="chartContainer">Subscription Costs Per Month</div>
  <div id="piechartContainer">% Spent in each cagegory</div> */}
  <ReactFC {...this.state.colConfig} />
  <ReactFC {...this.state.pieConfig} />
  
  </div>

)}
 

}

export default Charts;
