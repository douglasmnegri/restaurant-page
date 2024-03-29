import italianChefImage from "./images/italian-chef.png";

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
}

export { home };
