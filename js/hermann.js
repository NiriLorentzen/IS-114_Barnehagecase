import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

function drawCanvas() {
    const canvas = document.getElementById("hermann"); 
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d"); 

//Lager en trekant

        ctx.fillStyle = "green";

        ctx.beginPath();
        ctx.moveTo(55, 95);
        ctx.lineTo(100, 30);
        ctx.lineTo(145, 95);
        ctx.fill();

        //ctx.fillStyle = "brown";

        //ctx.fillRect(112.5, 75, 50, 50);

    }
    rectangleCanvas(35, 72.5, "solid", "brown", 82.5, 95, "hermann");
}

drawCanvas();



function draw_svg (){
    rectangleSVG(35, 72.5, "solid", "brown", 82.5, 95);
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById("SVGobjekt");
        var polygon_1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        polygon_1.setAttribute("fill", "green");
        polygon_1.setAttribute("points", "55,95 100,30 145,95");
        console.log(svg);
        console.log(polygon_1);
        svg.appendChild(polygon_1);
    }
    )
}



draw_svg();

export {drawCanvas};
export {draw_svg};