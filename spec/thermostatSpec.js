describe('Thermostat',function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('defaults at 20 degrees',function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees',function(){
    for (i = 0; i < 12; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.temperature).toEqual(10);
  })

  describe('#increaseTemperature',function(){
    it('increases the temperature by 1',function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    })

      it('cannot increase temperature > 25 if power saving mode is on',function(){
        for (i = 0; i < 7; i++) {
        thermostat.increaseTemperature();
        }
        expect(thermostat.temperature).toEqual(25);
      });

      it('cannot increase temperature > 32 if power saving mode is off',function(){
        thermostat.switchPower();
        for (i = 0; i < 16; i++){
        thermostat.increaseTemperature();
        }
        expect(thermostat.temperature).toEqual(32);
      })
      
  });

  describe('#decreaseTemperature',function(){
    it('decreases the temperature by 1',function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('#SwitchPower',function(){
    it('changes the powersaving mode',function(){
      thermostat.switchPower();
      expect(thermostat.powerSave).toEqual(false);
    });
    
  });
  
   
});