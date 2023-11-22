import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function draw_canvas(){
    rectangleCanvas(200, 400, "solid", "grey", 0, 0);
    circleCanvas(50, "solid", "pink", 125, 65);
    rectangleCanvas(15, 10, "solid", "white", 120, 75);
    }

draw_canvas()

 function draw_svg(){
    rectangleSVG(200, 400, "solid", "grey", 0, 0);
     circleSVG(50, "solid", "pink", 125, 65);
     rectangleSVG(15, 10, "solid", "white", 120, 75);
     }
        
draw_svg() 
