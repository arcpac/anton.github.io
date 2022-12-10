var checkbox = document.querySelector("input[name=toggle]");
var subMenu = document.getElementById("toggleMenu");
subMenu.style.display = "none";

$(document).ready(function () {
    let text = window.location.pathname;
    let index = text.lastIndexOf("/");
    let result = text.substring(index);
    let page = result;
    console.log(page);

    if (localStorage.getItem("dark") == "true") {
        document.documentElement.classList.add('dark')
        $(".toggle-checkbox")[0].checked = true;
    } else {
        document.documentElement.classList.remove('dark')
        $(".toggle-checkbox")[0].checked = false;
    }
});

document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
});

checkbox.addEventListener('change', function () {

    if (this.checked) {
        localStorage.setItem('dark', this.checked);
        document.documentElement.classList.add('dark')
        console.log(localStorage.getItem("dark"));
    } else {
        localStorage.setItem('dark', false);
        document.documentElement.classList.remove('dark')
        console.log(localStorage.getItem("dark"));
    }
});

function menuToggle() {
    var x = document.getElementById("toggleMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

window.addEventListener("resize", belowSmScreen);

function belowSmScreen() {
    var bars = document.getElementById("bars");
    var x = document.getElementById("toggleMenu");

    x.style.display = "none";
    var w = window.outerWidth;
    var h = window.outerHeight;
    if(w < 1000){
        bars.style.display = "block";
    } else {
        bars.style.display = "none";
    }

    if(w < 650){
        x.style.display = "none";
    } 
}
