'use strict';

var menu = null;

document.addEventListener('DOMContentLoaded', function() {
    menu = document.getElementById('burger-menu');   
});

function openMenu() {
    menu.style.display = 'flex'
}

function closeMenu() {
    menu.style.display = 'none'
}
