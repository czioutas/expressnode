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
  
Modules
- body-parser:    https://github.com/expressjs/body-parser
- connect-flash:  https://github.com/jaredhanson/connect-flash
- cookie-parser:  https://github.com/expressjs/cookie-parser
- ejs:            https://github.com/tj/ejs
- errorhandler:   https://github.com/expressjs/errorhandler
- express:        http://expressjs.com/
- express-session:https://github.com/expressjs/session
- method-override:https://github.com/expressjs/method-override
- mongoose:       https://github.com/Automattic/mongoose
- morgan:         https://github.com/expressjs/morgan
- multer:         https://github.com/expressjs/multer
- serve-favicon: https://github.com/expressjs/serve-favicon
