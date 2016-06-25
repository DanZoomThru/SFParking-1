## What is This?
![component markup](https://raw.githubusercontent.com/michelleheh/SFParking/master/img/appMarkup.jpg)
---
This is a Parking Reservation app for San Francisco using React.

### Getting Started

* To see the app, simply open index.html in a browser. 

* Install dependencies
```
npm install
```
* Run webpack server
```
npm start
```
go to http://localhost:8080/

### Libraries Used
* Bootstrap modal and popover react components are used. Refer to docs [here](https://react-bootstrap.github.io/)
* google map components docs [here](https://github.com/istarkov/google-map-react)
* Webpack is used for transpiling ES6 to ES5 as well as compiling supporting files to bundle.js.

### How does it work?

Webpack-dev-server is used for live compiling during development.  The node_module folder is not included, run `npm install` to install all dependencies, and see package.json for details.  Run `npm start` to start the webpack dev server, and the app is served at localhost:8080.

The app is broken down to react components. See the component jsx file in src/component folder. See the following image for component markup. 
---
![app demo](https://raw.githubusercontent.com/michelleheh/SFParking/master/img/demo.gif)
---

### Meeting the specs

* The map is initialized around Moscone Center, with an get request sent to [ridecell parking api](http://ridecellparking.herokuapp.com/api/v1/).
* User can type in another address in the search bar, and search parking spots based on address. [Google geocode api](https://maps.googleapis.com/maps/api/geocode/json) is used to get the latitude and longitude of the user input.
* A popover is displayed when an open spot is clicked on.
  * Spot name is a placeholder since the spot name is an empty field
  * Spot number is shown
  * Per miniute charge is shown 
* When the `Par and Reserve` button is clicked, a post request is sent to the reserve endpoint. The spot is re-plotted as a reserved spot. 
* Currently there is no option to set the time frame for the reservation.  It is hard coded in that a model will pull up 5 sec. after the spot is reserved, where an option to extend reservation is provided.

### Further to do
* Display spot name when api is ready.
* Add a slider to give user option of the time frame of reservation.
