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
// Array of temple objects with details
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // New temples added below
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, Utah, United States",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 130825,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
  }
];


// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Function to display all temples
  function showAll() {
      displayTemples(temples);
  }

  // Function to filter and display temples based on category
  function showCategory(category) {
      const filteredTemples = temples.filter(temple => templeCategory(temple) === category);
      displayTemples(filteredTemples);
  }

  // Function to categorize temples
  function templeCategory(temple) {
      // Implement your categorization logic here
      // For demonstration, let's categorize based on area
      if (temple.area < 20000) {
          return 'small';
      } else if (temple.area < 100000) {
          return 'large';
      } else {
          return 'new';
      }
  }

  // Function to display temples in the DOM
  function displayTemples(templesToShow) {
      const templeImgContainer = document.getElementById('temple-img');
      templeImgContainer.innerHTML = '';

      templesToShow.forEach(temple => {
          const templeCard = document.createElement('figure');
          templeCard.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName} Temple">
              <figcaption>
                  <h3>${temple.templeName}</h3>
                  <p>Location: ${temple.location}</p>
                  <p>Dedicated: ${temple.dedicated}</p>
                  <p>Area: ${temple.area} sq ft</p>
              </figcaption>
          `;
          templeImgContainer.appendChild(templeCard);
      });
  }

  // Show all temples by default when the page loads
  showAll();

  // Update the current year and last modified date in the footer
  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});

  