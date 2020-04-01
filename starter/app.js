// Budget Controller Module
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  }
  // Has access to private variable and function bc it is inside a closure
  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();

// UI Controller Module
var UIController = (function () {



})();


// App Controller

// The two first modules work independantly due to 'seperation of concerns', they need an App Controller to interact.  Hence bellow we call them as arguments in a slightly different named way.


var controller = (function(budgetCtrl, UICtrl){

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }


})(budgetController,UIController);