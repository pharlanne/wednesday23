var assert = require('chai').assert;
var Bank = require('../bank.js');
var Account = require('../account.js');

var account1,  
    account2,
    account3,
    myBank;

describe("Bank", function(){
  beforeEach(function() {
     account1 = new Account("bob", 100, "personal");
     account2 = new Account("bill", 300, "business");
     account3 = new Account("john", 250, "business");
     myBank = new Bank();
     myBank.addAccount(account1);
     myBank.addAccount(account2);
     myBank.addAccount(account3);
  });
  
   it("should be able to add an account", function(){
     var account4 = {
       ownerName: "dave",
       balance: 50,
       type: "personal"
     }
     myBank.addAccount(account4);
     assert.equal(4,myBank.accounts.length);
   });

   it('should give the accounts total amount', function(){
     assert.equal(650, myBank.totalBalance());
   });

   it("should find account by owner name", function(){
    var result = myBank.findName("bob")
    assert.equal(result, account1)
   });


})