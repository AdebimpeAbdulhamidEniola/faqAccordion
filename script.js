let containers = document.querySelectorAll(".container");

for(let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("click", function () {containers[i].classList.toggle("active")})
}