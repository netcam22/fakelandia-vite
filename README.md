🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈

# Justice for Fakelandia ⚖️

by Annette Le Sage
version 1.0 (updated 27/1/24)

## Introduction 🧑‍⚖️

The faraway country of Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, and they have a website to keep abreast of the latest justice developments.

## Crimes and Misdemeanours 🤪🗣🥗😈

The Fakelandians can browse lists of crimes committed today on their website and it also has functionality that helps citizens confess to their own crimes.

As a non-citizen, you might not be aware that there are only four possible crimes in Fakelandia, which they insist are always displayed next to an appropriate emoji:

Mild Public Rudeness = 🤪
Speaking in a Lift = 🗣
Not Eating Your Vegetables = 🥗
Supporting Manchester United = 😈

Despite the clear severity of some of these awful crimes, the Fakelandians refer to them all as "misdemeanours".

## Website Functionality

🤪🗣🥗😈 The home page has statistics with total misdemeanours for each type, in four boxes  which reveal the data when hovered over. The boxes also each have a link on the reverse which will route the user to a filtered list of misdemeanours of that type.

🤪🗣🥗😈 The Fakelandians have a browsable list of all four misdemeanours on the Misdemeanours page. They show the citizen ID of the person committing the misdemeanour, the date, the misdemeanour, and the "Punishment Idea", keeping their data carefully anonymised. 

🤪🗣🥗😈 Under the Fakelandian system all punishments are random. They find a random picture on the internet and use it as inspiration for the appropriate punishment. Due to the low number of crimes, this weird system supposedly works extremely well.

🤪🗣🥗😈 There is a Confession page with a form where citizens can confess to their own misdemeanours, which will then be displayed on the list of misdemeanours on the Misdemeanours page and added to the count on the home page.

## Project Structure

The client side has been developed with React, using `Vite` - [Vite](https://vitejs.dev/guide/).
Functional components located in individual files ensure separation of concerns and extensibility.

BEM and SASS has been used to create the css for the project. The sass files are located alongside the components, although some group together styling for related components to allow the most efficient use of blocks, elements and modifiers with BEM naming convention and nesting potential.

The misdemeanour data is not persisted, being generated randomly in the getMisdemeanours helper function which replaces the functionality a backend server might provide with an api to return the data. The resulting list of misdemeanours is stored in state, which is accessible via useContext so it can be consumed in sub-components.

A dropdown to the Misdemeanours column filters the visible list to just one of the four misdemeanours. The filtering functionality does not update the list stored in state - only the list being rendered on this page. 

The free service Picsum https://picsum.photos/ has been used for generating the random images on the Misdemeanours page.

There is a misdeameanour.types.ts file in both the client folder and the server folder. If any changes are made, the content should be updated in both. This is because React is configured to disallow imports outside of its working folder.

## 👉 Routing

React Router and its associated TypeScript @types package are used to to create multiple routes for the navigation menu, one for the homepage, and one each for the "misdemeanours" and "confession" components and there is a 404 component for unknown URLs.

React router is also used to provide a link to the Misdemeanours page on submission of a confession form and by the four boxes on the home page to provide links with parameters to the Misdemeanours page, which filters the list according to the parameter. 

## React Hooks

The project uses the React hooks useState, useContext, useFetch and useParams. 

The project includes custom hooks to ensure separation of frontend logic from the rendering of the components. It also allows functionality to be reused in different parts of the application so there is potential for extensibility.

💡 A useFetch custom hook separates out the fetching of data from a component. The fetch function is asynchronous so needs to await the result of this to get the JSON body of the response. 

💡 A useCountMisdemeanours custom hook counts the number of misdemeanours of each type.

💡 A useMisdemeanourRoute custom hook checks if the route parameter is a valid misdemeanour and if it is, returns data for that route in the same type as a selected filter from the filter misdemeanours form.

💡 A useMisdemeanourFilter returns a filtered list of misdemeanours, returning a filtered list based on either a url route or a select option.

💡 A useSelectFilter returns a filter string either based on a url route or select option, prioritising the user selected option.

💡 A useValidate custom hook provides generic validation of form inputs using their associated arrays of regular expressions and corresponding error messages stored in the data folder. This hook returns a string of one or more errors for each input to be displayed below associated form fields. These errors are updated and shown on each render after form submission has been attempted.

💡 A useHasErrors custom hook separates out the logic of checking for errors on submission of the form.

## 👉 Confession Form

The confession form has three elements: a subject line, a dropdown for the reason and a text box for details.

👉 When submitting a form, the data is submitted and the application:

Displays the error message 'Invalid confession' if success is false.

Displays a thank you message if success is true and justTalked is true.

Displays a thank you message and a link with a route to the Misdemeanours page if the submission is a valid misdemeanour.

## 👉 How to use

👉 Run 'npm install' on the root directory.

👉 Run 'npm run dev' to view your development site in the browser.

👀 To create a build use 'npm run build' and then 'npm run preview' to view the build in the browser.


🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈🤪🗣🥗😈
