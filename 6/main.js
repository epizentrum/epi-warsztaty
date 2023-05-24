const logoBtn = document.querySelector('.logo-btn');
const logo = document.querySelector('.logo');

logoBtn.addEventListener("click", () => {
    logo.classList.add('active');
})