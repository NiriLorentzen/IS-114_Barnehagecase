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