import italianChefImage from "./images/italian-chef.png";
import bolognesePlate from "./images/bolognese.jpg";
import carbonaraPlate from "./images/carbonara.jpg";
import lasagnaPlate from "./images/lasagna.jpg";
import shrimpPlate from "./images/shrimp-scampi.jpg";

const images = [bolognesePlate, carbonaraPlate, lasagnaPlate, shrimpPlate];

function home() {
  const content = document.querySelector("#content");
  const textBlock = document.createElement("div");
  textBlock.classList.add("short-text");
  textBlock.innerHTML =
    "Discover the essence of Italian tradition at Cordiali's Osteria. <br><br>Our handcrafted pastas and mouthwatering antipasti are crafted with love and care, inviting you to savor the flavors of Italy with every bite. Located in the heart of Florianópolis, our cozy atmosphere and attentive service promise an unforgettable dining experience. Join us and indulge in the finest Italian hospitality at Cordiali's Osteria. <br><br>Buon appetito!";

  const chefImage = document.createElement("img");
  chefImage.classList.add("chef");
  chefImage.src = italianChefImage;
  content.appendChild(chefImage);
  content.appendChild(textBlock);

  const menu = document.createElement("div");
  menu.classList.add("menu-items");
  const menuItems = () => {
    for (let i = 0; i < images.length; i++) {
      const foodItem = document.createElement("div");
      foodItem.classList.add(`food-item${i}`);
      const foodImages = document.createElement("img");
      foodImages.src = images[i];
      const foodDescription = document.createElement("div");
      foodItem.appendChild(foodImages);
      foodItem.appendChild(foodDescription);
      menu.appendChild(foodItem);
    }
  };
  menuItems();
  content.appendChild(menu);

  const bologneseDescription = document.querySelector(".food-item0 > div");
  bologneseDescription.textContent =
    "Classic bolognese sauce served with spaghetti";

  const carbonaraDescription = document.querySelector(".food-item1 > div");
  carbonaraDescription.textContent = "Delicious carbonara with creamy sauce";

  const lasagnaDescription = document.querySelector(".food-item2 > div");
  lasagnaDescription.textContent = "Great lasgna for all of us";

  const shrimpScampiDescription = document.querySelector(".food-item3 > div");
  shrimpScampiDescription.textContent =
    "Succulent shrimp scampi cooked to perfection";
}

export { home };

// const menu = document.createElement("div");
//   menu.classList.add("menu-items");

//   const foodItem = document.createElement("div");
//   const bolognese = document.createElement("img");
//   const carbonara = document.createElement("img");
//   const lasgna = document.createElement("img");
//   const shrimpScampi = document.createElement("img");

//   bolognese.src = images[0];
//   carbonara.src = images[1]
//   lasgna.src = images[2];
//   shrimpScampi.src = images[3];

//   foodItem.appendChild(bolognese);
//   foodItem.appendChild(carbonara);
//   foodItem.appendChild(lasgna);
//   foodItem.appendChild(shrimpScampi);

//   menu.appendChild(foodItem);
//   content.appendChild(menu);
