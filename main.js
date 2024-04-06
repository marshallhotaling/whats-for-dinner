var sides = ["Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"]
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
]

var dessert = [
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
]

var recipeTypeImput = document.querySelector('.recipeTypeImput');
var recipeNameImput = document.querySelector('.recipeNameImput');



var footerMain = document.querySelector('.footer');
var bullitOne = document.querySelector('.sideCheckbox');
var bullitTwo = document.querySelector('.mainCheckbox');
var bullitTree = document.querySelector('.dessertCheckbox');
var bullitFour = document.querySelector(".entierCheckbox");
var cookingPotPage = document.querySelector(".cookingPot");
var foodTextPage = document.querySelector(".foodText");
var tital = document.querySelector(".topLabel");
var imformation = document.querySelector(".bottomLabel");
bullitOne.addEventListener('click', () => {
    disabelButton()
    bullitOne.checked = true
})

bullitTwo.addEventListener('click', () => {
    disabelButton()
    bullitTwo.checked = true
})

bullitTree.addEventListener('click', () => {
    disabelButton()
    bullitTree.checked = true

})

bullitFour.addEventListener('click', () => {
    disabelButton()
    bullitFour.checked = true

})


function disabelButton() {
    bullitOne.checked = false
    bullitTwo.checked = false
    bullitTree.checked = false
    bullitFour.checked = false
}

function randomFood() {
    if (bullitOne.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "You should make"
        imformation.innerHTML = sides[getRandomIndex(sides)]
    } else if (bullitTwo.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "You should make"
        imformation.innerHTML = mains[getRandomIndex(mains)]
    } else if (bullitTree.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "You should make "
        imformation.innerHTML = dessert[getRandomIndex(dessert)]
    } else if (bullitFour.checked === true) {
        foodTextPage.classList.remove("hidden")
        cookingPotPage.classList.add("hidden")
        tital.innerHTML = "You should make"
        imformation.innerHTML = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${dessert[getRandomIndex(dessert)]} for dessert ! .`
    } else {
        foodTextPage.classList.add("hidden")
        cookingPotPage.classList.remove("hidden")

    }


}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function clearView() {
    console.log("here")
    disabelButton()


    foodTextPage.classList.add("hidden")
    cookingPotPage.classList.remove("hidden")

}
function showFooter() {
    footerMain.classList.remove("hidden")

}
function addNew() {
    foodTextPage.classList.remove("hidden")
    cookingPotPage.classList.add("hidden")
    tital.innerHTML = "You should make "
    imformation.innerHTML = recipeNameImput.value
    if (String(recipeTypeImput.value).toLowerCase() === "sides") {
        sides.push(recipeNameImput.value)

    } else if (String(recipeTypeImput.value).toLowerCase() === "main") {
        mains.push(recipeNameImput.value)

    } else if (String(recipeTypeImput.value).toLowerCase() === "dessert") {
        dessert.push(recipeNameImput.value)

    } else {
        alert("Error : Sorry that type of meal dose not exsist.")
    }



}