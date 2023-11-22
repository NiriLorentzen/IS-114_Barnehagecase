import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function draw_canvas(){
    rectangleCanvas(200, 200, "solid", "grey", 0, 0);
    circleCanvas(50, "solid", "pink", 100, 50);
    rectangleCanvas(10, 50, "solid", "white", 100, 50);
    }

draw_canvas()

 function draw_svg(){
    rectangleSVG(200, 200, "solid", "grey", 0, 0);
     circleSVG(50, "solid", "pink", 100, 50);
     rectangleSVG(10, 50, "solid", "white", 100, 50);
     }
        
draw_svg() 
