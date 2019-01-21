const mongoose = require('mongoose');
const {Schema} = mongoose;

const weatherSchema = new Schema({
  name: {type: String, required: true},
  weather: {type: JSON, required: true}
});

module.exports = mongoose.model('Weather', weatherSchema);
