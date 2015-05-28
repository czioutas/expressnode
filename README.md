# expressnode
A Simpler seutp for MEAN applications with customisable NoSQL storage


Structure:
- server.js // Main Execution file with configurations and module dependecies
- routes.js // The redirection router
- Views     // Contains all the .ejs/.html pages you want to include
- Public
  - CSS
  - fonts
  - Images
  - javascript
- node_modules // folder created by npm install for modules that are required for the application
- Config // Anything that has to do with your configuration settings, Environment settings, development etc
  - database.js // database connection strings
  - variables.js // global setup settings PORTs etc
- App 
  - Models // The Schema structure of the NoSQL Models
  - modules // Essentially all your custom modules that you will need to create
    - connectors // Example module for handling connection access to DB
  
