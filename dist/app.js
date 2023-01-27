const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const navlink = document.querySelectorAll('.navlinks__navlink');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navlinks.classList.toggle('navlinks--active');
})

navlink.forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        navlinks.classList.toggle('navlinks--active');
    })
})