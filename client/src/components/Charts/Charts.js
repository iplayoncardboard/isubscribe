import FusionCharts from 'fusioncharts';
import React, {Component} from "react";
import "./Charts.css";
import ReactFC from 'react-fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import graphCalc from '../../utils/graphCalc'

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
    chart:{caption: `Your Subscription Usage`,
    captionFontBold: "1",
    subCaption: "by Category",
    theme: "fint",
    baseFont: "Verdana",
    baseFontSize: "13",
    baseFontColor: "#0066cc",
    decimals: "2"}
  },

  colSource:{
    data:[],
    chart:{caption: `Your Subscriptions`,
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
  width: "800",
  height: "400",
  dataFormat: "json",
  dataSource:{}},

  pieConfig:{
    type: "pie3d",
    renderAt: "piechartContainer",
    width: "800",
    height: "400",
    dataFormat: "json",
    dataSource:{}
}

};

populateColumnChart = () => {
    let sourceTemp = {...this.state.colSource}
    sourceTemp.data = graphCalc.generateColSource(this.props.userSubscriptions)
} 

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
this.populateColumnChart();
this.renderColumnCharts();
this.renderPieCharts();
// console.log(`User Subs Charts : ${this.props.userSubscriptions}`)
}
  
render(){

return(
  <div>

  <div className="chart1"> <ReactFC {...this.state.colConfig} /></div><br/>
  <div className="chart2"> <ReactFC {...this.state.pieConfig} /></div>
  
  </div>

)}
 

}

export default Charts;
