import React, { Component } from "react";
 import * as d3 from 'd3';
import { scaleLinear } from "d3-scale"
import { max } from"d3-array"
import { select } from "d3-selection"

    class BarChart extends Component {
        constructor(props){
           super(props)
           this.createBarChart = this.createBarChart.bind(this)
        }
        componentDidMount() {
           this.createBarChart()
        }
        componentDidUpdate() {
           this.createBarChart()
        }
        createBarChart() {
           const node = this.node
        //    const dataMax = max(this.props.data.hours)
           const yScale = scaleLinear()
              .domain([0, 100])
              .range([0, this.props.size[1]])
              const makeYLines = () => d3.axisLeft()
              .scale(yScale)
              
        select(node)
           .selectAll('rect')
           .data(this.props.data)
           .enter()
           .append('rect')
        
        select(node)
           .selectAll('rect')
           .data(this.props.data)
           .exit()
           .remove()
        
        select(node)
           .selectAll('rect')
           .data(this.props.data)
           .style('fill', '#fe9922')
           .attr('x', (d,i) => i * 25)
           .attr('y', d => this.props.size[1] - yScale(d))
           .attr('height', d => yScale(d))
           .attr('width', 25)

        // const svg = d3.select('svg');
    
        // const margin = 100;
        // const width = 700 - 2 * margin;
        // const height = 500 - 2 * margin;
    
        // const chart = svg.append('g')
        //   .attr('transform', `translate(${margin}, ${margin})`);
    
        // const xScale = d3.scaleBand()
        //   .range([0, width])
        //   .domain(this.props.data1.map((s) => s))
        //   .padding(0.3)
        
        // const yScale = d3.scaleLinear()
        //   .range([height, 0])
        //   .domain([0, 100]);
    
        
    
        // const makeYLines = () => d3.axisLeft()
        //   .scale(yScale)
    
        // chart.append('g')
        //   .attr('transform', `translate(0, ${height})`)
        //   .call(d3.axisBottom(xScale));
    
        // chart.append('g')
        //   .call(d3.axisLeft(yScale));
    
           
        }
     render() {
           return <svg ref={node => this.node = node}
           width={500} height={500}>
           </svg>
        }
     }
     export default BarChart;