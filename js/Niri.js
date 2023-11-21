//import circleCanvas from ".js/figures.js";
import {circleCanvas} from "https://nirilorentzen.github.io/IS-114_Barnehagecase/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/IS-114_Barnehagecase/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/IS-114_Barnehagecase/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/IS-114_Barnehagecase/js/figures.js";



//circleCanvas(22, 0.5, "blue")

function draw_canvas(){
    //circleCanvas(20, "solid", "red", 20, 50);
    rectangleCanvas(999, 10, "solid", "red", 0, 0);
    rectangleCanvas(999, 10, "solid", "white", 0, 10);
    rectangleCanvas(999, 10, "solid", "red", 0, 20);
    rectangleCanvas(999, 10, "solid", "white", 0, 30);
    rectangleCanvas(999, 10, "solid", "red", 0, 40);
    rectangleCanvas(999, 10, "solid", "white", 0, 50);
    rectangleCanvas(999, 10, "solid", "red", 0, 60);
    rectangleCanvas(999, 10, "solid", "white", 0, 70);
    rectangleCanvas(999, 10, "solid", "red", 0, 80);
    rectangleCanvas(999, 10, "solid", "white", 0, 90);
    rectangleCanvas(999, 10, "solid", "red", 0, 100);
    rectangleCanvas(999, 10, "solid", "white", 0, 110);
    rectangleCanvas(999, 10, "solid", "red", 0, 120);

    rectangleCanvas(100, 70, "solid", "blue", 0, 0);
}
  

draw_canvas()
//draw();

function draw_svg(){
    rectangleSVG(999, 10, "solid", "red", 0, 0);
    rectangleSVG(999, 10, "solid", "white", 0, 10);
    rectangleSVG(999, 10, "solid", "red", 0, 20);
    rectangleSVG(999, 10, "solid", "white", 0, 30);
    rectangleSVG(999, 10, "solid", "red", 0, 40);
    rectangleSVG(999, 10, "solid", "white", 0, 50);
    rectangleSVG(999, 10, "solid", "red", 0, 60);
    rectangleSVG(999, 10, "solid", "white", 0, 70);
    rectangleSVG(999, 10, "solid", "red", 0, 80);
    rectangleSVG(999, 10, "solid", "white", 0, 90);
    rectangleSVG(999, 10, "solid", "red", 0, 100);
    rectangleSVG(999, 10, "solid", "white", 0, 110);
    rectangleSVG(999, 10, "solid", "red", 0, 120);
    rectangleSVG(100, 70, "solid", "blue", 0, 0);
}

draw_svg()


circleSVG(10, "solid", "red", 50, 50)


//graf dritt//
const data = [0, 30, 37, 5, 4, 15, 48, 12, 4];

const svg = d3.select("#graf");

const xScale = d3.scaleBand()
                .domain(d3.range(data.length))
                .range([0, 400])
                .padding(0.1);
const yScale = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, 300]);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => 300 - yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(d));

const xAxis = d3.axisBottom(xScale);
svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0, 300)")
    .call(xAxis);

const yAxis = d3.axisLeft(yScale);
svg.append("g")
    .attr("class", "axis")
    .call(yAxis);
