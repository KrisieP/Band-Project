# The Llewellin Duo - First Milestone Project

![Mokeup image](wireframes/mokeup-image.png)

## **Goal for this project** 

The Llewelin Duo 
The band can perform at a variety of venues, ranging from small cosy pubs to large scales weddings where they will provide the perfect atmosphere to get everyone on their feet dancing the night away.
This webistes purpose is to promote an acoustic duo band, who specialise in a unique Spanish cross Mexican style instrumental duet. Information regarding the band, upcoming events and supplying the user with images and example audio/video to help them contact the band to book in a relavant and resposive design is the aim here.


An intuitive and exciting user experience is key with information to be found easily is important.

Thank you for visiting my project!

Any questions, please feel free to contact me via my github page. Thanks!

---
<a></a>
## Table of contents 
* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colors](#colors)
        * [Structure](#structure)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Tools and Libraries](#tools-and-libraries)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)


<a name="ux"></a>
## **UX**
<a></a>
### **User Goals**

* A website with content to wow the user into hiring the band for an event
* Website should be easy to navigate on all devices formats such as desktop, tablet & mobile
* Pleasing visual elements
* Understand the bands style and versitility
* Website with creative call-to-actions
* Provide users with venue and user based reviews/testimonials
* Contact form should be easy to find and simple to complete
* Subscription button should be easy to find and simple to complete with a maximum of three fields
* Links to social media accounts promtoted for additional content

[Back to Top](#table-of-contents)

<a></a>
### **User Stories**

* As a user, I want to be able to easily find the contact details from the property.
* As a user, I want to find music samples relating to the band.
* As a user, I want to see various images of the different venue types they have played at.
* As a user, I want to be able to easily see their upcoming events.
* As a user, I want to know whether the band would be flexible in learning new material for a specific event.
* As a user, I want to be able to subscribe to the latest updates, events, merch and new material.
* As a user, it is important to me that the website is easy and simple to use. 
* As a user, I want the websit to work well on mobile devices. 
* As a user, I want the website to be intuitive as it will help increase enquiries for bookings.
* As a user, I want to find the contact details quickly and easily.
* As a user, I want contacting the band simple and quick.
* As a user, I want to feel drawn to their style.
* As a user, I want the website to be easy to navigate. 
* As a user, I would like to know a bit about the band members themselves.
* As a user, I want there to be links to their social media pages to view aditional content.

<a></a>
### **Site owners Goals**
* Promote the band 
* Increase enquiries
* Increase bookings
* Promote a fun and lively vibe

[Back to Top](#table-of-contents)

<a></a>
### **User Requirements and Expectations**
<a></a>
#### Requirements
* Easy to navigate by using the navigation menu
* Easy to understand live event page
* Simple contact Us form
* Quick and simple way to subscribe to event updates
* Clear information about event types that the band can be hired for.

<a></a>
#### Expectations
* When clicking on links, I expect the page to open in a new tab window
* When clicking to subscribe, i expect the simple completion form to open in to a modal popup box within the same page.
* I expect a 'Success' notification when submitting the contact form to confirm that submitted correctly
* For all nav links to work correctly, whether it be to a different location on the same page or to a location on a seperate page.
* Website is in line with the customer's journey

[Back to Top](#table-of-contents)

<a></a>
### **Design Choices**
[Coolors](https://coolors.co/ "Coolors.co") and [Color Hunt](https://colorhunt.co/)

<a></a>
#### Fonts
I have used Google fonts to find the desired font styles from this project and have decided font-family: 'Passions Conflict' works best for the bands home page name title as it fits with a previous font style used that band has been using for years that their followers would recognise, but i feel this has an additional level of elegance.
For headings and content i have taken a more simplified clean cut approach to the font styles as being able to read the content clearly and easily is far more important for user experience than flmaboiance.
I have done a bit of reasearch into the most popular fonts and why on google and have come to the conclusion that font-family: 'Lato' would work great for the content as it's very clean but has slight smooth cut charactaristics that i found interesting and drew me in.
I paired font-family: 'Lora' with Lato for my headings, i read this was a popular choice and i'm happy with the results as it clearly stands apart from the content font type producing a punchy cleary heading that in a distant way alos ties into the font type used for the bands name on the main home page.


<a></a>
#### Icons
I have decided to implement icons, using the [Font Awesome library](https://fontawesome.com/ "Font Awesome").

<a></a>
#### Colors
(https://colorhunt.co/palette/193637).


<a></a>
#### Structure
I have decided to use [Bootstrap](https://getbootstrap.com/) to build the base structure of my website as it has proven to be an invaluable framework. 
Bootstrap provides various elements of CSS and Javascript which is very helpful to keep a good structure on your page. 
As Bootstrap is designed for mobile first, I will be certain that my website functions well on mobile.

[Back to Top](#table-of-contents)

--- 
<a></a>
## **Wireframes**
Upon a discussion with my mentor [Balsamic](https://balsamiq.com/wireframes/) is what i have decideed to use for designing the wireframes for my project.
I started with a mobile first aproach, so designed the website for mobile devices first, moving to tablets next and finally creating the desktop design.
I have a four page design which i believe will be the best approach in order to seperate content as it would be too much for one page. This will ensure that the website is easy to read and navigate


You can find my wireframes below:

### [Desktop Wireframe]

### [Tablet Wireframe]

### [Mobile Wireframe]


[Back to Top](#table-of-contents)

---

<a></a>
## **Features**
<a></a>
### **Existing Features**

#### Navigation
I have used Bootstrap to create my navbar due to it's responsive nature between devices sizes.
For mobile devices i have used a dropdown menu which is a lot cleaner than trying to squeeze all options onto a small navbar.



#### Home Page - Hero Image

I have decided to implement a hero image which spreads over 100% width of the screen. I have set the height at 80vh to show a little of what comes next to entise the user into scrolling down the page.
The image responds well when viewing on desktop, tablet and mobile.


<a></a>
## **Bugs**

* All mobile devices had a white border down the right hand side of the screen.
     * Fix - html, body {overflow-x:hidden} - Solution found -  [here](https://stackoverflow.com/questions/14270084/overflow-xhidden-doesnt-prevent-content-from-overflowing-in-mobile-browsers/14271049#:~:text=html%2C%20body%20%7B%0A%20%20overflow%2Dx%3Ahidden%20%0A%7D)
