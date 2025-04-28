const request = require('postman-request')

const forecast = (latitude, longitude , callback) => {
   const url = "https://api.weatherstack.com/current?access_key=45d3574b007946e4faba3093d42cf851&query=" + latitude + "," + longitude + "&units=f"
//    const url = "https://api.weatherstack.com/current?access_key=45d3574b007946e4faba3093d42cf851&query=42.35888,-71.056804&units=f"

   request({url, json: true}, (error, {body}) => {

        if (error) {
             callback('Unable to connect to weather service!', undefined)
          } else if (body.error) {
              callback('Unable to find location!', undefined)
          } else {
              callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.  The humidity is ' + body.current.humidity + '%.')
          }
    })
}

module.exports = forecast
