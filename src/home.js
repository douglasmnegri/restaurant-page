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

  // menu block 
  const secondBlock = document.createElement("div");

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Menu";

  const menu = document.createElement("div");
  menu.classList.add("menu-items");

  const finishBlock = document.createElement("div");
  finishBlock.classList.add("finish-block");

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
  secondBlock.appendChild(menuTitle);
  secondBlock.appendChild(menu);
  secondBlock.appendChild(finishBlock);
  content.appendChild(secondBlock);

  const bologneseDescription = document.querySelector(".food-item0 > div");
  bologneseDescription.textContent =
    "Savor the rich flavors of our hearty bolognese sauce, made with tender ground meat, aromatic herbs, and savory tomatoes, served over a bed of perfectly cooked spaghetti.";

  const carbonaraDescription = document.querySelector(".food-item1 > div");
  carbonaraDescription.textContent =
    "Indulge in the velvety richness of our creamy carbonara pasta, featuring al dente spaghetti coated in a luscious sauce made with eggs, Parmesan cheese, and crispy bacon, creating a symphony of flavors with every bite.";

  const lasagnaDescription = document.querySelector(".food-item2 > div");
  lasagnaDescription.textContent =
    "Experience the ultimate comfort food with our classic lasagna, featuring layers of tender pasta sheets, flavorful meat sauce, creamy béchamel, and melted cheese, baked to golden perfection for a satisfying and wholesome meal.";

  const shrimpScampiDescription = document.querySelector(".food-item3 > div");
  shrimpScampiDescription.textContent =
    "Transport your taste buds to the shores of Italy with our garlic-infused shrimp scampi, featuring succulent shrimp sautéed in a fragrant blend of garlic, butter, and white wine, served over a bed of perfectly cooked pasta for a delightful culinary experience.";
}

export { home };
