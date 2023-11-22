import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";



var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


function drawIceCream() {
    context.fillStyle = 'gold';

    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(150, 250);
    context.lineTo(250, 250);
    context.fill();

    context.beginPath();
    context.arc(200, 100, 50, 0, Math.PI * 2);
    context.fill();

    circleCanvas(50, "solid", "gold", 200, 100)
    //(radius, mode, color, x, y
}

function drawCone() {
    context.fillStyle = '#8e44ad';

    context.beginPath();
    context.moveTo(150, 250);
    context.lineTo(200, 400);
    context.lineTo(250, 250);
    context.fill();
}

function drawIceCreamCone() {
    drawCone();
    drawIceCream();
}

window.onload = function() {
    drawIceCreamCone();
};


function drawConeSVG(){
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById("SVGobjekt");
        var polygon_1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        polygon_1.setAttribute("fill", "#8e44ad");
        polygon_1.setAttribute("stroke", "black")
        polygon_1.setAttribute("points", "150,250 200,400 250,250");
        console.log(svg);
        console.log(polygon_1);
        svg.appendChild(polygon_1);

        var polygon_2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        polygon_2.setAttribute("fill", "#8e44ad");
        polygon_2.setAttribute("stroke", "black")
        polygon_2.setAttribute("points", "200, 100 150, 250 250,250");
        console.log(svg);
        console.log(polygon_2);
        svg.appendChild(polygon_2);


}
    )
}

function drawIceCream_SVG(){
    circleSVG(50, "solid", "gold", 200, 100)
    //circleCanvas(radius, mode, color, x, y)
}

function figureSVG(){
    drawConeSVG();
    drawIceCream_SVG();
}
//<polygon points="150,250 200,400 250,250" fill="#8e44ad"/>
//            <path d="M200,100 L150,250 L250,250 Z" fill="gold"/>
//            <circle cx="200" cy="100" r="50" fill="gold"/>

figureSVG()
