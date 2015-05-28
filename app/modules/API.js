// modules/API.js

//require
// var ExampleRequireModel = require('../models/exampleRequireModel');

exports.testFunction = function (req,res) {
    res.end(JSON.stringify({ data: 0, message:'acknowledged', code: 10 }));
}

exports.getModel = function (req, res) {
    var formData = req.body;
    var urlQuery = req.query;

    if(urlQuery.APIKey == (process.env.APIKey || 123)){
      process.nextTick(function () {
              ExampleRequireModel
              .find({ "_id": urlQuery.widgetID, "metadata.authorID" : urlQuery.authorID })
              .exec(function (err, widget) {
                  if (err)
                    res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, data: null, message: "There was an unexpected error!", code: -1 }));
                  res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, data: widget, message:'acknowledged', code: 10 }));
              })
      });
    }
    else
      res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, data: null, message:'Denied', code: -1 }));
}

exports.createModel = function (req, res) {
    var formData = req.body;
    var urlQuery = req.query;

    // example APIKey checkup
    // process.env.APIKey is specific to Heroku hosting variables
    if(urlQuery.APIKey == (process.env.APIKey || 123)){
      var newExampleRequireModel = new ExampleRequireModel();
      newExampleRequireModel.name = formData.name;

      newExampleRequireModel.save(function (err) {
          if (err)
              res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, message: "There was an unexpected error!", code: -2 }));
          res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, message:'acknowledged', code: 10 }));
      });
    }
    else
      res.end(JSON.stringify({ urlQuery: urlQuery, formData: formData, message:'Denied', code: -1 }));
}

exports.findModel = function (req, res) {
    var urlQuery = req.query;

    //testData
    Array = [1,2,3,4,5,6,7];

    if(Array) {
      res.end(JSON.stringify({ data: widgetIdArray, code: 10 }));
    }
    else {
      res.end(JSON.stringify({ msg: "There was an unexpected error!", code: -1 }));
    }

    process.nextTick(function () {
            ExampleRequireModel
            .find({})
            .sort('-date')
            .exec(function (err, widgets) {
                if (err)
                    res.end(JSON.stringify({ msg: "There was an unexpected error!", code: -1 }));
                if (widgets) {
                    res.end(JSON.stringify({ data: widgets, code: 10 }));
                }
            })
    });
}
