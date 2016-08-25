myApp.statsModule = (function(){

function StatsModule(config) {
  this.people = 0;
  this.el = document.querySelector(config.el);
  this.counter = this.el.querySelector('#counter');
  this.events = config.events;
  this.events.on('addPerson', incrementCounter.bind(this));
  this.events.on('deletePerson', decrementCounter.bind(this));
  render.call(this);
}
function incrementCounter() {
  this.people++;
  render.call(this);
}

function decrementCounter() {
  this.people--;
  render.call(this);
}

function render(){            
   this.counter.innerText = this.people;    
}
StatsModule.prototype.destroy = function() {
  this.events.off('addPerson', incrementCounter.bind(this));
  this.events.off('deletePerson', decrementCounter.bind(this));
}

return StatsModule;

})()