var checkbox = document.querySelector("input[name=toggle]");

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