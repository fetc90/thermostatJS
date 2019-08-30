$(document).ready(function(){
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  function updateTemperature(){
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

  })

  $('#power-save-off').on('click',function(){
    thermostat.turnSaveOff();
  })
  
});