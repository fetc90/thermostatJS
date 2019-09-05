$(document).ready(function(){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cea74c5a61ad78f773ed96da884709a&units=metric', function(data){
    $('#current-temperature').text(data.main.temp);

  })

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  $('#power-save-mode').text(thermostat.isPowerSaveOn());

  function updateTemperature(){
    $('#power-save-mode').text(thermostat.isPowerSaveOn());
    $('#temperature').text(thermostat.temperature);
    $('body').attr('class', thermostat.energyUsage());
  };

  $('#reset').on('click',function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#increase-temperature').on('click',function(){
    thermostat.increaseTemperature();
    updateTemperature();
  })
  
  $('#decrease-temperature').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature(); 
  })

  $('#power-save-on').on('click',function(){
    thermostat.turnSaveOn();
    $('#power-save-mode').text(thermostat.isPowerSaveOn());
  })

  $('#power-save-off').on('click',function(){
    thermostat.turnSaveOff();
    $('#power-save-mode').text(thermostat.isPowerSaveOn());
  })

});