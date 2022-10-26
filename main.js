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
"Hush Puppies",
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
"Margarita Pizza", 
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
"Eclairs", 
];

//--------------------------------------->Query Selectors<--------------------------------------
var letsCookButton = document.querySelector('.recipe-button');
var addRecipeButton = document.querySelector('.add-button');
var sideDishButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var recipes = document.querySelector('.recipes');
var potImage = document.querySelector('pot-image');


//--------------------------------------->Event Listeners<-------------------------------------

letsCookButton.addEventListener('click', showRecipes);
// addRecipeButton = addEventListener('click', function);

//---------------------------------------->Functions<------------------------------------------

function chooseAMeal() {
  if (sideDishButton.checked === true) {
    recipes.innerText = [getRandomIndex(sides)]
  } else if (mainDishButton.checked === true) {
    recipes.innerText = [getRandomIndex(mains)]
  } else if (dessertButton.checked === true) {
    recipes.innerText = [getRandomIndex(desserts)]
  // } else if (entireMealButton.checked === true) {
  //   recipes.innerText = [getRandomRecipe(sides)], 
  //[getRandomRecipe(mains)], [getRandomRecipe(desserts)]
  console.log(recipes.innerText = [getRandomRecipe(mains)])
  } else {
    showCookPot()
  }
};

function showCookPot() {
  show(potImage);
  hide(recipes);
}

function showRecipes() {
  chooseAMeal()
  show(recipes)
  
}

//--------------------------------------->Utility Functions<-----------------------------------

function show(elements) {
  elements.classList.remove('hidden')
};

function hide(elements) {
  elements.classList.add('hidden')
};

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};