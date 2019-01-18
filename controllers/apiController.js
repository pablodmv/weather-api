

exports.home = async function(req,res) {
  const request = require('request-promise');
  var options = {
     uri: "https://api.apixu.com/v1/forecast.json?key=6ed6a33d178846eba89164920191701&q=Montevideo&days=3",
     method: "GET",
     json: true
 }
 try {
   console.log("Entro");
       var result = await request(options);
       console.log("Ejecute");
       var retorno = {
         temp_actual: result.current.temp_c,
         condition: result.current.condition.text,
         forecast: [
           {
             fecha: result.forecast.forecastday[0].date

           }
       ]



       };
       return res.json(retorno);
   } catch (err) {
       console.error(err);
   }

  //const json_api_request = await prueba();

console.log(json_api_request);

 //res.json("json_api_request");
};
