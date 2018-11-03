import React, { Component } from "react";

import * as d3 from "d3";
import denny from "./Datasets/denny.csv";
import BarChart from './chart';
class Extract extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            final:[],
            element:[],
        }
      }
  componentDidMount() {
      var scope=this;
      var arr=scope.state.data;
      d3.csv(denny).then(function(data) {
        // console.log(data);
        scope.setState({
            data:data
        },()=>{
          // console.log(scope.state.data)
           var ele=[{StartTime: "",StopTime: "",e: "",et: "",
           s: "",
           st: ""
        }];
          scope.state.data.reverse().map((item)=>{
           var temp= item.StartTime;
                var temp1=ele.findIndex(k=> k.StartTime===temp);
                if(temp1===-1){
                ele.push(item);

            }
           else{
            //    if(ele[temp1].et>item.et){
            //     console.log("hello")
            //    }
            //    else{
                ele[temp1].et=item.et;
                ele[temp1].e=item.e;
                ele[temp1].StopTime=item.StopTime;
           //    }
           

        }

        }) 
       // console.log(ele)
        scope.setState({
            element:ele
        },()=>{
            console.log(scope.state.element)
            scope.state.element.map((value)=>{
                var x=value.StartTime+" "+value.st+" "+value.s;
                var y=value.StopTime+" "+value.et+" "+value.e;
                var date1=new Date(x);
                var date2=new Date(y);
                var res = Math.abs(date2 - date1) / 1000;
                var hours = Math.ceil(res / 3600) % 24;  
                let newelement = scope.state.final;
                newelement.push({date:value.StartTime,hours:hours})
                  scope.setState({final: newelement});
                },()=>{
                })  
                
            }) 
            console.log(scope.state.final);
   
         }
    )
      
      })
  }
  render() {
     return (
     
       <div style={{ height: '80%' }} >
                <BarChart data={this.state.final} />
            </div>  
        
          
     );
  }
}
export default Extract;
