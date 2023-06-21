// JavaScript for mobile menu

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        // if (window.pageYOffset > 100) {
        //     // document.querySelector("headermobile").classList.add('is-scrolling');
        // } else {
        //     // document.querySelector("headermobile").classList.remove('is-scrolling');
        // }
    });

    // HOME 

    // HOME BURGER MOBILE
    const home_burger_mobile = document.querySelector('.hamburgermobile');
    // SLIDE HOME MENU 
    const home_slide_menu = document.querySelector('.mobile-home-nav');

    // Adding Eventlistener to the hamburger and slide menu
    home_burger_mobile.addEventListener('click', function () {
        home_burger_mobile.classList.toggle('is-active');
        home_slide_menu.classList.toggle('is-active');
        console.log("mobile menu burger pressed");
    });

    // Home Menu Selection
    const home_menu_home = document.querySelector('#home_menu_home');
    // Add Eventlistener to the home selection
        // give it the same functionality as the menu button
            // all while taking you to the link
    home_menu_home.addEventListener('click', function () {
        home_burger_mobile.classList.toggle('is-active');
        home_slide_menu.classList.toggle('is-active');
        console.log("home selection home pressed");
    });

    // About Menu Selection
    const about_menu_home = document.querySelector('#about_menu_home');
    // Add Eventlistener to the home selection
        // give it the same functionality as the menu button
            // all while taking you to the link
    about_menu_home.addEventListener('click', function () {
        home_burger_mobile.classList.toggle('is-active');
        home_slide_menu.classList.toggle('is-active');
        console.log("about selection home pressed");
    });
    // ABOUT

    // ABOUT BURGER MOBILE
    const about_burger_mobile = document.querySelector('.abouthamburgermobile');
    // SLIDE ABOUT MENU
    const about_slide_menu = document.querySelector('.mobile-about-nav');

    // Adding Eventlistener to the hamburger and slide menu
    about_burger_mobile.addEventListener('click', function () {
        about_burger_mobile.classList.toggle('is-active');
        about_slide_menu.classList.toggle('is-active');
        console.log("about menu buurger pressed");
    });
}   