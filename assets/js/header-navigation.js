'use strict';

const header = document.querySelector(".header");
const headerTop = header.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
    header.classList.toggle(
        "is-sticky",
        window.scrollY > headerTop + header.offsetHeight
    );
});

// Burger Menu
const burgerMenu = document.querySelector('#burgerMenu');
const nav = document.querySelector('.nav');
burgerMenu.addEventListener('click', menuShow);

function menuShow() {
    nav.classList.toggle('menu-show');
    burgerMenu.classList.toggle('menu-show');
}

// Header Navigation
const navigationMenu = {
    "home": {
        "titleHome": "Головна",
        "linkHome": "index.html"
    },
    "aboutUs": {
        "titleAboutUs": "Про Нас",
        "linkAboutUs": "about-us.html"
    },
    "music": {
        "titleMusic": "Музика",
        "linkMusic": "music.html"
    },
    "gallery": {
        "titleGallery": "Фото",
        "linkGallery": "gallery.html"
    },
    "archive": {
        "titleArchive": "Архів",
        "linkArchive": "archive.html"
    },
    "contacts": {
        "titleContacts": "Контакти",
        "linkContacts": "contacts.html"
    }
}

const logo = document.querySelector('.logo');
logo.innerHTML  = `<a href="./index.html"><img src='./assets/img/2-new-bitum-logotype.png' alt='Бітум' class='img-logotype'></a>`;
logo.innerHTML += `<img src="./assets/img/stop-war-in-ukraine.png" alt="Stop War" class="stop-war">`;

const navList = document.querySelector('#navList');
navList.innerHTML  =   `<li><a id='titleHome' href='${navigationMenu.home.linkHome}'>${navigationMenu.home.titleHome}</a></li>
                        <li><a id='titleAboutUs' href='${navigationMenu.aboutUs.linkAboutUs}'>${navigationMenu.aboutUs.titleAboutUs}</a></li>
                        <li><a id='titleMusic' href='${navigationMenu.music.linkMusic}'>${navigationMenu.music.titleMusic}</a></li>
                        <li><a id='titleGallery' href='${navigationMenu.gallery.linkGallery}'>${navigationMenu.gallery.titleGallery}</a></li>
                        <li><a id='titleArchive' href='${navigationMenu.archive.linkArchive}'>${navigationMenu.archive.titleArchive}</a></li>
                        <li><a id='titleContacts' href='${navigationMenu.contacts.linkContacts}'>${navigationMenu.contacts.titleContacts}</a></li>`;
