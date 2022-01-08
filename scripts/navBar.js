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
  const { FirstName } = getUser();
  if (FirstName) {
    div.innerHTML = `
    <p class="UserName">Olá ${FirstName}</p>
    `;
  }
  veifyToken();
})

function getUser() {
  const user = localStorage.getItem("@EspacoMaker:user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

async function veifyToken() {
  const token = localStorage.getItem("@EspacoMaker:token");
  if (token) {
    const url = "http://localhost:8000/user/valdiateToken";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!json.success) {
        throw new Error(json.error);
      }
    } catch (error) {
      localStorage.removeItem("@EspacoMaker:token");
      localStorage.removeItem("@EspacoMaker:user");
      addLinkToLogin();
    }
  }
  return false;
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