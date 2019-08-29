describe('Thermostat',function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('defaults at 20 degrees',function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a minimum of 10 degrees',function(){
    for (i = 0; i < 12; i++ ) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature).toEqual(10);
  });
  

  describe('#increaseTemperature',function(){
    it('increments the temperature by 1',function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });
    
  });

  describe('#decreaseTemperature',function(){
    it('decreases the temperature by 1',function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });
    
  });
  
  
});

