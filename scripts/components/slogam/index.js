import { style } from "./style.js";

class SlogamForms extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const shadow = this.shadowRoot;
    const background = this.getAttribute('backgroundpath');
    const logoPath = this.getAttribute('logopath')

    const section = this.createHTML(background, logoPath);
    const styleEl = document.createElement('style');
    styleEl.textContent = style;
    shadow.appendChild(section)
    shadow.appendChild(styleEl)
  }

  createHTML(backgroundPath, logoPath) {
    const section = document.createElement('section');
    const background = document.createElement('div');
    const backgroundImg = document.createElement('img');
    const logoContainer = document.createElement('div');
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoTitle = document.createElement('h2');
    const logoSubtitle = document.createElement('div');
    const logoSubtitleP = document.createElement('p');

    // classlists
    section.classList.add("EspacoMakerContainer");
    background.classList.add("background");
    logoContainer.classList.add("logoContainer");
    logo.classList.add("logo");
    logoTitle.classList.add("logoTitle");
    logoSubtitle.classList.add("logoSubtitle");

    // set atributes
    backgroundImg.setAttribute('src', backgroundPath);
    backgroundImg.setAttribute('alt', 'Background');
    logoImg.setAttribute('src', logoPath);
    logoImg.setAttribute('alt', 'Logo');
    logoTitle.innerText = "Espaço Maker";
    logoSubtitleP.innerText = "Aprenda a cultura maker.";

    // append
    /*
    <section class="EspacoMakerContainer">
      <div class="background">
        <img src="../images/Background.svg" alt="Background" />
      </div>
      <div class="logoContainer">
        <div class="logo">
          <img src="../images/Logo.svg" alt="Logo" />
          <h2 class="logoTitle">Espaço Maker</h2>
        </div>
        <div class="logoSubtitle">
          <p>Aprenda a cultura maker.</p>
        </div>
      </div>
    </section>
    */
    background.appendChild(backgroundImg);
    logo.appendChild(logoImg);
    logo.appendChild(logoTitle);
    logoSubtitle.appendChild(logoSubtitleP);
    logoContainer.appendChild(logo);
    logoContainer.appendChild(logoSubtitle);
    section.appendChild(background);
    section.appendChild(logoContainer);


    return section;
  }

}

customElements.define('slogam-forms', SlogamForms);