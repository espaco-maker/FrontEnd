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