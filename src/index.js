import './reset.css';   
import './style.css';
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

function createHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('img');
  logo.src = '../src/img/logo.png';
  logo.setAttribute('id', 'logo');

  const restarauntName = document.createElement('h1');
  restarauntName.classList.add('restaraunt-name');
  restarauntName.textContent = 'Pizza World';

  header.appendChild(logo);
  header.appendChild(restarauntName);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('button-nav');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveBtn(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('button-nav');
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveBtn(menuBtn);
    loadMenu();
  });

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('button-nav');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('active')) return;
    setActiveBtn(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveBtn(button) {
  const buttons = document.querySelectorAll('.button-nav');

  buttons.forEach((button) => {
    if(button !== this) {
      button.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © Yersoltan';

  const githubLogo = document.createElement('img');
  githubLogo.src = '../src/img/github.png';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/Yersoltan01';

  githubLink.appendChild(copyright);
  githubLink.appendChild(githubLogo);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveBtn(document.querySelector(".button-nav"));
  loadHome();
}

initializeWebsite();