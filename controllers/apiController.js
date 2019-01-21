
// Weather Model
const Weather = require('../models/weather');

exports.home = async function(req,res) {
  const request = require('request-promise');
  var options = {
     uri: "https://api.apixu.com/v1/forecast.json?key=6ed6a33d178846eba89164920191701&q=Montevideo&days=4",
     method: "GET",
     json: true
 }
 try {
       var result = await request(options);
       return res.json(result);
   } catch (err) {
       console.error(err);
   }
};


exports.insertWeather = async (req,res) => {
    const { name, weather } = req.body;
    const weatherObj = new Weather({name, weather});
    await weatherObj.save();
    res.json({status: 'Weater Saved'});
};

exports.getWeather = async (req,res) => {
  const resp = await Weather.find();
  res.json(resp);
};
