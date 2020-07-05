var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var list = ["linear-gradient(to right,", ",", ");"];
var h3 = document.getElementById("a");



c1.addEventListener("input", function() {
  debugger;  // body.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + ");";
    body.style.background = c1.value;

    body.style.background = `linear-gradient(to right, ${c1.value} 0%, ${c2.value} 100%);`;
    
    h3.innerHTML = c1.value;
})



c2.addEventListener("input", function() {
 //   body.style.background = c2.value;
    h3.innerHTML = c2.value;
    body.style.background = "linear-gradient(to right," + c1.value + "," + c2.value + ");";
})