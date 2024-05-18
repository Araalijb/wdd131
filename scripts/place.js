document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Find the span element with the ID "currentyear"
    const yearSpan = document.getElementById('currentyear');
  
    // Update the content of the span element with the current year
    yearSpan.textContent = currentYear;
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  });
  

  function calculateWindChill(temperature, windSpeed, unitPreference) {
    return unitPreference === '°C' ? Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    // Get the HTML element where the wind chill factor will be displayed
    var windChillElement = document.querySelector('#calculateWindChill');
  
    // Call the calculateWindChill function with a temperature of 27 °C and a wind speed of 13 km/h
    var windChill = calculateWindChill(27, 13, '°C');
  
    
    // Display the calculated wind chill factor in the <td> element
    windChillElement.textContent = windChill + "°C";
  });
