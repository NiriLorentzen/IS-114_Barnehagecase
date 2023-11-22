// Importerer funksjoner fra figures.js
import {circleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {rectangleCanvas} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

import {rectangleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";
import {circleSVG} from "https://nirilorentzen.github.io/gruppe9b/js/figures.js";

// Sverd med Canvas API
// Lage tuppen av sverdet
function draw_tip_canvas() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillStyle = "silver";
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(80, 50);
      ctx.lineTo(65, 20);
      ctx.fill();
    }
  }

//lage resten av sverdet
function draw_canvas(){
    //background
    rectangleCanvas(150, 400, "solid", "green", 0, 0 );
    //blade
    rectangleCanvas(30, 200, "solid", "silver", 50, 50);
    //crossguard
    rectangleCanvas(60, 20, "solid", "gray", 35, 250);
    //hilt
    rectangleCanvas(25, 60, "solid", "brown", 52, 270);
    //pummel
    circleCanvas(16, "solid", "brown", 65, 340);
    //fuller
    rectangleCanvas(5, 180, "solid", "gray", 63, 60);
}



function canvas_figure(){
  draw_canvas()
  draw_tip_canvas
}

canvas_figure()
export {canvas_figure};

//Sverd lagd med SVG
function draw_svg(){
    
//background
rectangleSVG(150, 400, "solid", "green", 0, 0 );
//blade
rectangleSVG(30, 200, "solid", "silver", 50, 50);
//crossguard
rectangleSVG(60, 20, "solid", "gray", 35, 250);
//hilt
rectangleSVG(25, 60, "solid", "brown", 52, 270);
//pummel
circleSVG(16, "solid", "brown", 65, 340);
//fuller
rectangleSVG(5, 180, "solid", "gray", 63, 60);

//trekant tip


  document.addEventListener("DOMContentLoaded", function() {
      var svg = document.getElementById("SVGobjekt");
      var polygon_1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      
      polygon_1.setAttribute("fill", "silver");
      polygon_1.setAttribute("points", "50,50 80,50 65,15");
      console.log(svg);
      console.log(polygon_1);
      svg.appendChild(polygon_1);
  }
  )

}

draw_svg()
