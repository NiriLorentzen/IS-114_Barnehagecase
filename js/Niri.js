//import circleCanvas from ".js/figures.js";
import {circleCanvas} from "https://nirilorentzen.github.io/IS-114_Barnehagecase/js/Niri.js";

//circleCanvas(22, 0.5, "blue")

function draw_figure(){
    circleCanvas(20, "solid", "red")
}
  

draw_figure()
//draw();
  
document.addEventListener("DOMContentLoaded", function() {
    var svg = document.getElementById('SVGobjekt');
    console.log(svg);

    var bla_rektangel = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bla_rektangel.setAttribute("width", "100");
        bla_rektangel.setAttribute("height", "70");
        bla_rektangel.setAttribute("fill", "#0000FF");
        bla_rektangel.setAttribute("x", "0");
        bla_rektangel.setAttribute("y", "0");
    svg.appendChild(bla_rektangel);

    var hvit_stripe = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe.setAttribute("width", "999");
        hvit_stripe.setAttribute("height", "10");
        hvit_stripe.setAttribute("fill", "#FFFFFF");
        hvit_stripe.setAttribute("x", "100");
        hvit_stripe.setAttribute("y", "10");
    svg.appendChild(hvit_stripe);

    var hvit_stripe_2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_2.setAttribute("width", "999");
        hvit_stripe_2.setAttribute("height", "10");
        hvit_stripe_2.setAttribute("fill", "#FFFFFF");
        hvit_stripe_2.setAttribute("x", "100");
        hvit_stripe_2.setAttribute("y", "30");
    svg.appendChild(hvit_stripe_2);

    var hvit_stripe_3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_3.setAttribute("width", "999");
        hvit_stripe_3.setAttribute("height", "10");
        hvit_stripe_3.setAttribute("fill", "#FFFFFF");
        hvit_stripe_3.setAttribute("x", "100");
        hvit_stripe_3.setAttribute("y", "50");
    svg.appendChild(hvit_stripe_3);

    var hvit_stripe_4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_4.setAttribute("width", "999");
        hvit_stripe_4.setAttribute("height", "10");
        hvit_stripe_4.setAttribute("fill", "#FFFFFF");
        hvit_stripe_4.setAttribute("x", "0");
        hvit_stripe_4.setAttribute("y", "70");
    svg.appendChild(hvit_stripe_4);

    var hvit_stripe_5 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_5.setAttribute("width", "999");
        hvit_stripe_5.setAttribute("height", "10");
        hvit_stripe_5.setAttribute("fill", "#FFFFFF");
        hvit_stripe_5.setAttribute("x", "0");
        hvit_stripe_5.setAttribute("y", "90");
    svg.appendChild(hvit_stripe_5);

    var hvit_stripe_6 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_6.setAttribute("width", "999");
        hvit_stripe_6.setAttribute("height", "10");
        hvit_stripe_6.setAttribute("fill", "#FFFFFF");
        hvit_stripe_6.setAttribute("x", "0");
        hvit_stripe_6.setAttribute("y", "110");
    svg.appendChild(hvit_stripe_6);

    var rod_stripe = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rod_stripe.setAttribute("width", "999");
        rod_stripe.setAttribute("height", "10");
        rod_stripe.setAttribute("fill", "#FF0000");
        rod_stripe.setAttribute("x", "100");
        rod_stripe.setAttribute("y", "0");
    svg.appendChild(rod_stripe);

    var rod_stripe_2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_2.setAttribute("width", "999");
    rod_stripe_2.setAttribute("height", "10");
    rod_stripe_2.setAttribute("fill", "#FF0000");
    rod_stripe_2.setAttribute("x", "100");
    rod_stripe_2.setAttribute("y", "20");
    svg.appendChild(rod_stripe_2);

    var rod_stripe_3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_3.setAttribute("width", "999");
    rod_stripe_3.setAttribute("height", "10");
    rod_stripe_3.setAttribute("fill", "#FF0000");
    rod_stripe_3.setAttribute("x", "100");
    rod_stripe_3.setAttribute("y", "40");
    svg.appendChild(rod_stripe_3);

    var rod_stripe_4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_4.setAttribute("width", "999");
    rod_stripe_4.setAttribute("height", "10");
    rod_stripe_4.setAttribute("fill", "#FF0000");
    rod_stripe_4.setAttribute("x", "100");
    rod_stripe_4.setAttribute("y", "60");
    svg.appendChild(rod_stripe_4);

    var rod_stripe_5 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_5.setAttribute("width", "999");
    rod_stripe_5.setAttribute("height", "10");
    rod_stripe_5.setAttribute("fill", "#FF0000");
    rod_stripe_5.setAttribute("x", "0");
    rod_stripe_5.setAttribute("y", "80");
    svg.appendChild(rod_stripe_5);

    var rod_stripe_6 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_6.setAttribute("width", "999");
    rod_stripe_6.setAttribute("height", "10");
    rod_stripe_6.setAttribute("fill", "#FF0000");
    rod_stripe_6.setAttribute("x", "0");
    rod_stripe_6.setAttribute("y", "100");
    svg.appendChild(rod_stripe_6);

    var rod_stripe_7 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_7.setAttribute("width", "999");
    rod_stripe_7.setAttribute("height", "10");
    rod_stripe_7.setAttribute("fill", "#FF0000");
    rod_stripe_7.setAttribute("x", "0");
    rod_stripe_7.setAttribute("y", "120");
    svg.appendChild(rod_stripe_7);


    console.log(svg)
});


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