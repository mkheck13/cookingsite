

let slideBtn = document.getElementById("slideBtn");
let offSlide = document.getElementById("offSlide");

slideBtn.addEventListener("click", function(event){
    offSlide.className = "slideLeft";
});