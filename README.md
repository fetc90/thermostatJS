# Thermostat 🌡

The purpose of this project was to test drive a simple front-end web app and integrate a weather API. This programme was written in JavaScript and JQuery, tested in Jasmin and uses an API from Open Weather Map.

![gif](https://media.giphy.com/media/gdfVcg8N90BOct0YHl/giphy.gif)

The user can:
* Increase and decrease the temperature.
* If the power save mode is on, the temperature will not increase above 25 degrees, otherwise the maximum temperature is 32 degrees. 
* Reset the thermostat which will default to 20 degrees with the power save mode on.


#### Quick Setup
```
> git clone <repo name>
> npm install                          // install required packages

// If you have Python stalled, run:
> python -m SimpleHTTPServer           // and visit localhost:8000 in your browser

// Otherwise:
> npm install http-server -g
> http-server . -p 8000                // to run from your local directory

```

#### Testing
Open `SpecRunner.html` with Live Server.