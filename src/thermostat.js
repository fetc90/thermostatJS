function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32
  this.powerSave = true;
  this.powerSaveMax = 25

}

Thermostat.prototype.getTemperature = function(){
  return this.temperature
}

Thermostat.prototype.increaseTemperature = function(){
  if (this.powerSave && this.temperature === this.powerSaveMax){
    return this.temperature
  } else if (this.temperature === this.maximumTemperature){
    return this.temperature
  } else {
    this.temperature += 1
  }
  
};

Thermostat.prototype.decreaseTemperature = function(){
  var minimumTemperature

  if (this.temperature === this.minimumTemperature){
    return this.temperature;
  } else {
    this.temperature -= 1
  }
};

Thermostat.prototype.turnSaveOff = function(){
  this.powerSave = false
}

Thermostat.prototype.turnSaveOn = function(){
  if (this.temperature > this.powerSaveMax) {
    this.reset();
  }
  this.powerSave = true
}

Thermostat.prototype.reset = function(){
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < 18){
    return "low-usage"
  } else if (this.temperature > 24){
    return "high-usage"
  } else {
    return "medium-usage"
  }
}

Thermostat.prototype.isPowerSaveOn = function(){
  if (this.powerSave === true){
    return "Power save mode is on"
  }
  return "Power save mode is off"
}