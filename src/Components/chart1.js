import React, { Component } from "react";
 import * as d3 from 'd3';
 import { Link } from "react-router-dom";

    class Chart1 extends Component {
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
      const svg = d3.select('svg');
      const margin = 100;
      const width = 700 - 2 * margin;
      const height = 500 - 2 * margin;
      const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);
      const xScale = d3.scaleBand()
        .range([0, width])
        .domain(this.props.data1.map((s) => s.date))
        .padding(0.3)
      const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 120]);
  
      const makeYLines = () => d3.axisLeft()
        .scale(yScale)
  
      chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")  
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");
  
      chart.append('g')
        .call(d3.axisLeft(yScale));
        chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat('')
        )
        const barGroups = chart.selectAll()
        .data(this.props.data1)
        .enter()
        .append('g')
  
      barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.date))
        .attr('y', (g) => yScale(g.hours))
        .attr('height', (g) => height - yScale(g.hours))
        .attr('width', xScale.bandwidth())
        .style('fill', 'blue')

      svg
      .append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('No of hours worked (hrs)')

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Working Days')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Number of hours worked weekly')

  }
    render() {
      return( 
        <div> 
          <svg ref={node => this.node = node}
             width={800} height={500}>
          </svg>
        </div>
      );
    }
    }
     export default Chart1;