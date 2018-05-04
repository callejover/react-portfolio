REACT-PORTFOLIO
=========

**Personal portfolio using React & React-Router and a backend using Node.js and MySql.**

List of files and their functions:
--------------
```
// BACKEND

controllers:
  comments-controller.js            // GET Route to get all comments from DB.
  new-comment-controller.js         // POST Route to post a new comment to DB. 
config.js                           // Connects to MySql DB.
index.js                            // Root file for backend.
Procfile                            // Lets Heroku know where to start.


// FRONTEND

public:
  index.html                        // Root HTML to render the React app.
src:
  index.js                          // Root js to render the React app.
  app:
    App.js                          // Renders the Routes and the navbar.
    Home.js                         // Landing Route.
    Frontend.js                     // Shows front end abilites.
    Eos.js                          // Shows the current price of Eos.
    Guestbook.js                    // Shows the guestbook. Contains sub components.
```

Built with:
---------

**Fonts from Google Fonts**  
	https://fonts.google.com/

**Back End Framework using Node.js**  
	https://nodejs.org/en/

**Front End Framework using React.js**  
	https://reactjs.org/

**CSS Framework using Bootstrap, in this case, Reactstrap**  
	http://reactstrap.github.io/
  
**Database using MySql**  
	https://www.mysql.com/
  
**Front End & Back End hosted on Heroku**  
	https://www.heroku.com/

Usage:
---------------------------------
**Start the Front End**
* ```cd``` into porfolio_frontend.
* Run ```npm start``` to run the app.

**Start the Back End**
* ```cd``` into portfolio_backend.
* Run ```nodemon``` or ```node index.js``` to start the backend.

Länkar:
------
  
**GitHub:**  
  https://github.com/callejover/react-portfolio/
  
**Website**  
  http://callejover-portfolio.herokuapp.com/

