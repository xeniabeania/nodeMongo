//  config/db.js

//`javascript
const mongoose = require("mongoose");

//const dbURI = "mongodb://admin:xifCSvXILYy42Vml@starterdb-shard-00-00-qcur8.mongodb.net:27017,starterdb-shard-00-01-qcur8.mongodb.net:27017,starterdb-shard-00-02-qcur8.mongodb.net:27017/test?ssl=true&replicaSet=StarterDB-shard-0&authSource=admin&retryWrites=true";

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
