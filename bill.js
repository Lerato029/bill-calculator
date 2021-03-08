//====================================================Defaults==================================================
/* first i create a variable called bill that will have a value added to it every time an item is selected */
let bill;

/* The function below checks if the local storage has any values if not then it is allocated ["data, 0"] key
value pairs in our local storage. Also is it stored in the window object (which represents the browser's window)
is allocated the onload property so that when the page has loaded the function is carried out*/
window.onload = function () {
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", 0);
  }
}
//====================================================Drinks Object==================================================
/* My drinks object is an array of objects which each have the properties "name" and price. The name values are 
exactly the same as the html Ids as each html check box will be assigned an object according to it's Id through
the find() method allocated to the drinks object*/
let drinks = [{
    name: "Coke",
    price: 15
  },
  {
    name: "Water",
    price: 8
  },
  {
    name: "Tea",
    price: 5
  },
  {
    name: "Coffee",
    price: 12
  },
  {
    name: "Juice",
    price: 18
  },
]
//====================================================addDrinks Function==================================================  
/* Now that theres always something stored in our local storage we can now allocate the value that's in our local storage
to the variable bill in our function addDrinks. 

The addDrinks function checks all the check boxes that have been checked through if statements and their values are fetched 
by their unique Ids (through the get element by Id method). All the true instances will have:
  - A variable that will store the object found through the find() method allocated to the drinks object. The test to be 
    passed in the find method is if the parameter (drink) property (name) matches the string value which is exactly the 
    same as the html element's Id.
  - the global variable bill will add the value of the objects "price" (property) numeric value to it.
  - the drinksSelected variable will append the value of the objects "name" (property) string value to it plus ", " for
    better legibility.*/
function addDrinks() {
  /* our local storage data value needs to be converted using the JSON parse method
  before we can store it in the bill variable */
  bill = JSON.parse(localStorage.data)
  /* We also need an empty string to append all the name value of each selected drink object */
  let drinksSelected = '';
  if (document.getElementById("Coke").checked === true) {
    let coke = drinks.find(drink => drink.name === "Coke")
    bill += coke.price
    drinksSelected += coke.name + ", "
  }

  if (document.getElementById("Water").checked === true) {
    let water = drinks.find(drink => drink.name === "Water")
    bill += water.price
    drinksSelected += water.name + ", "
  }

  if (document.getElementById("Tea").checked === true) {
    let tea = drinks.find(drink => drink.name === "Tea")
    bill += tea.price
    drinksSelected += tea.name + ", "
  }

  if (document.getElementById("Coffee").checked === true) {
    let coffee = drinks.find(drink => drink.name === "Coffee")
    bill += coffee.price
    drinksSelected += coffee.name + ", "
  }

  if (document.getElementById("Juice").checked === true) {
    let juice = drinks.find(drink => drink.name === "Juice")
    bill += juice.price
    drinksSelected += juice.name + ", "
  } else if (drinksSelected === "") {
    /* This else if statement is in standby for an instance where none of the boxes are checked (where the value
    of the variable drinksSelected is still and empty string)when this happens the alert below will be display 
    on the window*/
    alert("Please select an item")
  }
  if (drinksSelected != "") {
    /* This if statement is in standby for an instance where at least one of the boxes are checked (where the value
    of the variable drinksSelected is no longer and empty string). It will do the following if true:
      - A variable will be created to store the input of the user derived using the prompt function.
      - Then a switch statement is created to check whether the user has typed in Yes or not.
      - If the user types in yes then the localStorage key (data) will be allocated the new value of bill
        which first needs to be converted to a format that can be transferred between the webserver and the client
        through the JSON stringify method.
      - If the user did not type in Yes then the alert will be displayed letting them know that they're items have
        not been added to the cart/"bill"*/
    let drinksBill = prompt(drinksSelected + "are the items selected. Do you want to add to cart type Yes or No", "Yes")
    switch (drinksBill) {
      case "Yes":
        localStorage.data = JSON.stringify(bill);
        break;

      default:
        alert("Oh Well :) your drinks have not been added to the cart.");
        break;
    }
  }
} //End of addDrinks()

//======================================================Food Object==================================================
/* the food objects are created the same way as the drinks object with name values that are identical to the html 
check box Ids for food items */
let foodItems = [{
    name: "Pizza",
    price: 30
  },
  {
    name: "Pie",
    price: 10
  },
  {
    name: "Soup",
    price: 5
  },
  {
    name: "Toast",
    price: 12
  },
  {
    name: "Pap",
    price: 3
  },
]

//======================================================addFood Function==================================================
/* The add food function is similar to the addDrinks() function with values,variables,parameters etc that are tweaked
as appropriate to the foodItems object  */
function addFood() {
  bill = JSON.parse(localStorage.data)
  let foodSelected = '';
  if (document.getElementById("Pizza").checked === true) {
    let pizza = foodItems.find(food => food.name === "Pizza")
    bill += pizza.price
    foodSelected += pizza.name + ", "
  }

  if (document.getElementById("Pie").checked === true) {
    let pie = foodItems.find(food => food.name === "Pie")
    bill += pie.price
    foodSelected += pie.name + ", "

  }
  if (document.getElementById("Soup").checked === true) {
    let soup = foodItems.find(food => food.name === "Soup")
    bill += soup.price
    foodSelected += soup.name + ", "

  }
  if (document.getElementById("Toast").checked === true) {
    let toast = foodItems.find(food => food.name === "Toast")
    bill += toast.price
    foodSelected += toast.name + ", "

  }
  if (document.getElementById("Pap").checked === true) {
    let pap = foodItems.find(food => food.name === "Pap")
    bill += pap.price
    foodSelected += pap.name + ", "

  } else if (foodSelected === "") {
    alert("Please select an item")
  }
  if (foodSelected != "") {
    let foodBill = prompt("You have selected: " + foodSelected + "Do you want to add to cart type Yes or No", "Yes")
    switch (foodBill) {
      case "Yes":
        localStorage.data = JSON.stringify(bill);
        break;

      default:
        alert("Oh Well :) your food has not been added to the cart.");
        break;
    }
  }
} //End of Add Food

//======================================================addTipFunction================================================== 
/* The Tip function first retrieves the value of the bill using the JSON parse method which is then stored in the 
bill variable. Then the variable tip is created to store the input from the user.

An if statement is then created to check if the input is greater or equal to 0. If true then:
- The bill will have the tip added to it - the tip has to be converted from a string to a 
  number using the parseFloat function. 
- Then the new value of the bill is converted to a format that can be transferred between 
  the webserver and the client through the JSON stringify method. Then it is stored in our
  localStorage.data

If the statement isn't true then the alert below is displayed on screen*/
function addTip() {
  bill = JSON.parse(localStorage.data)
  let tip = prompt("Type in the amount you would like to tip", 50)
  if (tip >= 0 ) {
    bill += parseFloat(tip)
    localStorage.data = JSON.stringify(bill);
  } else {
    alert("type in a number")
  }
}

//======================================================total Function================================================== 
/*In the total function, the local storage data value needs to be converted using the JSON parse method
before we can store it in the bill variable. 

Then the alert displays the value of the bill variable along with a strings for better legibility*/
function total() {
  bill = JSON.parse(localStorage.data)
  alert("R" + bill + " is your total :) thank you very much!")
}

//====================================================clearTotal Function=============================================== 
function clearTotal() {
  /* below is the syntax used for removing localStorage (web storage object that doesn't expire) 
  where the localStorage object is allocated the clear() method.*/
  localStorage.clear()
  /* The window object (which represents the browser's window)
  is allocated the Location.reload() method to reload the current URL */
  window.location.reload();
}