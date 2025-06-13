<h1 align="center" bold>Snapshot Location</h1>


<h3 align="center"><img src="assets/readme/mockup-screens-iphone-grey.jpg"></h3>

Snapshot Location is your go-to website for discovering more about a particular location.

From keen traveler looking for their next holiday destination to young schoolchild wanting to broaden their knowledge of different countries and their cultures, Snapshot Location is so simple and so intuitive to use, anyone anywhere can start exploring the planet.

Get started right here: [Snapshot Location](https://snapshot-location.pages.dev/)


# Table of Contents 

## Contents

- [User experience](#user-experience)
  * [User Stories](#user-stories)
    - [Visitor Goals](#visitor-goals)
- [Design](#design)
  + [Colour Scheme](#colour-scheme)
  + [Typography](#typography)
  + [Imagery](#imagery)
  + [Icons](#icons)
- [Structure](#structure)
- [Irregular Structure](#irregular-structure)
- [Features](#features)
    + [Current Features](#current-features)
        + [Navigation Bar](#navigation-bar)
        + [SVG Map](#svgmap)
        + [Search Bar](#searchbar)
        + [Openstreets Map + Leaflet](#map)
        + [Navigation Buttons](#nav-buttons)
        + [Amenity Buttons](#amenity-buttons)
        + [Scroll Arrows](#scroll-arrow)
        + [Links](#links)
        + [Footer](#footer)
        + [404 Page](#404-page)
- [Future Features](#future-features)
- [Wireframes](#wireframes)
- [Technologies](#technologies)
  + [Languages](#languages)
  + [Frameworks Libraries Programs](#frameworks-libraries-programs)
- [Testing](#testing)
- [Deployment](#deployment)
  + [GitHub Pages](#github-pages)
- [Credits](#credits)
  + [Code](#code)
  + [Media](#media)
  + [Content](#content)
  + [Acknowledgements](#acknowledgements)


# User Experience

## Visitor Goals

### User Stories:

"**_As a user of Snapshot Location, I would like ** _______________"

:white_check_mark: *successfully implemented*

:x: *not yet implemented*

- :white_check_mark: *an interface layout that can be immediately understood, irrespective of age and nationality, without the need for complicated instructions or a key*.
- :white_check_mark: *an easy-to-navigate platform to find different locations and get a snapshot of life living there*.
- :white_check_mark: *clearly marked locations I can easily navigate and choose from*.
- :white_check_mark: *clear and relevant information provided for each location with each distinct parameter clearly marked.*.
- :white_check_mark: *the time and timezone of the location*.
- :white_check_mark:: *the name and general information about the location, such as languages spoken, the capital city, the dialling code and population size*.
- :white_check_mark: *the principal currency used in the location with exchange rates for other locations I might be traveling from*.
- :white_check_mark: *how safe or dangerous the location happens to be*.
- :white_check_mark: *places to stay in the location*.
- :white_check_mark: *places of interest in the location*.
- :white_check_mark: *what the weather is like in the location*.
- :white_check_mark: *Easily-accessible contact information to get in touch with any questions or to place an advert*.
- :white_check_mark: *Clearly-located social media links to see what else the site has to offer me*.

- :x: *reviews for different places to stay and visit within the location*.
- :x: *a means to book places to stay and visit or tours within the location*.
- :x: *offers for deals and promotions when booking accommodation, travel or tours*.


# Design

-   ## Colour Scheme

    -   The five main colour palettes used for Snapshot Location are black, white, tan, pink and blue. These colors are supposed to imbue the site with a playful, retro and sophisticated sense of adventure.
  
  <h3 align="center"><img src="assets/readme/snapshot-palette.png"></h3>
  
  
-   ## Typography

    -   I use three Google fonts throughout the website to give it that same retro and playful feel:

    1) "Merienda One"
         
         -   Merienda One is used for the logo, name and general branding, including all major headings, branching down from top to bottom.
        
        <h3 align="center"><img src="assets/readme/merienda-one.jpg"></h3>

    2)  "Open Sans"

         -   Open Sans is used for the main body of the website, so as to make reading as easy as possible for the user.
        
        <h3 align="center"><img src="assets/readme/open-sans.jpeg"></h3>

    3) "Roboto"

         -    Roboto is used for the hotels and places of interest tables, so that even on smaller screens, the results really stand out.

        <h3 align="center"><img src="assets/readme/roboto.jpeg"></h3>

         
    -   ## Imagery

        -   Most of the imagery is self-explanatory and interactive for the user:

        ### 3 Maps

        
        #### Map 1 - Header Background Image
        
        The first map is just a background image for the header, slightly blurred so as to emphasize the header branding.
        
        #### Map 2 - Black & White Clickable SVG Map
        
        The second map is a black and white SVG image of the world with all the countries filling with a 'burnt sienna' shade of brown on user hover and click.

        <h3 align="center"><img src="assets/readme/simple_world_map_svg.jpg"></h3>
        
        #### Map 3 - OpenStreetMap Map + Emoji Icons
        
        The third map is a plain OpenStreetMap which I have found no need to cover with any filter, as I believe it suits the rest of the page fairly well. This map is imbued with a hotel emoji for each hotel result on first load, and then features amenity emojis on each amenity button click.

        ## Icons


        ### Emoji Icons


        #### Hotel Emojis 🏨
        
        On address input in the search bar above the map, the map and a table within the 'Hotels' container (HTML #hotel-container) are both populated with hotels. Each hotel on the map is sign-posted with the classic hotel emoji: "🏨".

        #### Amenity Emojis 🌳

        On amenity button click, the map and a table within the 'Places of Interest' container (HTML #place-container) are both populated with amenities. Each amenity has a corresponding emoji, as per the key below:

        museum: "🏺", landmark: "🏛️", park: "🌳", place_of_worship: "⛪", cafe: "☕", fast_food: "🥡", restaurant: "🍽️", pub: "🍻",
        bar: "🍸", nightclub: "🎶", cinema: "🎬", theatre: "🎭", arts_centre: "🖼️", events_venue: "🎙️",
        bank: "🏦", atm: "🏧", bureau_de_change: "💷", casino: "🎲", fuel: "⛽", bicycle_rental: "🚲", parking: "🅿️", car_rental: "🚘", taxi: "🚖",
        police: "🚔", pharmacy: "💊", clinic: "🩺", hospital: "🏥", dentist: "🦷",
        marketplace: "🛒", school: "🏫", university: "🎓", post_office: "🏣", recycling: "♻️",

        #### Pin Emoji 📌

        When clicking on a hotel or amenity on the map, a popup marker will display with relevant information (icon, name, address, phone number & website). At the bottom, the user will find a pin button, entailing them to pin the respective hotel or amenity to the map, while they look at other potential places of interest.

        <h3 align="center"><img src="assets/readme/pin-button.jpg"></h3>

        #### Map Emoji 🗺️

        Among the information populated in the table results for both hotels and amenities, the user will find a map emoji. On clicking this map emoji, the map itself will zoom in on the respective amenity or hotel.

        <h3 align="center"><img src="assets/readme/map-emoji.jpg"></h3>


    -   ## Font Awesome Icons
        
        - I used icons from Font Awesome for social media links in the footer, to improve clarity and efficiency for my users.


# Structure

-   The website has 3 pages:

## 1) *Homepage aka Location*

-   The Home & Landing page features 2 interactive maps and a photo carousel separating the two:

### Top Half
        
### Map 1 - Countries

The SVG Map of the world features clickable countries, the names of which appear when the user hovers over that region of the globe.

<h3 align="center"><img src="assets/readme/hover-name.png"></h3>

When the user clicks on any country, the following information fades in below:
 
-   i) Country Time & Timezone
        
-   ii) Country Name
        
-   iii) Country Currency

<h3 align="center"><img src="assets/readme/boxes.png"></h3>

-   iv) News Headlines

-   v) Country Information

-   vi) Exchange Rates

<h3 align="center"><img src="assets/readme/info.png"></h3>

### Pexels Photo Carousel for Countries

The photo carousel separates the top half and the bottom half of the page, displaying photos of the country that the user has clicked in a striking carousel.

<h3 align="center"><img src="assets/readme/snapshot-colombia.png"></h3>

    
### Bottom Half

### Map 2 - Cities / Addresses

The OpenStreetMaps Map of the world features a search bar just above, where the user can input an address or city name. On clicking enter:
        
#### 1) The map will zoom into that address.

<h3 align="center"><img src="assets/readme/openstreetsmap.png"></h3>

        
#### 2) The map will populate itself with hotels.

#### 3) The following information fades in below the map:
        
-   i) Hotel Details
        
-   ii) Places of Interest
        
-   iii) Weather Forecasts (Daily, 5 day & 16 day)

<h3 align="center"><img src="assets/readme/hotels-places-weather.png"></h3>

#### 4) If you click on the map emoji for one of the hotels populated in the table, the actual map will zoom in on the hotel in question.

<h3 align="center"><img src="assets/readme/hotel-zoom.png"></h3>

#### 5) There is then the option to choose from different amenity buttons within the place-container besides the hotel container

<h3 align="center"><img src="assets/readme/amenity-buttons-table.png"></h3>
    
#### 6) Click on any amenity button and the map will be populated with markers for any found addresses appertaining to that amenity.

<h3 align="center"><img src="assets/readme/map-amenities.png"></h3>

#### 7) To the right of the place-container, the user will find the weather forecasts for the address they have entered.

*   The daily forecast sits at the top and gives the next fifteen hours of weather in 3 hour increments. 
*   The five day forecast comes next and once again can be assessed in 3 hour increments. 
*   The 16 day forecast just gives a daily average for each day.

<h3 align="center"><img src="assets/readme/weather-forecasts.png"></h3>


## 2) *Safety Page*

The safety page features a safety map as provided by [International SOS](https://www.internationalsos.com/risk-outlook).

## 3) *Weather Page*

The weather page features a weather map as provided by [World Weather Online](https://map.worldweatheronline.com/).

# Irregular Structure


-   ## Embedded CSS 
        
-   The wise fx currency widget came with inline styling which I have preserved, adding lazy loading and referrerpolicy to further improve the website's best practices.

-   ## Embedded Javascript

####   I have kept the script inline for:
        
* The PEXELS picture carousel.

* The postcode-link modal.

The functionality of both seem to work much more smoothly that way. At some point, I will try to deduce why. More on both in the Bugs section below.

    
# Features

-   ## General Features:

-   A nav bar, enabling the user to easily navigate from safety map to  weather map to homepage.
-   A clickable SVG map with interactive country tiles that fill with colour on hover and fades out on scroll down.
-   A name modal that pops up on hover and fades out on scroll down.
-   A black instruction modal that pops up on map click, informing the user to 'Scroll down for a snapshot of {location}', and fades out on scroll down.
-   Fade in containers which only appear once the user has clicked a country.
-   The name of each country.
-   The time and timezone for each country.
-   The currency of each country.
-   News headlines for each country.
-   General Information for each country.
-   Exchange rates for each country.
-   A photo carousel, displaying images of each country.
-   An OpenStreetsMap & search bar.
-   Fade in containers which only appear once the user has entered a city name or address into the search bar.
-   A list of hotels and their details for the entered city or address.
-   Amenity buttons, which can generate lists of different amenities within that city or address region.
-   A weather forecast (daily, 5 day and 16 day) for the entered city or address region.
-   An interactive contact section with links to click in order to email or telephone us for more information or to ost an advert. A map modal which pops up when they click on the postcode for our company.
-   A safety map.
-   A weather map.
-   Responsive on all device sizes.
-   Content-packed pages, full of colourful and engaging imagery and media.
-   Interactive elements such as clickable maps. 
-   Scroll buttons to navigate news headlines and amenity / hotel lists.
-   Scroll arrows to navigate weather forecasts
-   Search bars with map zoom.  
-   An interactive exchange rate widget.
-   Easy offsite navigation to social media accounts.
-   A 404 page for users who direct to a non-existent page or resource are able to return to the main page without having to use browser navigation buttons.

  <h2 align="center"><img src="assets/readme/404.png"></h2>

# Future Features

-  A review container - using a Trip Advisor or Expedia API.
-  A booking container - using an Air BnB or Booking API, or, if possible, both APIs jointly.
-  A tour & events container - using APIS to list all tours or events available to the user in the entered city or address region.
-  A table generated from all the hotels and amenities th user has pinned on the map.
-  A game for children to memorize information about each country.

# Wireframes

-   ## Homepage Wireframe - <h2 align="right"><img src="assets/readme/snapshot-location-homepage-wireframe.png"></h2> 

-   ## Safety Page Wireframe - <h2 align="right"><img src="assets/readme/snapshot-location-safety-page-wireframe.png"></h2> 

-   ## Weather Page Wireframe - <h2 align="right"><img src="assets/readme/snapshot-location-weather-page-wireframe.png"></h2> 



# Technologies

-   ## Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

-   ## Frameworks Libraries Programs

1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the Social Media icons in the footer and all buttons to make clear to the user that clicking would have an effect. 
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import various fonts into the style.css file, which were then used on different pages.
3. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for the purpose of a more efficient UX & website aesthetics.
4. [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox): 
    - Flexbox was used throughout the project to make rows and columns responsive on all devices.
5. [Media Queries](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries): 
    - Media Queries was used throughout the project to make the web site responsive on all devices.
8. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to paint, resize, retouch and edit images for the website.
9. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
11. [CodeBeautify:](https://codebeautify.org/css-beautify-minify#)
    - CodeBeautify was used to help beautify the code.
13. [Coolors:](https://coolors.co/?home)
    - Coolors was used to create the colour palette for this README.
14. [Icons8:](https://icons8.com/icons/set/arrow)
    - Icons8 was used to acquire arrows for my scroll buttons and scroll arrows.
15. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
16. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code in a repository after being pushed from Git.
17. [Cloudfare:](https://dash.cloudflare.com/login)
    - Cloudfare is used to deploy the project and acquire a link.

# Testing

The Snapshot Location website has been tested using the following methods:
- [Testing](#testing)
- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator)
        - [Homepage](#homepage)
        - [Safety](#safety-page)
        - [Weather Page](#weather-page)
    - [W3C CSS Validator](#w3c-css-validator)
    - [JSHint Javascript Validator](#jslint-js-validator)


- [Lighthouse](#lighthouse)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
- [Browser Compatibility](#browser-compatibility)
- [Responsiveness](#responsiveness)
    - [Iphone](#iphone)
    - [Ipad](#ipad)
    - [Nest Hub Max](#nest-hub-max)
    - [FHD (1920x1080)](#fhd-1920x1080)
    - [2k (2560x1440)](#2k-2560x1440)
    - [4K (3840 x 2160)](#4k-3840-x-2160)
- [Testing User Experience](#testing-user-experience)
    - [Testing Visitor Goals](#testing-visitor-goals)
    - [Testing Client Goals](#testing-client-goals)
    - [Testing Artist Goals](#testing-artist-goals)
    - [Debugging](#debugging)
        + [Resolved Bugs](#bugs)    
        + [Unresolved Bugs](#bugs)

- [Manual Javascript Test Case](manual-js-testing)


### Automated testing (TDD)
We can use code to test our code. which has several advantages over the manual testing method. Many hundreds of tests can be run against a project in a short space of time, and as tests are usually written by the  programmer during development, errors are picked up early. 

However, tests are only as good as the questions we ask & tests can end up as purely decorative giving a false impression. Automated tests don't test the User Experience either, so the best testing strategy is a combination of both automated and manual user tests. 


The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/#validate_by_input)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
   

## Code Validation

## W3C HTML Validator

The Snapshot Location website passed all tests using the W3C HTML Validator tool

-   ### Homepage / Location

<h2 align="right"><img src="assets/readme/homepage.png"></h2> 

-   ### Safety Page 

<h2 align="right"><img src="assets/readme/safety.png"></h2> 

-   ### Weather Page 

<h2 align="right"><img src="assets/readme/weather.png"></h2> 


## W3C CSS Validator

The Snapshot Location website passed all tests using the W3C CSS Validator tool
<h2 align="center"><img src="assets/readme/css.png"></h2>


## JSHint Javascript Validator

The Snapshot Location website passed all tests using the JSHint JS Validator, with only warnings and no errors reported.

<h2 align="center"><img src="assets/readme/javascript.png"></h2>


## Manual Javascript Testing

In order to ensure that my javascript was working correctly, I would add manual tests throughout my script, and then check them in console. Please see the two examples below: 

Test if container elements exist and are interactive
Run this in the browser console (F12 → Console tab):




## Lighthouse

- ## Desktop

  -  ### Lighthouse Report for Homepage (Desktop)
    <h2 align="center"><img src="assets/readme/lighthouse-homepage-desktop.png"></h2>


- ## Mobile

  - ### Lighthouse Report for Homepage (Mobile)
    <h2 align="center"><img src="assets/readme/lighthouse-homepage-mobile.png"></h2>


I used the Lighthouse reports in Google Developer Tools to examine the pages of the website for the following:

- Performance
- Accessibility
- Best Practices 
- SEO

* ### For Desktop:

- Homepage scored:
    - Performance - 98
    - Accessibility -100
    - Best Practices -75
    - SEO - 100

* ### For Mobile:

- Homepage scored:
    - Performance - 74
    - Accessibility -98
    - Best Practices -75
    - SEO - 100

I didn't do Lighthouse for the other pages, i.e. Safety & Weather because there is so much third party javascript that I cannot change, there was very little point, having improved the header, navbar, contact section and footer as best I could for all pages.

Overall, I am happy with the speed the site runs on every device I've tried (Various Lenovo laptops, Samsung S23 Ultra, Samsung S10 Plus, Samsung S9 Plus).

- ## Future Improvements

- ### Desktop Improvements

    - ### Improvements for Desktop:
  
      - **Best Practices**

      - If I want to improve my *Best Practices* score for the Homepage, I need to rely less on the the third-party Wise fx exchange widget I am using and use one I have developed myself. I have actually developed my own. The reasons for using the Wise one for now are as follows:

      - Their design is more pleasing on the eye and it is faster to load, as it's not relying .

      - I c

      - Otherwise, I am satisfied with all of my Desktop results.

- ### Mobile Improvements
  
    - ### Homepage Improvements
  
      - **SEO**
  
      - The Homepage *SEO* score could be improved by:

      - Increasing text-size on the Homepage for mobile devices.
   

## Browser Compatibility

The site was tested in Brave, Google Chrome, Microsoft Edge and Mozilla Firefox on Desktop.

The site was tested in Brave, Google Chrome and Firefox on Mobile and Tablet.

No issues arose during browser testing. 

Appearance, functionality and responsiveness were largely consistent across browsers and devices, adapting fluidly when changing from portrait to landscape mode.

## Responsiveness

Responsivity tests were carried out using Google Chrome DevTools & Microsoft Edge DevTools. Device screen sizes covered include:

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- iPad Mini
- iPad Air
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max

### Iphone 
<h2 align="center"><img src="assets/readme/iphone.png"></h2>

### Ipad 
<h2 align="center"><img src="assets/readme/ipad.png"></h2>

### Nest Hub Max 
<h2 align="center"><img src="assets/readme/nest-hub-max.png"></h2>

I also created custom settings for FHD (1920x1080), 2k (2560x1440) & 4K (3840 x 2160) screens to verify the web pages would work across monitor sizes. 

### FHD (1920x1080) 
<h2 align="center"><img src="assets/readme/snapshot-location-fhd.png"></h2>

### 2k (2560x1440)
<h2 align="center"><img src="assets/readme/snapshot-location-2k.png"></h2>

### 4K (3840 x 2160)
<h2 align="center"><img src="assets/readme/snapshot-location-4k.png"></h2>

# Testing User Experience

## Testing User Stories

    -   ### Testing Visitor Goals

    1. *As a Visitor, I want to easily understand the main purpose of the site, learn more about the collective and get a feeling for who they are, where they are, what they have to offer and how they intend to deliver.*

       + Upon entering the site, users are greeted with a 3D comic strip explaining in four frames why they might need or want our help. That's the 'WHY?' sorted.

        <h2 align="center"><img src="assets/readme/toon-bazaar-comic-strip-welcome.png"></h2>
  
       + Once they have read the comic strip, they arrive at the about section, where we spell out where we are located (everywhere) and how we can help them. There are also links to the contact form wherein they can make requests or get a quote. That's the ''WHO?', 'WHERE?' & 'HOW?' sorted.
  
       + The user can then navigate via the links in the about section to examples of our artwork adorning the Homepage & Market Page. That's the 'WHAT?' sorted.

       <h2 align="center"><img src="assets/readme/home-about.png"></h2>

    2. *As a Visitor, I want to be able to easily navigate throughout the site to find content.*

        <h2 align="center"><img src="assets/readme/toon-bazaar-navbar.png"></h2>

       + The navigation bar sits directly beneath the header on each page, with three clearly labelled buttons to take them to whichever page they wish. The buttons change colour if the user hovers over them for the sake of clarity.
  
       + In the Homepage's about us section, there are links to example artwork of various mediums, external links to artists' portfolios and links to the contact form.
  
       + At the bottom of each page, there are social media buttons, which match the page buttons in the navigation bar, making for an intuitive UX. Each of these buttons will open its respective social media page in a new window, so the user will not lose their position on the Snapshot Location website.

        <h2 align="center"><img src="assets/readme/toon-bazaar-social.png"></h2>

    3. *As a Visitor, I want to see some samples of the artistic services they provide.*
   
       + Each page features a background created by our artists and each page is filled with work by our community of artists.
   
       + In the Homepage's about us section, there are internal links to example artwork and external links to artists' portfolios.
  
       + Each row on the Market Page is a gallery of different media, ranging from short animations to illustrations to comics and merchandise.

        <h2 align="center"><img src="assets/readme/market-row-samples.png"></h2>
       
    4. *As a Visitor, I want to locate their social media links to see their followings on social media and determine how trusted and known they are.*
   
       + At the bottom of each page, there are social media buttons. Each of these buttons will open its respective social media account in a new window.
  
       + The user can scroll to the bottom of any page on the site to locate social media links in the footer.
  
      
    5. *As a Visitor, I want to find the best way to get in contact with the organisation with any questions I may have or to get a quote.*
   
       + At the top of each page, underneath the header, there is a navigation bar with buttons to navigate to each page. The button for the Contact Page is clear to see on the right-hand side.
    
       + On the Homepage, in the about section, there are two links which direct the user straight to the contact form on the Contact Page.


    6. *As a Visitor, I want to sign up to a newsletter so that I am emailed any major news, updates or offers, like the 15% off signup offer.*

       + At the bottom of the Contact Page, underneath the request form text area, there is a checkbox (already checked - but which can be unchecked by the user) signing them up with the email address they had to input at the top of the form.

## Debugging

<h3 align="center"><img src="assets/readme/structural-irregularities+necessary-errors.jpg"></h3>
    
    
## Bugs

### Resolved

1. It's not really a bug, but the biggest obstacle I faced to completing this site was the monthly charge I kept incurring for using Google Cloud Services with the Maps Javascript API & Places API: 
    -   I signed up for a free trial ($300 credit included) and was extremely diligent about checking my daily spend, to ensure I hadn't surpassed my credit limit. Unfortunately the billing amount you see listed is backdated by one day. As I saw the forecasted total bill for the month as £0, I carried on using the services in a dev capacity for the last day of the month, probably doing a further twenty odd city searches. 
    -   To my horror, two days later I received a bill for £1800. This was owing to my not having restricted which APIs were being triggered during searches and having not set quotas around my potential budget. 
    -   I would recommend any other devs signing up for Google Cloud Services ensure that they have restricted which APIs / SKUs they are using and set quota limits for each day. 
    -   I would also recommend that Google Cloud Services create a much a more transparent and intuitive landing page and guide, so that other students and developers do not fall into the same trap.
    -   Luckily the Google Cloud Services representatives are really kind and really helpful, so they guided me through how to set quotas and restrict APIS and waived my best bill as a goodwill gesture. Hence my thanks to them later in this README. 
    
I solved this problem by using OpenStreetMaps, Leaflet, Nominatim and 

2. On smaller devices, my h3 heading would wrap over into the next line or some text would disappear and be replaced with an ellipsis. I learnt that by using the 'white-space: nowrap' css code, I could avoid this happening to my headings.  

3. Jomhuria font's underline-formatting ordinarily breaks up for the lower part of low-hanging letters such as 'j' or 'y'. This looked unsightly and made legibility worse on the form of the Contact Page. I resolved this by using 'text-underline-position: under' css code to offset the underline-formatting to a lower position.

4. I couldn't get my background not to change size (zoom) when changing the sizes of my foreground flex elements, until I did some reading and discovered that by applying the css code 'no-repeat', 'center' and 'fixed', my background-image would be unaffected.

5. The HTML validator flagged that there was an issue on my Market Page, where I'd tried to use a div as a child of a span when trying to line up the images side by side for the image border I'd created. I removed this and used 'display: inline-flex' css code instead and everything worked accordingly.


### Unresolved

1. I have used the free SVG World Map download from Simple Maps (https://simplemaps.com/world). Neither China nor the United States are included unless you buy the fully licensed version for $199. I will likely do this in the future. Until then, China will appear as Taiwan and the United States as the United States Minor Outlying Islands.


1)    ### CORS WARNING
        
        - The site may trigger a CORS warning from maps.googleapis.com/maps/api/mapsjs/gen_204. 
        
        -  This is a harmless connectivity check used by Google's Maps API and does not affect functionality or performance. 
        
        -   Google Places API proved prohibitively expensive (£1000+ for the first month of use, for 2-3 city searches/day), so I had to exchange Google Cloud Services for OpenStreetMaps & Leaflet.
        
        -   Removing Google Maps would remove helpful features like search autocomplete and timezone fetching.

        -   Therefore I've left it for now.

        -   I'm looking at potentially using Stadia Maps for my map tiles, if there is demand for the site.

1)    ### Quota Errors

        As I am using many API services on their free pricing model while in the developmental stage, occasionally the user will experience errors such as the following:

        -   400 Bad Request 
        -   403 Forbidden
        -   426 Upgrade Required

        or the likes of

        GET https://gtm.wise.com/anon-get?eventName=fx-embed-load&origin=https://snapshot-location.pages.dev/ NS_BINDING_ABORTED

        which is an analytics call trying to send data back to Wise’s servers, informing them which site is using their widget.





# Deployment

## Cloudfare Pages

As I wanted to keep my repository private, I decided to deploy with Cloudfare Pages, as Github wouldn't allow me to keep me repository private when deploying to Github Pages, unless I purchased a pro subscription.

The project was deployed to Cloudfare Pages using the following steps...

Log into Cloudflare Pages

Go to: 
1.	Log in to [Cloudfare Pages](https://pages.cloudflare.com/)
2.	Authorize Cloudflare to access your GitHub account.
3.	Select the snapshot-location repository.
4.	Choose the main branch.
5.	When prompted:
    -	Framework preset: None
    -	Build command: (leave blank if static)
    -   Output directory: ./ or dist (if you have one).
6.  Deploy and obtain a link.


https://snapshot-location.pages.dev

Ordinarily, if I didn't want to keep my repository private, I would deploy to Github Pages, using the following protocol:

## GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
- Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

## Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.


# Credits

## Code

-   [Code Institute](https://codeinstitute.net/): I referred back to tutorial videos and my notes taken throughout the process of developing this website:  
    -   The foundation of all the HTML, CSS & Javascript were learnt doing the Code Institute course and respective challenges.
    -   I referred to the code from Code Institute's example projects for inspiration, before going away and sourcing more specific tutorials, such as those listed below.
    -   Code from the Love Running project formed the basis of the Media Queries css used in my website.

-   [YouTube](https://youtube.com/): I used the following tutorials to build various sections of this site and learn more about using APIs:

[SVG Map + Name & Time](https://www.youtube.com/watch?v=WtoyIiOp5Aw)

[Country Information from REST COUNTRIES](https://www.youtube.com/watch?v=THZyM2z8s-o)

[News App](https://www.youtube.com/watch?v=ZGLKTQVyT0U)

[Weather App](https://www.youtube.com/watch?v=74IOjtVvExY)

[5 Day Forecast](https://www.youtube.com/watch?v=31Z0Z2Qn8NE)

[OpenStreetMaps + Leaflet](https://www.youtube.com/watch?v=vOPr5k_SGVA)

[Javascript Chaining](https://www.youtube.com/@SteveGriffith-Prof3ssorSt3v3): Professor Steve Griffith's tutorials on chaining Javascript functions helped me greatly in understanding how to chain all the different APIs I was using together.

-   [Mozilla Developer](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries): Mozilla Developer helped me achieve the exact level of responsiveness I wanted from Media Queries.

-   [CODECONVEY](https://codeconvey.com/pure-css-coverflow-slider/): I learnt how to create a Pure CSS 3D Coverflow Image Slider at CodeConvey.

-   [Wise](https://wise.com/gb/business-tools/fx-widget) Wise provided their own widget for the fx exchange, which I have found very easy to implement and use.

-   [Free Code Camp](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/): Free Code Camp gave me the knowledge to create a basic javascript modal.

-   [Stack Overflow](https://stackoverflow.com/questions/27583937/how-can-i-make-a-css-glass-blur-effect-work-for-an-overlay): Stack Overflow gave me the knowledge to create a blurred / frosted glass effect overlay.

-   [Stack Overflow](https://stackoverflow.com/questions/300220/how-to-prevent-text-in-a-table-cell-from-wrapping): Stack Overflow gave me the knowledge to prevent my table text from overflowing. 

-   [CSS-TRICKS](https://css-tricks.com/almanac/properties/t/text-underline-position/): CSS-TRICKS gave me the knowledge to set the placement of the underline so it wasn't obscuring my text in the headlines section.

-   [CSS Script](https://www.cssscript.com/drag-resize-minimize-maximize-close-interactive/): gave me the foundations for incorporating minimize and maximize buttons within a container.


## Content

-   All content was created and written by the developer.


## Media


-  All Country Information was kindly provided by REST COUNTRIES [REST COUNTRIES](https://restcountries.com/).

-  All City Information was kindly provided by [OpenStreetMap](https://www.openstreetmap.org/), [Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API) [Nominatim](https://nominatim.org/) & [Leaflet](https://leafletjs.com/).

-  All hotel & amenity information was kindly provided by [OpenStreetMap](https://www.openstreetmap.org/), [Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API) & [Leaflet](https://leafletjs.com/).

-   All Photos were kindly provided by [PEXELS](https://www.pexels.com/).

-   All News Stories were kindly provided by [NEWS API](https://newsapi.org/), [World News API ](https://worldnewsapi.com/), [GNews](https://gnews.io/) &[NewsData](https://newsdata.io/).

-   The currency exchange widget was kindly provided by [Wise](https://wise.com/gb/business-tools/fx-widget)

-   All Weather forecasts were kindly provided by [OpenWeather](https://openweathermap.org/api).

-   The address map in my contact section postcode modal was kindly provided by [Google Maps](https://www.google.co.uk/maps).


## Acknowledgements

-   My Academic Supervisor and Lecturer, Rachel Furlong, for the great lessons, encouragement, kind guidance, helpful feedback and recommended tools.

-   My Mentor, Marcel Mulders, for all the kind advice, encouragement,  helpful feedback and recommended tools.

-   Thank you to my fellow students for their friendly tips and guidance.

-   Thank you to the tutors and staff at Code Institute for all their support.

-   Thank you to the Code Institute Slack Community.

-   Thank you to the YouTube community.

-   Thank you to the Reddit community.

-   Thank you to all the representatives at Google Cloud Services, who very kindly walked me through their product range, guided me through restricting APIs, as well as setting quotas, and helped me with the unexpected charges. While the services proved prohibitively expensive at this stage of development, the representatives who helped me were some of the most lovely, friendly and articulate mentors I've had the pleasure of meeting.



## Root

Snapshot Location has been created as part of the developer's portfolio but will be further developed into a website in the near future.

<h4 align="center">yinyangsammy 2025</h4>