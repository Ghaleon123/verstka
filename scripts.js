'use script';

let menuActive = document.querySelector('.menu-active');
let headerMenu = document.querySelector('.imgpar');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);