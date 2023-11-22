function drawCanvas() {
    const canvas = document.getElementById("canvas"); 
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d"); 

//Lager en trekant

        ctx.fillStyle = "green";

        ctx.beginPath();
        ctx.moveTo(75, 75);
        ctx.lineTo(200, 75);
        ctx.lineTo(137.5, 25);
        ctx.fill();

//Lager en firkant

        ctx.fillStyle = "brown";

        ctx.fillRect(112.5, 75, 50, 50);

    }
}

drawCanvas();

function rectangleSVG(width, height, mode, color, x, y){
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById('SVGobjekt');

        var rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectangle.setAttribute("width", width);
            rectangle.setAttribute("height", height);
            rectangle.setAttribute("fill", color);
            rectangle.setAttribute("x", x);
            rectangle.setAttribute("y", y);

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

function draw_svg (){
    rectangleSVG(35, 72.5, "solid", "brown", 82.5, 95);
    document.addEventListener("DOMContentLoaded", function() {
        var svg = document.getElementById("SVGobjekt");
        var polygon_1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        polygon_1.setAttribute("fill", "green");
        polygon_1.setAttribute("points", "75,75 200,75 137.5,25");
        console.log(svg);
        console.log(polygon_1);
        svg.appendChild(polygon_1);
    }
    )
}


ctx.moveTo(75, 75);
ctx.lineTo(200, 75);
ctx.lineTo(137.5, 25);
draw_svg();
