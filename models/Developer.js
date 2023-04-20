const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const developerSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model('Developer', developerSchema);
