import shippingImage from '../img/delivery.png';

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const welcome = document.createElement('div');
  welcome.classList.add('welcome');
  const welcomeHeader = document.createElement('h2');
  welcomeHeader.textContent = 'Welcome';
  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = 'Order delicious pizza \n Daily from 9:00 to 23:00';
  welcome.appendChild(welcomeHeader);
  welcome.appendChild(welcomeParagraph);

  const delivery = document.createElement('div');
  delivery.classList.add('delivery');
  const deliveryHeader = document.createElement('h2');
  deliveryHeader.textContent = "Free shipping";
  const deliveryImage = document.createElement('img');
  deliveryImage.src = shippingImage;
  deliveryImage.id = 'delivery-img';
  delivery.appendChild(deliveryHeader);
  delivery.appendChild(deliveryImage);

  home.appendChild(welcome);
  home.appendChild(delivery);
  
  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;