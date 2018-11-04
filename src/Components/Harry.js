import React, { Component } from "react";
import * as d3 from "d3";
import harry from "./../Datasets/harry.csv";
import BarChart from './chart';
import { Link } from "react-router-dom";

class Harry extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            final:[],
            element:[],
            week:[]
        }
      }
  componentWillMount() {
      var scope=this;
      var newelement = scope.state.final;
      d3.csv(harry).then(function(data) {
        scope.setState({
            data:data
        })
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
                ele[temp1].et=item.et;
                ele[temp1].e=item.e;
                ele[temp1].StopTime=item.StopTime;           
        }

        }) 
        scope.setState({
            element:ele
        })
        console.log(scope.state.element)
                scope.state.element.map((value)=>{
                var x=value.StartTime+" "+value.st+" "+value.s;
                var y=value.StopTime+" "+value.et+" "+value.e;
                var date1=new Date(x);
                var date2=new Date(y);
                var res = Math.abs(date2 - date1) / 1000;
                var hours = Math.ceil(res / 3600) % 24;  
                newelement = scope.state.final;
                newelement.push({date:value.StartTime,hours:hours})
                })  
                scope.setState({final: newelement});
                console.log(scope.state.final);
                var len=scope.state.final.length;
                var temp=0;
                var count=0;
                let newelement2 = scope.state.week;

                for(var i=1;i<len;i++){
                    if(i%7===0){
                        count++;
                        temp=temp+scope.state.final[i].hours;
                        newelement2.push({date:count+" week",hours:temp})
                        scope.setState({week: newelement2});
                        temp=0;
                    }
                    else{
                        temp=temp+scope.state.final[i].hours;
                    }
                    newelement2.push({date:count+" week",hours:temp})
                    scope.setState({week: newelement2});
                }
                console.log(scope.state.week);
                })  

  }
  
  render() {
     return (
        <div style={{ height: '100%' }} >
        <h2>Harry</h2>

            <Link className="nav-link" to="/">
                <button>Back</button>
            </Link>
            <BarChart data={this.state.final} data1={this.state.week} />
        </div>  
    );
}
}
export default Harry;
