/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

// const toggle = document.querySelector('.toggle');
// const menu = document.querySelector('.menu');
// const items = document.querySelectorAll('.item');

// /* Toggle mobile menu */
// function toggleMenu() {
//     if (menu.classList.contains('active')) {
//         menu.classList.remove('active');
//         toggle.querySelector('a').innerHTML = "<i class='fas fa-bars'></i>";
//     } else {
//         menu.classList.add('active');
//         toggle.querySelector('a').innerHTML = "<i class='fas fa-times'></i>";
//     }
// }
// /* Event Listeners */
// toggle.addEventListener('click', toggleMenu, false);
