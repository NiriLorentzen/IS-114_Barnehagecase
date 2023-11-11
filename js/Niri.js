function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 999, 10); //1
        ctx.fillRect(0, 20, 999, 10); //3
        ctx.fillRect(0, 40, 999, 10); //5
        ctx.fillRect(0, 60, 999, 10); //7
        ctx.fillRect(0, 80, 999, 10); //9
        ctx.fillRect(0, 100, 999, 10); //11
        ctx.fillRect(0, 120, 999, 10); //13

        ctx.fillStyle = "white";
        ctx.fillRect(0, 10, 999, 10); //2
        ctx.fillRect(0, 30, 999, 10); //4
        ctx.fillRect(0, 50, 999, 10); //6
        ctx.fillRect(0, 70, 999, 10); //8
        ctx.fillRect(0, 90, 999, 10); //10
        ctx.fillRect(0, 110, 999, 10); //12

        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 100, 70); //blaa rektangel
   }
}
  
draw();
  
document.addEventListener("DOMContentLoaded", function() {
    var svg = document.getElementById('SVGobjekt');
    console.log(svg);

    var bla_rektangel = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bla_rektangel.setAttribute("width", "100");
        bla_rektangel.setAttribute("height", "70");
        bla_rektangel.setAttribute("fill", "#0000FF");
        bla_rektangel.setAttribute("x", "0");
        bla_rektangel.setAttribute("y", "0");
    svg.appendChild(bla_rektangel);

    var hvit_stripe = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe.setAttribute("width", "999");
        hvit_stripe.setAttribute("height", "10");
        hvit_stripe.setAttribute("fill", "#FFFFFF");
        hvit_stripe.setAttribute("x", "100");
        hvit_stripe.setAttribute("y", "10");
    svg.appendChild(hvit_stripe);

    var hvit_stripe_2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_2.setAttribute("width", "999");
        hvit_stripe_2.setAttribute("height", "10");
        hvit_stripe_2.setAttribute("fill", "#FFFFFF");
        hvit_stripe_2.setAttribute("x", "100");
        hvit_stripe_2.setAttribute("y", "30");
    svg.appendChild(hvit_stripe_2);

    var hvit_stripe_3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_3.setAttribute("width", "999");
        hvit_stripe_3.setAttribute("height", "10");
        hvit_stripe_3.setAttribute("fill", "#FFFFFF");
        hvit_stripe_3.setAttribute("x", "100");
        hvit_stripe_3.setAttribute("y", "50");
    svg.appendChild(hvit_stripe_3);

    var hvit_stripe_4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_4.setAttribute("width", "999");
        hvit_stripe_4.setAttribute("height", "10");
        hvit_stripe_4.setAttribute("fill", "#FFFFFF");
        hvit_stripe_4.setAttribute("x", "0");
        hvit_stripe_4.setAttribute("y", "70");
    svg.appendChild(hvit_stripe_4);

    var hvit_stripe_5 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_5.setAttribute("width", "999");
        hvit_stripe_5.setAttribute("height", "10");
        hvit_stripe_5.setAttribute("fill", "#FFFFFF");
        hvit_stripe_5.setAttribute("x", "0");
        hvit_stripe_5.setAttribute("y", "90");
    svg.appendChild(hvit_stripe_5);

    var hvit_stripe_6 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        hvit_stripe_6.setAttribute("width", "999");
        hvit_stripe_6.setAttribute("height", "10");
        hvit_stripe_6.setAttribute("fill", "#FFFFFF");
        hvit_stripe_6.setAttribute("x", "0");
        hvit_stripe_6.setAttribute("y", "110");
    svg.appendChild(hvit_stripe_6);

    var rod_stripe = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rod_stripe.setAttribute("width", "999");
        rod_stripe.setAttribute("height", "10");
        rod_stripe.setAttribute("fill", "#FF0000");
        rod_stripe.setAttribute("x", "100");
        rod_stripe.setAttribute("y", "0");
    svg.appendChild(rod_stripe);

    var rod_stripe_2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_2.setAttribute("width", "999");
    rod_stripe_2.setAttribute("height", "10");
    rod_stripe_2.setAttribute("fill", "#FF0000");
    rod_stripe_2.setAttribute("x", "100");
    rod_stripe_2.setAttribute("y", "20");
    svg.appendChild(rod_stripe_2);

    var rod_stripe_3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_3.setAttribute("width", "999");
    rod_stripe_3.setAttribute("height", "10");
    rod_stripe_3.setAttribute("fill", "#FF0000");
    rod_stripe_3.setAttribute("x", "100");
    rod_stripe_3.setAttribute("y", "40");
    svg.appendChild(rod_stripe_3);

    var rod_stripe_4 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_4.setAttribute("width", "999");
    rod_stripe_4.setAttribute("height", "10");
    rod_stripe_4.setAttribute("fill", "#FF0000");
    rod_stripe_4.setAttribute("x", "100");
    rod_stripe_4.setAttribute("y", "60");
    svg.appendChild(rod_stripe_4);

    var rod_stripe_5 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_5.setAttribute("width", "999");
    rod_stripe_5.setAttribute("height", "10");
    rod_stripe_5.setAttribute("fill", "#FF0000");
    rod_stripe_5.setAttribute("x", "0");
    rod_stripe_5.setAttribute("y", "80");
    svg.appendChild(rod_stripe_5);

    var rod_stripe_6 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_6.setAttribute("width", "999");
    rod_stripe_6.setAttribute("height", "10");
    rod_stripe_6.setAttribute("fill", "#FF0000");
    rod_stripe_6.setAttribute("x", "0");
    rod_stripe_6.setAttribute("y", "100");
    svg.appendChild(rod_stripe_6);

    var rod_stripe_7 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rod_stripe_7.setAttribute("width", "999");
    rod_stripe_7.setAttribute("height", "10");
    rod_stripe_7.setAttribute("fill", "#FF0000");
    rod_stripe_7.setAttribute("x", "0");
    rod_stripe_7.setAttribute("y", "120");
    svg.appendChild(rod_stripe_7);


    console.log(svg)
});

