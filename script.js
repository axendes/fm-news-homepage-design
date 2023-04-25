"use strict";

const hamburger = document.querySelector(".header__hamburger-wrapper");
const navPanel = document.querySelector(".header__navigation");
const navList = document.querySelector(".header__list");
const closeBlock = document.querySelector(".header__close-nav");

hamburger.onclick = showNav;
closeBlock.onclick = hideNav;

function showNav() {
    navPanel.classList.add("header__navigation--active");
    navList.classList.add("header__list--active");
    closeBlock.classList.add("header__close-nav--active");
}

function hideNav() {
    navPanel.classList.remove("header__navigation--active");
    navList.classList.remove("header__list--active");
    closeBlock.classList.remove("header__close-nav--active");
}