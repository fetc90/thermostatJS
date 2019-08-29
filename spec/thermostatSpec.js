describe('Thermostat',function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('defaults at 20 degrees',function(){
    expect(thermostat.temperature).toEqual(20);
  });
  
})

