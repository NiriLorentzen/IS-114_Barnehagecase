import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";


function draw_canvas(){
rectangleCanvas(400, 400, "solid", "black", 0, 0);
circleCanvas(150, 150, "solid", "red", 125, 65);
}

draw_canvas()


function draw_svg(){
rectangleSVG(400, 400, "solid", "black", 0, 0);
circleSVG(150, 150, "solid", "red", 125, 65);
}

draw_svg()