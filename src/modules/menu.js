

function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      "Chicken BBQ",
      "tomato sauce, mozzarella, beef ham, chicken, signature BBQ sauce",
      "chickenBBQ"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cheeseburger",
      "cheese sauce, mozzarella, ground beef, pickles, tomatoes, red onion",
      "cheeseburger"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Heart Pepperoni",
      "tomato sauce, mozzarella, semi-smoked sausages and a pinch of love.",
      "heartPepperoni"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepperoni",
      "tomato sauce, mozzarella, semi-smoked sausages",
      "pepperoni"
    )
  );
  menu.appendChild(
    createMenuItem(
      "margarita",
      "tomato sauce, mozzarella, tomatoes, oregano",
      "margarita"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Chicken with mushrooms",
      "tomato sauce, mozzarella, Caesar sauce, chicken, champignons",
      "chickenWithMushrooms"
    )
  );

  return menu;
}

function createMenuItem(name, description, imgName) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `../src/img/pizzas/${imgName}.jpeg`;

  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}


function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;