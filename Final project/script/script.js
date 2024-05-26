document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    // Add event listener for menu toggle
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  
    // Sample data for portfolio
    const portfolioItems = [
      {
        title: 'Project 1',
        image: 'project1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Design'
      },
      {
        title: 'Project 2',
        image: 'project2.jpg',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Graphic Design'
      },
      {
        title: 'Project 3',
        image: 'project3.jpg',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Web Design'
      }
    ];
  
    // Function to display portfolio items
    function displayPortfolio() {
      const portfolioContainer = document.querySelector('.portfolio-container');
  
      portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');
  
        portfolioItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="portfolio-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p><strong>Category:</strong> ${item.category}</p>
          </div>
        `;
  
        portfolioContainer.appendChild(portfolioItem);
      });
    }
  
    // Call the function to display portfolio items
    displayPortfolio();
  
    // Sample form submission
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Save form data to localStorage
      const submission = {
        name: name,
        email: email,
        message: message
      };
  
      localStorage.setItem('formSubmission', JSON.stringify(submission));
  
      alert('Form submitted successfully!');
      form.reset();
    });
  });
  // script/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Get the current year
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Get the last modified date
  const lastModifiedSpan = document.getElementById("lastModified");
  const lastModified = document.lastModified;
  lastModifiedSpan.textContent = lastModified;

  // Function to update the current time
  const updateTime = () => {
    const currentTimeSpan = document.getElementById("currentTime");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    currentTimeSpan.textContent = timeString;
  };

  // Initial call to display the current time
  updateTime();

  // Update the time every second
  setInterval(updateTime, 1000);
});
