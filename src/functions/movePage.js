function targetPageLocation() {
    const buttonHome = document.querySelector(".home");
    const buttonMenu = document.querySelector(".menu");
    const buttonContact = document.querySelector(".contact");
  
    const content = document.querySelector("#content");
    const menu = document.querySelector(".menu-title");
    const contact = document.querySelector(".contact-title");
  
    function scrollPage(target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  
    buttonHome.addEventListener("click", function() {
      scrollPage(content);
    });
    buttonMenu.addEventListener("click", function() {
      scrollPage(menu);
    });
    buttonContact.addEventListener("click", function() {
      scrollPage(contact);
    });
  }
  
  export { targetPageLocation };
  