import React, { Component } from "react";
// import { scaleLinear } from "d3-scale";
// import { max } from "d3-array";
// import { select } from "d3-selection";
import * as d3 from "d3";
import denny from "./Datasets/denny.csv";

class Extract extends Component {

  componentDidMount() {
    d3.csv(denny).then(function(data) {
        console.log(data);
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
