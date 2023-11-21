function rectangleCanvas(width, height, mode, color, x, y){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (mode == "solid"){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height)
      }      
      if (mode == "outline"){
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, width, height)
      }
      if (typeof mode == 'number'){
        var fill_opacity = mode;
        ctx.fillStyle = color; //gjør string tekst om til hex, "red" -> #ff0000
        color = ctx.fillStyle; //gjør stringen om til hexen
        var rgba_string = "rgba(" + hex_to_rgb(color) + fill_opacity + ")"; //lager stringen som trengs for at rgba skal fungere, hex_to_rgb brukes for å endre hexen om til rgb, feks: #ff0000 -> 128, 0, 0
        ctx.fillStyle = rgba_string;
        ctx.fillRect(x, y, width, height)
      }
   }
}



function circleCanvas(radius, mode, color){
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const circle = new Path2D();
        var x = 100
        var y = 35
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

        if (typeof mode == 'number'){
            var fill_opacity = mode;
            ctx.fillStyle = color; //gjør string tekst om til hex, "red" -> #ff0000
            color = ctx.fillStyle; //gjør stringen om til hexen
            var rgba_string = "rgba(" + hex_to_rgb(color) + fill_opacity + ")"; //lager stringen som trengs for at rgba skal fungere, hex_to_rgb brukes for å endre hexen om til rgb, feks: #ff0000 -> 128, 0, 0
            console.log(rgba_string)
            ctx.fillStyle = rgba_string;
            circle.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill(circle);
          }

        //radians = (Math.PI/180)*degrees -- degrees to radians, om det trengs
    }

}

export {circleCanvas};
export {rectangleCanvas};

//circleCanvas(22, "solid", "red")
//circleCanvas(22, "outline", "red")
//circleCanvas(22, 0.5, "blue")





///hex to rgb///
function hex_to_rgb(hex){
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    console.log("R", r, "G", g, "B", b)
    var rgb = r + ", " + g + ", " + b + ", "
    console.log(rgb)
    return rgb
}
//hex_to_rgb("#ff0000")


///SVG///
function rectangleSVG(width, height, mode, color){
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById('SVGobjekt');

        var rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectangle.setAttribute("width", width);
            rectangle.setAttribute("height", height);
            rectangle.setAttribute("fill", color);
            rectangle.setAttribute("x", "0");
            rectangle.setAttribute("y", "0");

        if (mode == "solid"){
            rectangle.setAttributeNS(null, 'fill', color);
        }
        if (mode == "outline"){
            rectangle.setAttributeNS(null, 'stroke', color);
            rectangle.setAttributeNS(null, 'stroke-width', 2);
            rectangle.setAttributeNS(null, 'fill', "none");
        }
        //const mode_tekst = mode.split("(");
        //if (mode_tekst[0] == "mode-fade"){
        //    var fill_opacity = mode_tekst[1].replace(")", "")
            //console.log("HER DIN TULLING", fill_opacity)

        if (typeof mode == 'number'){
            var fill_opacity = mode
            rectangle.setAttributeNS(null, 'fill-opacity', fill_opacity);
        }
        svg.appendChild(rectangle);
})
}
//rectangleSVG(150, 100, "outline", "red")
//rectangleSVG(30, 70, "solid", "green")
//rectangleSVG(50, 50, 0.7, "blue")

function circleSVG(radius, mode, color){
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById('SVGobjekt');

        var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        circle.setAttributeNS(null, 'cx', 50);
        circle.setAttributeNS(null, 'cy', 50);
        circle.setAttributeNS(null, 'r', radius);
        circle.setAttribute("fill", color);

        if (mode == "solid"){
            circle.setAttributeNS(null, 'fill', color);
        }
        if (mode == "outline"){
            circle.setAttributeNS(null, 'stroke', color);
            circle.setAttributeNS(null, 'stroke-width', 2);
            circle.setAttributeNS(null, 'fill', "none");
            //fill: none
            //stroke-width: 2px;
            //stroke: maroon;
        }
        //const mode_tekst = mode.split("(");
        if (typeof mode == 'number'){
            var fill_opacity = mode
            //console.log("HER DIN TULLING", fill_opacity)
            circle.setAttributeNS(null, 'fill-opacity', fill_opacity);
        }

        ///circle.setAttributeNS(null, 'fill-opacity', 0.5);  fra 0 til 1, 1 er solid, 0 er ingenting

        //fill-opacity="0.5"
        //fill="purple"
        svg.appendChild(circle);
    })
}
//circleSVG(22, "solid", "red")
//circleSVG(22, "outline", "red")
//circleSVG(10, 0.5, "red")