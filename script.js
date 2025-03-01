// Global variables
let liveClockInterval; // For managing time updates
let timezoneCache = {}; // Cache for timezone abbreviations

/**
 * Fetches the time for a given country and displays it on the page.
 * @param {string} place - The name of the country to fetch the time for.
 */
async function getUser(place) {
    const timeZone = countryTimeZones[place];

    if (!timeZone) {
        console.error(`No time zone mapping found for ${place}`);
        document.getElementById("time").innerText = `Time zone not found for ${place}`;
        return;
    }

    try {
        clearInterval(liveClockInterval); // Clear any existing intervals

        /**
         * Fetches the timezone abbreviation for the given timezone.
         * @param {string} timeZone - The timezone to fetch the abbreviation for.
         * @returns {Promise<string>} - The abbreviation of the timezone.
         */
        const fetchTimeZoneAbbreviation = async(timeZone) => {
            if (timezoneCache[timeZone]) {
                console.log(`Using cached abbreviation for ${timeZone}`);
                return timezoneCache[timeZone]; // Return cached value if available
            }

            try {
                console.log(`Fetching abbreviation for ${timeZone}...`);
                const response = await fetch(`https://worldtimeapi.org/api/timezone/${timeZone}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                timezoneCache[timeZone] = data.abbreviation || ""; // Cache the result
                return timezoneCache[timeZone];
            } catch (error) {
                console.error("Error fetching timezone data:", error);
                return ""; // Fallback abbreviation
            }
        };

        /**
         * Updates the time on the page based on the selected timezone.
         */
        const updateTime = async() => {
            const options = {
                timeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };

            try {
                // Fetch the current time
                const currentTime = new Intl.DateTimeFormat("en-US", options).format(new Date());
                document.getElementById("time").innerText = `${currentTime} ...`; // Placeholder for abbreviation

                // Fetch and display the abbreviation
                const abbreviation = await fetchTimeZoneAbbreviation(timeZone);
                if (abbreviation) {
                    document.getElementById("time").innerText = `${currentTime} ${abbreviation}`;
                } else {
                    console.warn("Abbreviation fetch returned empty, using default ellipsis.");
                }
            } catch (error) {
                console.error("Error updating time:", error);
                document.getElementById("time").innerText = "Error fetching time.";
            }
        };

        // Update immediately, then every second
        await updateTime();
        liveClockInterval = setInterval(updateTime, 1000);
    } catch (error) {
        console.error("Error setting up time display:", error);
        document.getElementById("time").innerText = "Error fetching time data.";
    }
}


// Function to manage fading in and resetting elements
function manageVisibility(placeName) {
    const selectionSection = document.getElementById("your-selection");
    const fadeElements = [
      "time-box",
      "location-box",
      "currency-box",
      "info-container",
      "headlines-container",
      "currency-container",
    ];
  
    if (placeName && placeName.trim().length > 0) {
      // Hide the entire your-selection section
      selectionSection.style.display = "none";
  
      // Fade in only the specified elements
      fadeElements.forEach((id) => fadeInElement(id));
    } else {
      // Reset visibility to default state
      selectionSection.style.display = "block";
      fadeElements.forEach((id) => resetVisibility(id));
    }
  }
  
  // Helper function to fade in an element
  function fadeInElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style.opacity = 0;
      element.style.display = "block"; // Ensure visibility before fading
      let opacity = 0;
  
      const fadeInterval = setInterval(() => {
        opacity += 0.1;
        element.style.opacity = opacity;
  
        if (opacity >= 1) {
          clearInterval(fadeInterval);
        }
      }, 50); // Smooth fade-in timing
    }
  }
  
  // Helper function to reset element visibility
  function resetVisibility(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "none";
      element.style.opacity = 0; // Reset opacity
    }
  }
  
  // Hook into the existing search bar input handling
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const placeName = searchInput.value.trim();
      manageVisibility(placeName);
    });
  }
  

/**
 * Creates and manages the modal for displaying country-specific information on hover and click.
 */

// Modal for displaying country-specific information
const modal = document.createElement("div");
// Modal styling and event listeners here

/**
 * Adds hover, mouseleave, and click event listeners to the SVG paths.
 */

Object.assign(modal.style, {
    position: "absolute",
    width: "12%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#fff",
    borderRadius: "8px",
    padding: "20px",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    zIndex: "1000",
});

// Icon and text for modal
const icon = document.createElement("div");
icon.innerHTML = "🔍";
icon.style.fontSize = "2rem";
icon.style.marginBottom = "5px";
const modalText = document.createElement("div");
modal.appendChild(icon);
modal.appendChild(modalText);
document.body.appendChild(modal);

// Attach event listeners to SVG paths
document.querySelectorAll(".allPaths").forEach((path) => {
    path.setAttribute("class", `allPaths ${path.id}`);

    path.addEventListener("mouseover", () => {
        document.querySelectorAll(".allPaths").forEach((el) => el.style.fill = "#ececec");

        window.onmousemove = (event) => {
            const tooltip = document.getElementById("name");
            const tooltipWidth = tooltip.offsetWidth; // Get the width of the tooltip
            let tooltipX = event.clientX + 10; // Default position to the right of the cursor

            // Ensure tooltip appears to the left of the cursor if it's near the right edge of the screen
            if (tooltipX + tooltipWidth > window.innerWidth) {
                tooltipX = event.clientX - tooltipWidth - 10; // Position to the left of the cursor
            }

            tooltip.style.top = `${event.clientY - 60}px`;
            tooltip.style.left = `${tooltipX}px`; // Apply the updated left position
        };

        const hoverClass = path.className.baseVal.replace(/ /g, ".");
        document.querySelectorAll(`.${hoverClass}`).forEach((el) => {
            el.style.fill = "rgb(226, 135, 101)";
        });
        document.getElementById("name").style.opacity = 0.95;
        document.getElementById("namep").innerText = path.id;
    });

    path.addEventListener("mouseleave", () => {
        if (modal.style.display !== "flex") {
            document.querySelectorAll(".allPaths").forEach((el) => el.style.fill = "#ececec");
        }
        document.getElementById("name").style.opacity = 0;
    });

    path.addEventListener("click", () => {
        getUser(path.id);

        document.querySelectorAll(".allPaths").forEach((el) => el.style.fill = "#ececec");
        const hoverClass = path.className.baseVal.replace(/ /g, ".");
        document.querySelectorAll(`.${hoverClass}`).forEach((el) => {
            el.style.fill = "rgb(226, 135, 101)";
        });

        modalText.innerHTML = `Scroll down for a snapshot of:<br><b>${path.id}</b>`;
        modal.style.display = "flex";

        const rect = path.getBoundingClientRect();
        modal.style.top = `${rect.top + window.scrollY - 50}px`;
        modal.style.left = `${rect.left + window.scrollX}px`;
    });

    modal.addEventListener("mouseleave", () => {
        modal.style.display = "none";
        document.querySelectorAll(".allPaths").forEach((el) => el.style.fill = "#ececec");
    });
});

/**
 * Observer that hides the name popup when the map is no longer in view.
 */

// Ensure name popup disappears when map scrolls out of view
const mapElement = document.getElementById("map");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            document.getElementById("name").style.opacity = 0;
        }
    });
}, {
    threshold: 0.1
});

observer.observe(mapElement);

/**
 * Toggles the visibility and animation of the "first-row" section when a path is clicked.
 */

// New functionality: Flap open containers
document.querySelectorAll(".allPaths").forEach((path) => {
    path.addEventListener("click", () => {
        // Get the section to show
        const firstRow = document.getElementById("first-row");

        // Make sure it starts hidden and only transitions when ready
        if (!firstRow.classList.contains("visible")) {
            firstRow.style.display = "block"; // Show the section first
            setTimeout(() => {
                firstRow.classList.add("visible"); // Trigger the fade-in
            }, 50); // Allow slight delay to ensure CSS applies smoothly
        }
    });
});


// Weather Container

/**
 * Fetches and displays weather data for a given city using the OpenWeatherMap API.
 * @param {string} city - The name of the city to fetch weather data for.
 */

function getWeather(city) {
    const apiKey = 'f768a779b53eb5b4119fb6ccbb38c01e';

    if (!city || city.trim() === '') {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found. Please try again.');
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== "200") {
                alert('Error fetching forecast data. Please try again.');
                return;
            }
            displayHourlyForecast(data.list);
            displayFiveDayForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('Error fetching forecast data. Please try again.');
        });
}

/**
 * Displays the current weather for the city, including temperature, description, and icon.
 * @param {Object} data - The weather data object.
 */

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `<p>${temperature}°C</p>`;
    const weatherHtml = `<p>${cityName}</p><p>${description}</p>`;

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHtml;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();
}

/**
 * Displays the hourly forecast for the next 24 hours based on the fetched data.
 * @param {Array} hourlyData - Array of hourly weather data.
 */

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    hourlyForecastDiv.innerHTML = ''; // Clear previous content

    const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });

    // Hide scrollbar for hourly forecast using CSS
    hourlyForecastDiv.style.overflowX = 'hidden';
    hourlyForecastDiv.style.scrollBehavior = 'smooth';
    hourlyForecastDiv.style.msOverflowStyle = 'none'; // For Internet Explorer and Edge
    hourlyForecastDiv.style.scrollbarWidth = 'none'; // For Firefox
}

/**
 * Displays the 5-day weather forecast based on the fetched data.
 * @param {Array} hourlyData - Array of hourly weather data.
 */

function displayFiveDayForecast(hourlyData) {
    const forecastCards = document.getElementById('forecast-cards');
    forecastCards.innerHTML = ''; // Clear previous forecasts

    // Group forecasts by day (select one forecast per day, e.g., at noon)
    const dailyForecasts = hourlyData.filter(item => {
        const dateTime = new Date(item.dt * 1000);
        return dateTime.getHours() === 12; // Pick the forecast for 12:00 PM
    }).slice(0, 5); // Limit to the next 5 days

    dailyForecasts.forEach(item => {
        const dateTime = new Date(item.dt * 1000); // Convert timestamp to date
        const day = dateTime.toLocaleDateString('en-US', {
            weekday: 'short'
        }); // Get day of the week
        const temperature = Math.round(item.main.temp - 273.15); // Convert Kelvin to Celsius
        const description = item.weather[0].description;
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const cardHtml = `
            <div class="forecast-card">
                <p><strong>${day}</strong></p>
                <img src="${iconUrl}" alt="${description}" height="30px" width="30px">
                <p>${temperature}°C</p>
                <p>${description}</p>
            </div>
        `;

        forecastCards.innerHTML += cardHtml;
    });
}

/**
 * Makes the weather icon visible once it's loaded.
 */

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
}


// Arrow scrolling for five-day forecast
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const forecastCards = document.getElementById('forecast-cards');

scrollLeftButton.addEventListener('click', () => {
    forecastCards.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    forecastCards.scrollBy({
        left: 150,
        behavior: 'smooth'
    });
});

/**
 * Scrolls the hourly forecast container left or right when the corresponding buttons are clicked.
 */

// Arrow scrolling for hourly forecast
const hourlyScrollLeftButton = document.getElementById('hourly-scroll-left');
const hourlyScrollRightButton = document.getElementById('hourly-scroll-right');
const hourlyForecast = document.getElementById('hourly-forecast');
/**
 * Scrolls the hourly forecast left by 150px.
 */

hourlyScrollLeftButton.addEventListener('click', () => {
    hourlyForecast.scrollBy({
        left: -150,
        behavior: 'smooth'
    });
});
/**
 * Scrolls the hourly forecast right by 150px.
 */
hourlyScrollRightButton.addEventListener('click', () => {
    hourlyForecast.scrollBy({
        left: 150,
        behavior: 'smooth'
    });
});
