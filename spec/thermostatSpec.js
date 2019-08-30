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

  describe('#getTemperature',function(){
    it('returns the current temperature',function(){ 
      expect(thermostat.getTemperature()).toEqual(20)
    })
    
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

  describe('#isPowerSaveOn',function(){
    it('tells user if power saving mode is on',function(){
      expect(thermostat.isPowerSaveOn()).toEqual('Power save mode is on')
    });

    it('tells user if power saving mode is off',function(){
      thermostat.switchPower();
      expect(thermostat.isPowerSaveOn()).toEqual('Power save mode is off')
    });
    
  })
  
  describe('#reset',function(){
    it('resets the temperature to 20 degrees',function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('#energyUsage',function(){
    it('returns low usage when temperature < 18',function(){
      thermostat.temperature = 17
      expect(thermostat.energyUsage()).toEqual("lightblue")
    })

    it('returns medium usage when temperature is between 18-24',function(){
      thermostat.temperature = 20
      expect(thermostat.energyUsage()).toEqual("orange")
    })

    it('returns high usage when temperature is > 24',function(){
      thermostat.temperature = 25
      expect(thermostat.energyUsage()).toEqual("red")
    })

  })
  
   
});