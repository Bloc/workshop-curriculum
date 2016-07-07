function Stark(){}
Stark.prototype.getName = function() {
  return this.name;
};

function Arya(){
  this.name = "Arya Stark";
}
Arya.prototype = new Stark();

var arya = new Arya();
arya.getName();
