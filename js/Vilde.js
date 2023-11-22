import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function draw_canvas(){
    rectangleCanvas(200, 200, "solid", "grey", 0, 0);
    circleCanvas(35, "solid", "pink", 100, 20);
    rectangleCanvas(10, 100, "solid", "white", 95, 35);
    }
 
draw_canvas()

 function draw_svg(){
    rectangleSVG(200, 200, "solid", "grey", 0, 0);
     circleSVG(35, "solid", "pink", 100, 20);
     rectangleSVG(10, 100, "solid", "white", 99, 35);

     }
        
draw_svg()  
