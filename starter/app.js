// Budget Controller Module
var budgetController = (function() {
  
})();










// UI Controller Module
var UIController = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,  //will either be INC or EXP
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();











// Global App Controller

// The two first modules work independantly due to 'seperation of concerns', they need an App Controller to interact.  Hence bellow we call them as arguments in a slightly different named way.


var controller = (function(budgetCtrl, UICtrl){

  var DOM = UIController.getDOMstrings();

  var ctrlAddItem = function() {
    // 1. Get the field input data
    var input = UIController.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4.Calculate the budget.
    // 5. Display the budget on the UI
  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

// Using an event object for the keypress.  Notice we put it outside in the global area bc it is not tied to a single button.


  document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  })


})(budgetController,UIController);