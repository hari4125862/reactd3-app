import React, { Component } from "react";
 import * as d3 from 'd3';
import Chart1 from "./chart1"
import Chart2 from "./chart2"
 class BarChart extends Component {
    constructor(props){
    super(props)
      this.state={
        which:true,
        value:[],
        value1:[]
        }
        this.createDailyBarChart = this.createDailyBarChart.bind(this)
        this.createMonthlyBarChart = this.createMonthlyBarChart.bind(this)
    }
    componentDidMount() {
      this.setState({
        value:this.props.data,
        value1:this.props.data1
      })
    }
  
    createDailyBarChart() {
      this.setState({
        which:true
      })
  
    }

    createMonthlyBarChart() {
        
      this.setState({
        which:false
      })
  
  }
     render() {

           return( 
           <div> 
           <button onClick={this.createDailyBarChart}>daily</button>
           <button onClick={this.createMonthlyBarChart}>weekly</button>
          { this.state.which ? <Chart2 data={this.state.value}  /> : <Chart1 data1={this.state.value1}/>}
           </div>
           );
        }
     }
     export default BarChart;