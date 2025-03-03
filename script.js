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

// Time Container

// Function to get local time based on each timezone

/**
 * Calculates the local time for a specific timezone offset.
 * @param {Object} timezone - The timezone object with an offset property.
 * @returns {string} - The formatted local time string.
 */

function calcTime(timezone) {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * timezone.offset));
    return nd.toLocaleString();
}

// Function to synchronize and display the time for digital clocks

/**
 * Synchronizes and displays the local time for all digital clocks.
 */

function searchClocks() {
    document.querySelectorAll('#time-container h3').forEach(item => {
        const timezone = {
            locale: item.getAttribute('data-locale'),
            offset: parseInt(item.getAttribute('data-offset')) // Offset from UTC
        };

        setInterval(() => {
            item.querySelector('p').innerHTML = calcTime(timezone);
        }, 1000);
    });
}

// Function to set time for analog clocks

/**
 * Sets the time for an analog clock based on the timezone offset.
 * @param {HTMLElement} clockElement - The analog clock element.
 */

function setTimeForClock(clockElement) {
    const locale = clockElement.getAttribute('data-locale');
    const offset = parseInt(clockElement.getAttribute('data-offset')); // Offset for that region

    // Get the hands for the clock
    const hourHand = clockElement.querySelector('.hour-hand');
    const minuteHand = clockElement.querySelector('.minute-hand');
    const secondHand = clockElement.querySelector('.second-hand');

    // Set the date based on the locale offset
    function setDate() {
        const d = new Date();
        d.setHours(d.getHours() + offset); // Adjust time by offset

        const seconds = d.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = d.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = d.getHours();
        const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(setDate, 1000);
    setDate(); // Initial call to set the correct time immediately
}


/**
 * Initializes both digital and analog clocks on the page.
 */

// Initialize both digital and analog clocks
function initializeClocks() {
    // Set up digital clocks
    searchClocks();

    // Set up analog clocks
    const clocks = document.querySelectorAll('#time-container #clock');
    clocks.forEach(clockElement => {
        setTimeForClock(clockElement);
    });
}

// Initialize all clocks when the page loads
initializeClocks();


// Country Information Container 

/**
 * Fetches and displays country-specific data, such as the flag, capital, and currency.
 * @param {string} countryName - The name of the country to fetch data for.
 */

async function getCountryData(countryName) {
    const result = document.getElementById("result");
    result.innerHTML = "<p>Loading country data...</p>";
    const currencyElement = document.getElementById("currency");

    if (!currencyElement) {
        console.error("Currency element not found in the DOM!");
        return;
    }

    try {
        const api_url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}?fullText=true`;
        const response = await fetch(api_url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data for ${countryName}`);
        }

        const data = await response.json();
        const country = data[0];

        // Log the entire country object for debugging
        console.log("Country Data:", country);

        // Default currency values
        let currencyCode = "N/A";
        let currencyName = "Not available";
        let currencySymbol = "";

        // Safely extract currency data
        if (country.currencies) {
            console.log("API Response for Currencies:", country.currencies);
            const currencyKey = Object.keys(country.currencies)[0];
            if (currencyKey && country.currencies[currencyKey]) {
                currencyCode = currencyKey;
                currencyName = country.currencies[currencyKey].name || "Unknown currency";
                currencySymbol = country.currencies[currencyKey].symbol || "";
            }
        } else {
            console.warn("Currencies not found in API response.");
        }

        // Log extracted values
        console.log("Extracted Currency Code:", currencyCode);
        console.log("Extracted Currency Name:", currencyName);
        console.log("Extracted Currency Symbol:", currencySymbol);

        // Update currency element
        currencyElement.textContent = `${currencyName} (${currencyCode}) ${currencySymbol}`;

        // Update other country details
        result.innerHTML = `
            <img src="${country.flags.svg}" class="flag-img">
            <h2>${country.name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><u>Capital</u></h4>
                    <span><b>${country.capital ? country.capital[0] : "Not available"}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4><u>Dialing Code</u></h4>
                    <span><b>${country.idd?.root || ""}${country.idd?.suffixes ? country.idd.suffixes[0] : ""}</b></span>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error fetching or processing data:", error.message);
        result.innerHTML = "<p>Error fetching country data.</p>";
        currencyElement.textContent = "Currency data unavailable.";
    }
}

// Map Click & Country Information Functions Joined Together

// Comprehensive country-to-code mapping for News API
const countryMapping = {
    "Afghanistan": "af",
    "Albania": "al",
    "Algeria": "dz",
    "Andorra": "ad",
    "Angola": "ao",
    "Antigua and Barbuda": "ag",
    "Argentina": "ar",
    "Armenia": "am",
    "Australia": "au",
    "Austria": "at",
    "Azerbaijan": "az",
    "Bahamas": "bs",
    "Bahrain": "bh",
    "Bangladesh": "bd",
    "Barbados": "bb",
    "Belarus": "by",
    "Belgium": "be",
    "Belize": "bz",
    "Benin": "bj",
    "Bhutan": "bt",
    "Bolivia": "bo",
    "Bosnia and Herzegovina": "ba",
    "Botswana": "bw",
    "Brazil": "br",
    "Brunei": "bn",
    "Bulgaria": "bg",
    "Burkina Faso": "bf",
    "Burundi": "bi",
    "Cabo Verde": "cv",
    "Cambodia": "kh",
    "Cameroon": "cm",
    "Canada": "ca",
    "Central African Republic": "cf",
    "Chad": "td",
    "Chile": "cl",
    "China": "cn",
    "Colombia": "co",
    "Comoros": "km",
    "Congo (Congo-Brazzaville)": "cg",
    "Costa Rica": "cr",
    "Croatia": "hr",
    "Cuba": "cu",
    "Cyprus": "cy",
    "Czechia (Czech Republic)": "cz",
    "Denmark": "dk",
    "Djibouti": "dj",
    "Dominica": "dm",
    "Dominican Republic": "do",
    "Ecuador": "ec",
    "Egypt": "eg",
    "El Salvador": "sv",
    "Equatorial Guinea": "gq",
    "Eritrea": "er",
    "Estonia": "ee",
    "Eswatini (fmr. Swaziland)": "sz",
    "Ethiopia": "et",
    "Fiji": "fj",
    "Finland": "fi",
    "France": "fr",
    "Gabon": "ga",
    "Gambia": "gm",
    "Georgia": "ge",
    "Germany": "de",
    "Ghana": "gh",
    "Greece": "gr",
    "Grenada": "gd",
    "Guatemala": "gt",
    "Guinea": "gn",
    "Guinea-Bissau": "gw",
    "Guyana": "gy",
    "Haiti": "ht",
    "Holy See": "va",
    "Honduras": "hn",
    "Hungary": "hu",
    "Iceland": "is",
    "India": "in",
    "Indonesia": "id",
    "Iran": "ir",
    "Iraq": "iq",
    "Ireland": "ie",
    "Israel": "il",
    "Italy": "it",
    "Jamaica": "jm",
    "Japan": "jp",
    "Jordan": "jo",
    "Kazakhstan": "kz",
    "Kenya": "ke",
    "Kiribati": "ki",
    "Korea (North)": "kp",
    "Korea (South)": "kr",
    "Kosovo": "xk",
    "Kuwait": "kw",
    "Kyrgyzstan": "kg",
    "Laos": "la",
    "Latvia": "lv",
    "Lebanon": "lb",
    "Lesotho": "ls",
    "Liberia": "lr",
    "Libya": "ly",
    "Liechtenstein": "li",
    "Lithuania": "lt",
    "Luxembourg": "lu",
    "Madagascar": "mg",
    "Malawi": "mw",
    "Malaysia": "my",
    "Maldives": "mv",
    "Mali": "ml",
    "Malta": "mt",
    "Marshall Islands": "mh",
    "Mauritania": "mr",
    "Mauritius": "mu",
    "Mexico": "mx",
    "Micronesia": "fm",
    "Moldova": "md",
    "Monaco": "mc",
    "Mongolia": "mn",
    "Montenegro": "me",
    "Morocco": "ma",
    "Mozambique": "mz",
    "Myanmar (Burma)": "mm",
    "Namibia": "na",
    "Nauru": "nr",
    "Nepal": "np",
    "Netherlands": "nl",
    "New Zealand": "nz",
    "Nicaragua": "ni",
    "Niger": "ne",
    "Nigeria": "ng",
    "North Macedonia": "mk",
    "Norway": "no",
    "Oman": "om",
    "Pakistan": "pk",
    "Palau": "pw",
    "Palestine State": "ps",
    "Panama": "pa",
    "Papua New Guinea": "pg",
    "Paraguay": "py",
    "Peru": "pe",
    "Philippines": "ph",
    "Poland": "pl",
    "Portugal": "pt",
    "Qatar": "qa",
    "Romania": "ro",
    "Russia": "ru",
    "Rwanda": "rw",
    "Saint Kitts and Nevis": "kn",
    "Saint Lucia": "lc",
    "Saint Vincent and the Grenadines": "vc",
    "Samoa": "ws",
    "San Marino": "sm",
    "Sao Tome and Principe": "st",
    "Saudi Arabia": "sa",
    "Senegal": "sn",
    "Serbia": "rs",
    "Seychelles": "sc",
    "Sierra Leone": "sl",
    "Singapore": "sg",
    "Slovakia": "sk",
    "Slovenia": "si",
    "Solomon Islands": "sb",
    "Somalia": "so",
    "South Africa": "za",
    "South Sudan": "ss",
    "Spain": "es",
    "Sri Lanka": "lk",
    "Sudan": "sd",
    "Suriname": "sr",
    "Sweden": "se",
    "Switzerland": "ch",
    "Syria": "sy",
    "Tajikistan": "tj",
    "Tanzania": "tz",
    "Thailand": "th",
    "Timor-Leste": "tl",
    "Togo": "tg",
    "Tonga": "to",
    "Trinidad and Tobago": "tt",
    "Tunisia": "tn",
    "Turkey": "tr",
    "Turkmenistan": "tm",
    "Tuvalu": "tv",
    "Uganda": "ug",
    "Ukraine": "ua",
    "United Arab Emirates": "ae",
    "United Kingdom": "gb",
    "United States": "us",
    "Uruguay": "uy",
    "Uzbekistan": "uz",
    "Vanuatu": "vu",
    "Venezuela": "ve",
    "Vietnam": "vn",
    "Yemen": "ye",
    "Zambia": "zm",
    "Zimbabwe": "zw"
        // Add more mappings as needed
};

// Keywords for filtering articles by category
const categoryKeywords = {
    general: [],
    politics: ["politics", "election", "government", "policy"],
    science: ["science", "research", "discovery", "technology", "health"],
    technology: ["technology", "tech", "AI", "innovation", "startups"],
    entertainment: ["entertainment", "movies", "music", "celebrity", "culture"],
    health: ["health", "medicine", "wellness", "disease", "treatment", "fitness"], // New health category
    sports: ["sports", "football", "soccer", "basketball", "tennis", "athletics"], // New sports category
    business: ["business", "finance", "economy", "startup", "stock", "investment", "market"] // New business category
};

// Function to fetch and display country data

/**
 * Fetches and displays data about a country.
 * @param {string} countryName - The name of the country to fetch data for.
 */

async function getCountryData(countryName) {
    const result = document.getElementById("result");
    result.innerHTML = "<p>Loading country data...</p>";

    try {
        const api_url = `https://restcountries.com/v3.1/name/${countryName}`;
        const response = await fetch(api_url);

        if (!response.ok) throw new Error("Country data not available");

        const data = await response.json();
        const country = data[0];

        const currencyCode = Object.keys(country.currencies)[0];
        const currencyName = country.currencies[currencyCode].name;
        const currencySymbol = country.currencies[currencyCode].symbol;

        document.getElementById("currency").textContent = `${currencyName.replace(/^.*\s/, '')} (${currencyCode}) ${currencySymbol}`;

        result.innerHTML = `
            <img src="${country.flags.svg}" class="flag-img">
            <h2>${country.name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital</h4>
                    <span><b>${country.capital[0]}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent</h4>
                    <span><b>${country.continents[0]}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population</h4>
                    <span><b>${country.population.toLocaleString()}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Dialing Code</h4>
                    <span><b>${country.idd.root}${country.idd.suffixes[0]}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Languages</h4>
                    <span><b>${Object.values(country.languages).join(", ")}</b></span>
                </div>
            </div>
        `;
    } catch (error) {
        result.innerHTML = "<p>Country data not available</p>";
        document.getElementById("currency").textContent = "N/A";
    }
}


// Function to fetch and display country data
async function getCountryData(countryName) {
    const result = document.getElementById("result");
    const currencyContainer = document.getElementById("currency");
    result.innerHTML = "<p>Loading country data...</p>";

    try {
        const api_url = `https://restcountries.com/v3.1/name/${countryName}`;
        const response = await fetch(api_url);

        if (!response.ok) throw new Error("Country data not available");

        const data = await response.json();
        const country = data[0];

        // Check and set the currency data
        const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : 'N/A';
        const currencyName = country.currencies ? country.currencies[currencyCode].name : 'N/A';
        const currencySymbol = country.currencies ? country.currencies[currencyCode].symbol : 'N/A';

        // Set currency container text
        currencyContainer.textContent = `${currencyName.replace(/^.*\s/, '')} (${currencyCode}) ${currencySymbol}`;

        result.innerHTML = `
            <img src="${country.flags.svg}" class="flag-img">
            <h2>${country.name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital</h4>
                    <span><b>${country.capital ? country.capital[0] : 'N/A'}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent</h4>
                    <span><b>${country.continents ? country.continents[0] : 'N/A'}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population</h4>
                    <span><b>${country.population ? country.population.toLocaleString() : 'N/A'}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Dialing Code</h4>
                    <span><b>${country.idd ? `${country.idd.root}${country.idd.suffixes[0]}` : 'N/A'}</b></span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Languages</h4>
                    <span><b>${country.languages ? Object.values(country.languages).join(", ") : 'N/A'}</b></span>
                </div>
            </div>
        `;
		} catch (error) {
			result.innerHTML = "<p>Country data not available</p>";
			currencyContainer.textContent = "N/A";
		}
	}

	// Map click event integration for handling country info and headlines
	document.querySelectorAll(".allPaths").forEach(e => {
		e.addEventListener("click", function () {
			const countryName = e.id;

			// Fetch and display country data and news
			fetchTopHeadlinesByCountry(countryName);
			getCountryData(countryName);

			// Open the modal for displaying country information and headlines
			openHeadlinesModal();
		});
	});

	// Function to fetch and display news headlines by country

	/**
 * Fetches and displays news headlines for a given country.
 * @param {string} countryName - The name of the country to fetch news headlines for.
 */

	async function fetchTopHeadlinesByCountry(countryName) {
		const headlinesContainer = document.getElementById("headlines");
		const nameqContainer = document.getElementById("nameq");

		// Update the country name in the location box
		if (nameqContainer) {
			nameqContainer.innerText = countryName;
		}

		headlinesContainer.innerHTML = "<p>Loading latest headlines...</p>";

		// API keys and base URLs
		const gNewsApiKey = "f760069439c7443a00e06790756587d2";
		const gNewsUrl = `https://gnews.io/api/v4/top-headlines?apikey=${gNewsApiKey}&lang=en`;

		const newsDataApiKey = "pub_61543c37c6c1f87179e71855c773036be96e2";
		const newsDataUrl = `https://newsdata.io/api/1/news?apikey=${newsDataApiKey}&language=en`;

		const newsApiApiKey = "3d03b6a8ba4e48c1b543bc0e701524ee"; // Replace with your NewsAPI key
		const newsApiUrl = `https://newsapi.org/v2/everything?apiKey=${newsApiApiKey}&language=en`;

		try {
			// Fetch data from all three APIs in parallel
			const [gNewsResponse, newsDataResponse, newsApiResponse] = await Promise.all([
				fetch(`${gNewsUrl}&q=${encodeURIComponent(countryName)}`),
				fetch(`${newsDataUrl}&q=${encodeURIComponent(countryName)}`),
				fetch(`${newsApiUrl}&q=${encodeURIComponent(countryName)}`)
			]);

			const gNewsData = await gNewsResponse.json();
			const newsDataData = await newsDataResponse.json();
			const newsApiData = await newsApiResponse.json();

			// Combine articles from all APIs
			let articles = [];

			if (gNewsData.articles) {
				articles = articles.concat(
					gNewsData.articles.map(article => ({
						title: article.title,
						description: article.description,
						url: article.url,
						source: "GNews",
						content: article.content || ''
					}))
				);
			}

			if (newsDataData.results) {
				articles = articles.concat(
					newsDataData.results.map(article => ({
						title: article.title,
						description: article.description,
						url: article.link,
						source: "NewsData",
						content: article.content || ''
					}))
				);
			}

			if (newsApiData.articles) {
				articles = articles.concat(
					newsApiData.articles.map(article => ({
						title: article.title,
						description: article.description,
						url: article.url,
						source: "NewsAPI",
						content: article.content || ''
					}))
				);
			}

			if (articles.length === 0) {
				headlinesContainer.innerHTML = `<p>No headlines found for ${countryName}.</p>`;
				return;
			}

			// Prioritize articles with the country name in the title, description, or content
			articles = articles.sort((a, b) => {
				const countryRegex = new RegExp(countryName, 'i');
				const aMatch = countryRegex.test(a.title + a.description + a.content) ? 1 : 0;
				const bMatch = countryRegex.test(b.title + b.description + b.content) ? 1 : 0;
				return bMatch - aMatch; // Higher priority for matches
			});


			// Render articles with attribution

			headlinesContainer.innerHTML = `
    ${articles
					.map(article => `
            <div class="headline">
                <h4>${article.title}</h4>
                <p class="description">${article.description || "No description available"}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `).join('')}
    <div id="attribution">
        <p>Powered by GNews, NewsData, and NewsAPI</p>
    </div>
`;

			// Move attribution above the buttons
			const attributionDiv = document.getElementById("attribution");
			const scrollButtonsContainer = document.getElementById("scroll-buttons");
			if (attributionDiv && scrollButtonsContainer) {
				scrollButtonsContainer.insertAdjacentElement("beforebegin", attributionDiv);
			}


			// Reinitialize scroll functionality for navigation buttons
			setupScrollButtons();

		} catch (error) {
			console.error("Error fetching news:", error);
			headlinesContainer.innerHTML = `<p>Error loading news for ${countryName}.</p>`;
		}
	}
    