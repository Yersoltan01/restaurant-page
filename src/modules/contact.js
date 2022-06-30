function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789'

  const address = document.createElement('p')
  address.textContent = '🏠 Imaginary address 76, 86';

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = '../src/img/map.png';
  restaurantLocation.alt = 'Pizza World location';

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;