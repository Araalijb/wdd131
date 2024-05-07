document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Find the span element with the ID "currentyear"
    const yearSpan = document.getElementById('currentyear');
  
    // Update the content of the span element with the current year
    yearSpan.textContent = currentYear;
  });
  

const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});

function changeMenu(menu) {
    document.getElementById('menuHeading').innerText = menu;
}