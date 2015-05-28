var API = require('./app/modules/API');

module.exports = {
  index: function(req, res) {
  	  res.render('index.ejs', { title: 'MyMonitor' });
    },
  acknowledgement: function(req, res){
    API.testFunction(req,res);
    }
}
