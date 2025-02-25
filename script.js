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