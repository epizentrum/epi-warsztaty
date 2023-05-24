const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('.nav');
const icon = menuBtn.querySelector('i');
const animationDuration = getComputedStyle(document.documentElement)
    .getPropertyValue('--menu-duration');

function openMenu() {

    menuBtn.classList.toggle('active');
    menuBtn.classList.remove('starting');
    nav.classList.remove('starting');
    nav.classList.toggle('active');
    nav.classList.toggle('inactive');

    setTimeout(() => {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    }, parseInt(animationDuration.substring(0, animationDuration.length - 1)) / 2);



}

menuBtn.addEventListener("click", openMenu)