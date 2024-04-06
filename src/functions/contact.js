import randomMap from "../images/random-map.png";

function contact() {
  const content = document.querySelector("#content");
  const form = document.createElement("div");

  const contact = document.createElement("h1");
  contact.classList.add("contact-title");
  contact.textContent = "Make Reservation";

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone:";
  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("name", "phone");

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  const messageTextarea = document.createElement("textarea");
  messageTextarea.setAttribute("name", "message");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map");

  const map = document.createElement("img");
  map.src = randomMap;

  const address = document.createElement("div");
  address.classList.add("address");
  address.innerHTML = "295 Mercer St, New York, NY 10012, USA<br>(212) 555-0198";

  form.appendChild(contact);
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(phoneLabel);
  form.appendChild(phoneInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);
  mapContainer.appendChild(map);
  mapContainer.appendChild(address);

  // Append form to container element
  content.appendChild(form);
  content.appendChild(mapContainer);
}

export { contact };
