// jshint esversion: 11

let liveClockInterval; // For managing time updates

// Hide Weather Containers Until Loaded
document.addEventListener("DOMContentLoaded", () => {
	const weatherContainer = document.getElementById("weather-container");
	if (weatherContainer) {
		weatherContainer.classList.add("hidden"); // Hide until ready
	}

	// Your existing scroll button setup (if not already present)
	setupScrollButtons("hourly-forecast", "hourly-scroll-left", "hourly-scroll-right");
	setupScrollButtons("forecast-cards", "scroll-left", "scroll-right");
	setupScrollButtons("long-term-forecast", "long-term-scroll-left", "long-term-scroll-right");
});


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
		"Swaziland": "sz",
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
		"Ivory Coast": "ci",
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
	"Tunisia": "Asia/Tunis",
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
		function fetchTimeZoneAbbreviation(timeZone) {
			try {
				const abbreviation = new Intl.DateTimeFormat('en-US', {
						timeZone,
						timeZoneName: 'short'
					})
					.formatToParts(new Date())
					.find(part => part.type === 'timeZoneName')?.value;

				if (abbreviation) {
					timezoneCache[timeZone] = abbreviation;
					if (!timezoneCache[timeZone]) {
						console.log(`🕓 Cached abbreviation for ${timeZone}: ${abbreviation}`);
					}

					return abbreviation;
				} else {
					console.warn(`Abbreviation not found for ${timeZone}. Using fallback.`);
					return '...';
				}
			} catch (err) {
				console.error(`Error getting abbreviation for ${timeZone}:`, err);
				return '...';
			}
		}


		/**
		 * Updates the time on the page based on the selected timezone.
		 */
		const updateTime = async () => {
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
	width: "auto",
	maxWidth: "fit-content",
	backgroundColor: "rgba(0, 0, 0, 0.9)",
	color: "#fff",
	borderRadius: "8px",
	padding: "10px 15px",
	display: "none",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	zIndex: "1000",
	boxSizing: "border-box",
	wordWrap: "break-word",
});

function resizeModalByScreen() {
	const width = window.innerWidth;
	const namePopup = document.getElementById("namep");

	// Scale based on screen width
	if (width >= 3300) {
		modal.style.transform = "scale(2.5)";
	} else if (width >= 2600) {
		modal.style.transform = "scale(1.8)";
	} else if (width >= 2000) {
		modal.style.transform = "scale(1.6)";
	} else if (width >= 1650) {
		modal.style.transform = "scale(1.4)";
	} else if (width >= 1250) {
		modal.style.transform = "scale(1.1)";
	} else if (width <= 600) {
		modal.style.transform = "scale(0.6)";
	} else if (width <= 768) {
		modal.style.transform = "scale(0.7)";
	} else if (width <= 1050) {
		modal.style.transform = "scale(0.9)";
	} else {
		modal.style.transform = "scale(1)";
	}

	// Also adjust position on smaller screens
	if (width <= 768 && modal.style.display === "flex" && namePopup) {
		const nameRect = namePopup.getBoundingClientRect();
		const modalRect = modal.getBoundingClientRect();

		// Position to left of name popup, higher up
		let adjustedLeft = nameRect.left - modalRect.width - 70;
		let adjustedTop = nameRect.top - modalRect.height - 90;

		// Clamp inside viewport
		adjustedLeft = Math.max(10, adjustedLeft);
		adjustedTop = Math.max(10, adjustedTop);

		modal.style.left = `${adjustedLeft}px`;
		modal.style.top = `${adjustedTop}px`;
	}
}


// Initial check
resizeModalByScreen();

// Re-check on resize
window.addEventListener("resize", resizeModalByScreen);



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
		const namePopup = document.getElementById("name");
		namePopup.style.transition = "opacity 0.2s ease-in"; // ⏱️ Fast fade-in
		namePopup.style.opacity = 0.95;
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

		// POSITION modal to the LEFT of the #name tooltip
		const tooltip = document.getElementById("name");
		const tooltipRect = tooltip.getBoundingClientRect();
		const modalWidth = 250;
		const modalHeight = 100;
		const padding = 10;

		let top = tooltipRect.top + window.scrollY;
		let left = tooltipRect.left - modalWidth - padding;

		// Clamp left edge
		if (left < padding) {
			left = padding;
		}

		// Clamp bottom edge
		if (top + modalHeight > window.scrollY + window.innerHeight) {
			top = window.scrollY + window.innerHeight - modalHeight - padding;
		}

		// Final position
		modal.style.top = `${top}px`;
		modal.style.left = `${left}px`;


		// Clamp left edge to prevent overflow right
		if (left + modalWidth + padding > window.innerWidth) {
			left = window.innerWidth - modalWidth - padding;
		}
		if (left < padding) left = padding;

		// If modal would go off top, display below the element
		if (top < 0) top = rect.bottom + window.scrollY + 10;

		modal.style.top = `${top}px`;
		modal.style.left = `${left}px`;


		// Clamp left edge to prevent overflow right
		if (left + modalWidth + padding > window.innerWidth) {
			left = window.innerWidth - modalWidth - padding;
		}
		if (left < padding) left = padding;

		// Optional: if there's no space above, show below the country
		if (top < 0) top = rect.bottom + window.scrollY + 10;

		modal.style.top = `${top}px`;
		modal.style.left = `${left}px`;

		// Show modal
		modal.style.display = "flex";

		// Position initially (your existing logic)
		modal.style.top = `${top}px`;
		modal.style.left = `${left}px`;

		// 🛠 Immediately adjust for small screens
		adjustModalForSmallScreens();

	});

	function adjustModalForSmallScreens() {
		const namePopup = document.getElementById("name");
		if (window.innerWidth <= 1050 && modal.style.display === "flex" && namePopup) {
			const nameRect = namePopup.getBoundingClientRect();
			const modalRect = modal.getBoundingClientRect();

			// Pull modal farther left and higher above #name popup
			let adjustedLeft = nameRect.left - modalRect.width - 20; // more left
			let adjustedTop = nameRect.top - modalRect.height - 5; // more above

			// Clamp within screen edges
			adjustedLeft = Math.max(10, adjustedLeft);
			adjustedTop = Math.max(10, adjustedTop);

			modal.style.left = `${adjustedLeft}px`;
			modal.style.top = `${adjustedTop}px`;
		}


	}


	// Keep behavior consistent on resize + after display
	window.addEventListener("resize", adjustModalForSmallScreens);
	modal.addEventListener("transitionend", adjustModalForSmallScreens);


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

// Fade out both #name and modal on scroll down
let fadeTriggered = false;
window.addEventListener("scroll", () => {
	if (fadeTriggered) return;

	const scrollY = window.scrollY;
	if (scrollY > 100) { // Adjust threshold if needed
		fadeTriggered = true;

		const namePopup = document.getElementById("name");

		// Fade out modal popup immediately
		if (modal.style.display === "flex") {
			modal.style.transition = "opacity 0.8s ease";
			modal.style.opacity = "0";

			setTimeout(() => {
				modal.style.display = "none";
				modal.style.opacity = ""; // Reset
			}, 800);
		}

		// Fade out name popup after a longer, smoother delay
		if (namePopup) {
			setTimeout(() => {
				namePopup.style.transition = "opacity 1.2s ease";
				namePopup.style.opacity = "0";
			}, 700); // Delay start of fade-out
		}

		// Reset flag so this can happen again if needed
		setTimeout(() => fadeTriggered = false, 2000);
	}
});



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
	const apiKey = '642eeb6e64dce24c37374b7c13a2d4d4';

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
	forecastCards.innerHTML = ''; // Clear old forecast cards

	const dailyGroups = {};

	// Group forecasts by date (YYYY-MM-DD)
	hourlyData.forEach(item => {
		const date = new Date(item.dt * 1000);
		const dateKey = date.toISOString().split('T')[0];
		if (!dailyGroups[dateKey]) dailyGroups[dateKey] = [];
		dailyGroups[dateKey].push(item);
	});

	// Get the first 5 days including today
	const fiveDays = Object.keys(dailyGroups).slice(0, 5);

	fiveDays.forEach(dateKey => {
		const readableDay = new Date(dateKey).toLocaleDateString('en-US', {
			weekday: 'short'
		});

		const card = document.createElement('div');
		card.classList.add('forecast-card', 'vertical-scroll-card');

		const title = document.createElement('p');
		title.innerHTML = `<strong>${readableDay}</strong>`;
		card.appendChild(title);

		const scrollWrapper = document.createElement('div');
		scrollWrapper.classList.add('inner-scroll');

		// Scroll up/down buttons
		const upBtn = document.createElement('button');
		upBtn.innerHTML = '▲';
		upBtn.className = 'scroll-up';
		upBtn.addEventListener('click', () => {
			scrollWrapper.scrollBy({
				top: -100,
				behavior: 'smooth'
			});
		});

		const downBtn = document.createElement('button');
		downBtn.innerHTML = '▼';
		downBtn.className = 'scroll-down';
		downBtn.addEventListener('click', () => {
			scrollWrapper.scrollBy({
				top: 100,
				behavior: 'smooth'
			});
		});

		dailyGroups[dateKey].forEach(item => {
			const time = new Date(item.dt * 1000).toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit'
			});
			const temp = Math.round(item.main.temp - 273.15);
			const desc = item.weather[0].description;
			const icon = item.weather[0].icon;
			const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

			const hourBlock = document.createElement('div');
			hourBlock.classList.add('hour-block');
			hourBlock.innerHTML = `
                <p><strong>${time}</strong></p>
                <img src="${iconUrl}" alt="${desc}" height="30px" width="30px">
                <p>${temp}°C</p>
                <p>${desc}</p>
            `;

			scrollWrapper.appendChild(hourBlock);
		});

		// Assemble everything
		card.appendChild(upBtn);
		card.appendChild(scrollWrapper);
		card.appendChild(downBtn);
		forecastCards.appendChild(card);
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
	"Zimbabwe": "zw",
	"Brunei Darussalam": "bn",
	"Ivory Coast": "ci",
	"Democratic Republic of the Congo": "cd",
	"Republic of Congo": "cg",
	"Czech Republic": "cz",
	"The Gambia": "gm",
	"Greenland": "gl",
	"South Korea": "kr",
	"Lao PDR": "la",
	"Macedonia": "mk", // Often listed as "North Macedonia"
	"Myanmar": "mm",
	"North Korea": "kp",
	"Palestine": "ps",
	"Western Sahara": "eh",
	"Swaziland": "sz",
	"French Guiana": "gf",
	"Aruba": "aw",
	"Anguilla": "ai",
	"American Samoa": "as",
	"Saint-Barthélemy": "bl",
	"Bermuda": "bm",
	"Cape Verde": "cv",
	"Curaçao": "cw",
	"Cayman Islands": "ky",
	"Falkland Islands": "fk",
	"Faeroe Islands": "fo",
	"Federated States of Micronesia": "fm",
	"Guam": "gu",
	"Saint-Martin": "mf",
	"Northern Mariana Islands": "mp",
	"Montserrat": "ms",
	"New Caledonia": "nc",
	"Puerto Rico": "pr",
	"French Polynesia": "pf",
	"São Tomé and Principe": "st",
	"Sint Maarten": "sx",
	"Turks and Caicos Islands": "tc",
	"British Virgin Islands": "vg",
	"United States Virgin Islands": "vi",
	"St. Eustatius (Netherlands)": "bq",
	"Saba (Netherlands)": "bq",
	"Martinique": "mq",
	"Canary Islands (Spain)": "es",
	"Mayotte": "yt",
	"Reunion": "re",
	"Guadeloupe": "gp",
	"Taiwan": "tw"

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

/**
 * Opens the headlines modal.
 */
function openHeadlinesModal() {
	const modal = document.getElementById("headlines-modal");
	if (modal) modal.style.display = "block";
}

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
	e.addEventListener("click", function() {
		const countryName = e.id;

		// Fetch and display country data and news
		fetchTopHeadlinesByCountry(countryName);
		getCountryData(countryName);
		fetchCountryImages(countryName); // Fetch images for slideshow

		// Open the modal for displaying country information and headlines
		openHeadlinesModal();
	});
});

// ==========================
// Fetch and display news headlines (Worker-proxy only)
// ==========================
async function fetchTopHeadlinesByCountry(countryName) {
    const headlinesContainer = document.getElementById("headlines");
    const nameqContainer = document.getElementById("nameq");

    if (nameqContainer) nameqContainer.innerText = countryName;
    headlinesContainer.innerHTML = "<p>Loading latest headlines...</p>";

    let articles = [];

    try {
        const response = await fetch(`https://nominatim-proxy.yinyangsammy.workers.dev/?news=${encodeURIComponent(countryName)}`);
        if (!response.ok) throw new Error(`Worker returned status ${response.status}`);

        const data = await response.json();

        // Ensure at least one article always
        if (data && Array.isArray(data.articles) && data.articles.length > 0) {
            articles = data.articles.map(article => ({
                title: article.title || "No title",
                description: article.description || article.content || "No description",
                url: article.url || "#",
                source: article.source || "Unknown",
                content: article.content || ""
            }));
        } else {
            // Dummy fallback if worker returns empty
            articles.push({ title: "No news available", description: "Please try again later.", url: "#", source: "None", content: "" });
        }
    } catch (err) {
        console.warn("Worker proxy failed:", err);
        // Always push a dummy article to ensure UI never breaks
        articles.push({ title: "No news available", description: "Please try again later.", url: "#", source: "None", content: "" });
    }

    // Deduplicate by URL
    const uniqueArticles = [];
    const seenUrls = new Set();
    articles.forEach(article => {
        if (article.url && !seenUrls.has(article.url)) {
            seenUrls.add(article.url);
            uniqueArticles.push(article);
        }
    });

    // Prioritize articles containing the country name
    const countryRegex = new RegExp(countryName, "i");
    uniqueArticles.sort((a, b) => {
        const aMatch = countryRegex.test(`${a.title} ${a.description} ${a.content}`) ? 1 : 0;
        const bMatch = countryRegex.test(`${b.title} ${b.description} ${b.content}`) ? 1 : 0;
        return bMatch - aMatch;
    });

    // Trim description to max 5 sentences
    function trimToFiveSentences(text) {
        if (!text) return "No description available";
        const sentences = text.split(". ").slice(0, 5).join(". ");
        return sentences.length < text.length ? sentences + "..." : sentences;
    }

    // Render articles
    headlinesContainer.innerHTML = uniqueArticles.map(article => `
        <div class="headline">
            <h4>${article.title}</h4>
            <p class="description">${trimToFiveSentences(article.description)}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `).join("") + `
        <div id="attribution">
            <p>Powered by GNews, NewsData, NewsAPI, WorldNewsAPI, Mediastack, Guardian</p>
        </div>
    `;

    // Move attribution above scroll buttons
    const attributionDiv = document.getElementById("attribution");
    const scrollButtonsContainer = document.getElementById("scroll-buttons");
    if (attributionDiv && scrollButtonsContainer) {
        scrollButtonsContainer.insertAdjacentElement("beforebegin", attributionDiv);
    }

    // Reinitialize scroll functionality
    if (typeof setupScrollButtons === "function") setupScrollButtons();
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
			scrollableContent.scrollBy({
				top: -100,
				behavior: "smooth"
			});
		});
	}

	// Scrolls down by 100px when the scroll-down button is clicked
	if (scrollDownButton) {
		scrollDownButton.addEventListener("click", () => {
			scrollableContent.scrollBy({
				top: 100,
				behavior: "smooth"
			});
		});
	}

	// Scrolls to the top when the back-to-top button is clicked
	if (backToTopButton) {
		backToTopButton.addEventListener("click", () => {
			scrollableContent.scrollTo({
				top: 0,
				behavior: "smooth"
			});
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

	// Ensure holidays scroll buttons work inside the maximized container
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
		holidaysList.scrollBy({
			top: -100,
			behavior: "smooth"
		});
	}

	function scrollDownHandler() {
		holidaysList.scrollBy({
			top: 100,
			behavior: "smooth"
		});
	}

	function backToTopHandler() {
		holidaysList.scrollTo({
			top: 0,
			behavior: "smooth"
		});
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
	let offsetX = 0,
		offsetY = 0,
		isDragging = false;

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
				listContainer.scrollBy({
					top: direction * 100,
					behavior: 'smooth'
				});
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
		list.scrollBy({
			top: scrollAmount,
			behavior: "smooth"
		});
	} else if (e.target.id === 'back-to-top') {
		list.scrollTo({
			top: 0,
			behavior: "smooth"
		});
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
			headers: {
				'X-Api-Key': 'oynQZsr3dpVh2dKnjXNvLg==GgPfFc4Od4Sycuuy'
			}
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
		holidaysList.scrollBy({
			top: -100,
			behavior: "smooth"
		});
	}

	function scrollDownHandler() {
		holidaysList.scrollBy({
			top: 100,
			behavior: "smooth"
		});
	}

	function backToTopHandler() {
		holidaysList.scrollTo({
			top: 0,
			behavior: "smooth"
		});
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
			headers: {
				'X-Api-Key': 'oynQZsr3dpVh2dKnjXNvLg==GgPfFc4Od4Sycuuy'
			}
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
			.filter(holiday => holiday.date >= today) // Only keep upcoming holidays
			.sort((a, b) => a.date - b.date); // Sort holidays by date

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



// ===== Open-Meteo Weather (16-day) =====

// Map weather codes to description & emoji/icon
function getWeatherDescription(code) {
  const map = {
    0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
    45: "Fog", 48: "Depositing rime fog",
    51: "Drizzle: light", 53: "Drizzle: moderate", 55: "Drizzle: dense",
    61: "Rain: slight", 63: "Rain: moderate", 65: "Rain: heavy",
    71: "Snow: slight", 73: "Snow: moderate", 75: "Snow: heavy",
    80: "Rain showers: slight", 81: "Rain showers: moderate", 82: "Rain showers: violent",
    95: "Thunderstorm: slight/moderate", 96: "Thunderstorm with slight hail", 99: "Thunderstorm with heavy hail"
  };
  return map[code] || "Unknown";
}

function getWeatherIcon(code) {
  const map = {
    0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
    45: "🌫️", 48: "🌫️",
    51: "🌦️", 53: "🌦️", 55: "🌧️",
    61: "🌧️", 63: "🌧️", 65: "🌧️",
    71: "🌨️", 73: "🌨️", 75: "❄️",
    80: "🌦️", 81: "🌦️", 82: "⛈️",
    95: "⛈️", 96: "⛈️", 99: "⛈️"
  };
  return map[code] || "❓";
}

// Fetch weather for city
async function getWeather(city) {
  if (!city) return alert("Please enter a city");

  try {
    // 1️⃣ Get lat/lon from Nominatim
    const locResp = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`, {
      headers: { "User-Agent": "SnapshotLocation/1.0 (your-email@example.com)" }
    });
    const locData = await locResp.json();
    if (!locData[0]) return alert("City not found");
    const { lat, lon } = locData[0];

    // 2️⃣ Fetch Open-Meteo forecast
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&current_weather=true&timezone=auto`;
    const resp = await fetch(url);
    const data = await resp.json();

    displayCurrentWeather(data.current_weather);
    displayHourlyForecast(data.hourly);
    displayFiveDayForecast(data.daily);
    displayLongTermForecast(data.daily); // full 16 days
  } catch (err) {
    console.error("Error fetching weather:", err);
    alert("Error fetching weather data. Please try again.");
  }
}

// ===== Display functions =====
function displayCurrentWeather(current) {
  const tempDiv = document.getElementById("temp-div");
  const infoDiv = document.getElementById("weather-info");
  const iconImg = document.getElementById("weather-icon");

  tempDiv.innerHTML = `${Math.round(current.temperature)}°C`;
  const desc = getWeatherDescription(current.weathercode);
  infoDiv.innerHTML = `<p>${desc}</p>`;
  iconImg.src = ""; // optional PNG if you want, else emoji displayed in text
  iconImg.alt = desc;
}

function displayHourlyForecast(hourly) {
  const container = document.getElementById("hourly-forecast");
  container.innerHTML = "";
  const times = hourly.time.slice(0, 24); // next 24 hours
  const temps = hourly.temperature_2m.slice(0, 24);
  const codes = hourly.weathercode.slice(0, 24);

  for (let i = 0; i < times.length; i++) {
    const dt = new Date(times[i]);
    container.innerHTML += `
      <div class="hourly-item">
        <span>${dt.getHours()}:00</span>
        <span>${getWeatherIcon(codes[i])}</span>
        <span>${Math.round(temps[i])}°C</span>
      </div>`;
  }
}

function displayFiveDayForecast(daily) {
  const container = document.getElementById("forecast-cards");
  container.innerHTML = "";
  const days = daily.time.slice(0, 5);
  const maxTemps = daily.temperature_2m_max.slice(0, 5);
  const minTemps = daily.temperature_2m_min.slice(0, 5);
  const codes = daily.weathercode.slice(0, 5);

  for (let i = 0; i < days.length; i++) {
    const dt = new Date(days[i]);
    container.innerHTML += `
      <div class="forecast-card">
        <p><strong>${dt.toLocaleDateString("en-US",{weekday:"short"})}</strong></p>
        <span>${getWeatherIcon(codes[i])}</span>
        <p>${Math.round(maxTemps[i])}°C / ${Math.round(minTemps[i])}°C</p>
        <p>${getWeatherDescription(codes[i])}</p>
      </div>`;
  }
}

function displayLongTermForecast(daily) {
  const container = document.getElementById("long-term-forecast");
  container.innerHTML = "";
  const days = daily.time.slice(0, 16); // full 16 days
  const maxTemps = daily.temperature_2m_max.slice(0, 16);
  const minTemps = daily.temperature_2m_min.slice(0, 16);
  const codes = daily.weathercode.slice(0, 16);

  for (let i = 0; i < days.length; i++) {
    const dt = new Date(days[i]);
    container.innerHTML += `
      <div class="forecast-card">
        <p><strong>${dt.toLocaleDateString("en-US",{weekday:"short", month:"short", day:"numeric"})}</strong></p>
        <span>${getWeatherIcon(codes[i])}</span>
        <p>${Math.round(maxTemps[i])}°C / ${Math.round(minTemps[i])}°C</p>
        <p>${getWeatherDescription(codes[i])}</p>
      </div>`;
  }
}

// ===== Scroll buttons =====
document.getElementById("scroll-left").onclick = () => document.getElementById("forecast-cards").scrollBy({left:-150, behavior:"smooth"});
document.getElementById("scroll-right").onclick = () => document.getElementById("forecast-cards").scrollBy({left:150, behavior:"smooth"});
document.getElementById("hourly-scroll-left").onclick = () => document.getElementById("hourly-forecast").scrollBy({left:-150, behavior:"smooth"});
document.getElementById("hourly-scroll-right").onclick = () => document.getElementById("hourly-forecast").scrollBy({left:150, behavior:"smooth"});
document.getElementById("long-term-scroll-left").onclick = () => document.getElementById("long-term-forecast").scrollBy({left:-150, behavior:"smooth"});
document.getElementById("long-term-scroll-right").onclick = () => document.getElementById("long-term-forecast").scrollBy({left:150, behavior:"smooth"});



// OpenStreets Map with Leaflet Search Bar //

// Initialize Map with Leaflet
let map, marker, markersLayer;
const markerCluster = L.markerClusterGroup();
const CACHE_EXPIRATION = 30 * 60 * 1000; // Cache expires in 30 minutes
const markers = {}; // Store markers
const pinnedMarkers = new Set(); // Stores pinned markerIDs

function generatePopupContent(markerID, name, type, address, phone, website, iconUrl) {
	const isPinned = pinnedMarkers.has(markerID);
	const pinLabel = isPinned ? "❌ Unpin" : "📌 Pin";

	const iconHTML = iconUrl ? iconUrl.startsWith("http") ? `<div style="margin-bottom: 5px;">
             <img src="${iconUrl}" alt="${type} icon" style="width: 40px; height: 40px;"><br>
         </div>` :
		`<div style="margin-bottom: 5px;"><div style="font-size: 24px;">${iconUrl}</div></div>` :
		"";


	return `
        <div style="text-align: center; min-height: 100px; padding-bottom: 5px;">
            ${iconHTML}
            <strong>${name}</strong> (${type})<br>
            📍 ${address}<br>
            📞 ${phone}<br>
            🔗 ${website}<br><br>
            <button onclick="togglePin('${markerID}', markers['${markerID}'])" style="margin-top: 5px; cursor: pointer;">
                ${pinLabel}
            </button>
        </div>
    `;
}



// 🌟 Icon Definitions
const defaultAmenityIcon = L.icon({
	iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
	iconSize: [30, 30],
	iconAnchor: [15, 30],
	popupAnchor: [0, -30]
});

const pinnedAmenityIcon = L.icon({
	iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-red.png',
	iconSize: [30, 30],
	iconAnchor: [15, 30],
	popupAnchor: [0, -30]
});

function togglePin(markerID, marker) {
	const amenityType = marker.options.amenityType || "unknown";
	const emoji = amenityEmojiMap?.[amenityType] || "📍";

	if (pinnedMarkers.has(markerID)) {
		// Unpin
		pinnedMarkers.delete(markerID);

		// Restore default Leaflet blue icon
		marker.setIcon(L.icon({
			iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
		}));

		marker.setIcon(L.divIcon({
			html: `<div style="font-size: 24px;">${emoji}</div>`,
			className: "emoji-marker",
			iconSize: [30, 30],
			iconAnchor: [15, 30],
			popupAnchor: [0, -30],
		}));


		// Re-add to markerCluster if not already there
		if (!markerCluster.hasLayer(marker)) {
			markerCluster.addLayer(marker);
		}

		// Remove from map (if it was added directly)
		if (map.hasLayer(marker)) {
			map.removeLayer(marker);
		}

		// Update popup
		const currentPopup = marker.getPopup().getContent();
		marker.setPopupContent(currentPopup.replace("❌ Unpin", "📌 Pin"));

	} else {
		// 📌 Pin
		pinnedMarkers.add(markerID);

		// Custom icon with red pin overlayed on hotel or amenity emoji
		const baseEmoji = (amenityType === "hotel") ? "🏨" : emoji;

		marker.setIcon(L.divIcon({
			html: `
                <div style="position: relative; font-size: 24px;">
                    <div style="font-size: 24px;">${baseEmoji}</div>
                    <div style="position: absolute; top: -0.35em; left: 0.1em;">📍</div>
                </div>
            `,
			className: "emoji-pin-marker",
			iconSize: [30, 40],
			iconAnchor: [15, 35],
			popupAnchor: [0, -35],
		}));

		// Remove from cluster if needed
		if (markerCluster.hasLayer(marker)) {
			markerCluster.removeLayer(marker);
		}

		// Add directly to map
		if (!map.hasLayer(marker)) {
			map.addLayer(marker);
		}

		// Update popup
		const currentPopup = marker.getPopup().getContent();
		marker.setPopupContent(currentPopup.replace("📌 Pin", "❌ Unpin"));
	}
}




function getPinnedEmojiIcon(emoji, type = "amenity") {
	if (type === "hotel") {
		return L.divIcon({
			html: `
                <div style="position: relative; font-size: 22px;">
                    <div style="font-size: 22px;">🏨</div>
                    <div style="position: absolute; top: -0.6em; left: 0.3em; font-size: 20px;">📍</div>
                </div>
            `,
			className: "emoji-pin-marker",
			iconSize: [30, 40],
			iconAnchor: [15, 35],
			popupAnchor: [0, -35],
		});
	}

	// Default for amenities
	return L.divIcon({
		html: `
            <div style="position: relative; font-size: 24px;">
                📍<span style="position: absolute; top: -0.3em; left: 0.15em;">${emoji}</span>
            </div>
        `,
		className: "emoji-pin-marker",
		iconSize: [30, 40],
		iconAnchor: [15, 35],
		popupAnchor: [0, -35],
	});
}



// Amenity button cache
const amenityCache = {
	landmark: [],
	museum: [],
	park: [],
	place_of_worship: [],
	restaurant: [],
	pub: [],
	bar: [],
	nightclub: [],
	biergarten: [],
	recycling: [],
	cinema: [],
	theatre: [],
	arts_centre: [],
	events_venue: [],
	bank: [],
	bureau_de_change: [],
	casino: [],
	pharmacy: [],
	clinic: [],
	hospital: [],
	dentist: [],
	school: [],
	university: [],
	shop: [],
	fuel: [],
	car_rental: [],
	atm: [],
	police: [],
	parking: [],
	post_office: [],
	marketplace: [],
	cafe: [],
	taxi: [],
	fast_food: [],
	bicycle_rental: [],
};

function initLeafletMap() {
	// Set up Leaflet map
	map = L.map('map').setView([0, 0], 2);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; OpenStreetMap contributors'
	}).addTo(map);

	// Add marker layer
	markersLayer = L.layerGroup().addTo(map);
	markerCluster.addTo(map);

	// Create a draggable marker
	marker = L.marker([0, 0], {
		draggable: true
	}).addTo(map);
	marker.on("dragend", () => reverseGeocode(marker.getLatLng()));

	// Event listener for Enter key in search input
	document.getElementById("city-search").addEventListener("keypress", function(e) {
		if (e.key === 'Enter') fetchCityData();
	});

	// Optional: Hide map wrapper on tile load failure
	map.on('tileerror', function() {
		console.warn("🧯 Leaflet failed to load tiles — hiding map.");
		document.getElementById('map-wrapper').classList.add('hidden');
	});

	// ✅ Scrollbar glitch patch: lock body height until map settles
	const originalOverflow = document.body.style.overflow;
	document.body.style.overflow = "hidden";
}

// Call this when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	initLeafletMap();
});

// Hide containers initially
document.querySelectorAll("#hotel-container, #place-container, #weather-container")
	.forEach(container => container.style.display = "none");

// Initialize amenity buttons
initAmenityButtons();

// Initialize Amenity Buttons with Icons
function initAmenityButtons() {
	const icons = {
		museum: "🏺",
		landmark: "🏛️",
		park: "🌳",
		place_of_worship: "⛪",
		cafe: "☕",
		fast_food: "🥡",
		restaurant: "🍽️",
		pub: "🍻",
		bar: "🍸",
		nightclub: "🎶",
		cinema: "🎬",
		theatre: "🎭",
		arts_centre: "🖼️",
		events_venue: "🎙️",
		bank: "🏦",
		atm: "🏧",
		bureau_de_change: "💷",
		casino: "🎲",
		fuel: "⛽",
		bicycle_rental: "🚲",
		parking: "🅿️",
		car_rental: "🚘",
		taxi: "🚖",
		police: "🚔",
		pharmacy: "💊",
		clinic: "🩺",
		hospital: "🏥",
		dentist: "🦷",
		marketplace: "🛒",
		school: "🏫",
		university: "🎓",
		post_office: "🏣",
		recycling: "♻️",
	};

	document.querySelector("#place-container > h2").insertAdjacentHTML('afterend', `
        <div id="amenity-buttons" style="margin: 10px 0; display: flex; flex-wrap: wrap; gap: 10px;">
            ${Object.keys(icons).map(type => `
                <button id="${type}-button" class="amenity-button">
                    ${icons[type]} ${type.replace(/_/g, ' ').toUpperCase()}
                </button>
            `).join('')}
        </div>
    `);

	Object.keys(icons).forEach(type => {
		document.getElementById(`${type}-button`).addEventListener('click', () => fetchAmenityData(type));
	});
}

// Fetch Specific Amenity Type
async function fetchAmenityData(type) {
	const {
		lat,
		lng
	} = marker.getLatLng();
	if (amenityCache[type].length > 0) {
		displayAmenitiesData(amenityCache[type]);
		plotMarkers(amenityCache[type], "amenity");
		return;
	}

	let queryType;

	switch (type) {
		case "museum":
			queryType = `
                (
                    node["tourism"="museum"](around:5000,${lat},${lng});
                    way["tourism"="museum"](around:5000,${lat},${lng});
                    relation["tourism"="museum"](around:5000,${lat},${lng});
                );`;
			break;
		case "park":
			queryType = `
                (
                    node["leisure"="park"](around:5000,${lat},${lng});
                    way["leisure"="park"](around:5000,${lat},${lng});
                    relation["leisure"="park"](around:5000,${lat},${lng});
                );`;
			break;
		case "landmark":
			queryType = `
                (
                    node["tourism"="attraction"](around:5000,${lat},${lng});
                    way["tourism"="attraction"](around:5000,${lat},${lng});
                    node["historic"](around:5000,${lat},${lng});
                    way["historic"](around:5000,${lat},${lng});
                    relation["historic"](around:5000,${lat},${lng});
                );`;
			break;
		default:
			queryType = `node["amenity"="${type}"](around:5000,${lat},${lng});`;
			break;
	}

	const overpassQuery = `[out:json];${queryType}out center;`;
	const overpassURL = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

	try {
		const response = await fetch(overpassURL);
		const data = await response.json();
		amenityCache[type] = data.elements;
		displayAmenitiesData(data.elements);
		plotMarkers(data.elements);
	} catch (error) {
		console.error(`Error fetching ${type}:`, error);
	}
}


// Fetch City Data using Nominatim API (with cache + CORS proxy)
async function fetchCityData() {
	const cityName = document.getElementById('city-search').value.trim();
	if (!cityName) return;

	const cacheKey = `nominatim_${cityName.toLowerCase()}`;
	const cachedData = sessionStorage.getItem(cacheKey);

	let data;

	if (cachedData) {
		console.log("✅ Using cached Nominatim result for:", cityName);
		data = JSON.parse(cachedData);
	} else {
		const workerURL = `https://nominatim-proxy.yinyangsammy.workers.dev?q=${encodeURIComponent(cityName)}`;

	try {
	const response = await fetch(workerURL);
	data = await response.json();


			if (!data.length) return alert("City not found. Try again.");

			sessionStorage.setItem(cacheKey, JSON.stringify(data));
			console.log("📦 Cached Nominatim result for:", cityName);
		} catch (error) {
			console.error('Nominatim API Error:', error);
			alert("City search failed. Please try again later.");
			return;
		}
	}

	const { lat, lon, display_name } = data[0];

	// Update map view and marker position
	map.setView([lat, lon], 12);
	marker.setLatLng([lat, lon]);

	// Show place name in popup
	marker.bindPopup(`<strong>${display_name}</strong>`).openPopup();

	marker.on("popupopen", (e) => {
		const popupEl = e.popup.getElement();
		if (!popupEl) return;

		setTimeout(() => {
			const markerID = `${lat}-${lon}`;
			const isPinned = pinnedMarkers.has(markerID);

			const pinBtn = document.createElement("button");
			pinBtn.textContent = isPinned ? "Unpin 📌" : "Pin 📍";
			Object.assign(pinBtn.style, {
				cursor: "pointer",
				marginTop: "6px",
				background: "#f0f0f0",
				border: "1px solid #ccc",
				padding: "4px 8px",
				borderRadius: "4px",
				fontSize: "0.9em"
			});

			pinBtn.addEventListener("click", () => {
				if (pinnedMarkers.has(markerID)) {
					pinnedMarkers.delete(markerID);
					pinBtn.textContent = "Pin 📍";
				} else {
					pinnedMarkers.add(markerID);
					pinBtn.textContent = "Unpin 📌";
				}
			});

			if (!popupEl.querySelector("button")) {
				popupEl.appendChild(pinBtn);
			}
		}, 50);
	});

	// 🎯 Fetch dynamic city content
	fetchWeather(lat, lon);          // Weather
	fetchHotels(lat, lon);           // Hotel results
	fetchNearbyAmenities(lat, lon);  // Amenities table
	fadeInContainers();              // Animate containers
}


// ==========================
// Open-Meteo Weather Script with Mini-Hourly Strips
// ==========================

// Fetch weather using Open-Meteo
async function fetchWeather(lat, lon) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Map Open-Meteo weather codes to icons/descriptions
const weatherCodeMap = {
    0: { icon: '☀️', desc: 'Clear sky' },
    1: { icon: '🌤️', desc: 'Mainly clear' },
    2: { icon: '⛅', desc: 'Partly cloudy' },
    3: { icon: '☁️', desc: 'Overcast' },
    45: { icon: '🌫️', desc: 'Fog' },
    48: { icon: '🌫️', desc: 'Depositing rime fog' },
    51: { icon: '🌦️', desc: 'Light drizzle' },
    53: { icon: '🌦️', desc: 'Moderate drizzle' },
    55: { icon: '🌦️', desc: 'Dense drizzle' },
    61: { icon: '🌧️', desc: 'Slight rain' },
    63: { icon: '🌧️', desc: 'Moderate rain' },
    65: { icon: '🌧️', desc: 'Heavy rain' },
    71: { icon: '❄️', desc: 'Slight snow' },
    73: { icon: '❄️', desc: 'Moderate snow' },
    75: { icon: '❄️', desc: 'Heavy snow' },
    80: { icon: '🌧️', desc: 'Rain showers' },
    95: { icon: '⛈️', desc: 'Thunderstorm' }
};

// ==========================
// Display Weather
// ==========================
function displayWeatherData(data) {
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = '';

    // --- Current Weather ---
    const currentTemp = data.hourly.temperature_2m[0];
    const currentCode = data.hourly.weathercode[0];
    const { icon, desc } = weatherCodeMap[currentCode] || { icon: '❓', desc: 'Unknown' };

    const dailyHtml = `
        <h2>Daily Forecast</h2>
        <p style="font-size:3rem; text-align:center">${icon}</p>
        <div id="temp-div">
            <p class="weather-text">${Math.round(currentTemp)}°C</p>
        </div>
        <div id="weather-info">
            <p class="weather-text">${desc}</p>
        </div>
    `;

    // --- Hourly Forecast (Next 24h) ---
    let hourlyHtml = '';
    for (let i = 0; i < 24; i++) {
        const hourTemp = data.hourly.temperature_2m[i];
        const hourCode = data.hourly.weathercode[i];
        const hourIcon = weatherCodeMap[hourCode]?.icon || '❓';
        const time = new Date(data.hourly.time[i]);
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        hourlyHtml += `
            <div class="hourly-item">
                <p style="font-size:1.5rem">${hourIcon}</p>
                <p class="weather-text">${Math.round(hourTemp)}°C</p>
                <p class="weather-text">${hours}:${minutes}</p>
            </div>
        `;
    }

    // --- 5-Day Forecast with Mini Hourly Strips ---
    let fiveDayHtml = '';
    for (let i = 0; i < 5; i++) {
        const date = new Date(data.daily.time[i]);
        const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
        const minTemp = Math.round(data.daily.temperature_2m_min[i]);
        const code = data.daily.weathercode[i];
        const icon = weatherCodeMap[code]?.icon || '❓';
        const desc = weatherCodeMap[code]?.desc || 'Unknown';

        // Mini-hourly strip for this day
        let miniHourlyHtml = '';
        const day = date.getDate();
        data.hourly.time.forEach((t, idx) => {
            const d = new Date(t);
            if (d.getDate() === day) {
                const temp = Math.round(data.hourly.temperature_2m[idx]);
                const ic = weatherCodeMap[data.hourly.weathercode[idx]]?.icon || '❓';
                const hourLabel = d.getHours().toString().padStart(2,'0') + ':00';
                miniHourlyHtml += `<div style="flex:0 0 auto; text-align:center; min-width:50px;">
                    <p style="font-size:1.2rem">${ic}</p>
                    <p class="weather-text">${temp}°C</p>
                    <p class="weather-text">${hourLabel}</p>
                </div>`;
            }
        });

        fiveDayHtml += `
            <div class="forecast-card">
                <p class="weather-text">${date.toDateString()}</p>
                <p style="font-size:2rem">${icon}</p>
                <p class="weather-text">Max: ${maxTemp}°C</p>
                <p class="weather-text">Min: ${minTemp}°C</p>
                <p class="weather-text">${desc}</p>
                <div class="mini-hourly-strip" style="display:flex; overflow-x:auto; gap:5px; margin-top:8px;">${miniHourlyHtml}</div>
            </div>
        `;
    }

    // --- 16-Day Forecast ---
    let longTermHtml = '';
    for (let i = 0; i < data.daily.time.length; i++) {
        const date = new Date(data.daily.time[i]);
        const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
        const minTemp = Math.round(data.daily.temperature_2m_min[i]);
        const code = data.daily.weathercode[i];
        const icon = weatherCodeMap[code]?.icon || '❓';
        const desc = weatherCodeMap[code]?.desc || 'Unknown';
        longTermHtml += `
            <div class="forecast-card">
                <p class="weather-text">${date.toDateString()}</p>
                <p style="font-size:2rem">${icon}</p>
                <p class="weather-text">Max: ${maxTemp}°C</p>
                <p class="weather-text">Min: ${minTemp}°C</p>
                <p class="weather-text">${desc}</p>
            </div>
        `;
    }

    // --- Inject into DOM ---
    weatherContainer.innerHTML = `
        ${dailyHtml}
        <div id="hourly-forecast" class="scroll-container">${hourlyHtml}</div>
        <div class="scroll-controls">
            <button id="hourly-scroll-left">⟸</button>
            <button id="hourly-scroll-right">⟹</button>
        </div>
        <hr>
        <h2>5-Day Forecast</h2>
        <div id="forecast-cards" class="scroll-container">${fiveDayHtml}</div>
        <div class="scroll-controls">
            <button id="scroll-left">⟸</button>
            <button id="scroll-right">⟹</button>
        </div>
        <hr>
        <h2>16-Day Forecast</h2>
        <div id="long-term-forecast" class="scroll-container">${longTermHtml}</div>
        <div class="scroll-controls">
            <button id="long-term-scroll-left">⟸</button>
            <button id="long-term-scroll-right">⟹</button>
        </div>
    `;
    weatherContainer.classList.remove("hidden");

    // --- Scroll buttons ---
    setupScrollButtons("hourly-forecast", "hourly-scroll-left", "hourly-scroll-right");
    setupScrollButtons("forecast-cards", "scroll-left", "scroll-right");
    setupScrollButtons("long-term-forecast", "long-term-scroll-left", "long-term-scroll-right");

    // --- Fade-in animation ---
    weatherContainer.querySelectorAll('h2, .forecast-card, .hourly-item, .mini-hourly-strip').forEach(el => el.classList.add('fade-in'));
}

// --- Scroll helper (same as before) ---
function setupScrollButtons(containerId, leftBtnId, rightBtnId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);
    if (!container || !leftBtn || !rightBtn) return;

    leftBtn.addEventListener("click", () => container.scrollBy({ left: -300, behavior: "smooth" }));
    rightBtn.addEventListener("click", () => container.scrollBy({ left: 300, behavior: "smooth" }));

    function toggleButtons() {
        leftBtn.style.visibility = container.scrollLeft > 0 ? "visible" : "hidden";
        rightBtn.style.visibility = container.scrollLeft + container.clientWidth < container.scrollWidth ? "visible" : "hidden";
    }
    container.addEventListener("scroll", toggleButtons);
    toggleButtons();
}


// Fetch Hotels using Overpass API
async function fetchHotels(lat, lon) {
	const cacheKey = `hotels_${lat}_${lon}`;
	const cachedData = getCachedData(cacheKey);
	if (cachedData) return displayHotelData(cachedData), plotMarkers(cachedData, "hotel");

	const overpassURL = `https://overpass-api.de/api/interpreter?data=[out:json];node["tourism"="hotel"](around:5000,${lat},${lon});out;`;

	try {
		const response = await fetch(overpassURL);
		const data = await response.json();

		cacheData(cacheKey, data.elements);
		displayHotelData(data.elements);

	} catch (error) {
		console.error('Error fetching hotels:', error);
	}
}



// Fetch Nearby Amenities using Overpass API
let amenitiesRequested = false; // Prevent auto-fetch on map load

async function fetchNearbyAmenities(lat, lon) {
	if (!amenitiesRequested) return; // Block auto-fetch on page load

	const cacheKey = `amenities_${lat}_${lon}`;
	const cachedData = getCachedData(cacheKey);
	if (cachedData) return displayAmenitiesData(cachedData), plotMarkers(cachedData, "amenity");

	const overpassURL = `https://overpass-api.de/api/interpreter?data=[out:json];node["amenity"](around:5000,${lat},${lon});out;`;

	try {
		const response = await fetch(overpassURL);
		const data = await response.json();

		cacheData(cacheKey, data.elements);
		displayAmenitiesData(data.elements);
		plotMarkers(data.elements);
	} catch (error) {
		console.error('Error fetching amenities:', error);
	}
}

// Function to request amenities when a button is clicked
function requestAmenities() {
	amenitiesRequested = true;
	const {
		lat,
		lng
	} = marker.getLatLng();
	fetchNearbyAmenities(lat, lng);
}


// Bind pin button to popup (triggered manually or on popupopen)
function bindPinButton(markerID, marker) {
	const popupEl = document.querySelector(".leaflet-popup");
	const pinBtn = popupEl?.querySelector(".pin-toggle");
	if (pinBtn) {
		pinBtn.addEventListener("click", () => {
			togglePin(markerID, marker);
			marker.closePopup();
		});
	}
}

// Display Hotels

// Global hotel marker store
const hotelMarkers = {}; // { "lat-lon": marker }

function displayHotelData(hotels) {
	const tbody = document.querySelector("#hotel-results");
	tbody.innerHTML = ""; // Clear previous entries

	// Remove existing hotel markers
	Object.keys(hotelMarkers).forEach(id => {
		map.removeLayer(hotelMarkers[id]);
	});
	Object.keys(hotelMarkers).forEach(key => delete hotelMarkers[key]);

	hotels.forEach(hotel => {
		const name = hotel.tags.name || "Unnamed Hotel";
		const street = hotel.tags["addr:street"] || "";
		const city = hotel.tags["addr:city"] || "";
		const phone = hotel.tags.phone || hotel.tags["contact:phone"] || "";
		const website = hotel.tags.website ? `<a href="${hotel.tags.website}" target="_blank">Website</a>` : "";
		const fullAddress = [street, city].filter(Boolean).join(", ") || "N/A";

		const markerID = `${hotel.lat}-${hotel.lon}`;

		// 🏨 Create hotel marker
		const marker = L.marker([hotel.lat, hotel.lon], {
			icon: L.divIcon({
				html: `
                    <div style="position: relative; width: 30px; height: 40px;">
                        <img src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" style="width: 100%; height: 100%; opacity: 0.8;">
                        <div style="position: absolute; top: 5px; left: 0; width: 100%; text-align: center; font-size: 20px;">🏨</div>
                    </div>
                `,
				className: "hotel-marker-icon",
				iconSize: [30, 40],
				iconAnchor: [15, 40],
				popupAnchor: [0, -40],
			}),
			amenityType: "hotel",
		});

		// Add hotel markers to cluster too!
		markerCluster.addLayer(marker);


		// Bind popup
		const popupHTML = `
            <div style="font-family: sans-serif; line-height: 1.4;">
                <div style="font-size: 1.4em;">🏨 <strong>${name}</strong></div>
                <div><strong>📍 Address:</strong> ${fullAddress}</div>
                ${phone ? `<div><strong>📞 Phone:</strong> ${phone}</div>` : ""}
                ${website ? `<div><strong>🔗</strong> ${website}</div>` : ""}
                <button class="pin-toggle" style="margin-top: 5px; cursor: pointer;">📌 Pin</button>
            </div>
        `;
		marker.bindPopup(popupHTML);
		marker.on("popupopen", () => {
			const popupEl = document.querySelector(".leaflet-popup");
			const pinBtn = popupEl?.querySelector(".pin-toggle");
			if (pinBtn) {
				pinBtn.addEventListener("click", () => {
					togglePin(markerID, marker);
					marker.closePopup();
				});
			}
		});


		hotelMarkers[markerID] = marker;

		// Create table row
		const tr = document.createElement("tr");
		tr.setAttribute("data-marker-id", markerID);

		const tdName = document.createElement("td");
		tdName.textContent = name;
		tdName.style.textAlign = "left";
		tdName.style.padding = "5px";
		tdName.style.width = "25%";
		tdName.style.fontWeight = "bold";

		const tdAddress = document.createElement("td");
		const mapIcon = `<span style="cursor:pointer; margin-left: 8px;" title="View on map">🗺️</span>`;
		tdAddress.innerHTML = fullAddress === "N/A" ? `${mapIcon}` :
			`${fullAddress} ${mapIcon}`;
		tdAddress.style.textAlign = "center";
		tdAddress.style.padding = "5px";
		tdAddress.style.width = "25%";

		// Click zoom to marker
		const mapIconEl = tdAddress.querySelector("span");
		if (mapIconEl) {
			mapIconEl.addEventListener("click", () => {
				const marker = hotelMarkers[markerID];
				if (marker) {
					marker.openPopup();
					map.setView(marker.getLatLng(), 17);
					marker._icon.classList.add("bounce");
					setTimeout(() => marker._icon?.classList.remove("bounce"), 1500);
				}
			});
		}

		const tdPhone = document.createElement("td");
		tdPhone.textContent = phone || "No phone";
		tdPhone.style.textAlign = "center";
		tdPhone.style.padding = "5px";
		tdPhone.style.width = "25%";

		const tdWebsite = document.createElement("td");
		tdWebsite.innerHTML = website || "No website";
		tdWebsite.style.textAlign = "right";
		tdWebsite.style.padding = "5px";
		tdWebsite.style.width = "25%";

		tr.append(tdName, tdAddress, tdPhone, tdWebsite);
		tbody.appendChild(tr);
	});

	// Enable click on table row to zoom to marker
	tbody.querySelectorAll("tr").forEach(row => {
		row.addEventListener("click", () => {
			const markerID = row.getAttribute("data-marker-id");
			const marker = hotelMarkers[markerID];
			if (marker) {
				marker.openPopup();
				map.setView(marker.getLatLng(), 17);

				// Force bind the pin button immediately after popup opens
				setTimeout(() => {
					const popupEl = document.querySelector(".leaflet-popup");
					const pinBtn = popupEl?.querySelector(".pin-toggle");
					if (pinBtn) {
						pinBtn.addEventListener("click", () => {
							togglePin(markerID, marker);
							marker.closePopup();
						});
					}
				}, 0);

				row.classList.add("highlight");
				row.scrollIntoView({
					behavior: "smooth",
					block: "center"
				});

				setTimeout(() => {
					row.classList.remove("highlight");
				}, 2000);
			}
		});
	});

	// Style table for clarity
	tbody.style.width = "100%";
	tbody.style.tableLayout = "fixed";
}



// Display Amenities

// Global marker store

const amenityMarkers = {}; // { "lat-lon": marker }

function displayAmenitiesData(amenities) {
	const tbody = document.querySelector("#places-results tbody");
	tbody.innerHTML = ""; // Clear previous entries

	// Reset marker store
	Object.keys(amenityMarkers).forEach(id => {
		map.removeLayer(amenityMarkers[id]);
	});
	Object.keys(amenityMarkers).forEach(key => delete amenityMarkers[key]);

	amenities.forEach(amenity => {
		const name = amenity.tags.name || "Unnamed Place";
		const street = amenity.tags["addr:street"] || "";
		const houseNumber = amenity.tags["addr:housenumber"] || "";
		const city = amenity.tags["addr:city"] || "";
		const postcode = amenity.tags["addr:postcode"] || "";
		const fullAddress = [houseNumber, street, city, postcode].filter(Boolean).join(", ") || "N/A";
		const phone = amenity.tags["contact:phone"] || amenity.tags["phone"] || "";
		const website = amenity.tags.website ? `<a href="${amenity.tags.website}" target="_blank">🌐 Visit Website</a>` : "";

		const amenityType = amenity.tags.amenity || amenity.tags.tourism || amenity.tags.leisure || amenity.tags.historic || "default";

		const amenityIcons = {
			museum: "🏺",
			landmark: "🏛️",
			park: "🌳",
			place_of_worship: "⛪",
			cafe: "☕",
			fast_food: "🥡",
			pub: "🍻",
			restaurant: "🍽️",
			bar: "🍸",
			nightclub: "🎶",
			cinema: "🎬",
			theatre: "🎭",
			arts_centre: "🖼️",
			events_venue: "🎙️",
			bank: "🏦",
			atm: "🏧",
			bureau_de_change: "💷",
			casino: "🎲",
			fuel: "⛽",
			bicycle_rental: "🚲",
			parking: "🅿️",
			car_rental: "🚘",
			taxi: "🚖",
			pharmacy: "💊",
			clinic: "🩺",
			hospital: "🏥",
			dentist: "🦷",
			police: "🚔",
			marketplace: "🛒",
			school: "🏫",
			university: "🎓",
			post_office: "🏣",
			recycling: "♻️"
		};
		const icon = amenityIcons[amenityType] || "🏠";

		const markerID = `${amenity.lat}-${amenity.lon}`;

		// Table row
		const tr = document.createElement("tr");
		tr.setAttribute("data-marker-id", markerID);

		const tdIcon = document.createElement("td");
		tdIcon.innerHTML = icon;
		tdIcon.style.textAlign = "center";

		const tdName = document.createElement("td");
		tdName.textContent = name;

		const tdAddress = document.createElement("td");
		const mapIcon = `<span style="cursor:pointer; margin-left: 8px;" title="View on map">🗺️</span>`;
		tdAddress.innerHTML = fullAddress === "N/A" ? mapIcon : `${fullAddress} ${mapIcon}`;

		const tdContact = document.createElement("td");
		tdContact.innerHTML = phone ? phone : "";
		if (website) tdContact.innerHTML += `<br>${website}`;

		tr.append(tdIcon, tdName, tdAddress, tdContact);
		tbody.appendChild(tr);

		// Click-to-zoom from 🗺️ icon
		const mapIconEl = tdAddress.querySelector("span");
		if (mapIconEl) {
			mapIconEl.addEventListener("click", () => {
				const marker = markers[markerID];
				if (marker) {
					marker.openPopup();
					map.setView(marker.getLatLng(), 17);
				}
			});
		}

		// Full row click = open popup
		tr.addEventListener("click", () => {
			const marker = markers[markerID];
			if (marker) {
				marker.openPopup();
				map.setView(marker.getLatLng(), 17);
				setTimeout(() => bindPinButton(markerID, marker), 50);
			}
		});
	});

	// Let plotMarkers() handle marker icons, popups, clustering, etc.
	plotMarkers(amenities, "amenity");
}



// Reverse Geocode using Nominatim
async function reverseGeocode({
	lat,
	lng
}) {
	try {
		const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
		const data = await response.json();
		marker.bindPopup(`<strong>${data.display_name}</strong>`).openPopup();
	} catch (error) {
		console.error('Reverse Geocode Error:', error);
	}
}

const amenityEmojiMap = {
	landmark: "🏛️",
	museum: "🏺",
	park: "🌳",
	place_of_worship: "⛪",
	cafe: "☕",
	fast_food: "🥡",
	restaurant: "🍽️",
	pub: "🍻",
	bar: "🍸",
	nightclub: "🎶",
	cinema: "🎬",
	theatre: "🎭",
	arts_centre: "🖼️",
	events_venue: "🎙️",
	bank: "🏦",
	atm: "🏧",
	bureau_de_change: "💷",
	casino: "🎲",
	fuel: "⛽",
	bicycle_rental: "🚲",
	parking: "🅿️",
	car_rental: "🚘",
	taxi: "🚖",
	police: "🚔",
	pharmacy: "💊",
	clinic: "🩺",
	hospital: "🏥",
	dentist: "🦷",
	marketplace: "🛒",
	school: "🏫",
	university: "🎓",
	post_office: "🏣",
	recycling: "♻️",
	hotel: "🏨",
	// Add more as you wish!
};


// Plot Markers on the Map
function plotMarkers(data, type) {
	Object.keys(markers).forEach(markerID => {
		if (!pinnedMarkers.has(markerID)) {
			const marker = markers[markerID];
			markerCluster.removeLayer(marker);
			markersLayer.removeLayer(marker);
			delete markers[markerID];
		}
	});

	data.forEach(item => {
		if (!item.lat || !item.lon) return;

		const name = item.tags?.name || "Unnamed";
		let itemType = "unknown";
		if (type === "hotel") {
			itemType = "hotel";
		} else {
			itemType = item.tags?.amenity || item.tags?.tourism || item.tags?.leisure || item.tags?.historic || "unknown";
		}

		// Force standard "landmark" classification if tagged as historic or attraction
		if (
			item.tags?.tourism === "attraction" ||
			item.tags?.historic ||
			itemType === "attraction" ||
			itemType === "historic"
		) {
			itemType = "landmark";
		}



		const markerID = `${item.lat}-${item.lon}`;

		const address = [item.tags["addr:housenumber"], item.tags["addr:street"], item.tags["addr:city"], item.tags["addr:postcode"]]
			.filter(Boolean).join(", ") || "No address available";
		const phone = item.tags["contact:phone"] || item.tags["phone"] || "No phone available";
		const website = item.tags.website ? `<a href="${item.tags.website}" target="_blank">Visit Website</a>` : "No website";

		const isPinned = pinnedMarkers.has(markerID);

		const iconUrl = (itemType === "hotel") ? "🏨" // Let generatePopupContent show hotel emoji directly
			:
			amenityEmojiMap[itemType] || null;

		const popupContent = generatePopupContent(markerID, name, itemType, address, phone, website, iconUrl);

		let markerOptions = {
			amenityType: itemType
		};

		if (itemType !== "hotel") {
			const emoji = amenityEmojiMap[itemType] || "📌";
			markerOptions.icon = L.divIcon({
				html: `<div style="font-size: 24px;">${emoji}</div>`,
				className: "",
				iconSize: [30, 30],
				iconAnchor: [15, 30],
				popupAnchor: [0, -30]
			});

			const iconHTML = iconUrl ? iconUrl.startsWith("http") ? `<div style="margin-bottom: 5px;"><img src="${iconUrl}" alt="Icon" style="width: 40px; height: 40px; display: inline-block;"><br></div>` :
				`<div style="margin-bottom: 5px;"><div style="font-size: 24px;">${iconUrl}</div></div>` :
				`<div style="margin-bottom: 5px;"><div style="font-size: 24px;">📍</div></div>`;

		}

		const marker = L.marker([item.lat, item.lon], markerOptions).bindPopup(popupContent).addTo(markersLayer);

		// Only cluster unpinned
		if (!isPinned) {
			markerCluster.addLayer(marker);
		} else {
			map.addLayer(marker);
		}

		// Store marker
		markers[markerID] = marker;
		if (itemType === "hotel" && !hotelMarkers[markerID]) {
			const popupHTML = `
            <div style="font-family: sans-serif; line-height: 1.4;">
                <div style="font-size: 1.4em;">🏨 <strong>${name}</strong></div>
                <div><strong>📍 Address:</strong> ${fullAddress}</div>
                ${phone ? `<div><strong>📞 Phone:</strong> ${phone}</div>` : ""}
                ${website ? `<div><strong>🔗</strong> ${website}</div>` : ""}
                <button class="pin-toggle" style="margin-top: 5px; cursor: pointer;">📌 Pin</button>

                    ${pinnedMarkers.has(markerID) ? "❌ Unpin" : "📌 Pin"}
                </button>
            </div>
        `;


			marker.setIcon(L.divIcon({
				html: `<div style="font-size: 20px;">🏨</div>`,
				className: "hotel-marker-icon",
				iconSize: [30, 40],
				iconAnchor: [15, 35],
				popupAnchor: [0, -35],
			}));



			marker.bindPopup(popupHTML);
			marker.on("popupopen", () => {
				const popupEl = document.querySelector(".leaflet-popup");
				const pinBtn = popupEl?.querySelector(".pin-toggle");
				if (pinBtn) {
					pinBtn.addEventListener("click", () => {
						togglePin(markerID, marker);
						marker.closePopup();
					});
				}
			});


			// Add reference so popups still work!
			hotelMarkers[markerID] = marker;
			markers[markerID] = marker;
		}

	});
}

// Function to enhance marker popups with extra details

function updateMarkerPopups() {

	document.querySelectorAll("#places-results tbody tr").forEach(row => {
		let lat = parseFloat(row.getAttribute("data-lat"));
		let lon = parseFloat(row.getAttribute("data-lon"));
		let markerID = `${lat}-${lon}`;

		let name = row.getAttribute("data-name") || "Unnamed";
		let type = row.getAttribute("data-type") || "Unknown";
		let address = row.getAttribute("data-address") || "Address not available";
		let phone = row.getAttribute("data-phone") || "Phone not available";
		let website = row.getAttribute("data-website") ? `<a href="${row.getAttribute("data-website")}" target="_blank">Visit Website</a>` :
			"No website";

		let iconElement = row.querySelector("img.amenity-icon");
		let iconUrl = iconElement ? iconElement.src : "icons/default.png";

		const isPinned = pinnedMarkers.has(markerID);

		if (markers[markerID]) {
			let popupContent = generatePopupContent(markerID, name, type, address, phone, website, iconUrl);

			markers[markerID].setPopupContent(popupContent);
			console.log(`Popup updated for marker ${markerID} with type: ${type}`);
		} else {
			console.warn(`Marker not found for: ${markerID}`);
		}
	});
}

// Ensure popups update after icons are set
setTimeout(updateMarkerPopups, 500); // Delay ensures markers are fully created before updating

// Fade-in Containers
function fadeInContainers() {
	document.querySelectorAll("#hotel-container, #place-container, #weather-container").forEach(container => {
		container.classList.add("fade-in");
		container.style.display = "block";
	});
}

// Caching Functions
function cacheData(key, data) {
	localStorage.setItem(key, JSON.stringify({
		data,
		timestamp: Date.now()
	}));
}

function getCachedData(key) {
	const cache = JSON.parse(localStorage.getItem(key));
	return cache && (Date.now() - cache.timestamp < CACHE_EXPIRATION) ? cache.data : null;
}

// Ensure containers are always set to display block before fading in
function fadeInContainers() {
	document.querySelectorAll("#hotel-container, #place-container, #weather-container").forEach(container => {
		container.style.display = "block"; // Ensure it's visible
		container.classList.add("fade-in");
	});
}


// Scrolling for hotels and places modals
$(document).ready(function() {

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
                <td><img src="https://placehold.co/40x40" alt="placeholder"></td>
                <td>Central Park</td>
                <td>Beautiful scenery</td>
            </tr>`;
		document.getElementById("temp-div").innerHTML = `<h3>28°C</h3><p>Sunny</p>`;
	});
});

// Responsive fix: Ensure hotel and place tables don't overflow on smaller screens
const style = document.createElement('style');
style.textContent = `
  #hotels {
    max-width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
  }

   #places {
    max-width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    justify-content: left;
  }

  #hotel-results, #places-results {
    width: 100%;
  }

  #hotel-results td, #places-results td {
    word-wrap: break-word;
    white-space: normal;
    padding: 1vh;
    background-color: white;
    
  }

  #places-results td:first-child {
    width: 30px;
    min-width: 30px;
    max-width: 30px;
}
`;
document.head.appendChild(style);

if (!window.L) { // Leaflet failed to load
	document.getElementById('map-wrapper').classList.add('hidden');
}