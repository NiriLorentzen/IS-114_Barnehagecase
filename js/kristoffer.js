import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function draw_figur_canvas(){
    //circleCanvas(70, "solid, "blue", 100, 100);
    rectangleCanvas(999, 900, "solid", "black", 0, 0, "kristoffer");
    circleCanvas(50, "solid", "grey", 140, 70, "kristoffer");
    circleCanvas(20, "solid", "black", 120, 80, "kristoffer"); 
    circleCanvas(18, "solid", "#D3D3D3", 120, 80, "kristoffer"); 
    circleCanvas(10, "solid", "#FAFAFA", 115, 82, "kristoffer"); 
    rectangleCanvas(120, 25,"solid", "green", -20, 68, "kristoffer");
    rectangleCanvas(120, 15,"solid", "#80FC38", -20, 73, "kristoffer");
    rectangleCanvas(120, 8,"solid", "white", -20, 77, "kristoffer");
}

draw_figur_canvas()
export {draw_figur_canvas};


function draw_SVG(){
    rectangleSVG(999, 900, "solid", "black", 0, 0);
    circleSVG(50, "solid", "grey", 140, 70);
    circleSVG(20, "solid", "black", 120, 80); 
    circleSVG(18, "solid", "#D3D3D3", 120, 80); 
    circleSVG(10, "solid", "#FAFAFA", 115, 82); 
    rectangleSVG(120, 25,"solid", "green", -20, 68);
    rectangleSVG(120, 15,"solid", "#80FC38", -20, 73);
    rectangleSVG(120, 8,"solid", "white", -20, 77);
}

draw_SVG()