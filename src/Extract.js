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
            final1:[],
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
                let newelement1 = scope.state.final1;

                newelement.push(hours)
                newelement1.push(value.StartTime)

                  scope.setState({final: newelement,
                                    final1:newelement1}
                                );
                },()=>{
                })  
                
            }) 
            console.log(scope.state.final);
            console.log(scope.state.final1);

   
         }
    )
      
      })
  }
  render() {
     return (
     
       <div style={{ height: '80%' }} >
                <BarChart data={this.state.final} size={[500,500]} data1={this.state.final1}/>
            </div>  
        
          
     );
  }
}
export default Extract;
