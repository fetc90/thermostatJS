function Thermostat(){
  this.temperature = 20
  this.minimumTemperature = 10
}

Thermostat.prototype.increaseTemperature = function(){
  this.temperature += 1
};

Thermostat.prototype.decreaseTemperature = function(){
  var minimumTemperature

  if (this.temperature === this.minimumTemperature){
    return this.temperature;
  } else {
    this.temperature -= 1
  }
  
};
