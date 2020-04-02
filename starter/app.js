// Budget Controller Module
var budgetController = (function() {
  
})();

// UI Controller Module
var UIController = (function () {

//some code

})();


// Global App Controller

// The two first modules work independantly due to 'seperation of concerns', they need an App Controller to interact.  Hence bellow we call them as arguments in a slightly different named way.


var controller = (function(budgetCtrl, UICtrl){

  var ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4.Calculate the budget.
    // 5. Display the budget on the UI
    console.log('It Works');
  }


  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);



// Using an event object for the keypress.  Notice we put it outside in the global area bc it is not tied to a single button.


  document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  })


})(budgetController,UIController);