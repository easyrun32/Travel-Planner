# Travel-Planner

Travel planner app made with MERN stack and NextJS.

## Overview
Users can create trips where they are able to add itineraries, make before you go todo lists, add reservation details, tickets, or any important information about the trip, track budgets of each spending. This will be the feature list for the MVP version, but more functionality will be added as we progress.

## Project setup 
### Back-end
 1. Clone the repo from Development branch, that contains the latest working features.
 2. After cloning the repo you will need to create a development database with MongoDB.
 3. Create a .env file called config.env in the config folder and copy paste the content from example.config.env file. 
 4.  Add your mongo connection URI to TEST_MONGO_URI to use the database.
 5. In the root folder run:   
 ```
 $ npm install
 ```
 6. You are done with the back-end installation. If you want to spin up the development server run:
 ```
 $ npm run dev
 ```
 7. Requests have to be made to _localhost:8081_ I use [Postman](https://www.postman.com/) when working with the Back-end)
 
 ### Front-end
 1. Navigate into [/client]( ./client) folder and run npm install
 2. To start front-end server run this command in the terminal:
 ```
 $ npm run dev
 ```

 ## Additional info
 When you want to work on a feature or bug, please create a branch from the development branch and name it after the feature you are working on.
 When you are done with the task pust it up to GitHub and your code will be reviewed and merged to the development branch.
 ### NOTE: After successful contribution your name will be added to the contributors list
