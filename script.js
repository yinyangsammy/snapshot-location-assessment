
document.addEventListener("DOMContentLoaded", () => {
    const countryNameToCode = {
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
        "Taiwan": "tw",
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
        // Add the remaining mappings here...
    };

    // Select all paths with the class 'allPaths'
    const paths = document.querySelectorAll("path.allPaths");

    paths.forEach((path) => {
        const countryName = path.id.trim(); // Get the current country name (id)
        const countryCode = countryMapping[countryName]; // Find the matching ISO code

        if (countryCode) {
            // Add the ISO code as a data attribute
            path.setAttribute("data-iso", countryCode);
        } else {
            console.warn(`No ISO code found for country: ${countryName}`);
        }
    });
});


	// Full mapping of countries to IANA time zones
const countryTimeZones = {
    "Afghanistan": "Asia/Kabul",
    "Albania": "Europe/Tirane",
    "Algeria": "Africa/Algiers",
    "Andorra": "Europe/Andorra",
    "Angola": "Africa/Luanda",
    "Antarctica": "Antarctica/Palmer",
    "Antigua and Barbuda": "America/Antigua",
    "Argentina": "America/Argentina/Buenos_Aires",
    "Armenia": "Asia/Yerevan",
    "Australia": "Australia/Sydney",
    "Austria": "Europe/Vienna",
    "Azerbaijan": "Asia/Baku",
    "Bahamas": "America/Nassau",
    "Bahrain": "Asia/Bahrain",
    "Bangladesh": "Asia/Dhaka",
    "Barbados": "America/Barbados",
    "Belarus": "Europe/Minsk",
    "Belgium": "Europe/Brussels",
    "Belize": "America/Belize",
    "Benin": "Africa/Porto-Novo",
    "Bhutan": "Asia/Thimphu",
    "Bolivia": "America/La_Paz",
    "Bosnia and Herzegovina": "Europe/Sarajevo",
    "Botswana": "Africa/Gaborone",
    "Brazil": "America/Sao_Paulo",
    "Brunei": "Asia/Brunei",
    "Bulgaria": "Europe/Sofia",
    "Burkina Faso": "Africa/Ouagadougou",
    "Burundi": "Africa/Bujumbura",
    "Cambodia": "Asia/Phnom_Penh",
    "Cameroon": "Africa/Douala",
    "Canada": "America/Toronto",
    "Cape Verde": "Atlantic/Cape_Verde",
    "Central African Republic": "Africa/Bangui",
    "Chad": "Africa/Ndjamena",
    "Chile": "America/Santiago",
    "China": "Asia/Shanghai",
    "Colombia": "America/Bogota",
    "Comoros": "Indian/Comoro",
    "Congo (Kinshasa)": "Africa/Kinshasa",
    "Congo (Brazzaville)": "Africa/Brazzaville",
    "Costa Rica": "America/Costa_Rica",
    "Croatia": "Europe/Zagreb",
    "Cuba": "America/Havana",
    "Cyprus": "Asia/Nicosia",
    "Czech Republic": "Europe/Prague",
    "Denmark": "Europe/Copenhagen",
    "Djibouti": "Africa/Djibouti",
    "Dominica": "America/Dominica",
    "Dominican Republic": "America/Santo_Domingo",
    "Ecuador": "America/Guayaquil",
    "Egypt": "Africa/Cairo",
    "El Salvador": "America/El_Salvador",
    "Equatorial Guinea": "Africa/Malabo",
    "Eritrea": "Africa/Asmara",
    "Estonia": "Europe/Tallinn",
    "Eswatini": "Africa/Mbabane",
    "Ethiopia": "Africa/Addis_Ababa",
    "Fiji": "Pacific/Fiji",
    "Finland": "Europe/Helsinki",
    "France": "Europe/Paris",
    "Gabon": "Africa/Libreville",
    "Gambia": "Africa/Banjul",
    "Georgia": "Asia/Tbilisi",
    "Germany": "Europe/Berlin",
    "Ghana": "Africa/Accra",
    "Greece": "Europe/Athens",
    "Greenland": "America/Nuuk",
    "Grenada": "America/Grenada",
    "Guatemala": "America/Guatemala",
    "Guinea": "Africa/Conakry",
    "Guinea-Bissau": "Africa/Bissau",
    "Guyana": "America/Guyana",
    "Haiti": "America/Port-au-Prince",
    "Honduras": "America/Tegucigalpa",
    "Hungary": "Europe/Budapest",
    "Iceland": "Atlantic/Reykjavik",
    "India": "Asia/Kolkata",
    "Indonesia": "Asia/Jakarta",
    "Iran": "Asia/Tehran",
    "Iraq": "Asia/Baghdad",
    "Ireland": "Europe/Dublin",
    "Israel": "Asia/Jerusalem",
    "Italy": "Europe/Rome",
    "Ivory Coast": "Africa/Abidjan",
    "Jamaica": "America/Jamaica",
    "Japan": "Asia/Tokyo",
    "Jordan": "Asia/Amman",
    "Kazakhstan": "Asia/Almaty",
    "Kenya": "Africa/Nairobi",
    "Kiribati": "Pacific/Tarawa",
    "Korea, North": "Asia/Pyongyang",
    "Korea, South": "Asia/Seoul",
    "Kuwait": "Asia/Kuwait",
    "Kyrgyzstan": "Asia/Bishkek",
    "Laos": "Asia/Vientiane",
    "Latvia": "Europe/Riga",
    "Lebanon": "Asia/Beirut",
    "Lesotho": "Africa/Maseru",
    "Liberia": "Africa/Monrovia",
    "Libya": "Africa/Tripoli",
    "Liechtenstein": "Europe/Vaduz",
    "Lithuania": "Europe/Vilnius",
    "Luxembourg": "Europe/Luxembourg",
    "Macau": "Asia/Macau",
    "Madagascar": "Indian/Antananarivo",
    "Malawi": "Africa/Blantyre",
    "Malaysia": "Asia/Kuala_Lumpur",
    "Maldives": "Indian/Maldives",
    "Mali": "Africa/Bamako",
    "Malta": "Europe/Malta",
    "Marshall Islands": "Pacific/Majuro",
    "Mauritania": "Africa/Nouakchott",
    "Mauritius": "Indian/Mauritius",
    "Mexico": "America/Mexico_City",
    "Micronesia": "Pacific/Chuuk",
    "Moldova": "Europe/Chisinau",
    "Monaco": "Europe/Monaco",
    "Mongolia": "Asia/Ulaanbaatar",
    "Montenegro": "Europe/Podgorica",
    "Morocco": "Africa/Casablanca",
    "Mozambique": "Africa/Maputo",
    "Myanmar": "Asia/Yangon",
    "Namibia": "Africa/Windhoek",
    "Nauru": "Pacific/Nauru",
    "Nepal": "Asia/Kathmandu",
    "Netherlands": "Europe/Amsterdam",
    "New Zealand": "Pacific/Auckland",
    "Nicaragua": "America/Managua",
    "Niger": "Africa/Niamey",
    "Nigeria": "Africa/Lagos",
    "Norway": "Europe/Oslo",
    "Oman": "Asia/Muscat",
    "Pakistan": "Asia/Karachi",
    "Palau": "Pacific/Palau",
    "Panama": "America/Panama",
    "Papua New Guinea": "Pacific/Port_Moresby",
    "Paraguay": "America/Asuncion",
    "Peru": "America/Lima",
    "Philippines": "Asia/Manila",
    "Poland": "Europe/Warsaw",
    "Portugal": "Europe/Lisbon",
    "Qatar": "Asia/Qatar",
    "Romania": "Europe/Bucharest",
    "Russia": "Europe/Moscow",
    "Rwanda": "Africa/Kigali",
    "Saint Kitts and Nevis": "America/St_Kitts",
    "Saint Lucia": "America/St_Lucia",
    "Saint Vincent and the Grenadines": "America/St_Vincent",
    "Samoa": "Pacific/Apia",
    "San Marino": "Europe/San_Marino",
    "Sao Tome and Principe": "Africa/Sao_Tome",
    "Saudi Arabia": "Asia/Riyadh",
    "Senegal": "Africa/Dakar",
    "Serbia": "Europe/Belgrade",
    "Seychelles": "Indian/Mahe",
    "Sierra Leone": "Africa/Freetown",
    "Singapore": "Asia/Singapore",
    "Slovakia": "Europe/Bratislava",
    "Slovenia": "Europe/Ljubljana",
    "Solomon Islands": "Pacific/Guadalcanal",
    "Somalia": "Africa/Mogadishu",
    "South Africa": "Africa/Johannesburg",
    "South Sudan": "Africa/Juba",
    "Spain": "Europe/Madrid",
    "Sri Lanka": "Asia/Colombo",
    "Sudan": "Africa/Khartoum",
    "Suriname": "America/Paramaribo",
    "Swaziland": "Africa/Mbabane",
    "Sweden": "Europe/Stockholm",
    "Switzerland": "Europe/Zurich",
    "Syria": "Asia/Damascus",
    "Taiwan": "Asia/Taipei",
    "Tajikistan": "Asia/Dushanbe",
    "Tanzania": "Africa/Dar_es_Salaam",
    "Thailand": "Asia/Bangkok",
    "Turkey": "Asia/Istanbul",
    "Turkmenistan": "Asia/Ashgabat",
    "United Kingdom": "Europe/London",
    "United States": "America/New_York",
    "Uzbekistan": "Asia/Tashkent",
    "Venezuela": "America/Caracas",
    "Vietnam": "Asia/Ho_Chi_Minh",
    "Yemen": "Asia/Sana'a",

    "Anguilla": "America/Anguilla",
    "Aruba": "America/Aruba",
    "Bermuda": "Atlantic/Bermuda",
    "Bouvet Island": "Atlantic/Bouvet",
    "British Indian Ocean Territory": "Indian/Chagos",
    "Cayman Islands": "America/Cayman",
    "Christmas Island": "Indian/Christmas",
    "Cocos (Keeling) Islands": "Indian/Cocos",
    "Cook Islands": "Pacific/Rarotonga",
    "Falkland Islands": "Atlantic/Stanley",
    "Faroe Islands": "Atlantic/Faroe",
    "French Guiana": "America/Cayenne",
    "French Polynesia": "Pacific/Tahiti",
    "French Southern Territories": "Indian/Kerguelen",
    "Gibraltar": "Europe/Gibraltar",
    "Greenland": "America/Godthab",
    "Guadeloupe": "America/Guadeloupe",
    "Guam": "Pacific/Guam",
    "Guernsey": "Europe/Guernsey",
    "Holy See (Vatican City)": "Europe/Vatican",
    "Isle of Man": "Europe/Isle_of_Man",
    "Jersey": "Europe/Jersey",
    "Mayotte": "Indian/Mayotte",
    "Montserrat": "America/Montserrat",
    "Montserrat": "America/Montserrat",
    "New Caledonia": "Pacific/Noumea",
    "Niue": "Pacific/Niue",
    "Norfolk Island": "Pacific/Norfolk",
    "Pitcairn Islands": "Pacific/Pitcairn",
    "Reunion": "Indian/Reunion",
    "Saint Barthelemy": "America/St_Barthelemy",
    "Saint Helena, Ascension and Tristan da Cunha": "Atlantic/St_Helena",
    "Saint Martin (French part)": "America/Marigot",
    "Saint Pierre and Miquelon": "America/Miquelon",
    "Svalbard and Jan Mayen": "Arctic/Longyearbyen",
    "Tokelau": "Pacific/Fakaofo",
    "Tonga": "Pacific/Tongatapu",
    "Tuvalu": "Pacific/Funafuti",
    "Vanuatu": "Pacific/Efate",
    "Wallis and Futuna": "Pacific/Wallis",
    "Western Sahara": "Africa/El_Aaiun"
    
};

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
            el.style.fill = "#ef814e";
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

    const newsApiApiKey = "3d03b6a8ba4e48c1b543bc0e701524ee";
    const newsApiUrl = `https://newsapi.org/v2/everything?apiKey=${newsApiApiKey}&language=en`;

    const worldNewsApiKey = "6a12b24e61msh79a4ff4b1df50bep1d86b8jsn2f76f469d4e9";
    const worldNewsUrl = `https://world-news-api.p.rapidapi.com/search-news?text=${encodeURIComponent(countryName)}&language=en`;

    try {
        // Fetch data from all APIs in parallel
        const [gNewsResponse, newsDataResponse, newsApiResponse, worldNewsResponse] = await Promise.all([
            fetch(`${gNewsUrl}&q=${encodeURIComponent(countryName)}`),
            fetch(`${newsDataUrl}&q=${encodeURIComponent(countryName)}`),
            fetch(`${newsApiUrl}&q=${encodeURIComponent(countryName)}`),
            fetch(worldNewsUrl, {
                headers: {
                    "X-RapidAPI-Key": worldNewsApiKey,
                    "X-RapidAPI-Host": "world-news-api.p.rapidapi.com"
                }
            })
        ]);

        const gNewsData = await gNewsResponse.json();
        const newsDataData = await newsDataResponse.json();
        const newsApiData = await newsApiResponse.json();
        const worldNewsData = await worldNewsResponse.json();

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

        if (worldNewsData.news) {
            articles = articles.concat(
                worldNewsData.news.map(article => ({
                    title: article.title,
                    description: article.summary,
                    url: article.url,
                    source: "WorldNewsAPI",
                    content: article.content || ''
                }))
            );
        }

        if (articles.length === 0) {
            headlinesContainer.innerHTML = `<p>No headlines found for ${countryName}.</p>`;
            return;
        }

        // Remove duplicate articles by URL
        const uniqueArticles = [];
        const seenUrls = new Set();
        articles.forEach(article => {
            if (!seenUrls.has(article.url)) {
                seenUrls.add(article.url);
                uniqueArticles.push(article);
            }
        });

        // Prioritize articles with the country name in the title, description, or content
        uniqueArticles.sort((a, b) => {
            const countryRegex = new RegExp(countryName, 'i');
            const aMatch = countryRegex.test(a.title + a.description + a.content) ? 1 : 0;
            const bMatch = countryRegex.test(b.title + b.description + b.content) ? 1 : 0;
            return bMatch - aMatch; // Higher priority for matches
        });

        // Limit article descriptions to 5 lines max
        function trimToFiveLines(text) {
            if (!text) return "No description available";
            const lines = text.split('. ').slice(0, 5).join('. ') + '.';
            return lines.length < text.length ? lines + "..." : lines;
        }

        // Render articles with attribution
        headlinesContainer.innerHTML = `
            ${uniqueArticles.map(article => `
                <div class="headline">
                    <h4>${article.title}</h4>
                    <p class="description">${trimToFiveLines(article.description)}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            `).join('')}
            <div id="attribution">
                <p>Powered by GNews, NewsData, NewsAPI, and WorldNewsAPI</p>
            </div>
        `;
    } catch (error) {
        console.error("Error fetching news headlines:", error);
        headlinesContainer.innerHTML = "<p>Failed to load news headlines.</p>";
    }
}

// Move attribution above the buttons
const attributionDiv = document.getElementById("attribution");
const scrollButtonsContainer = document.getElementById("scroll-buttons");
if (attributionDiv && scrollButtonsContainer) {
    scrollButtonsContainer.insertAdjacentElement("beforebegin", attributionDiv);
}

// Reinitialize scroll functionality for navigation buttons
setupScrollButtons();


/**
 * Truncates text to a maximum number of lines.
 * @param {string} text - The text to truncate.
 * @param {number} maxLines - The maximum number of lines allowed.
 * @returns {string} - The truncated text.
 */
function truncateText(text, maxLines) {
    if (!text) return "";
    const words = text.split(" ");
    let truncatedText = "";
    let lines = 0;

    for (let i = 0; i < words.length; i++) {
        truncatedText += words[i] + " ";
        if ((i + 1) % 10 === 0) lines++; // Approximate line count (10 words per line)
        if (lines >= maxLines) break;
    }

    return truncatedText.trim() + "...";
}


// Scroll functionality

// Scroll functionality: Adds smooth scrolling to headlines

/**
 * Initializes scroll functionality for navigation buttons.
 */

function setupScrollButtons() {
    const scrollableContent = document.getElementById("headlines");
    const scrollUpButton = document.getElementById("scroll-up");
    const scrollDownButton = document.getElementById("scroll-down");
    const backToTopButton = document.getElementById("back-to-top");

    if (!scrollableContent) return; // Exit if no scrollable content found

    // Scrolls up by 100px when the scroll-up button is clicked
    if (scrollUpButton) {
        scrollUpButton.addEventListener("click", () => {
            scrollableContent.scrollBy({ top: -100, behavior: "smooth" });
        });
    }

    // Scrolls down by 100px when the scroll-down button is clicked
    if (scrollDownButton) {
        scrollDownButton.addEventListener("click", () => {
            scrollableContent.scrollBy({ top: 100, behavior: "smooth" });
        });
    }

    // Scrolls to the top when the back-to-top button is clicked
    if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
            scrollableContent.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

// Clone and maximize functionality: Creates a pop-out clone of the snapshot-box


/**
 * Clones a container and maximizes it for a pop-out view.
 * @param {HTMLElement} button - The button that triggers the clone and maximize action.
 */
function cloneAndMaximize(button) {
    const parentBox = button.closest('.snapshot-box'); // Find parent container
    const firstRow = document.querySelector('#first-row');

    if (!parentBox) return; // Exit if no parent box found

    // Check if any container is already maximized
    const existingMaximized = document.querySelector('.maximized');
    if (existingMaximized) {
        console.log("A container is already maximized. Removing the existing one.");
        existingMaximized.remove(); // Remove existing maximized container
    }

    // Clone the container and apply styles for pop-out view
    const clonedBox = parentBox.cloneNode(true);
    clonedBox.classList.add('maximized');
    clonedBox.style.position = 'fixed';
    clonedBox.style.top = '2%';
    clonedBox.style.left = '2%';
    clonedBox.style.right = '2%';
    clonedBox.style.bottom = '2%';
    clonedBox.style.width = '95vw'; /* Pop-out width: 95% of viewport */
    clonedBox.style.height = '95vh'; /* Pop-out height: 95% of viewport */
    clonedBox.style.zIndex = '1000';
    clonedBox.style.boxSizing = 'border-box';
    clonedBox.style.padding = '15px';
    clonedBox.style.overflow = 'auto';
    clonedBox.style.backdropFilter = 'blur(10px)'; // Frosted glass effect
    clonedBox.style.background = 'rgba(255, 255, 255, 0.5)';
    clonedBox.style.borderRadius = '10px';

    // Temporarily hide first-row scaling effect
    firstRow.classList.add('scaled');

    // Append cloned box to the body
    document.body.appendChild(clonedBox);

    // Add draggable functionality to the cloned box
    makeDraggable(clonedBox);

    // Add close button functionality to remove the cloned box
    const closeButton = clonedBox.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            clonedBox.remove(); // Remove cloned box
            firstRow.classList.remove('scaled'); // Restore first-row scaling
        });
    }

    // Initialize scroll buttons inside the maximized container
    initializeMaximizedButtons();

    // 🟢 Ensure holidays scroll buttons work inside the maximized container
    initializeHolidaysScrollButtonsForContainer(clonedBox);
}

/**
 * Initializes holidays scroll buttons inside a specific container.
 * @param {HTMLElement} container - The container where the buttons should work.
 */
function initializeHolidaysScrollButtonsForContainer(container) {
    const holidaysList = container.querySelector("#holidays-list");
    const scrollUpBtn = container.querySelector("#holidays-scroll-up");
    const scrollDownBtn = container.querySelector("#holidays-scroll-down");
    const backToTopBtn = container.querySelector("#holidays-back-to-top");

    if (!holidaysList) {
        console.error("Holidays list not found inside maximized container!");
        return;
    }

    function scrollUpHandler() {
        holidaysList.scrollBy({ top: -100, behavior: "smooth" });
    }

    function scrollDownHandler() {
        holidaysList.scrollBy({ top: 100, behavior: "smooth" });
    }

    function backToTopHandler() {
        holidaysList.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (scrollUpBtn) {
        scrollUpBtn.addEventListener("click", scrollUpHandler);
    }

    if (scrollDownBtn) {
        scrollDownBtn.addEventListener("click", scrollDownHandler);
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", backToTopHandler);
    }

    console.log("🔥 Holidays scroll buttons initialized inside maximized container! ✅");
}


// Draggable functionality: Enables dragging of the pop-out container

/**
 * Enables dragging functionality for a pop-out container.
 * @param {HTMLElement} popup - The container element to be made draggable.
 */

function makeDraggable(popup) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    popup.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.offsetLeft;
        offsetY = e.clientY - popup.offsetTop;
        popup.style.cursor = "pointer";
    });

    window.addEventListener("mousemove", (e) => {
        if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
            popup.style.position = "absolute";
        }
    });

    window.addEventListener("mouseup", () => {
        isDragging = false;
        popup.style.cursor = "default";
    });
}

// Fixes button functionality inside cloned/maximized containers
function fixButtonFunctionality(container) {
    // Fix return to top buttons
    container.querySelectorAll('.return-top-btn').forEach(button => {
        button.addEventListener('click', () => {
            const listContainer = button.closest('.snapshot-box')?.querySelector('.list-container');
            if (listContainer) {
                listContainer.scrollTop = 0; // Scroll to top
            }
        });
    });

    // Fix scroll buttons for holidays-list
    container.querySelectorAll('.scroll-btn').forEach(button => {
        button.addEventListener('click', () => {
            const listContainer = container.querySelector('.holidays-list');
            if (listContainer) {
                const direction = button.classList.contains('scroll-down') ? 1 : -1;
                listContainer.scrollBy({ top: direction * 100, behavior: 'smooth' });
            }
        });
    });
}

// Function to initialize all button events after cloning/maximizing
function initializeMaximizedButtons() {
    // Ensure the buttons inside the maximized container work
    document.querySelectorAll('.maximize-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            cloneAndMaximize(e.target); // Call the function to clone and maximize
        });
    });

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Close the cloned container
            const clonedContainer = e.target.closest('.snapshot-box');
            clonedContainer.remove(); 
        });
    });

    // Initialize scroll buttons for each maximized container
    document.querySelectorAll('.navigation-buttons-holidays button').forEach(button => {
        button.addEventListener('click', handleScrollButtons); 
    });

    // Initialize scroll buttons for all other containers (e.g. headlines, etc.)
    document.querySelectorAll('.navigation-buttons-black button').forEach(button => {
        button.addEventListener('click', handleScrollButtons); 
    });
}

// Handling scroll buttons for any container
function handleScrollButtons(e) {
    const parentContainer = e.target.closest('.snapshot-box');
    const list = parentContainer.querySelector('.scrollable-content');
    
    if (!list) return; // Exit if no scrollable content found

    const scrollAmount = e.target.id.includes('up') ? -100 : (e.target.id.includes('down') ? 100 : 0);

    if (scrollAmount !== 0) {
        list.scrollBy({ top: scrollAmount, behavior: "smooth" });
    } else if (e.target.id === 'back-to-top') {
        list.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Initialize all the buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeMaximizedButtons();
});

// Attach maximize functionality to buttons
document.querySelectorAll('.maximize-btn').forEach(button => {
    button.addEventListener('click', () => {
        cloneAndMaximize(button);
    });
});

// Change background color of header and buttons
const header = document.querySelector("#headlines-header");
if (header) {
    header.style.backgroundColor = "black";
    header.style.color = "white";
}

document.querySelectorAll(".window-controls button").forEach(button => {
    button.style.backgroundColor = "rgb(181, 165, 155, 0)";
    button.style.color = "black";
});

// Function to fetch and display public holidays
// Function to fetch and display public holidays
async function fetchPublicHolidays(countryName) {
    try {
      // Step 1: Get ISO country code using REST Countries API
      const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const countryData = await countryResponse.json();
      const countryCode = countryData[0].cca2; // Extract ISO alpha-2 code (e.g., "GB" for UK)
  
      if (!countryCode) {
        console.error(`Could not find ISO code for ${countryName}`);
        return;
      }
  
      // Step 2: Fetch public holidays from API Ninjas using the country code
      const currentYear = new Date().getFullYear();
      const holidaysResponse = await fetch(`https://api.api-ninjas.com/v1/holidays?country=${countryCode}&year=${currentYear}`, {
        headers: { 'X-Api-Key': 'oynQZsr3dpVh2dKnjXNvLg==GgPfFc4Od4Sycuuy' }
      });
  
      const holidays = await holidaysResponse.json();
  
      // Step 3: Filter and sort holidays from today onward
      const today = new Date();
      const upcomingHolidays = holidays
        .map(holiday => ({
          ...holiday,
          date: new Date(holiday.date)
        }))
        .filter(holiday => holiday.date >= today)
        .sort((a, b) => a.date - b.date);
  
      // Step 4: Display holidays in the UI
      const holidaysList = document.getElementById("holidays-list");
      holidaysList.innerHTML = ""; // Clear previous results
  
      if (upcomingHolidays.length === 0) {
        holidaysList.innerHTML = "<li>No upcoming public holidays found.</li>";
        return;
      }
      initializeHolidaysScrollButtons(); // Run it after rendering holidays
      upcomingHolidays.forEach(holiday => {
        const listItem = document.createElement("li");
        listItem.textContent = `${holiday.date.toLocaleDateString()}: ${holiday.name}`;
        holidaysList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching public holidays:", error);
    }
  }
  
  // Attach this to your map click event!
  document.querySelectorAll(".allPaths").forEach((path) => {
    path.addEventListener("click", () => {
      const countryName = path.id; // Country name from map click
      fetchPublicHolidays(countryName); // Fetch holidays!
    });
  });
  
  function initializeHolidaysScrollButtons() {
      const holidaysList = document.getElementById("holidays-list");
      const scrollUpBtn = document.getElementById("holidays-scroll-up");
      const scrollDownBtn = document.getElementById("holidays-scroll-down");
      const backToTopBtn = document.getElementById("holidays-back-to-top");
  
      if (!holidaysList) {
          console.error("Holidays list not found!");
          return;
      }
  
      // Ensure we remove previous event listeners before adding new ones
      scrollUpBtn?.removeEventListener("click", scrollUpHandler);
      scrollDownBtn?.removeEventListener("click", scrollDownHandler);
      backToTopBtn?.removeEventListener("click", backToTopHandler);
  
      function scrollUpHandler() {
          holidaysList.scrollBy({ top: -100, behavior: "smooth" });
      }
  
      function scrollDownHandler() {
          holidaysList.scrollBy({ top: 100, behavior: "smooth" });
      }
  
      function backToTopHandler() {
          holidaysList.scrollTo({ top: 0, behavior: "smooth" });
      }
  
      if (scrollUpBtn) {
          scrollUpBtn.addEventListener("click", scrollUpHandler);
      }
  
      if (scrollDownBtn) {
          scrollDownBtn.addEventListener("click", scrollDownHandler);
      }
  
      if (backToTopBtn) {
          backToTopBtn.addEventListener("click", backToTopHandler);
      }
  
      console.log("🔥 Holidays scroll buttons initialized! ✅");
  
      
  }

  async function fetchPublicHolidays(countryName) {
    try {
        console.log(`Fetching ISO code for: ${countryName}`);

        const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const countryData = await countryResponse.json();

        console.log("Full REST Countries Response:", countryData);

        if (!Array.isArray(countryData) || countryData.length === 0) {
            console.error(`❌ No country data found for "${countryName}"`);
            return;
        }

        const countryCode = countryData[0]?.cca2; 
        console.log(`✅ Found ISO Code: ${countryCode}`);

        if (!countryCode) {
            console.error(`❌ Could not extract ISO code for "${countryName}"`);
            return;
        }

        // Fetch public holidays without specifying the year
        const holidaysResponse = await fetch(`https://api.api-ninjas.com/v1/holidays?country=${countryCode}`, {
            headers: { 'X-Api-Key': 'oynQZsr3dpVh2dKnjXNvLg==GgPfFc4Od4Sycuuy' }
        });

        const holidays = await holidaysResponse.json();
        console.log("🗓️ Public Holidays Data:", holidays);

        if (!Array.isArray(holidays) || holidays.length === 0) {
            console.warn(`⚠️ No upcoming holidays found for ${countryName}`);
        }

        // Filter and sort holidays for the current year
        const today = new Date();
        const upcomingHolidays = holidays
            .map(holiday => ({
                ...holiday,
                date: new Date(holiday.date)
            }))
            .filter(holiday => holiday.date >= today)  // Only keep upcoming holidays
            .sort((a, b) => a.date - b.date);  // Sort holidays by date

        // Display holidays
        const holidaysList = document.getElementById("holidays-list");
        holidaysList.innerHTML = ""; 

        if (upcomingHolidays.length === 0) {
            holidaysList.innerHTML = "<li>No upcoming public holidays found.</li>";
            return;
        }

        initializeHolidaysScrollButtons();

        upcomingHolidays.forEach(holiday => {
            const listItem = document.createElement("li");
            listItem.textContent = `${holiday.date.toLocaleDateString()}: ${holiday.name}`;
            holidaysList.appendChild(listItem);
        });

    } catch (error) {
        console.error("❌ Error fetching public holidays:", error);
    }
}

  

	// Weather Container

	/**
 * Fetches and displays current weather and forecast data for a given city.
 * 
 * @param {string} city - The name of the city to fetch weather data for.
 */

	function getWeather(city) {
		const apiKey = 'f768a779b53eb5b4119fb6ccbb38c01e';

		if (!city) {
			alert('Please enter a city');
			return;
		}

		const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
		const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

		fetch(currentWeatherUrl)
			.then(response => response.json())
			.then(data => {
				displayWeather(data);
			})
			.catch(error => {
				console.error('Error fetching current weather data:', error);
				alert('Error fetching current weather data. Please try again.');
			});

		fetch(forecastUrl)
			.then(response => response.json())
			.then(data => {
				displayHourlyForecast(data.list);
				displayFiveDayForecast(data.list);
			})
			.catch(error => {
				console.error('Error fetching forecast data:', error);
				alert('Error fetching forecast data. Please try again.');
			});
	}

	/**
 * Displays the current weather information in the UI.
 * 
 * @param {Object} data - The weather data returned from the API.
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

		if (data.cod === '404') {
			weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
		} else {
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
	}

	/**
 * Displays the hourly weather forecast for the next 24 hours in the UI.
 * 
 * @param {Array} hourlyData - An array of weather forecast data points.
 */

	function displayHourlyForecast(hourlyData) {
		const hourlyForecastDiv = document.getElementById('hourly-forecast');
		const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

		hourlyForecastDiv.innerHTML = ''; // Clear previous content

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
	}

	/**
 * Displays the 5-day weather forecast in the UI, selecting one forecast per day at noon.
 * 
 * @param {Array} hourlyData - An array of weather forecast data points.
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
			const day = dateTime.toLocaleDateString('en-US', { weekday: 'short' }); // Get day of the week
			const temperature = Math.round(item.main.temp - 273.15); // Convert Kelvin to Celsius
			const description = item.weather[0].description;
			const iconCode = item.weather[0].icon;
			const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

			const cardHtml = `
            <div class="forecast-card">
                <p><strong>${day}</strong></p>
                <img src="${iconUrl}" alt="${description}">
                <p>${temperature}°C</p>
                <p>${description}</p>
            </div>
        `;

			forecastCards.innerHTML += cardHtml;
		});
	}

	// Add scrolling functionality for the 5-day forecast
/**
 * Scrolls the 5-day forecast cards to the left when the left arrow is clicked.
 */

	document.getElementById("scroll-left").addEventListener("click", () => {
		const forecastCards = document.getElementById("forecast-cards");
		forecastCards.scrollBy({ left: -150, behavior: "smooth" });
	});

	/**
 * Scrolls the 5-day forecast cards to the right when the right arrow is clicked.
 */

	document.getElementById("scroll-right").addEventListener("click", () => {
		const forecastCards = document.getElementById("forecast-cards");
		forecastCards.scrollBy({ left: 150, behavior: "smooth" });
	});

	/**
 * Displays the weather icon by making the image element visible once it's loaded.
 */

	function showImage() {
		const weatherIcon = document.getElementById('weather-icon');
		weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
	}




	// Google Map with Search Bar //

	// Google Map with Search Bar //
let map, autocomplete, infowindow, marker;

/**
 * Initializes the Google Map, sets up autocomplete search functionality, and manages events like place selection.
 */
function initMap() {
    // Initialize map with global view
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 }, // Center of the world
        zoom: 2, // World view
    });

    // Clear the input field to reset the search bar to the placeholder text
    document.getElementById("autocomplete").value = "";

    // Create a marker that will be placed on the map
    marker = new google.maps.Marker({
        map: map,
        draggable: true, // Allow the user to drag the marker
    });

    // Create an infowindow to display location info
    infowindow = new google.maps.InfoWindow();

    // Set up the autocomplete input field
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
        types: ["geocode"], // Restrict to geographic locations
    });

    // When a place is selected from the autocomplete dropdown
    autocomplete.addListener("place_changed", function () {
        let place = autocomplete.getPlace();

        // Check if the place has geometry (location)
        if (place.geometry) {
            // Set the map to the selected location
            map.setCenter(place.geometry.location);
            map.setZoom(15); // Zoom in after selection

            // Move the marker to the selected location
            marker.setPosition(place.geometry.location);

            // Display the location name in the infowindow
            infowindow.setContent(
                "<strong>" + place.name + "</strong><br>" + place.formatted_address
            );
            infowindow.open(map, marker);

            // Fetch weather for the selected location
            const cityName = place.name || place.formatted_address.split(",")[0];
            getWeather(cityName);

            // Search for nearby hotels and amenities
            searchHotels();
            searchNearbyAmenities();

            // Trigger fade-in for the containers
            fadeInContainers();
        }
    });

    // Add a drag event listener to the marker to update the location when it's dragged
    google.maps.event.addListener(marker, "dragend", function () {
        let latLng = marker.getPosition();
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, function (results, status) {
            if (status === "OK" && results[0]) {
                infowindow.setContent("<strong>" + results[0].formatted_address + "</strong>");
                infowindow.open(map, marker);

                // Fetch weather for the dragged location
                const cityName = results[0].address_components[0].long_name;
                getWeather(cityName);

                // Update hotels and amenities based on new location
                searchHotels();
                searchNearbyAmenities();

                // Trigger fade-in for the containers
                fadeInContainers();
            }
        });
    });

    // Add bounds_changed listener to dynamically search hotels and amenities as the user scrolls or zooms the map
    google.maps.event.addListener(map, "bounds_changed", function () {
        searchHotels();
        searchNearbyAmenities();
    });

    // Initialize with containers hidden
    const allContainers = document.querySelectorAll(
        "#hotel-container, #place-container, #weather-container"
    );
    allContainers.forEach((container) => (container.style.display = "none"));

    /**
     * Function to fade in containers when a valid place is selected.
     */
    function fadeInContainers() {
        allContainers.forEach((container) => {
            if (container) {
                container.classList.add("fade-in"); // Ensure fade-in is applied
                container.style.display = "block"; // Make the container visible
            }
        });
    }
}


// Functionality for searching hotels, nearby amenities, weather, and other related tasks should follow below.



	// Hotel Search Integration

	/**
 * Searches for hotels within the current map bounds and displays them on the map and in a results table.
 */

	function searchHotels() {
		const MARKER_PATH = "https://maps.google.com/mapfiles/ms/icons/";  // Path to Google Map marker icons
		let places = new google.maps.places.PlacesService(map);
		let infoWindow = new google.maps.InfoWindow();
		let markers = [];

		const search = {
			bounds: map.getBounds(),
			types: ["lodging"]
		};

		places.nearbySearch(search, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				clearMarkers(); // Clear existing markers
				clearResults(); // Clear existing results

				results.forEach((result, i) => {
					// Use the same marker icon as for other places (used for place-container)
					const markerIcon = `${MARKER_PATH}blue-dot.png`;  // Adjust icon if necessary

					const marker = new google.maps.Marker({
						position: result.geometry.location,
						map: map,
						icon: markerIcon // Using the blue icon here
					});

					// Fetch detailed place information for the hotel
					places.getDetails({ placeId: result.place_id }, (place, status) => {
						if (status === google.maps.places.PlacesServiceStatus.OK) {
							const content = `
                            <div>
                                <strong>${place.name}</strong><br>
                                ${place.formatted_address || "No address available"}<br>
                                ${place.website ? `<a href="${place.website}" target="_blank">Website</a>` : "No website available"}<br>
                                ${place.international_phone_number || "No phone number available"}<br>
                                ${place.rating ? `Rating: ${place.rating} ★` : "No rating available"}
                            </div>
                        `;

							// Show hotel details on marker click
							marker.addListener("click", () => {
								infoWindow.setContent(content);
								infoWindow.open(map, marker);
							});

							addResult(place, i); // Add result to the table
						}
					});

					markers.push(marker); // Keep track of markers
				});
			}
		});

		
	/**
	 * Clears all markers from the map.
	 */

		function clearMarkers() {
			markers.forEach(marker => marker.setMap(null));
			markers = [];
		}

		/**
	 * Clears all the results from the results table.
	 */

		function clearResults() {
			const results = document.getElementById("results");
			while (results.firstChild) {
				results.removeChild(results.firstChild);
			}
		}

		/**
	 * Adds a hotel result to the results table.
	 * @param {object} place - The hotel place object to be added.
	 * @param {number} i - The index of the result.
	 */

		function addResult(place, i) {
			const results = document.getElementById("results");
			const markerIcon = `${MARKER_PATH}blue-dot.png`;  // Ensure we're using the same icon

			const tr = document.createElement("tr");
			tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";
			tr.onclick = () => google.maps.event.trigger(markers[i], "click");

			const iconTd = document.createElement("td");
			const nameTd = document.createElement("td");
			const detailsTd = document.createElement("td");
			const icon = document.createElement("img");

			icon.src = markerIcon;
			icon.className = "placeIcon";
			iconTd.appendChild(icon);

			nameTd.textContent = place.name;

			detailsTd.innerHTML = `
            ${place.formatted_address || "No address available"}<br>
            ${place.website ? `<a href="${place.website}" target="_blank">Website</a>` : "No website available"}<br>
            ${place.international_phone_number || "No phone number available"}
        `;

			tr.appendChild(iconTd);
			tr.appendChild(nameTd);
			tr.appendChild(detailsTd);
			results.appendChild(tr);

			// Create the stars for the rating and add it under the hotel name
			let starsHtml = '';
			if (place.rating) {
				const stars = Math.round(place.rating);  // Round the rating to the nearest whole number
				for (let i = 0; i < 5; i++) {
					starsHtml += i < stars ? '★' : '☆'; // Filled and empty stars
				}
				nameTd.innerHTML += `<br><span>${starsHtml}</span>`; // Display stars below the name
			} else {
				nameTd.innerHTML += `<br><span>No rating</span>`; // If no rating available
			}

			detailsTd.innerHTML = `
            ${place.formatted_address || "No address available"}<br>
            ${place.website ? `<a href="${place.website}" target="_blank">Website</a>` : "No website available"}<br>
            ${place.international_phone_number || "No phone number available"}
        `;

			tr.appendChild(iconTd);
			tr.appendChild(nameTd); // Append name and stars to the middle column
			tr.appendChild(detailsTd); // Append other details to the right column
			results.appendChild(tr);
		}
	}


	// Amenity Search Integration

/**
 * Searches for nearby amenities within the current map bounds and displays them on the map and in a results table.
 */

	function searchNearbyAmenities() {
		const placesTableBody = document.querySelector("#places-results tbody"); // Table body for amenities
		const placesService = new google.maps.places.PlacesService(map);
		let amenitiesMarkers = []; // Array to store markers for amenities

		// Define the search categories
		const categories = [
			"museum", "park", "cinema", "point_of_interest", "restaurant", "cafe",
			"shopping_mall", "movie_theater", "bar", "tourist_attraction"
		];

		// To store results across all categories
		let allResults = [];

		/**
	 * Performs a search for a given category of amenities.
	 * @param {string} category - The category of amenities to search for (e.g., museum, restaurant).
	 */

		// Function to perform search for each category
		function performSearch(category) {
			const search = {
				bounds: map.getBounds(),
				types: [category], // Search for one category at a time
			};

			placesService.nearbySearch(search, (results, status) => {
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					allResults = allResults.concat(results); // Add results to the overall collection
					processResults(); // Process the results as soon as new results are added
				}
			});
		}

		// Perform search for all categories
		categories.forEach(category => performSearch(category));

		// Function to process all accumulated results and populate the table

		/**
	 * Processes and displays all accumulated results in the table.
	 */

		function processResults() {
			clearTableBody(placesTableBody); // Clear existing table rows
			allResults.forEach((result) => {
				// Skip hotels (we've already removed them)
				if (result.types.includes("lodging")) {
					return;
				}

				// Add basic result info to the table
				const row = document.createElement("tr");

				const iconTd = document.createElement("td");
				const nameTd = document.createElement("td");
				const detailsTd = document.createElement("td");

				const icon = document.createElement("img");
				icon.src = result.icon || "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";
				icon.alt = "Icon";
				icon.width = 30;
				iconTd.appendChild(icon);

				nameTd.textContent = result.name;
				detailsTd.textContent = "Loading..."; // Placeholder text until details are fetched

				row.appendChild(iconTd);
				row.appendChild(nameTd);
				row.appendChild(detailsTd);
				placesTableBody.appendChild(row);

				// Add a marker for each amenity
				const marker = new google.maps.Marker({
					position: result.geometry.location,
					map: map,
					icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
				});

				amenitiesMarkers.push(marker);

				// Prepare content for the infowindow
				let content = `
                <div>
                    <strong>${result.name}</strong><br>
                    ${result.vicinity || "No address available"}<br>
                    ${result.types ? result.types.join(", ") : "No category available"}
                </div>
            `;

				// Add a click listener to display details in an infowindow
				marker.addListener("click", () => {
					infowindow.setContent(content);
					infowindow.open(map, marker);
				});

				// Highlight the marker when the table row is clicked
				row.addEventListener("click", () => {
					map.setCenter(result.geometry.location);
					infowindow.setContent(content);
					infowindow.open(map, marker);
				});

				// Fetch and update detailed information (address, phone number, website)
				placesService.getDetails({ placeId: result.place_id }, (placeDetails, status) => {
					if (status === google.maps.places.PlacesServiceStatus.OK) {
						detailsTd.innerHTML = `
                        ${placeDetails.formatted_address || "No address available"}<br>
                        ${placeDetails.formatted_phone_number || "No phone number available"}<br>
                        ${placeDetails.website ? `<a href="${placeDetails.website}" target="_blank">Website</a>` : "No website available"}<br>
                        ${placeDetails.rating ? `Rating: ${placeDetails.rating} / 5` : "No rating available"}
                    `;

						// Update content for infowindow with more details
						content = `
                        <div>
                            <strong>${placeDetails.name}</strong><br>
                            ${placeDetails.formatted_address || "No address available"}<br>
                            ${placeDetails.formatted_phone_number || "No phone number available"}<br>
                            ${placeDetails.website ? `<a href="${placeDetails.website}" target="_blank">Website</a>` : "No website available"}<br>
                            ${placeDetails.rating ? `Rating: ${placeDetails.rating} / 5` : "No rating available"}
                        </div>
                    `;
					}
				});
			});
		}

		// Utility function to clear the table body

	/**
	 * Clears the content of the places results table.
	 * @param {HTMLElement} tableBody - The table body element to be cleared.
	 */

		function clearTableBody(container) {
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
		}
	}

	// Scrolling for hotels and places modals
	$(document).ready(function () {
		
		// Hotel scrolling
/**
     * Adds scrolling functionality to the hotel list in the modal.
     * - Scrolls up when the "scroll-up-hotel" button is clicked.
     * - Scrolls down when the "scroll-down-hotel" button is clicked.
     * - Scrolls to the top when the "back-to-top-hotel" button is clicked.
     */

		const hotelScrollable = $("#hotels");
		$("#scroll-up-hotel").on("click", () => hotelScrollable.scrollTop(hotelScrollable.scrollTop() - 100));
		$("#scroll-down-hotel").on("click", () => hotelScrollable.scrollTop(hotelScrollable.scrollTop() + 100));
		$("#back-to-top-hotel").on("click", () => hotelScrollable.scrollTop(0));

		// Places scrolling

		  /**
     * Adds scrolling functionality to the places list in the modal.
     * - Scrolls up when the "scroll-up-places" button is clicked.
     * - Scrolls down when the "scroll-down-places" button is clicked.
     * - Scrolls to the top when the "back-to-top-places" button is clicked.
     */
		const placesScrollable = $("#places");
		$("#scroll-up-places").on("click", () => placesScrollable.scrollTop(placesScrollable.scrollTop() - 100));
		$("#scroll-down-places").on("click", () => placesScrollable.scrollTop(placesScrollable.scrollTop() + 100));
		$("#back-to-top-places").on("click", () => placesScrollable.scrollTop(0));
	});

	/**
 * Adds click event listeners to elements with the "allPaths" class.
 * - Displays the second selection container with a fade-in effect.
 * - Animates the visibility of snapshot boxes sequentially.
 * - Updates the content of places and weather information sections.
 */

	document.querySelectorAll(".allPaths").forEach((path) => {
		path.addEventListener("click", () => {
			const secondSelection = document.getElementById("second-selection");
			const snapshotBoxes = document.querySelectorAll(".snapshot-box");

			// Show the container if not already visible
			if (!secondSelection.classList.contains("visible")) {
				secondSelection.style.display = "flex";
				setTimeout(() => {
					secondSelection.classList.add("visible");
				}, 50);
			}

			// Animate each box
			snapshotBoxes.forEach((box, index) => {
				setTimeout(() => {
					box.classList.add("show");
				}, index * 300);
			});

			// Update Places and Weather content
			document.getElementById("places-results").innerHTML = ` 
            <tr>
                <td><img src="path/to/icon.png" alt="Icon" style="width: 32px; height: 32px;"></td>
                <td>Central Park</td>
                <td>Beautiful scenery</td>
            </tr>`;
			document.getElementById("temp-div").innerHTML = `<h3>28°C</h3><p>Sunny</p>`;
			document.getElementById("weather-info").innerText = "Perfect weather for outdoor activities!";
		});
	});

	// Get the search box and second-selection section
	const searchBox = document.getElementById("search-box"); // Replace with the correct ID for your search box
	const secondSelection = document.getElementById("second-selection");

	// Add event listener to the search box
/**
 * Adds an input event listener to the search box.
 * - Displays the second-selection section with a fade-in effect when input has a value.
 * - Hides the second-selection section with a fade-out effect when the input is cleared.
 */

	searchBox.addEventListener("input", () => {
		// Check if the input has a value
		if (searchBox.value.trim() !== "") {
			// Show second-selection if not already visible
			if (!secondSelection.classList.contains("visible")) {
				secondSelection.style.display = "block"; // Make it visible
				setTimeout(() => {
					secondSelection.classList.add("visible"); // Trigger fade-in
				}, 50); // Delay for smooth transition
			}
		} else {
			// Hide second-selection if the input is cleared
			secondSelection.classList.remove("visible");
			setTimeout(() => {
				secondSelection.style.display = "none";
			}, 800); // Match the fade-out duration
		}
	});

	document.getElementById("postcode-link").addEventListener("click", function (event) {
    event.preventDefault(); // Stops default behavior, even if 'role="button"' is missing
    const mapmodal = document.getElementById("map-modal");
    const closeModal = document.getElementById("close-map-modal");

    // Show the modal
    mapmodal.style.display = "block";

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function () {
        mapmodal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === mapmodal) {
            mapmodal.style.display = "none";
        }
    });
});

// Function to maximize or minimize the container
function toggleMaximize(containerId) {
    const container = document.getElementById(containerId);
    if (container.classList.contains('maximized')) {
        container.classList.remove('maximized');
    } else {
        container.classList.add('maximized');
    }
}

// Function to close the container
function closeContainer(containerId) {
    const container = document.getElementById(containerId);
    container.style.display = 'none';
}

// Attach maximize/minimize and close functionality to each container's buttons
document.addEventListener('DOMContentLoaded', () => {
    const containers = ['hotel-container', 'place-container', 'weather-container'];

    containers.forEach(containerId => {
        const maximizeButton = document.querySelector(`#${containerId} .maximize-btn`);
        const closeButton = document.querySelector(`#${containerId} .close-btn`);

        // Maximize/Minimize functionality
        maximizeButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent map click interference
            toggleMaximize(containerId);
        });
        
        
        // Close functionality
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent map click interference
            closeContainer(containerId);
        });
    });

    // Function to update scroll buttons for dynamic containers
function updateScrollButtons(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftButton = document.getElementById(leftBtnId);
    const rightButton = document.getElementById(rightBtnId);

    leftButton.style.display = container.scrollLeft > 0 ? "block" : "none";
    rightButton.style.display = container.scrollWidth > container.clientWidth + container.scrollLeft ? "block" : "none";
}

// Event listeners for scroll buttons
document.getElementById("hotels-scroll-left").addEventListener("click", () => {
    document.getElementById("hotels-list").scrollBy({ left: -200, behavior: "smooth" });
});
document.getElementById("hotels-scroll-right").addEventListener("click", () => {
    document.getElementById("hotels-list").scrollBy({ left: 200, behavior: "smooth" });
});

document.getElementById("places-scroll-left").addEventListener("click", () => {
    document.getElementById("places-list").scrollBy({ left: -200, behavior: "smooth" });
});
document.getElementById("places-scroll-right").addEventListener("click", () => {
    document.getElementById("places-list").scrollBy({ left: 200, behavior: "smooth" });
});
    
// Initialize scroll buttons
setupScrollButtons();

// Attach maximize functionality to buttons
document.querySelectorAll('.maximize-btn').forEach(button => {
    button.addEventListener('click', () => {
        cloneAndMaximize(button);
    });
});

// Change background color of header and buttons
const header = document.querySelector("#headlines-header");
if (header) {
    header.style.backgroundColor = "black";
    header.style.color = "white";
}

document.querySelectorAll(".window-controls button").forEach(button => {
    button.style.backgroundColor = "rgb(181, 165, 155, 0)";
    button.style.color = "black";
});

});


