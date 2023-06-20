// JavaScript for tablet menu

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    // The buttons 


    // HOME BURGER
    const menu_btn = document.querySelector('.hamburger');
    // Home Menu query
    const tablet_menu = document.querySelector('.tablet-home-nav');

    // Adding Eventlistener to the hamburger and slide menu
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        tablet_menu.classList.toggle('is-active');
        // console.log("tablet menu pressed");
    });


     // Home menu selection
     const home_menu = document.querySelector('#home_menu');

    // Add Eventlistener to each menu item
        // to toggle the 'is-active' state off
    // HOME
        // so if you click the about selection it removes the 
        // tablet menu by toggling the 'is-active' is off
    home_menu.addEventListener('click', function () {
        // Hamburger
        menu_btn.classList.toggle('is-active');
        // Slide in Nav
        tablet_menu.classList.toggle('is-active');
    });

    // About menu selection
    const about_menu = document.querySelector('#about_menu');
    
    // ABOUT
        // so if you click the about selection it removes the 
        // tablet menu by toggling the 'is-active' is off
    about_menu.addEventListener('click', function () {
        // Hamburger
        menu_btn.classList.toggle('is-active');
        // Slide in Nav
        tablet_menu.classList.toggle('is-active');
    });


   //////////////////////////////////////////////////////////////////////////// 
    
   // ABOUT BURGER
        // simply to make the button active when clicked
    const about_menu_btn = document.querySelector('.abouthamburger');
    // Tablet About nav (slide menu)
    const about_nav = document.querySelector('.tablet-about-nav');

    // Adding Eventlistener to the hamburger and slide menu
    about_menu_btn.addEventListener('click', function () {
        // toggle the button
        about_menu_btn.classList.toggle('is-active');
        // toggle the slide menu
        about_nav.classList.toggle('is-active');
    });

    // The buttons 
    // HOME menu selection
    const home_menu_about = document.querySelector('#home_menu_about');

    // Adding Eventlistener to the menu buttons
    home_menu_about.addEventListener('click', function () {
        // toggle the hamburger
        about_menu_btn.classList.toggle('is-active');
        // slide in Nav
        about_nav.classList.toggle('is-active');
    });

    // ABOUT menu selection
    const about_menu_about = document.querySelector('#about_menu_about');

    about_menu_about.addEventListener('click', function () {
        // toggle the hamburger
        about_menu_btn.classList.toggle('is-active');
        // slide in Nav
        about_nav.classList.toggle('is-active');
    })
}