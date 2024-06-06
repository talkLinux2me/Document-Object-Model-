const friend = document.querySelectorAll("section");

const newel = document.getElementById("bringAfriend")
newel.style.backgroundColor = "lavender";

const mainEl = document.querySelector("body");

mainEl.style.fontFamily = "helvetica"; 
mainEl.style.textAlign = "center"
mainEl.style.backgroundColor = "rgb(199, 201, 240)";


const trail = document.getElementById("routes");

const btn = document.createElement("button");
btn.innerHTML = "Leave us a Review";
document.body.appendChild(btn);

document.addEventListener("click", myFunction1);

function myFunction1() {
    window.alert("It's a beautiful day for a walk. ")
}
function myFunction2() {
    window.alert("This could be you! ")
  }


const navItems = document.getElementsByClassName('nav-items');

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseover', function(event) {
        event.preventDefault();
        navItems[i].style.backgroundColor = 'purple'
    })
}
