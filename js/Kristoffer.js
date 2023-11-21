import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function draw_canvas(){
    //circleCanvas(70, "solid, "blue", 100, 100);
    rectangleCanvas(999, 900, "solid", "black", 0, 0);
    circleCanvas(50, "solid", "grey", 140, 70);
    circleCanvas(20, "solid", "black", 120, 80); 
    circleCanvas(18, "solid", "#D3D3D3", 120, 80); 
    circleCanvas(10, "solid", "#FAFAFA", 115, 82); 
    rectangleCanvas(120, 25,"solid", "green", -20, 68);
    rectangleCanvas(120, 15,"solid", "#80FC38", -20, 73);
    rectangleCanvas(120, 8,"solid", "white", -20, 77);
}

draw_canvas()


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