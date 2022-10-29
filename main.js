var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza" 
];

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs" 
];

//--------------------------------------->Query Selectors<--------------------------------------

var addNewButton = document.querySelector('.add-new-button');
var addRecipeButton = document.querySelector('.add-recipe-button');
var clearButton = document.querySelector('.clear-button');
var clearButtonBox = document.querySelector('.clear-button-box');
var cookPot = document.querySelector('.pot-image');
var dessertButton = document.querySelector('#dessert');
var errorMessage = document.querySelector('.error-message');
var entireMealButton = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('.recipe-button');
var mainDishButton = document.querySelector('#main-dish');
var recipes = document.querySelector('.recipes');
var recipeBox = document.querySelector('.recipe-box');
var recipeDropDown = document.querySelector('#drop-down');
var recipeFormFooter = document.querySelector('.new-recipe-footer');
var recipeHeader = document.querySelector('.recipe-header');
var recipeNameBox = document.querySelector('#recipe-name');
var sideDishButton = document.querySelector('#side');

//--------------------------------------->Event Listeners<-------------------------------------

addNewButton.addEventListener('click', addNewRecipe);
addRecipeButton.addEventListener('click', addARecipe);
clearButton.addEventListener('click', clearRecipe);
letsCookButton.addEventListener('click', displayRecipe);

//---------------------------------------->Functions<------------------------------------------

function chooseAMeal() {
  var recipeHeader = "You should make:"
  if (sideDishButton.checked === true) {
    recipes.innerText = `${recipeHeader} 
    ${sides[getRandomRecipe(sides)]}`
  } else if (mainDishButton.checked === true) {
    recipes.innerText = `${recipeHeader} 
    ${mains[getRandomRecipe(mains)]}`
  } else if (dessertButton.checked === true) {
    recipes.innerText = `${recipeHeader} 
    ${desserts[getRandomRecipe(desserts)]}`
  } else if (entireMealButton.checked === true) {
    recipes.innerText = `${recipeHeader} 
    ${mains[getRandomRecipe(mains)]} with a side of 
    ${sides[getRandomRecipe(sides)]} and 
    ${desserts[getRandomRecipe(desserts)]} for dessert!`
    } else {
      recipes.innerText = `You must choose a meal option!`
    }
};

function addNewRecipe(event) {
  event.preventDefault()
  recipes.innerText = recipeNameBox.value
  hide(cookPot)
  show(recipes)
  show(clearButton)
  storeRecipe()
  resetForm()
};

function displayRecipe() {
  chooseAMeal()
  hide(cookPot)
  show(recipes)
  show(clearButton)
};

function clearRecipe() {
  hide(recipes)
  hide(clearButton)
  show(cookPot)
};

function storeRecipe() {
  if (recipeDropDown.value === 'sides') {
    sides.push(recipeNameBox.value)
  } else if (recipeDropDown.value === 'main-dish') {
    sides.push(recipeNameBox.value)
  } else if (recipeDropDown.value === 'desserts') {
    sides.push(recipeNameBox.value)
  }
};

function resetForm() {
  recipeDropDown.value = ''
  recipeNameBox.value = ''
  sideDishButton.value = ''
  mainDishButton.value = ''
  dessertButton.value = ''
  entireMealButton.value = ''
};

function addARecipe() {
  show(recipeFormFooter)
};

//--------------------------------------->Utility Functions<-----------------------------------

function show(elements) {
  elements.classList.remove('hidden')
};

function hide(elements) {
  elements.classList.add('hidden')
};

function getRandomRecipe(array) {
  return Math.floor(Math.random() * array.length)
};
