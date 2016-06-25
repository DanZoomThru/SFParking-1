## What is This?
---
![app demo](https://raw.githubusercontent.com/michelleheh/SFParking/master/img/demo.gif)
![component markup](https://raw.githubusercontent.com/michelleheh/SFParking/master/img/appMarkup.jpg)
---
This is a Parking Reservation app for San Francisco using React. To see the app, just open index.html in a browser. 

Webpack is used for transpiling ES6 to ES5 as well as compiling supporting files to bundle.js.  

Webpack-dev-server is used for live compiling during development.  The node_module folder is not included, run `npm install` to install all dependencies, and see package.json for details.  Run `npm start` to start the webpack dev server, and the app is served at localhost:8080.

The app is broken down to react components. See the component jsx file in src/component folder. See the following image for component markup. 
1. teeList.jsx: a list of thumbnails dynamically generated based on the JSON
2. listItem.jsx: individual items on the list that are responsible for click events
3 display.jsx: the display area of the selected Tshirt that includes the Tshirt info and a buy button

Meeting the specs:
1. Yes, the display is defaulted to the first item on the JSON file when the app is first loaded. 
2. Yes, the page is responsive.  I have used the bootstrap library for grid layout and style of the page.
3. Yes, display changes based on user click actions.
4. Yes, jQuary library is used for a post request to “/buy”.  However, since there is no server setup, the request is going to result in an error.  The form data sent is alerted for reference. 


### Getting Started

* Install dependencies
```
npm install
```
* Run webpack server
```
npm start
```
go to http://localhost:8080/

### Additional Libraries
* Bootstrap modal and popover react components are used. Refer to docs [here](https://react-bootstrap.github.io/)
* google map components docs [here](https://github.com/istarkov/google-map-react)