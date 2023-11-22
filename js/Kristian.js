import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";


function draw_kristian_canvas(){
rectangleCanvas(400, 400, "solid", "white", 0, 0, "kristian");
circleCanvas(50, "solid", "yellow", 125, 65, "kristian");
rectangleCanvas(20, 5, "solid", "black", 120, 75, "kristian");
circleCanvas(10, "solid", "black", 115, 50, "kristian");
circleCanvas(10, "solid", "black", 140, 50, "kristian");
}

draw_kristian_canvas()
export {draw_kristian_canvas};


function draw_svg(){
rectangleSVG(400, 400, "solid", "white", 0, 0);
circleSVG(50, "solid", "yellow", 125, 65);
rectangleSVG(20, 5, "solid", "black", 120, 75);
circleSVG(10, "solid", "black", 115, 50);
circleSVG(10, "solid", "black", 140, 50);
}

draw_svg()