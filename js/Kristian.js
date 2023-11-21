import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";


function draw_canvas(){
rectangleCanvas(400, 400, "solid", "white", 0, 0);
circleCanvas(50, "solid", "yellow", 125, 65);
rectangleCanvas(20, 5, "solid", "black", 100, 75);
circleCanvas(15, "solid", "black", 45, 45);
circleCanvas(15, "solid", "black", 90, 45);
}

draw_canvas()


function draw_svg(){
rectangleSVG(400, 400, "solid", "white", 0, 0);
circleSVG(50, "solid", "yellow", 125, 65);
rectangleSVG(20, 5, "solid", "black", 120, 75);
circleSVG(10, "solid", "black", 115, 35);
circleSVG(10, "solid", "black", 140, 35);
}

draw_svg()