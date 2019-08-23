// Get the div with id "burger" holding the spans and toggle its classes on click.
function burgerMenu(){
    var burger = document.getElementById("burger");
    burger.classList.toggle("burger-menu");
    burger.classList.toggle("burger-menu-collapsed");
}