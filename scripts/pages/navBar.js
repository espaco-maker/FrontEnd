import { User } from "../utils/user.js";
import { API } from "../API/index.js";

document.querySelector(".NavBarButtonIcon").addEventListener("click", ToggleDropDown);

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
      <div class="logoutContainer">
        <img src="./images/icons/Logout.svg" id="Logout" alt="sair"></img>
        <p class="Tooltip">Sair</p>
      </div>
      `;
      div.classList.add("logout");
    }
    veifyToken();
    addLogoutEvent();
  }
})

function addLogoutEvent() {
  document.querySelector(".logoutContainer")
    .addEventListener("click", () => {
      User.logout();
      window.location.href = "/";
    })
}

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
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});