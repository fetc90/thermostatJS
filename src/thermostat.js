function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32
  this.powerSave = true;
  this.powerSaveMax = 25

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

Thermostat.prototype.switchPower = function(){
  this.powerSave = !this.powerSave
};
