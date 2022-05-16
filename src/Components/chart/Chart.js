import React, {useEffect, useRef, useState} from 'react'
import * as d3 from 'd3'
import './chart-container.scss'
import chartData from '../../Data/chartData'


function Chart() {
    const [data, setData] = useState(chartData);
    const svgRef = useRef();



    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }



     const Shuffleddata = shuffleArray(data);

    useEffect(() => {
        
          

          const width = 1300;
          const height = 750;
          const margin = { top: 50, bottom: 50, left: 50, right: 50 };
          
          const svg = d3.select(svgRef.current)
            .append('svg')
            .attr('width', width - margin.left - margin.right)
            .attr('height', height - margin.top - margin.bottom)
            .attr("viewBox", [0, 0, width, height]);
          
          const x = d3.scaleBand()
            .domain(d3.range(Shuffleddata.length))
            .range([margin.left, width - margin.right])
            .padding(0.3)
          
          const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height - margin.bottom, margin.top])
          
          svg
            .append("g")
            .attr("fill", '#33bbff')
            .selectAll("rect")
            .data(data)
            .join("rect")
              .attr("x", (d, i) => x(i))
              .attr("y", d => y(d.score))
              .attr('title', (d) => d.score)
              .attr("class", "rect")
              .attr("height", d => y(0) - y(d.score))
              .attr("width", x.bandwidth());
          
          function yAxis(g) {
            g.attr("transform", `translate(${margin.left}, 0)`)
              .call(d3.axisLeft(y).ticks(null, data.format))
              .attr("font-size", '15px')
          }
          
          function xAxis(g) {
            g.attr("transform", `translate(0,${height - margin.bottom})`)
              .call(d3.axisBottom(x).tickFormat(i => data[i].name))
              .attr("font-size", '15px')
          }
          
          svg.append("g").call(xAxis);
          svg.append("g").call(yAxis);
          svg.node();
    
    }, [])
    
    
  return (
    <div className="chart__container">
          <h2 className="container__heading">The chart represents the score of users</h2>
          <svg className="chart__container--chart" ref={svgRef}/>
    </div>
  )
}

export default Chart