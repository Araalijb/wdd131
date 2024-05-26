document.addEventListener('DOMContentLoaded', function() {
    // Populate product options dynamically
    const productNameSelect = document.getElementById('productName');
    const products = [
      {
        id: 'fc-1888',
        name: 'flux capacitor',
        avgRating: 4.5
      },
      {
        id: 'fc-2050',
        name: 'power laces',
        avgRating: 4.7
      },
      {
        id: 'fs-1987',
        name: 'time circuits',
        avgRating: 3.5
      },
      {
        id: 'ac-2000',
        name: 'low voltage reactor',
        avgRating: 3.9
      },
      {
        id: 'jj-1969',
        name: 'warp equalizer',
        avgRating: 5.0
      }
    ];
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.textContent = product.name;
      option.value = product.name;
      productNameSelect.appendChild(option);
    });
  
    // Update current year in the footer
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
  
    // Get last modified date of the document
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

    // Get current time
    const currentTimeSpan = document.getElementById('currentTime');
    const currentTime = new Date();
    const currentTimeFormatted = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(currentTime);
    currentTimeSpan.textContent = currentTimeFormatted;

    // Get user's country
    const userCountrySpan = document.getElementById('userCountry');
    const userCountry = new Intl.DateTimeFormat('en-US', { timeZoneName: 'long' }).formatToParts(currentTime).find(part => part.type === 'timeZoneName').value;
    userCountrySpan.textContent = userCountry;
});
