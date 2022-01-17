import { User } from "./user.js";
import { API } from "./API/index.js";

function ToggleDropDown() {
  const width = window.innerWidth;
  if (width > 800) return;
  const openNav = document.querySelector(".openNav");
  const closeNav = document.querySelector(".closeNav");
  const ListContainerRef = document.querySelector(".NavBarListContainer")
  ListContainerRef.classList.toggle("active");
  openNav.classList.toggle("active");
  closeNav.classList.toggle("active");
}

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  ToggleDropDown();
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 50;
  scrollToPosition(to);
}

// load page execute script

document
  .querySelectorAll(".NavBarListContainer a[href^='#']")
  .forEach((link) => {
    link.addEventListener("click", scrollToIdOnClick);
  });

addEventListener("load", () => {
  const div = document.querySelector("#Login");
  const user = User.get();
  if (user) {
    const { FirstName } = user;
    if (FirstName) {
      div.innerHTML = `
      <p class="UserName">Olá ${FirstName}</p>
      `;
    }
    veifyToken();
  }
})


async function veifyToken() {
  const isValid = await API.veifyToken();
  if (isValid) return;
  addLinkToLogin();
}

function addLinkToLogin() {
  const div = document.querySelector("#Login");
  div.innerHTML = `
  <a href="./pages/Signin.html">
    <button class="button ButtonOutlined">Login</button>
  </a>
  `;
}

const goTop = document.querySelector("#goTop");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
});

goTop.addEventListener("click", () => {
  scrollToPosition(0);
});