<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
  <link rel="shortcut icon" href="./images/Logo.svg" type="image/svg" />
  <link rel="stylesheet" href="./styles/global.css" />
  <link rel="stylesheet" href="./styles/style.css" />
  <script src="./scripts/pages/navBar.js" type="module" defer></script>
  <script src="./scripts/pages/Message.js" type="module" defer></script>
  <title>Espaço Maker</title>
</head>

<body>
  <header class="NavBarContainer">
    <nav>
      <div class="NavBarWraper">
        <img src="./images/Logo.svg" alt="Logo" />
        <div class="NavBarButtonIconContainer">
          <button class="NavBarButtonIcon" onclick="ToggleDropDown()">
            <img src="./images/icons/closeNav.svg" alt="X" class="closeNav" />
            <img src="./images/icons/openNav.svg" alt="O" class="openNav active" />
          </button>
        </div>
      </div>
      <ul class="NavBarListContainer">
        <div>
          <a href="#Start">
            <li>Início</li>
          </a>
          <a href="#Course">
            <li>Cursos</li>
          </a>
          <a href="#About">
            <li>Quem Somos</li>
          </a>
          <a href="#Team">
            <li>Equipe</li>
          </a>
          <a href="#Contact">
            <li>Contato</li>
          </a>
        </div>
        <div class="NavBarButton" id="Login">
          <a href="./pages/Signin.html">
            <button class="button ButtonOutlined">Login</button>
          </a>
        </div>
      </ul>
    </nav>
  </header>
  <main>
    <section class="StartContainer" id="Start">
      <div>
        <h1>
          Veja aqui soluções que pessoas encontraram para seus problemas do
          cotidiano!
        </h1>
        <a href="./pages/Signin.html"><button class="button">Começar agora</button></a>
      </div>
      <img src="./images/Maker.svg" alt="Imagem qeu contém referência a cultura maker" />
    </section>
    <section class="CourseContainer" id="Course">
      <h1>Cursos</h1>
      <div class="ContainerCards">
        <div class="card">
          <h2>Arduino</h2>
          <img src="./images/Maker.svg" alt="maker" />
        </div>
        <div class="card">
          <h2>Ferramentas</h2>
          <img src="./images/Maker.svg" alt="ferramentas" />
        </div>
        <div class="card">
          <h2>Ciência da Computação</h2>
          <img src="./images/Maker.svg" alt="ciencia" />
        </div>
        <div class="card">
          <h2>Programação</h2>
          <img src="./images/Maker.svg" alt="programacao" />
        </div>
      </div>
    </section>
    <section class="AboutContainer" id="About">
      <h1>Quem Somos</h1>
      <div>
        <div class="card cardText">
          <h2>O que é o espaço maker</h2>
          <p>
            O espaço maker é uma equipe, cujo intuito é apoiar o
            desenvolvimento e prototipação de projetos, proritariamente
            locais, e contribuir para a instauração da cultura mão na massa na
            nossa instituição.
          </p>
        </div>
      </div>
      <section class="AboutCardsContainer">
        <div>
          <div class="card cardText">
            <h2>Missão</h2>
            <p>
              Ser um ambiente propício ao desenvolvimento e fortalecimento da
              cultura maker e das habilidades relacionadas: colaboração,
              criatividade, criação, invenção.
            </p>
          </div>
        </div>
        <div>
          <div class="card cardText">
            <h2>Visão</h2>
            <p>
              Apoiar a criação de projetos inovadores que possibilitem a
              transformação da sociedade e do ecossistema empreendedor local.
            </p>
          </div>
        </div>
        <div>
          <div class="card cardText">
            <h2>Valor</h2>
            <p>
              Apoiar a comunidade interna e externa ao Compus Muzambinho,
              partindo da ideia até o protótipo da solução, de forma que o
              processo impacte na criatividade, colaboração e na disposição de
              fazer a diferença na sociedade.
            </p>
          </div>
        </div>
      </section>
    </section>
    <section class="TeamContainer" id="Team">
      <h1>Equipe</h1>
      <section class="TeamCardContainer">
        <div class="cardTeam">
          <h2>Gustavo Neves</h2>
          <img src="./images/TeamImages/Gustavo.jpg" alt="Gustavo Neves" />
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="./images/icons/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div class="cardTeam">
          <h2>Aracele Garcia</h2>
          <img src="./images/TeamImages/Aracele.jpg" alt="Aracele Garcia" />
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="./images/icons/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div class="cardTeam">
          <h2>Lara Milena</h2>
          <img src="./images/TeamImages/Lara.jpg" alt="Lara Milena" />
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="./images/icons/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div class="cardTeam">
          <h2>Vinicius da Silva</h2>
          <img src="./images/TeamImages/Vinicius.jpg" alt="Vinicius da Silva" />
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="./images/icons/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <div class="cardTeam">
          <h2>Bhryan Stepenhen</h2>
          <img src="https://github.com/BhryanS2.png" alt="Bhryan Stepenhen" />
          <a href="https://www.linkedin.com/in/bhryanstepenhen/">
            <img src="./images/icons/linkedin.svg" alt="linkedin" />
          </a>
        </div>
      </section>
    </section>
    <section class="ContactContainer" id="Contact">
      <div>
        <div class="Location">
          <h1>Meios de contato</h1>
          <p>localizado nos fundos do prédio da CEAD</p>
          <h3>
            Instituto Federal de Educação, Ciência e Tecnologia do Sul de
            Minas Gerais - Campus Muzambinho
          </h3>
        </div>
        <div class="ContactIconsContainer">
          <a href="https://www.instagram.com/espacomakermuzambinho/" rel="noopener noreferrer">
            <img src="./images/icons/Instagram.svg" alt="Instagram" />
            <p class="Tooltip">Instagram</p>
          </a>
          <a href="mailto:espaco.maker@muz.ifsuldeminas.edu.br" rel="noopener noreferrer">
            <img src="./images/icons/Gmail.svg" alt="Gmail" />
            <p class="Tooltip">Gmail</p>
          </a>
        </div>
      </div>
      <!-- action="./api/SubmitMessage.php" -->
      <form class="Form" id="Message">
        <div class="error"></div>
        <div class="InputContainer">
          <div>
            <input type="text" autocomplete="name" required name="Name" id="Name" />
            <label>Nome</label>
          </div>
        </div>
        <div class="InputContainer">
          <div>
            <input type="email" autocomplete="email" required name="Email" id="Email" />
            <label>E-mail</label>
          </div>
        </div>
        <div class="TextareaContainer">
          <div>
            <textarea required maxlength="350" name="Message"></textarea>
            <label>Menssagem</label>
          </div>
        </div>
        <button class="button ButtonOutlined" type="submit">Enviar</button>
      </form>
    </section>
  </main>
  <footer class="Footer" id="Footer">
    <p>Política de Privacidade</p>
    <p>Copyright &copy; 2021 Espaço Maker</p>
  </footer>
  <div id="goTop">
    <img src="./images/icons/goTop.svg" alt="goTop" />
  </div>
</body>

</html>