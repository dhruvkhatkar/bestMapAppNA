
INSTRUCTIONS ON SETTING UP DEV ENVIRONMENT:

1. first clone this project with git
2. install nodejs http://nodejs.org
3. open cmd/terminal and change directories to the folder for this project
4. type "npm install" (you might need to type sudo before this on mac/linux)

HOW TO RUN THE LOCAL WEB SERVER:

1. open cmd/terminal and change directories to the folder for this project
2. type "grunt connect"

HOW THIS PROJECT IS STRUCTURED:

1. the UI is drawn using templates written in handlebars (templates/) and views written in backbone (/views)
2. models represent main objects in our app (models/).
3. page navigation is handles by a router (control/routes).

WHY WE CHOSE TO USE CERTAIN LIBRARIES:

1. Backbone - gives us organization structure of model view like development, also prevents global scope pollution.
2. Handlebars - a clean organizational way to keep html out of JS files.
3. RequireJS - an organized and easy way to handle dependencies in such a large group of devs.
4. jQuery - so that we dont feel like jumping off a bridge.


Phil email phil.roy13@gmail.com