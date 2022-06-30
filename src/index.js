import './style.css';
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const restarauntName = document.createElement('h1');
  restarauntName.classList.add('restaraunt-name');
  restarauntName.textContent = 'Pizza World';

  header.appendChild(restarauntName);
  header.appendChild(createNav());

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

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/Yersoltan01';

  githubLink.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  setActiveBtn(document.querySelector(".button-nav"));
  loadHome();
}

initializeWebsite();