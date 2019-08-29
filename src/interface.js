$(document).ready(function(){
  var thermostat = new Thermostat();
  
  $('#temperature').text(thermostat.temperature);

  $('#increase-temperature').on('click',function(){
    thermostat.increaseTemperature();
  $('#temperature').text(thermostat.temperature);
  })
  
  $('#decrease-temperature').on('click', function() { // event listener
    thermostat.decreaseTemperature(); // update model
    $('#temperature').text(thermostat.temperature); // update view
  })

  $('#switch-power-save-mode').on('click',function(){
    thermostat.switchPower();

  })

  $('#energy-usage').on('click',function(){
    thermostat.energyUsage();
   

  }) 
  $('#disaply-energy-usage').text(thermostat.energyUsage());
  
});

