{
  /* <link rel="stylesheet" href="../../styles/load.css">
<div class="Load">
  <div class="Spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <h1>Loading...</h1>
</div> */
}

import { style } from "./style.js";

class LoadComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const styleEl = document.createElement("style");
    styleEl.textContent = style();
    shadow.appendChild(styleEl);
    const loadEl = this.createHTML();
    shadow.appendChild(loadEl);
  }

  isOpen() {
    return this.shadowRoot.querySelector(".Load").classList.contains("active");
  }

  createHTML() {
    const loadEl = document.createElement("div");
    loadEl.classList.add("Load");
    const spinnerEl = document.createElement("div");
    spinnerEl.classList.add("Spinner");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const h1Text = document.createTextNode("Loading...");
    const h1El = document.createElement("h1");
    h1El.appendChild(h1Text);
    spinnerEl.appendChild(div1);
    spinnerEl.appendChild(div2);
    spinnerEl.appendChild(div3);
    loadEl.appendChild(spinnerEl);
    loadEl.appendChild(h1El);
    return loadEl;
  }
}

customElements.define("load-element", LoadComponent);
