var Bank = function(){
this.accounts = [];
};

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account)
  },
  totalBalance: function(){
    var total = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      var account = this.accounts[i];
      total += account.balance;
    }
    return total;
  },
  findName: function(name){
    for(var i = 0; i < this.accounts.length; i++){
     if (this.accounts[i].ownerName === name){
     return this.accounts[i];
     }
    }
    
  }
}

module.exports = Bank;