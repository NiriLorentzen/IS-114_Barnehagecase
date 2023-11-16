function rectangleCanvas(width, height, mode, color){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (mode == "solid"){
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height)
      }      
      if (mode == "outline"){
        ctx.strokeStyle = color;
        ctx.strokeRect(0, 0, width, height)
      }
   }
}

rectangleCanvas(150, 100, "outline", "blue")

function circleCanvas(radius, mode, color){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const circle = new Path2D();
        x = 100
        y = 35
        if (mode == "solid"){
            ctx.fillStyle = color;
            circle.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill(circle);
        }
        if (mode == "outline"){
            ctx.strokeStyle = color;
            ctx.beginPath();
            circle.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.stroke(circle);
        }

        //radians = (Math.PI/180)*degrees -- degrees to radians, om det trengs
    }

}

//circleCanvas(22, "solid", "red")
circleCanvas(22, "outline", "red")



///SVG///
function rectangleSVG(width, height, mode, color){
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById('SVGobjekt');
        console.log(svg);

        var rektangel = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rektangel.setAttribute("width", width);
            rektangel.setAttribute("height", height);
            rektangel.setAttribute("fill", color);
            rektangel.setAttribute("x", "0");
            rektangel.setAttribute("y", "0");
        svg.appendChild(rektangel);
        console.log(svg)
})
}
rectangleSVG(150, 100, "solid", "red")

