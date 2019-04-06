// models/task.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	taskname: {
		type: String,
		required: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Tasks", TaskSchema);
