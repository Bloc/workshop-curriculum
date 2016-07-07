// === Name a Wizard =================================

function Wizard(name) {
  this.updateName = function(name) {
    this.name = name;
  };

  this.updateName(name);
}

var wizard = new Wizard("Harry");
console.log(wizard.name === "Harry");

wizard.updateName("Hermione");
console.log(wizard.name === "Hermione");

// === Joint Checking ================================

var wife = {
  accountValue: 432,
  accessAccount: function() {
    return this.accountValue;
  }
};

var accessAccount = wife.accessAccount;
var husbandAccessAccount = accessAccount.bind(wife);

husbandAccessAccount();
console.log(husbandAccessAccount() === 432);
