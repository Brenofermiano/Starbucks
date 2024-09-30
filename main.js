let menu = document.querySelector('#menu-icon');
let bar = document.querySelector('.bar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    bar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    bar.classList.remove('active');
}
