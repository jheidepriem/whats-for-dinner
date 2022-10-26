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
var letsCookButton = document.querySelector('.recipe-button');
var addRecipeButton = document.querySelector('.add-button');
var sideDishButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var recipes = document.querySelector('.recipes');
var recipeBox = document.querySelector('.recipe-box');
var cookPot = document.querySelector('.pot-image');
var clearButton = document.querySelector('.clear-button');
var clearButtonBox = document.querySelector('.clear-button-box');

//--------------------------------------->Event Listeners<-------------------------------------

letsCookButton.addEventListener('click', displayRecipe);
// clearButtonBox = addEventListener('click', clearRecipe);

//---------------------------------------->Functions<------------------------------------------

function chooseAMeal() {
  if (sideDishButton.checked === true) {
    recipes.innerText = sides[getRandomRecipe(sides)]
  } else if (mainDishButton.checked === true) {
    recipes.innerText = mains[getRandomRecipe(mains)]
  } else if (dessertButton.checked === true) {
    recipes.innerText = desserts[getRandomRecipe(desserts)]
  } else if (entireMealButton.checked === true) {
    recipes.innerText = `You should make: 
    ${mains[getRandomRecipe(mains)]} with a side of 
    ${sides[getRandomRecipe(sides)]} and ${desserts[getRandomRecipe(desserts)]} for dessert!`
  } else {
    clearRecipe()
 }
};

function displayRecipe() {
  show(recipes)
  show(clearButtonBox)
  hide(cookPot)
  chooseAMeal()
};

//--------------------------------------->Utility Functions<-----------------------------------

function show(elements) {
  elements.classList.remove('hidden')
};

function hide(elements) {
  elements.classList.add('hidden')
};

function getRandomRecipe(array) {
  return Math.floor(Math.random() * array.length);
};


