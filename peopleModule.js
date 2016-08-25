myApp.peopleModule = (function(){

var proto = PeopleModule.prototype;

function PeopleModule(config) {
  this.people = [];
  
  this.el = document.querySelector(config.el);
  this.button = this.el.querySelector('button');
  this.input = this.el.querySelector('input');
  this.ul = this.el.querySelector('ul');
  var template = '';
  render.call(this);
  this.button.addEventListener('click', this.addPerson.bind(this));
  this.ul.addEventListener('click', this.deletePerson.bind(this));
  this.events = config.events;
}

  function render(){    
    template = '';    
    this.ul.innerHTML = '';
    this.people.forEach(function(person){
      template += '<li>' + person + '<i>X</i></li>';
    });
    this.ul.innerHTML = template;
    
  }

proto.addPerson = function(name) {
  var value = (typeof name === "string") ? name : this.input.value;
  this.people.push(value);
  render.call(this);
  this.input.value = '';
  this.events.emit('addPerson');
}

proto.deletePerson = function(e) {
  if (typeof e === "number") index = e;
  else {
  if (e.target.nodeName === 'I') {
    var toRemove = e.target.parentNode;
    var index = Array.prototype.indexOf.call(toRemove.parentElement.children, toRemove);
   }
   }
    this.people.splice(index,1);
    render.call(this);
    this.events.emit('deletePerson');
}

return PeopleModule;

})();
