//  config/db.js

//`javascript
const mongoose = require("mongoose");

const dbURI = "";

const options = {
	reconnectTries: Number.MAX_VALUE,
	poolSize: 10,
	useNewUrlParser: true
};

mongoose.connect(dbURI, options).then(
	() => {
	console.log("database connection established");
	},
	err => {
		console.log("Error connecting to database instance due to: ", err);
	}
);

//mongoose.connect(dbURI, {useNewUrlParser: true});

//require any models
require("../models/Task");
