// models/user.js

var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
	valid: {
	    fn: { type: String, default: null },
	    ln  { type: String, default: null },
	    email        { type: String, default: null },
	    title        { type: String, default: null },
	    password     { type: String, default: null }
	}
    metadata: {
        created_at { type: Date, default: null },
        updated_at { type: Date, default: null }
    },
    emailList        : Array,
});


module.exports = mongoose.model('User', userSchema);
