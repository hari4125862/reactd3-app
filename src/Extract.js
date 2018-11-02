import React, { Component } from "react";

import * as d3 from "d3";
import denny from "./Datasets/denny.csv";

class Extract extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            
                date:[],
                hours:[]
        }
      }
  componentDidMount() {
      var scope=this;
    d3.csv(denny).then(function(data) {
        // console.log(data);
        scope.setState({
            data:data
        },()=>{
          //  console.log(scope.state.data)
          scope.state.data.reverse().map((value)=>{
            var x=value.StartTime+" "+value.st+" "+value.s;
            var y=value.StopTime+" "+value.et+" "+value.e;
            var date1=new Date(x);
            var date2=new Date(y);
            var res = Math.abs(date2 - date1) / 1000;
            var hours = Math.ceil(res / 3600) % 24;  
           // console.log(value.StartTime);

            scope.setState({
               date: scope.state.date.push(value.StartTime),
                    hours: scope.state.hours.push(hours)
            },()=>{
            })  
            
        }) 
        console.log(scope.state.date);
        console.log(scope.state.hours);

        }
    )
        // for (let key in data) {
        //     console.log(data[key]);
        //   }
      })
  }
  render() {
     return (
       <div>
        hello

                 
        
           </div>
     );
  }
}
export default Extract;
