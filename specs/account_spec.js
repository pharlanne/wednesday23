var assert = require('chai').assert;
var Account = require('../account.js');

describe("Account", function(){

it("should have an owner name",function(){
  var account1 = new Account("bob", 100, "personal");
  assert.equal("bob", account1.ownerName);
});

it("should have a balance", function(){
  var account1 = new Account("bob", 100, "personal");
  assert.equal(100, account1.balance);
});

it("should have a type", function(){
  var account1 = new Account("bob", 100, "personal");
  assert.equal("personal", account1.type);
});



})