// JavaScript for mobile menu

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("headermobile").classList.add('is-scrolling');
        } else {
            document.querySelector("headermobile").classList.remove('is-scrolling');
        }
    });

    // THE BUTTONS

    // HOME BURGER
    const home_burger = document.querySelector('.hamburgermobile');
    // SLIDE HOME MENU 
    const home_slide_menu = document.querySelector('.mobile-home-nav');

    // Adding Eventlistener to the hamburger and slide menu
    home_burger.addEventListener('click', function () {
        home_burger.classList.toggle('is-active');
        home_slide_menu.classList.toggle('is-active');
        console.log("mobile home menu pressed");
    });
}   